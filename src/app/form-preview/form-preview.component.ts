import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyForm, QuestionTypes } from '../common/form-type';
import { FormService } from '../form-service/form-service.service';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.css']
})
export class FormPreviewComponent implements OnInit, OnDestroy {
  questionTypeText: QuestionTypes = QuestionTypes.Text;
  questionTypeCheckBox: QuestionTypes = QuestionTypes.CheckBox;
  questionTypeRadio: QuestionTypes = QuestionTypes.Radio;
  questionTypeSelect: QuestionTypes = QuestionTypes.Select;

  showAddModal: boolean = false;
  formSubscription: Subscription;
  activeForm: MyForm;

  constructor(private formService: FormService) {
    this.activeForm = { title: '', description: '', sections: [] };
    this.formSubscription = this.formService.form.subscribe((newForm) => {
      this.activeForm = newForm;
    });
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }
}
