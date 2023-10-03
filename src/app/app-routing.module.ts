import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { GamesComponent } from './pages/games/games.component';
import { AnimeComponent } from './pages/anime/anime.component';
import { NerdPlusComponent } from './pages/nerd-plus/nerd-plus.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'content/:id',
    component:ContentComponent
  },
  {
    path:'games',
    component:GamesComponent
  },
  {
    path:'anime',
    component:AnimeComponent
  },
  {
    path:'nerd-plus',
    component:NerdPlusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
