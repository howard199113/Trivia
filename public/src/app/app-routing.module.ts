import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogregComponent } from './logreg/logreg.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
  {
    path: '',
    component: LogregComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/add',
    component: AddComponent
  },
  {
    path: 'home/play',
    component: PlayComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
