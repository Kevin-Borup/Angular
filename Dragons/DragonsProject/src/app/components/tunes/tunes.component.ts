import { Component } from '@angular/core';
import {Tune} from "../../interfaces/tune";
import {DragonApiService} from "../../services/dragon-api.service";
import {map, Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-tunes',
  templateUrl: './tunes.component.html',
  styleUrls: ['./tunes.component.css']
})
export class TunesComponent {

  private dataSource = new MatTableDataSource<Tune>();

  tunes$: Observable<MatTableDataSource<Tune>>  =
    this.dragonApiService.fetchDragonTunes().pipe(
      map(things => {
        const dataSource = this.dataSource;
        dataSource.data = things
        return dataSource;
      }));

  constructor(private dragonApiService: DragonApiService) {
  }

  ngOnInit() {
    setInterval(() => {
      this.tunes$ =
        this.dragonApiService.fetchDragonTunes().pipe(
          map(things => {
            const dataSource = this.dataSource;
            dataSource.data = things
            return dataSource;
          }));
    }, 1000);
  }
}
