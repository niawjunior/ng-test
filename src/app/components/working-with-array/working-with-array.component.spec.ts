import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingWithArrayComponent } from './working-with-array.component';

describe('WorkingWithArrayComponent', () => {
  let component: WorkingWithArrayComponent;
  let fixture: ComponentFixture<WorkingWithArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingWithArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingWithArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the supported currencies', () => {
    const result = component.getCurrencies();
    expect(result).toMatch('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
  });
});
