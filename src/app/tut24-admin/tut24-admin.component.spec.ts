import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut24AdminComponent } from './tut24-admin.component';

describe('Tut24AdminComponent', () => {
  let component: Tut24AdminComponent;
  let fixture: ComponentFixture<Tut24AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut24AdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tut24AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
