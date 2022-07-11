import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { FormSectionNavComponent } from './form-section-nav/form-section-nav.component';
import { FormSectionComponent } from './form-section/form-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddInputModalComponent } from './form-section/add-input-modal/add-input-modal.component';
import { InputGeneratorComponent } from './form-section/input-generator/input-generator.component';
import { TextInpGenComponent } from './form-section/input-generator/text-inp-gen/text-inp-gen.component';
import { CheckboxInpGenComponent } from './form-section/input-generator/checkbox-inp-gen/checkbox-inp-gen.component';
import { RadioInpGenComponent } from './form-section/input-generator/radio-inp-gen/radio-inp-gen.component';
import { SelectInpGenComponent } from './form-section/input-generator/select-inp-gen/select-inp-gen.component';
import { FormsModule } from '@angular/forms';
import { FormPreviewComponent } from './form-preview/form-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSectionNavComponent,
    FormSectionComponent,
    AddInputModalComponent,
    InputGeneratorComponent,
    TextInpGenComponent,
    CheckboxInpGenComponent,
    RadioInpGenComponent,
    SelectInpGenComponent,
    FormPreviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
