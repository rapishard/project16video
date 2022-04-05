import { Movie } from 'src/app/models/movies.model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrimeService } from '../services/prime.service';


@Component({
  selector: 'app-card-slide',
  templateUrl: './card-slide.component.html',
  styleUrls: ['./card-slide.component.scss'],
})
export class CardSlideComponent implements OnInit {


  results: Movie[];
  searchData = new FormControl('');
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Movie: Movie;

  constructor(private movie: PrimeService) { }

  ngOnInit() { }

  async allMovies() {
    const response = await this.allMovies();
    this.results=response.;

  }

  printValue() {
    console.log(this.searchData);
  }
}

/* 
constructor() { }

  ngOnInit() {}
}
*/