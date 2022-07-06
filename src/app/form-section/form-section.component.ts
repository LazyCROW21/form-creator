import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyForm, QuestionTypes } from '../common/form-type';
import { FormService } from '../form-service/form-service.service';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})
export class FormSectionComponent implements OnInit, OnDestroy {
  questionTypeText: QuestionTypes = QuestionTypes.Text;
  questionTypeCheckBox: QuestionTypes = QuestionTypes.CheckBox;
  questionTypeRadio: QuestionTypes = QuestionTypes.Radio;
  questionTypeSelect: QuestionTypes = QuestionTypes.Select;

  showAddModal: boolean = false;
  formSubscription: Subscription;
  actionSectionSubscription: Subscription;
  activeForm: MyForm;
  activeSection: number;

  constructor(private formService: FormService) {
    this.activeForm = { title: '', descrption: '', sections: [] };
    this.activeSection = 0;
    this.formSubscription = this.formService.form.subscribe((newForm) => {
      this.activeForm = newForm;
    });
    this.actionSectionSubscription = this.formService.activeSection.subscribe((idx) => {
      this.activeSection = idx;
    });
  }

  closeModal() {
    this.showAddModal = false;
  }

  ngOnInit(): void { 
  }

  onAddQuestion() {
    this.showAddModal = true;
  }
  
  onRemoveSection(idx: number) {
    this.formService.removeQuestion(idx);
  }
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.activeForm.sections[this.activeSection].questions, event.previousIndex, event.currentIndex);
    // move reordering logic to service
    this.formService.form.next({ ...this.activeForm });
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
    this.actionSectionSubscription.unsubscribe();
  }
}
