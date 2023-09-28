import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {Movie} from "../interfaces/movie";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url: string = environment.config.apiUrl + "/api/Movie";

  private moviesSubject$: Subject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  movies$: Observable<Movie[]> = this.moviesSubject$.asObservable();

  private movieDetailsSubject$: Subject<Movie> = new BehaviorSubject<Movie>({id: "", title: "", releaseDate: "", imgSrc: ""});
  movieDetails$: Observable<Movie> = this.movieDetailsSubject$.asObservable();

  constructor(private httpClient: HttpClient) { }

  setMovieDetail(movie: Movie){
    this.movieDetailsSubject$.next(movie);
  }

  fetchAllMovies() {
    this.httpClient.get<Movie[]>(this.url).subscribe(mov => {
      this.moviesSubject$.next(mov);
    })
  }

  updateMovie(movie: Movie) {
    this.httpClient.put<Movie[]>(this.url, movie, {headers: this.getToken()}).subscribe(x => {
      this.moviesSubject$.next(x);
    });
  };

  deleteMovie(movie: Movie) {
    this.httpClient.delete<Movie[]>(this.url + '/' + movie.id, {headers: this.getToken()}).subscribe(x => {
      this.moviesSubject$.next(x);
    });
  };

  private getToken() {
    const token = sessionStorage.getItem("token");
    return new HttpHeaders().set("Authorization", "Bearer " + token);
  }


}
