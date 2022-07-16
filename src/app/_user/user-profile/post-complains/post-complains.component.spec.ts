import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComplainsComponent } from './post-complains.component';

describe('PostComplainsComponent', () => {
  let component: PostComplainsComponent;
  let fixture: ComponentFixture<PostComplainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComplainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
