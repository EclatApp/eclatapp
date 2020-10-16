import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EclatComponent } from './eclat.component';

@NgModule({
  declarations: [
    EclatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EclatComponent]
})
export class AppModule { }
