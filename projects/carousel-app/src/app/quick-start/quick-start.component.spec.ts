import { async, TestBed } from '@angular/core/testing';
import { QuickStartComponent } from './quick-start.component';

describe('QuickStartComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        QuickStartComponent
      ],
    }).compileComponents();
  }));

  it('should be created', () => {
    const fixture = TestBed.createComponent(QuickStartComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
