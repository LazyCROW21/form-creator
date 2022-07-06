import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Option, SelectQuestion } from 'src/app/common/form-type';
import { FormService } from 'src/app/form-service/form-service.service';

@Component({
  selector: 'app-select-inp-gen',
  templateUrl: './select-inp-gen.component.html',
  styleUrls: ['./select-inp-gen.component.css']
})
export class SelectInpGenComponent implements OnInit {
  @Output('addQuestion')
  addQuestionEvent: EventEmitter<null> = new EventEmitter<null>();
  
  label: string = '';
  options: Option[] = [];
  optionLabel: string = '';
  optionValue: string = '';
  constructor(private formService: FormService) { }

  ngOnInit(): void {
  }

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

  isInvalid() {
    return this.label === '' || this.options.length === 0;
  }

  onAddInput() {
    const newQuestion: SelectQuestion = {
      label: this.label,
      options: this.options
    }
    this.formService.addSelectQuestion(newQuestion);
    this.addQuestionEvent.emit();
    console.log('ADASD')
  }
}
