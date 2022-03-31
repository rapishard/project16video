import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { CardSlideComponent } from './../card-slide/card-slide.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { MoviePage } from '../pages/movie/movie.page';
import { CarouselComponent } from '../carousel/carousel.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
/* import { MbscModule } from '@mobiscroll/angular';
 */

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ScrollingModule,
  ],
  declarations: [Tab1Page,CarouselComponent, CardSlideComponent]
})
export class Tab1PageModule {}
