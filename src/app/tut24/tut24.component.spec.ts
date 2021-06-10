import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut24Component } from './tut24.component';

describe('Tut24Component', () => {
  let component: Tut24Component;
  let fixture: ComponentFixture<Tut24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut24Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tut24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
