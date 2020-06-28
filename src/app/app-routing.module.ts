import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDramaComponent } from './components/add-drama/add-drama.component';
import { ListDramaComponent } from './components/list-drama/list-drama.component';


const routes: Routes = [
  { path: 'add-Drama', component: AddDramaComponent },
  { path: 'list-Drama', component: ListDramaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




