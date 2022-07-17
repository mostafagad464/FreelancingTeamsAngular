import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFreelancerComponent } from './card-freelancer.component';

describe('CardFreelancerComponent', () => {
  let component: CardFreelancerComponent;
  let fixture: ComponentFixture<CardFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
