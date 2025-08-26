import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFormatChangerComponent } from './image-format-changer.component';

describe('ImageFormatChangerComponent', () => {
  let component: ImageFormatChangerComponent;
  let fixture: ComponentFixture<ImageFormatChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageFormatChangerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageFormatChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
