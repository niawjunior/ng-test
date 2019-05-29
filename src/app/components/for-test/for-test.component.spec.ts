import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ForTestComponent } from './for-test.component';

describe('ForTestComponent', () => {
  let component: ForTestComponent;
  let fixture: ComponentFixture<ForTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForTestComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should increase value from 10 to 25', () => {
    expect(component.increaseValue(1, 1)).toBe(2);
  });
  it('should return with name', () => {
    expect(component.greet('niaw')).toBe('Hello niaw');
  });
  it('should return the supported currencies', () => {
    const result = component.getCurrencies();
    expect(result).toMatch('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
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
