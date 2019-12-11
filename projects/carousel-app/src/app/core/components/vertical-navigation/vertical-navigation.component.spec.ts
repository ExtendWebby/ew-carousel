import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { VerticalNavigationComponent } from './vertical-navigation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

describe('VerticalNavigationComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FlexLayoutModule,
        MatButtonModule,
      ],
      declarations: [
        VerticalNavigationComponent
      ],
    }).compileComponents();
  }));

  it('should be created', () => {
    const fixture = TestBed.createComponent(VerticalNavigationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
