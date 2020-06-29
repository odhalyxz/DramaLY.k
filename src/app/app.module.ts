import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';

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
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
