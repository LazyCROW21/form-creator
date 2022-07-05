import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-generator',
  templateUrl: './input-generator.component.html',
  styleUrls: ['./input-generator.component.css']
})
export class InputGeneratorComponent implements OnInit {

  selectInput: string = '';

  constructor() { }

  ngOnInit(): void { }

  newInputSelected(event: Event) {
    const target = <HTMLInputElement>event.target;
    this.selectInput = target.value;
  }
}
