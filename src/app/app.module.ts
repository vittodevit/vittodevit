import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MieiprogettiComponent } from './mieiprogetti/mieiprogetti.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturettePresentazioneComponent } from './featurette-presentazione/featurette-presentazione.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    MieiprogettiComponent,
    FooterComponent,
    FeaturettePresentazioneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
