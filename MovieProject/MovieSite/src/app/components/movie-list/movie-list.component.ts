import { Component } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../interfaces/movie";
import {AuthenticationService} from "../../services/authentication.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {SystemRole} from "../../services/SystemRole";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  protected readonly SystemRole = SystemRole;

  movies: Movie[] = [];
  systemRole$: Observable<SystemRole>;


  constructor(private movieService: MovieService, private authService: AuthenticationService, private router: Router) {
    this.systemRole$ = authService.systemRole$;

    this.movieService.fetchAllMovies();

    this.movieService.movies$.subscribe(mov =>{
      this.movies = mov;
    });
  }

  onEditClick(movie: Movie){
    this.movieService.setMovieDetail(movie);
    this.router.navigate(["/details"]);
  }

  onDeleteClick(movie: Movie) {
    this.movieService.deleteMovie(movie);
  };

}
