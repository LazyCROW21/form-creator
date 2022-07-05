import { Dialog } from '@angular/cdk/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MySection, QuestionTypes } from '../common/form-type';
import { FormService } from '../form-service/form-service.service';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})
export class FormSectionComponent implements OnInit {
  questionTypeText: QuestionTypes = QuestionTypes.Text;
  questionTypeCheckBox: QuestionTypes = QuestionTypes.CheckBox;
  questionTypeRadio: QuestionTypes = QuestionTypes.Radio;
  questionTypeSelect: QuestionTypes = QuestionTypes.Select;

  showAddModal: boolean = false;

  constructor(private formService: FormService) { }

  ngOnInit(): void { }

  getActiveForm(): MySection {
    return this.formService.getFrom().sections[this.formService.getActiveSection()];
  }

  getQuestions() {
    return this.getActiveForm().questions;
  }

  onAddQuestion() {
    this.showAddModal = true;
  }
  
  onRemoveSection(idx: number) {
    this.formService.removeQuestion(idx);
  }
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.getQuestions(), event.previousIndex, event.currentIndex);
  }
}
