import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @ViewChild('navToggle') navToggle!: ElementRef<HTMLInputElement>;

  onNavigate(): void {
    if (this.navToggle && this.navToggle.nativeElement.checked) {
      this.navToggle.nativeElement.checked = false;
    }
  }

  scrollToSection(ev: Event, targetId: string) {
    ev.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = targetId;
    }
    this.onNavigate();
  }
}
