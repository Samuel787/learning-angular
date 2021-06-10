import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut24UserComponent } from './tut24-user.component';

describe('Tut24UserComponent', () => {
  let component: Tut24UserComponent;
  let fixture: ComponentFixture<Tut24UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut24UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tut24UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
