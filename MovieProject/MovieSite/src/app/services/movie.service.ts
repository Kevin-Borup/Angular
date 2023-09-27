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
  private movies: Movie[] = [];
  private movieSubject$: Subject<Movie[]> = new BehaviorSubject<Movie[]>(this.movies);
  movies$: Observable<Movie[]> = this.movieSubject$.asObservable();

  constructor(private httpClient: HttpClient) { }

  fetchAllMovies() {
    this.httpClient.get<Movie[]>(this.url).subscribe(mov => {
      this.movieSubject$.next(mov);
    })
  }

  updateMovie(movie: Movie) {
    this.httpClient.put<Movie[]>(this.url, movie, {headers: this.getToken()}).subscribe(x => {
      this.movieSubject$.next(x);
    });
  };

  deleteMovie(movie: Movie) {
    this.httpClient.delete<Movie[]>(this.url + '/' + movie.id, {headers: this.getToken()}).subscribe(x => {
      this.movieSubject$.next(x);
    });
  };

  private getToken() {
    const token = sessionStorage.getItem("token");
    return new HttpHeaders().set("Authorization", "Bearer " + token);
  }


}
