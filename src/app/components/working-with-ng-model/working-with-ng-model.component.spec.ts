import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingWithNgModelComponent } from './working-with-ng-model.component';
import { FormsModule } from '@angular/forms';

describe('WorkingWithNgModelComponent', () => {
  let component: WorkingWithNgModelComponent;
  let fixture: ComponentFixture<WorkingWithNgModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingWithNgModelComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingWithNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should increase value from 10 to 25', () => {
    expect(component.increaseValue(1, 1)).toBe(2);
  });
});
