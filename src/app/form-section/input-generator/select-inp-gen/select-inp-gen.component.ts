import { Component, OnInit } from '@angular/core';

type Option = {
  label: string;
  value: string;
};

@Component({
  selector: 'app-select-inp-gen',
  templateUrl: './select-inp-gen.component.html',
  styleUrls: ['./select-inp-gen.component.css']
})
export class SelectInpGenComponent implements OnInit {
  label: string = '';
  options: Option[] = [];
  optionLabel: string = '';
  optionValue: string = '';
  constructor() { }

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

  onAddInput() { }

  isInvalid() {
    return this.label === '' || this.options.length === 0;
  }
}
