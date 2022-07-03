import { Injectable } from '@angular/core';
import { MyForm } from '../common/form-type';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private activeSection: number = 0;
  private form: MyForm = {
    title: 'Demo Form',
    descrption: 'Demo form for demo purpose',
    sections: [
      {
        title: 'Hello'
      },
      {
        title: 'Hey'
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
}
