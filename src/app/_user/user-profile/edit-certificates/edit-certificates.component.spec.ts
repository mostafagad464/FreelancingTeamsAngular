import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCertificatesComponent } from './edit-certificates.component';

describe('EditCertificatesComponent', () => {
  let component: EditCertificatesComponent;
  let fixture: ComponentFixture<EditCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCertificatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
