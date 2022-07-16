import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComplaintComponent } from './show-complaint.component';

describe('ShowComplaintComponent', () => {
  let component: ShowComplaintComponent;
  let fixture: ComponentFixture<ShowComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
