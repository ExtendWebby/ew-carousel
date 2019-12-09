import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EwCarouselComponent } from './ew-carousel.component';

describe('CarouselComponent', () => {
  let component: EwCarouselComponent;
  let fixture: ComponentFixture<EwCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EwCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EwCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
