import { Component, OnInit } from '@angular/core';

type Option = {
  label: string;
  value: string;
};

@Component({
  selector: 'app-radio-inp-gen',
  templateUrl: './radio-inp-gen.component.html',
  styleUrls: ['./radio-inp-gen.component.css']
})
export class RadioInpGenComponent implements OnInit {
  glabel: string = '';
  options: Option[] = [];
  optionLabel: string = '';
  optionValue: string = '';

  constructor() { }

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

  onAddInput() { }

  isInvalid() { 
    return this.glabel === '' || this.options.length === 0;
  }
}
