import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { InspectLayoutComponent } from './inspect/inspect-component';
import { LoginLayoutComponent } from './login/login-component';
import { MarketLayoutComponent } from './market/market-component';
import { ProfitLayoutComponent } from './profit/profit-component';

const routes: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'market', component: MarketLayoutComponent},
  { path: 'profit', component: ProfitLayoutComponent},
  { path: 'login', component: LoginLayoutComponent},
  { path: 'inspect', component: InspectLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
