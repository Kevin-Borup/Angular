import { Component } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../interfaces/movie";
import {AuthenticationService} from "../../services/authentication.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  displayedColumns: string[] = ['title', 'releaseDate', 'delete'];
  movies: Movie[] = [];
  authenticated$: Observable<boolean>;


  constructor(private movieService: MovieService, private authService: AuthenticationService) {
    this.authenticated$ = authService.authenticated$;

    this.movieService.fetchAllMovies();

    this.movieService.movies$.subscribe(mov =>{
      this.movies = mov;
    });
  }

  onEditClick(movie: Movie){

  }

  onDeleteClick(movie: Movie) {
    this.movieService.deleteMovie(movie);
  };
}
