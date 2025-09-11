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
    // Solo cerrar si el checkbox está activo (modo mobile abierto)
    if (this.navToggle && this.navToggle.nativeElement.checked) {
      this.navToggle.nativeElement.checked = false;
    }
  }
}
