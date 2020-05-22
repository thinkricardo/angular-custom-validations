import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckboxListComponent } from './components/checkbox-list/checkbox-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
