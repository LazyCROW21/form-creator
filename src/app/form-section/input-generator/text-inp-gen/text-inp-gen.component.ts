import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TextQuestion } from 'src/app/common/form-type';
import { FormService } from 'src/app/form-service/form-service.service';

@Component({
  selector: 'app-text-inp-gen',
  templateUrl: './text-inp-gen.component.html',
  styleUrls: ['./text-inp-gen.component.css']
})
export class TextInpGenComponent implements OnInit {
  @Output('addQuestion')
  addQuestionEvent: EventEmitter<null> = new EventEmitter<null>();

  label: string = '';
  placeholder: string = '';

  constructor(private formService: FormService) { }

  ngOnInit(): void { }

  isInvalid() {
    return this.label === '' || this.placeholder === '';
  }

  onAddInput() {
    const newQuestion: TextQuestion = {
      label: this.label,
      placeholder: this.placeholder
    }
    this.formService.addTextQuestion(newQuestion);
    this.addQuestionEvent.emit();
  }
}
