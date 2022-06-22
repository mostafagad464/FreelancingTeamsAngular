import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditexperienceComponent } from './editexperience.component';

describe('EditexperienceComponent', () => {
  let component: EditexperienceComponent;
  let fixture: ComponentFixture<EditexperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditexperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
