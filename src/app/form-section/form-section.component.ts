import { Dialog } from '@angular/cdk/dialog';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { AppDialog } from '../common/dialog/dialog.component';
import { MySection } from '../common/form-type';
import { FormService } from '../form-service/form-service.service';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})
export class FormSectionComponent implements OnInit {

  constructor(private formService: FormService, public dialog: Dialog) { }

  ngOnInit(): void {
  }

  getActiveForm(): MySection {
    return this.formService.getFrom().sections[this.formService.getActiveSection()];
  }

  getQuestions() {
    return this.getActiveForm().questions;
  }

  onAddQuestion() {
    this.dialog.open(AppDialog, {
      minWidth: '300px',
      data: 'panda'
    });
  }
  
  onRemoveSection(idx: number) {
    this.formService.removeQuestion(idx);
  }
  
  drop(event: any) {
    moveItemInArray(this.getQuestions(), event.previousIndex, event.currentIndex);
  }
}
