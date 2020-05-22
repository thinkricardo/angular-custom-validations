import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CheckboxListComponent } from './components/checkbox-list/checkbox-list.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, CheckboxListComponent],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
