import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSectionNavComponent } from './form-section-nav.component';

describe('FormSectionNavComponent', () => {
  let component: FormSectionNavComponent;
  let fixture: ComponentFixture<FormSectionNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSectionNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSectionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
