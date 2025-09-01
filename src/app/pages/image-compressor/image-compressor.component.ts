import { Component } from '@angular/core';
import imageCompression from 'browser-image-compression';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-image-compressor',
  imports: [CommonModule],
  templateUrl: './image-compressor.component.html',
  styleUrl: './image-compressor.component.scss'
})
export class ImageCompressorComponent {
 originalImageFile: File | null = null;
  compressedImageFile: File | null = null;

  originalImageUrl: string | ArrayBuffer | null = null;
  compressedImageUrl: string | ArrayBuffer | null = null;

  originalSizeKB: number = 0;
  compressedSizeKB: number = 0;

  isCompressing: boolean = false;

  async onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    this.originalImageFile = input.files[0];
    this.originalSizeKB = this.originalImageFile.size / 1024;

    // Show original image preview
    const reader = new FileReader();
    reader.onload = e => {
      this.originalImageUrl = e.target?.result || null;
    };
    reader.readAsDataURL(this.originalImageFile);

    // Reset compressed data
    this.compressedImageFile = null;
    this.compressedImageUrl = null;
    this.compressedSizeKB = 0;
  }

  async compressImage() {
    if (!this.originalImageFile) return;

    this.isCompressing = true;

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true
    };

    try {
      const compressedFile = await imageCompression(this.originalImageFile, options);
      this.compressedImageFile = compressedFile;
      this.compressedSizeKB = compressedFile.size / 1024;

      // Show compressed image preview
      const reader = new FileReader();
      reader.onload = e => {
        this.compressedImageUrl = e.target?.result || null;
        this.isCompressing = false;
      };
      reader.readAsDataURL(compressedFile);
    } catch (error) {
      console.error('Compression error:', error);
      this.isCompressing = false;
    }
  }

  downloadCompressed() {
    if (!this.compressedImageFile) return;

    const url = URL.createObjectURL(this.compressedImageFile);
    const a = document.createElement('a');
    a.href = url;
    a.download = this.compressedImageFile.name || 'compressed-image.jpg';
    a.click();
    URL.revokeObjectURL(url);
  }
}