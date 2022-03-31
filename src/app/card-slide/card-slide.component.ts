import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';


/* import { MbscScrollViewOptions } from '@mobiscroll/angular';
 */

@Component({
  selector: 'app-card-slide',
  templateUrl: './card-slide.component.html',
  styleUrls: ['./card-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardSlideComponent implements OnInit {
  images = [
    {name: 'Alabama', capital: 'Montgomery'},
    {name: 'Alaska', capital: 'Juneau'},
    {name: 'Arizona', capital: 'Phoenix'},
    {name: 'Arkansas', capital: 'Little Rock'},
    {name: 'Illinois', capital: 'Springfield'},
    {name: 'Indiana', capital: 'Indianapolis'},
    {name: 'Iowa', capital: 'Des Moines'},
    {name: 'Kansas', capital: 'Topeka'},
  ];

  constructor() { }

  ngOnInit() {}

}
