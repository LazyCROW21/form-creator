import { Component, OnInit } from '@angular/core';
import { MySection } from '../common/form-type';
import { FormService } from '../form-service/form-service.service';

@Component({
  selector: 'app-form-section-nav',
  templateUrl: './form-section-nav.component.html',
  styleUrls: ['./form-section-nav.component.css']
})
export class FormSectionNavComponent implements OnInit {

  constructor(private formService: FormService) { }

  ngOnInit(): void { }

  getSections(): MySection[] {
    return this.formService.getFrom().sections;
  }

  getActiveIndex() {
    return this.formService.getActiveSection();
  }

  onNavItemClick(idx: number) {
    this.formService.setActiveSection(idx);
  }

  onRemoveNavItemClick(idx: number) {
    this.formService.removeSection(idx);
  }
}
