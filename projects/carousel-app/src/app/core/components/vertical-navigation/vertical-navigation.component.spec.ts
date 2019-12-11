import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { VerticalNavigationComponent } from './vertical-navigation.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        VerticalNavigationComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(VerticalNavigationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'carousel-app'`, () => {
    const fixture = TestBed.createComponent(VerticalNavigationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('carousel-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(VerticalNavigationComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('carousel-app app is running!');
  });
});
