import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RelevantCardComponent } from './components/relevant-card/relevant-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideCardsComponent } from './components/aside-cards/aside-cards.component';
import { GamesComponent } from './pages/games/games.component';
import { AnimeComponent } from './pages/anime/anime.component';
import { NerdPlusComponent } from './pages/nerd-plus/nerd-plus.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    ContentComponent,
    RelevantCardComponent,
    FooterComponent,
    AsideCardsComponent,
    GamesComponent,
    AnimeComponent,
    NerdPlusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
