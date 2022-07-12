import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyForm, MySection } from '../common/form-type';
import { FormService } from '../form-service/form-service.service';

@Component({
  selector: 'app-form-section-nav',
  templateUrl: './form-section-nav.component.html',
  styleUrls: ['./form-section-nav.component.css']
})
export class FormSectionNavComponent implements OnInit, OnDestroy {

  formSubscription: Subscription;
  actionSectionSubscription: Subscription;
  activeForm: MyForm;
  activeSection: number;

  constructor(private formService: FormService) {
    this.activeForm = { title: '', description: '', sections: [] };
    this.activeSection = 0;
    this.formSubscription = this.formService.form.subscribe((newForm) => {
      this.activeForm = newForm;
    });
    this.actionSectionSubscription = this.formService.activeSection.subscribe((idx) => {
      this.activeSection = idx;
    });
  }
  
  ngOnInit(): void { }

  onNavItemClick(idx: number) {
    this.formService.setActiveSection(idx);
  }

  onAddSection() {
    this.formService.addSection();
  }

  onRemoveNavItemClick(idx: number) {
    this.formService.removeSection(idx);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.activeForm.sections, event.previousIndex, event.currentIndex);
    // move reordering logic to service
    this.formService.form.next({ ...this.activeForm });
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
    this.actionSectionSubscription.unsubscribe();
  }
}
