import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCompressorComponent } from './image-compressor.component';

describe('ImageCompressorComponent', () => {
  let component: ImageCompressorComponent;
  let fixture: ComponentFixture<ImageCompressorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageCompressorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCompressorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
