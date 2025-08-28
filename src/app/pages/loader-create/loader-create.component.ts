import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-loader-create',
  imports:[FormsModule,CommonModule],
  templateUrl: './loader-create.component.html',
  styleUrls: ['./loader-create.component.scss']
})
export class LoaderCreateComponent implements AfterViewInit, OnDestroy {

  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  animationType: string = 'rotate';
  animationSpeed: number = 1; // speed multiplier for animation
  isRecording = false;

  uploadedImage?: HTMLImageElement;
  uploadedFileName: string = '';

  private animationFrameId?: number;

  ngAfterViewInit() {
    this.startAnimationLoop();
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      this.uploadedFileName = file.name;
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          this.uploadedImage = img;
          this.drawFrame();
        };
        if (e.target?.result) img.src = e.target.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  drawFrame() {
    if (!this.canvasRef) return;
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx || !this.uploadedImage) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);
    ctx.save();

    const time = performance.now() / 1000;

    switch (this.animationType) {
      case 'rotate':
        ctx.translate(width / 2, height / 2);
        ctx.rotate(time * Math.PI * this.animationSpeed);
        ctx.translate(-width / 2, -height / 2);
        break;
      case 'pulse':
        const scale = 1 + 0.3 * Math.sin(time * 5 * this.animationSpeed);
        ctx.translate(width / 2, height / 2);
        ctx.scale(scale, scale);
        ctx.translate(-width / 2, -height / 2);
        break;
      case 'horizontal':
        const dx = 10 * Math.sin(time * 3 * this.animationSpeed);
        ctx.translate(dx, 0);
        break;
      case 'vertical':
        const dy = 10 * Math.sin(time * 3 * this.animationSpeed);
        ctx.translate(0, dy);
        break;
      case 'speed':
        ctx.translate(width / 2, height / 2);
        ctx.rotate(time * Math.PI * 3 * this.animationSpeed);
        ctx.translate(-width / 2, -height / 2);
        break;
      default:
        break;
    }

    const img = this.uploadedImage;
    const scaleFactor = Math.min(width / img.width, height / img.height) * 0.8;
    const imgWidth = img.width * scaleFactor;
    const imgHeight = img.height * scaleFactor;

    ctx.drawImage(img, (width - imgWidth) / 2, (height - imgHeight) / 2, imgWidth, imgHeight);
    ctx.restore();
  }

  startAnimationLoop() {
    const loop = () => {
      if (this.uploadedImage && !this.isRecording) {
        this.drawFrame();
      }
      this.animationFrameId = requestAnimationFrame(loop);
    };
    loop();
  }

  async convertToGif() {
    if (typeof window === 'undefined') {
      alert('GIF generation only works in browser');
      return;
    }
    if (!this.uploadedImage) {
      alert('Please upload an image first.');
      return;
    }

    this.isRecording = true;

    const module: any = await import('canvas-capture');
    const CanvasCapture = module.CanvasCapture;

    const canvas = this.canvasRef.nativeElement;
    const width = 250;
    const height = 250;
    canvas.width = width;
    canvas.height = height;

    CanvasCapture.init(canvas, { showRecDot: false });
    CanvasCapture.beginGIFRecord({ name: 'loader', fps: 15 });

    const duration = 2000; // 2 seconds
    const fps = 15;
    const frames = (duration / 1000) * fps;
    let count = 0;

    const recordFrame = () => {
      this.drawFrame();
      CanvasCapture.recordFrame();
      count++;
      if (count < frames) {
        requestAnimationFrame(recordFrame);
      } else {
        CanvasCapture.stopRecord();  // triggers automatic download
        this.isRecording = false;
      }
    };

    requestAnimationFrame(recordFrame);
  }
}
