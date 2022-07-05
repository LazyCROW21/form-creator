import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInpGenComponent } from './select-inp-gen.component';

describe('SelectInpGenComponent', () => {
  let component: SelectInpGenComponent;
  let fixture: ComponentFixture<SelectInpGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectInpGenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectInpGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
