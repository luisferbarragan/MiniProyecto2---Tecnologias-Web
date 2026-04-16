import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css'
})
export class ProductoCard {
  @Input() producto!: Producto;

  get disponible(): boolean {
    return !!this.producto && this.producto.stock > 0;
  }
}
