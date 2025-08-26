import { Component } from '@angular/core';
import { RouterLink , Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
 imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    homeSet: any = 'Home'

    toggleActive(value: any) {
    this.homeSet = value
  }
}
