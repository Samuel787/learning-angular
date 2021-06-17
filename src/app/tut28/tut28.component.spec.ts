import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut28Component } from './tut28.component';

describe('Tut28Component', () => {
  let component: Tut28Component;
  let fixture: ComponentFixture<Tut28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut28Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tut28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
