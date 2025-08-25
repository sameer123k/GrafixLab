import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color-pallete',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './color-pallete.component.html',
  styleUrls: ['./color-pallete.component.scss']
})
export class ColorPalleteComponent {
  palettes: string[][] = [];
  userColor: string = '';
  message: string = '';

  // === Generate lighter & darker shades ===
  private generateShades(baseColor: string, count: number = 6): string[] {
    const shades: string[] = [];
    let r = parseInt(baseColor.substring(1, 3), 16);
    let g = parseInt(baseColor.substring(3, 5), 16);
    let b = parseInt(baseColor.substring(5, 7), 16);

    for (let i = 0; i < count; i++) {
      const factor = 1 - (i - 2) * 0.15;
      const newR = Math.max(0, Math.min(255, Math.floor(r * factor)));
      const newG = Math.max(0, Math.min(255, Math.floor(g * factor)));
      const newB = Math.max(0, Math.min(255, Math.floor(b * factor)));
      shades.push(
        `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`
      );
    }
    return shades;
  }

  // === Generate Palette from User Input ===
  generateFromUserColor(): void {
    if (this.userColor.startsWith('#') && this.userColor.length === 7) {
      this.palettes = [];
      for (let i = 0; i < 4; i++) {
        this.palettes.push(this.generateShades(this.userColor, 6));
      }
      this.message = '✅ Palette Generated!';
      setTimeout(() => (this.message = ''), 2000);
    } else {
      this.message = '⚠️ Enter a valid HEX like #3498db';
    }
  }

  // === Shuffle Palettes ===
  shufflePalettes(): void {
    this.palettes = this.palettes.map(shades => [...shades].sort(() => Math.random() - 0.5));
    this.message = '🔀 Palette Shuffled!';
    setTimeout(() => (this.message = ''), 2000);
  }

  // === Copy HEX ===
  copyColor(color: string): void {
    navigator.clipboard.writeText(color);
    this.message = `${color} copied! 📋`;
    setTimeout(() => (this.message = ''), 2000);
  }

  // === Download as JSON ===
  downloadJSON(): void {
    const blob = new Blob([JSON.stringify(this.palettes, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'palette.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  // === Download as HEX Text ===
  downloadHEX(): void {
    const hexColors = this.palettes.flat().join('\n');
    const blob = new Blob([hexColors], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'palette.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  // === Choose contrast color (white/black text) ===
  getContrast(hex: string): string {
    const r = parseInt(hex.substr(1, 2), 16);
    const g = parseInt(hex.substr(3, 2), 16);
    const b = parseInt(hex.substr(5, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? '#000' : '#fff';
  }
}
