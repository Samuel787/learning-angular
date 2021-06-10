import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut23Component } from './tut23.component';

describe('Tut23Component', () => {
  let component: Tut23Component;
  let fixture: ComponentFixture<Tut23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tut23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
