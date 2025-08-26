import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-format-changer',
  standalone: true, // ✅ THIS IS REQUIRED
  imports: [CommonModule, FormsModule], // ✅ This now works
  templateUrl: './image-format-changer.component.html',
  styleUrls: ['./image-format-changer.component.scss']
})
export class ImageFormatChangerComponent {
  formats: string[] = ['jpg', 'png', 'webp', 'jfif', 'gif'];
  selectedFormat: string = 'png';
  imageFile: File | null = null;
  previewUrl: string | null = null;
  fileName: string = '';

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.imageFile = input.files[0];
      this.fileName = this.imageFile.name;

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(this.imageFile);
    }
  }

  downloadImage(): void {
    if (!this.previewUrl || !this.selectedFormat) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = this.previewUrl;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);

      let mimeType = `image/${this.selectedFormat}`;
      if (this.selectedFormat === 'jpg' || this.selectedFormat === 'jfif') {
        mimeType = 'image/jpeg';
      }

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          const baseName = this.fileName.split('.').slice(0, -1).join('.') || 'download';

          link.href = url;
          link.download = `${baseName}.${this.selectedFormat}`;
          link.click();

          URL.revokeObjectURL(url);
        }
      }, mimeType);
    };
  }
}
