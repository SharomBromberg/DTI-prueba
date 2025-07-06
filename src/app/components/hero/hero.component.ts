import { Component } from '@angular/core';
import { Slide } from '../../interfaces/slide-interface';
import { SlickBeforeChangeEvent, SlickAfterChangeEvent } from '../../interfaces/slick-event.interface';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  ngOnInit(): void {
  }
  slides = [
    { img: 'assets/img/carousel-images/sapzurro.jpg', altText: 'DTI' },
    { img: 'assets/img/carousel-images/pnn.jpg', altText: 'DTI' }
  ];


  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    infinite: true,
    fade: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

}
