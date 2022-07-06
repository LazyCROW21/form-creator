import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Option, RadioQuestion } from 'src/app/common/form-type';
import { FormService } from 'src/app/form-service/form-service.service';

@Component({
  selector: 'app-radio-inp-gen',
  templateUrl: './radio-inp-gen.component.html',
  styleUrls: ['./radio-inp-gen.component.css']
})
export class RadioInpGenComponent implements OnInit {
  @Output('addQuestion')
  addQuestionEvent: EventEmitter<null> = new EventEmitter<null>();
  
  glabel: string = '';
  options: Option[] = [];
  optionLabel: string = '';
  optionValue: string = '';

  constructor(private formService: FormService) { }

  ngOnInit(): void { }

  addOption() {
    this.options.push({ label: this.optionLabel, value: this.optionValue });
    this.optionLabel = '';
    this.optionValue = '';
  }

  removeOption(idx: number) {
    this.options.splice(idx, 1);
  }

  isValidOption() {
    return this.optionLabel && this.optionValue;
  }

  onAddInput() {
    const newQuestion: RadioQuestion = {
      groupLabel: this.glabel,
      options: this.options
    }
    this.formService.addRadioQuestion(newQuestion);
    this.addQuestionEvent.emit();
    console.log('ADASD')
  }

  isInvalid() { 
    return this.glabel === '' || this.options.length === 0;
  }
}
