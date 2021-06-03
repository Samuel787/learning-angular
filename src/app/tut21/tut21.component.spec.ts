import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut21Component } from './tut21.component';

describe('Tut21Component', () => {
  let component: Tut21Component;
  let fixture: ComponentFixture<Tut21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tut21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
