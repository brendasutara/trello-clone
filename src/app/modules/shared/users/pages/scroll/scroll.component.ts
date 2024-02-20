import { Component } from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../layout/components/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '../../../../../models/product.model';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [CommonModule, ScrollingModule, NavbarComponent, HttpClientModule],
  templateUrl: './scroll.component.html'
})
export class ScrollComponent {

  products: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.products = data;
    })
  }
}
