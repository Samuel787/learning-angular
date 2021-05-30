import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut20Component } from './tut20.component';

describe('Tut20Component', () => {
  let component: Tut20Component;
  let fixture: ComponentFixture<Tut20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tut20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
