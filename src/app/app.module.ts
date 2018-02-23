import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataFormModule } from './data-form/data-form.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
