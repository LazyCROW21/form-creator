import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-generator',
  templateUrl: './input-generator.component.html',
  styleUrls: ['./input-generator.component.css']
})
export class InputGeneratorComponent implements OnInit {
  @Output('addQuestion')
  closeModalEvent: EventEmitter<null> = new EventEmitter<null>();

  selectInput: string = '';

  constructor() { }

  ngOnInit(): void { }

  newInputSelected(event: Event) {
    const target = <HTMLInputElement>event.target;
    this.selectInput = target.value;
  }

  emitCloseModal() {
    this.selectInput = '';
    this.closeModalEvent.emit();
  }
}
