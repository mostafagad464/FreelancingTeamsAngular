import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFreelancersComponent } from './show-freelancers.component';

describe('ShowFreelancersComponent', () => {
  let component: ShowFreelancersComponent;
  let fixture: ComponentFixture<ShowFreelancersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFreelancersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFreelancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
