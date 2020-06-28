import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDramaComponent } from './components/addDrama/add-drama/add-drama.component';
import { ListDramaComponent } from './components/list/list-drama/list-drama.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDramaComponent,
    ListDramaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
