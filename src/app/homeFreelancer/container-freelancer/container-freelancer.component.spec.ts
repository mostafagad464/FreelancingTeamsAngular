import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerFreelancerComponent } from './container-freelancer.component';

describe('ContainerFreelancerComponent', () => {
  let component: ContainerFreelancerComponent;
  let fixture: ComponentFixture<ContainerFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerFreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
