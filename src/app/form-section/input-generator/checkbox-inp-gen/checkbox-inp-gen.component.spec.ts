import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxInpGenComponent } from './checkbox-inp-gen.component';

describe('CheckboxInpGenComponent', () => {
  let component: CheckboxInpGenComponent;
  let fixture: ComponentFixture<CheckboxInpGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxInpGenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxInpGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
