import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-inp-gen',
  templateUrl: './checkbox-inp-gen.component.html',
  styleUrls: ['./checkbox-inp-gen.component.css']
})
export class CheckboxInpGenComponent implements OnInit {
  label: string = '';

  constructor() { }

  ngOnInit(): void { }

  onAddInput() { }

  isInvalid() { 
    return this.label === '';
  }
}
