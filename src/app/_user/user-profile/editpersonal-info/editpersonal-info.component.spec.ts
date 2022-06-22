import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpersonalInfoComponent } from './editpersonal-info.component';

describe('EditpersonalInfoComponent', () => {
  let component: EditpersonalInfoComponent;
  let fixture: ComponentFixture<EditpersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpersonalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
