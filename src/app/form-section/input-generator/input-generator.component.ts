import { Component, EventEmitter, OnInit, Output } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-input-generator',
  templateUrl: './input-generator.component.html',
  styleUrls: ['./input-generator.component.css']
})
export class InputGeneratorComponent implements OnInit {
  @Output('addQuestion')
  closeModalEvent: EventEmitter<null> = new EventEmitter<null>();

  selectInput: string = '';
  initSelect: boolean = false;

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
