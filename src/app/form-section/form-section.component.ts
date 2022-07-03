import { Component, OnInit } from '@angular/core';
import { MySection } from '../common/form-type';
import { FormService } from '../form-service/form-service.service';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})
export class FormSectionComponent implements OnInit {

  constructor(private formService: FormService) { }

  ngOnInit(): void {
  }

  getActiveForm(): MySection {
    return this.formService.getFrom().sections[this.formService.getActiveSection()];
  }

}
