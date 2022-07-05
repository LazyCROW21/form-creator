import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-inp-gen',
  templateUrl: './text-inp-gen.component.html',
  styleUrls: ['./text-inp-gen.component.css']
})
export class TextInpGenComponent implements OnInit {
  label: string = '';
  placeholder: string = '';

  constructor() { }

  ngOnInit(): void { }

  isInvalid() {
    return this.label === '' || this.placeholder === '';
  }

  onAddInput() {
    console.log('ADASD')
  }
}
