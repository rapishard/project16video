import { Component } from '@angular/core';
import { PrimeService } from '../services/prime.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  movies: any[];
  request: any;

  constructor(private movie: PrimeService ){}

  ionViewDidEnter(){

    this.movie.allMovies().then((data: any): void=>{
      this.movies = data.movies;
    });
  }

  }

