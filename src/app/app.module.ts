import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AboutComponent } from './components/about/about.component';
import { ScopeComponent } from './components/scope/scope.component';
import { ContactComponent } from './components/contact/contact.component';
import { AnimateOnScrollDirective } from './shared/directives/animate-on-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ScopeComponent,
    ContactComponent,
    AnimateOnScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
