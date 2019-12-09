import { TestBed } from '@angular/core/testing';

import { EwCarouselService } from './ew-carousel.service';

describe('CarouselService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EwCarouselService = TestBed.get(EwCarouselService);
    expect(service).toBeTruthy();
  });
});
