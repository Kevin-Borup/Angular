import { Component } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../interfaces/movie";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  movie: Movie = {id: "", title: "test", releaseDate: "testdate", imgSrc: ""};
  constructor(private movieService: MovieService) {
    movieService.movieDetails$.subscribe(mov =>{
          this.movie = mov;
    });
  }
}
