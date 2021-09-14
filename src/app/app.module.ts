import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './headers/top-bar.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { BodyComponent } from './body/body.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent, TopBarComponent, HamburgerComponent , BodyComponent, LayoutMainComponent, FooterComponent
  ],
  imports: [
    BrowserModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
