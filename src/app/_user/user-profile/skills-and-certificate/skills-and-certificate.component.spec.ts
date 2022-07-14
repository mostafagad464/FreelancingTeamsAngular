import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAndCertificateComponent } from './skills-and-certificate.component';

describe('SkillsAndCertificateComponent', () => {
  let component: SkillsAndCertificateComponent;
  let fixture: ComponentFixture<SkillsAndCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsAndCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsAndCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
