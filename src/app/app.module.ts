import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './headers/top-bar.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { BodyComponent } from './body/body.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { MarketLayoutComponent } from './market/market-component';
import { ProfitLayoutComponent } from './profit/profit-component';
import { LoginLayoutComponent } from './login/login-component';
import { InspectLayoutComponent } from './inspect/inspect-component';
import { ItemCardComponent } from './body/item-card.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './body/user-info.component';



@NgModule({
  declarations: [
    AppComponent, TopBarComponent, HamburgerComponent , BodyComponent, LayoutMainComponent, FooterComponent, MarketLayoutComponent,
     ProfitLayoutComponent, LoginLayoutComponent, InspectLayoutComponent, ItemCardComponent, UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
