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
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true
        },
      }
    ]
  };


}
