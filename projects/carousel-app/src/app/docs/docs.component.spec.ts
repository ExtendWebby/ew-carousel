import { async, TestBed } from '@angular/core/testing';
import { DocsComponent } from './docs.component';

describe('DocsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        DocsComponent
      ],
    }).compileComponents();
  }));

  it('should be created', () => {
    const fixture = TestBed.createComponent(DocsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
