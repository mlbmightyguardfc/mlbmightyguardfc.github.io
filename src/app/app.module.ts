import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BecomeAFanComponent } from './components/become-a-fan/become-a-fan.component';
import { FirstTeamComponent } from './components/first-team/first-team.component';
import { FounderComponent } from './components/founder/founder.component';
import { MatchesComponent } from './components/matches/matches.component';
import { TeamsComponent } from './components/teams/teams.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ShopComponent } from './components/shop/shop.component';
import { StadiumComponent } from './components/stadium/stadium.component';

const routers: Routes = [
  { path: '', component: BannerComponent },
  {
    path: 'team',
    component: TeamsComponent,
  },
  {
    path: 'matches',
    component: MatchesComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'stadium',
    component: StadiumComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
];
@NgModule({
  exports: [RouterModule],
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    FooterComponent,
    AboutUsComponent,
    BecomeAFanComponent,
    FirstTeamComponent,
    FounderComponent,
    MatchesComponent,
    TeamsComponent,
    GalleryComponent,
    ShopComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routers)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
