import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDramaComponent } from './components/list-drama/list-drama.component';
import { AddDramaComponent } from './components/add-drama/add-drama.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDramaComponent,
    AddDramaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
