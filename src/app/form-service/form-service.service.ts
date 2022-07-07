import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CheckBoxQuestion, MyForm, MySection, Question, QuestionTypes, RadioQuestion, SelectQuestion, TextQuestion } from '../common/form-type';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  public activeSection = new BehaviorSubject<number>(0);
  private activeSectionValue: number = 0;
  public form = new BehaviorSubject<MyForm>({
    title: 'Demo Form',
    description: 'Demo form for demo purpose',
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
          },
          {
            type: QuestionTypes.Radio,
            key: 'a3',
            props: {
              groupLabel: 'Hey Radio',
              options: [
                { label: 'Option1', value: 'Option1' },
                { label: 'Option2', value: 'Option2' }
              ]
            }
          },
          {
            type: QuestionTypes.Select,
            key: 'a4',
            props: {
              label: 'Hey Select',
              options: [
                { label: 'SOption1', value: 'SOption1' },
                { label: 'SOption2', value: 'SOption2' }
              ]
            }
          }
        ]
      },
      {
        title: 'Hey',
        questions: []
      }
    ]
  });
  private formValue: MyForm = {
    title: 'Demo Form',
    description: 'Demo form for demo purpose',
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
          },
          {
            type: QuestionTypes.Radio,
            key: 'a3',
            props: {
              groupLabel: 'Hey Radio',
              options: [
                { label: 'Option1', value: 'Option1' },
                { label: 'Option2', value: 'Option2' }
              ]
            }
          },
          {
            type: QuestionTypes.Select,
            key: 'a4',
            props: {
              label: 'Hey Select',
              options: [
                { label: 'SOption1', value: 'SOption1' },
                { label: 'SOption2', value: 'SOption2' }
              ]
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

  constructor() {
    // this.activeSection.next(0);
    // this.form.next(this.formValue);
  }

  // getFrom() {
  //   return this.form;
  // }

  // getActiveSection() {
  //   return this.activeSection;
  // }

  setActiveSection(idx: number) {
    this.activeSectionValue = idx;
    this.activeSection.next(idx);
  }

  addSection() {
    const newSection: MySection = {
      title: 'New Section',
      questions: []
    }
    this.formValue.sections.push(newSection);
    this.form.next({ ...this.formValue });
  }

  removeSection(idx: number) {
    if(this.formValue.sections.length === 1) {
      return;
    }
    this.activeSectionValue = 0;
    this.activeSection.next(0);
    this.formValue.sections.splice(idx, 1);
    this.form.next({ ...this.formValue });
  }

  addTextQuestion(textQuestion: TextQuestion) {
    const question: Question = {
      type: QuestionTypes.Text,
      key: 'text-' + this.activeSectionValue + '-' + new Date().getTime(),
      props: textQuestion
    }
    this.formValue.sections[this.activeSectionValue].questions.push(question);
    this.form.next({ ...this.formValue });
  }

  addCheckBoxQuestion(checkBoxQuestion: CheckBoxQuestion) {
    const question: Question = {
      type: QuestionTypes.CheckBox,
      key: 'checkbox-' + this.activeSectionValue + '-' + new Date().getTime(),
      props: checkBoxQuestion
    }
    this.formValue.sections[this.activeSectionValue].questions.push(question);
    this.form.next({ ...this.formValue });
  }

  addRadioQuestion(radioQuestion: RadioQuestion) {
    const question: Question = {
      type: QuestionTypes.Radio,
      key: 'radio-' + this.activeSectionValue + '-' + new Date().getTime(),
      props: radioQuestion
    }
    this.formValue.sections[this.activeSectionValue].questions.push(question);
    this.form.next({ ...this.formValue });
  }

  addSelectQuestion(selectQuestion: SelectQuestion) {
    const question: Question = {
      type: QuestionTypes.Select,
      key: 'select-' + this.activeSectionValue + '-' + new Date().getTime(),
      props: selectQuestion
    }
    this.formValue.sections[this.activeSectionValue].questions.push(question);
    this.form.next({ ...this.formValue });
  }

  removeQuestion(questionIndex: number) {
    this.formValue.sections[this.activeSectionValue].questions.splice(questionIndex, 1);
    this.form.next({ ...this.formValue });
  }
}
