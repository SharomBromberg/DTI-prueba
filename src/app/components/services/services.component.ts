import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.setupScrollAnimations();
  }

  private setupScrollAnimations(): void {
    // Animar título
    const title = this.elementRef.nativeElement.querySelector('.services__title');
    if (title) {
      const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, { threshold: 0.1 });

      titleObserver.observe(title);
    }

    // Animar cards
    const cards = this.elementRef.nativeElement.querySelectorAll('.services__card');

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Pequeño delay adicional para que se vea más suave
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, 100);
        }
      });
    }, observerOptions);

    cards.forEach((card: Element) => {
      observer.observe(card);
    });
  }
}
