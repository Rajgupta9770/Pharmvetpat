import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsApprovalComponent } from './us-approval.component';

describe('UsApprovalComponent', () => {
  let component: UsApprovalComponent;
  let fixture: ComponentFixture<UsApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsApprovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
