import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingWithUpAndDownComponent } from './working-with-up-and-down.component';

describe('WorkingWithUpAndDownComponent', () => {
  let component: WorkingWithUpAndDownComponent;
  let fixture: ComponentFixture<WorkingWithUpAndDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingWithUpAndDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingWithUpAndDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should increase totalVotes when upVotes', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });
  it('should decrease totalVotes when downVotes', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});
