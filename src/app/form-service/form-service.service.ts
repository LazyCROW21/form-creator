import { Injectable } from '@angular/core';
import { MyForm, QuestionTypes } from '../common/form-type';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  // use Observable & Subjects
  private activeSection: number = 0;
  private form: MyForm = {
    title: 'Demo Form',
    descrption: 'Demo form for demo purpose',
    sections: [
      {
        title: 'Hello',
        questions: [
          {
            type: QuestionTypes.Text,
            key: 'a1',
            props: {
              placeholder: 'Hey Text',
              label: 'Hey Text'
            }
          },
          {
            type: QuestionTypes.CheckBox,
            key: 'a2',
            props: {
              label: 'Hey Checkbox'
            }
          }
        ]
      },
      {
        title: 'Hey',
        questions: []
      }
    ]
  }

  constructor() { }

  getFrom() {
    return this.form;
  }

  getActiveSection() {
    return this.activeSection;
  }

  setActiveSection(idx: number) {
    this.activeSection = idx;
  }

  removeSection(idx: number) {
    this.form.sections.splice(idx, 1);
  }

  removeQuestion(questionIndex: number) {
    this.form.sections[this.activeSection].questions.splice(questionIndex, 1);
  }
}
