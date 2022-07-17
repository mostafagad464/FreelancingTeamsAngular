import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitprojectComponent } from './submitproject.component';

describe('SubmitprojectComponent', () => {
  let component: SubmitprojectComponent;
  let fixture: ComponentFixture<SubmitprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
