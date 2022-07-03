import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormSectionNavComponent } from './form-section-nav/form-section-nav.component';
import { FormSectionComponent } from './form-section/form-section.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSectionNavComponent,
    FormSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
