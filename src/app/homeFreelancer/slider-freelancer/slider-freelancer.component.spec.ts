import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderFreelancerComponent } from './slider-freelancer.component';

describe('SliderFreelancerComponent', () => {
  let component: SliderFreelancerComponent;
  let fixture: ComponentFixture<SliderFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderFreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
