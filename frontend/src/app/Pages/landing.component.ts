//VA A IMPORTAR COMPONENT PARA PODER CREAR UN COMPONENTE
import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  //SELECTOR es el nombre de mi componente
  selector: 'landing-page',

  templateUrl:'./landing/landing.component.html',
  
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers



})
export class LandingPage  {  
      images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

      constructor(config: NgbCarouselConfig) {
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
        config.pauseOnHover = false;
      }
}
