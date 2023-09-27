import { Component } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../interfaces/movie";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  displayedColumns: string[] = ['title', 'releaseDate', 'delete'];
  movies: Movie[] = [];
  authenticated: boolean = false;

  constructor(private movieService: MovieService) {
    this.movieService.fetchAllMovies();

    this.movieService.movies$.subscribe(mov =>{
      this.movies = mov;
    });
  }

  DeleteMovie(movie: Movie) {
    this.movieService.deleteMovie(movie);
  };
}
