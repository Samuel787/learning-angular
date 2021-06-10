import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTut22Component } from './child-tut22.component';

describe('ChildTut22Component', () => {
  let component: ChildTut22Component;
  let fixture: ComponentFixture<ChildTut22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTut22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTut22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
