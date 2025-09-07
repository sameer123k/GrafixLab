import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ColorPalleteComponent } from './pages/color-pallete/color-pallete.component';
import { ImageFormatChangerComponent } from './pages/image-format-changer/image-format-changer.component';
import { ImageCompressorComponent } from './pages/image-compressor/image-compressor.component';

export const routes: Routes = [
  { path: '', component: IndexComponent, title: 'Index Page' },
  { path: 'colorpallete', component: ColorPalleteComponent, title: 'Color Palette Generator' },
  { path: 'image-format-changer', component: ImageFormatChangerComponent, title: 'Image Format Changer' },
  { path: 'image-compressor', component: ImageCompressorComponent, title: 'Image Compressor' },
  { path: '**', redirectTo: '' }, // optional: catch-all
];
