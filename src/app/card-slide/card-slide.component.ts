import { Movie, ResponseSpecificMovie } from 'src/app/models/movies.model';
import { Component, OnInit } from '@angular/core';
import { PrimeService } from '../services/prime.service';

@Component({
  selector: 'app-card-slide',
  templateUrl: './card-slide.component.html',
  styleUrls: ['./card-slide.component.scss'],
})
export class CardSlideComponent implements OnInit {

  movie: Movie = {} as Movie;
  constructor(private PrimeService: PrimeService) { }

  async ngOnInit() {
    await this.PrimeService.specificMovie(10138).subscribe(response => {
      let {movie} = response as ResponseSpecificMovie;
      this.movie = movie;
    });
  }
}

}

/* 
constructor() { }

  ngOnInit() {}
}
*/