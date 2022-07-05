import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioInpGenComponent } from './radio-inp-gen.component';

describe('RadioInpGenComponent', () => {
  let component: RadioInpGenComponent;
  let fixture: ComponentFixture<RadioInpGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioInpGenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioInpGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
