import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditskillsComponent } from './editskills.component';

describe('EditskillsComponent', () => {
  let component: EditskillsComponent;
  let fixture: ComponentFixture<EditskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
