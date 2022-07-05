import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInpGenComponent } from './text-inp-gen.component';

describe('TextInpGenComponent', () => {
  let component: TextInpGenComponent;
  let fixture: ComponentFixture<TextInpGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInpGenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInpGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
