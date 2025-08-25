import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ColorPalleteComponent } from './pages/color-pallete/color-pallete.component';

export const routes: Routes = [
  { path: '', component: IndexComponent, title: 'Index Page' },
  { path: 'colorpallete', component: ColorPalleteComponent, title: 'Color Palette Generator' },
  { path: '**', redirectTo: '' }, // optional: catch-all
];
