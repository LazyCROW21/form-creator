import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CheckBoxQuestion } from 'src/app/common/form-type';
import { FormService } from 'src/app/form-service/form-service.service';

@Component({
  selector: 'app-checkbox-inp-gen',
  templateUrl: './checkbox-inp-gen.component.html',
  styleUrls: ['./checkbox-inp-gen.component.css']
})
export class CheckboxInpGenComponent implements OnInit {
  @Output('addQuestion')
  addQuestionEvent: EventEmitter<null> = new EventEmitter<null>();

  label: string = '';

  constructor(private formService: FormService) { }

  ngOnInit(): void { }

  onAddInput() {
    const newQuestion: CheckBoxQuestion = {
      label: this.label
    }
    this.formService.addCheckBoxQuestion(newQuestion);
    this.addQuestionEvent.emit();
    console.log('ADASD')
  }

  isInvalid() { 
    return this.label === '';
  }
}
