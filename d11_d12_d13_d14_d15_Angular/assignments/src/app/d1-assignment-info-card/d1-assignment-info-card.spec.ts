import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D1AssignmentInfoCard } from './d1-assignment-info-card';

describe('D1AssignmentInfoCard', () => {
  let component: D1AssignmentInfoCard;
  let fixture: ComponentFixture<D1AssignmentInfoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [D1AssignmentInfoCard]
    })
      .compileComponents();

    fixture = TestBed.createComponent(D1AssignmentInfoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
