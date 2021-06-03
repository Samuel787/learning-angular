import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User2ComponentComponent } from './user2-component.component';

describe('User2ComponentComponent', () => {
  let component: User2ComponentComponent;
  let fixture: ComponentFixture<User2ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User2ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(User2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
