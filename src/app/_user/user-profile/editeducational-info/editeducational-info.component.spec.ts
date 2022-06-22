import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeducationalInfoComponent } from './editeducational-info.component';

describe('EditeducationalInfoComponent', () => {
  let component: EditeducationalInfoComponent;
  let fixture: ComponentFixture<EditeducationalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeducationalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeducationalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
