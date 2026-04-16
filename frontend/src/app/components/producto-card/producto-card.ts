import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Producto } from '../../models/producto.model';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css'
})
export class ProductoCard {
  @Input() producto!: Producto;

  constructor(private carritoService: CarritoService) {}

  get disponible(): boolean {
    return !!this.producto && this.producto.stock > 0;
  }

  agregarAlCarrito(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (!this.disponible) {
      return;
    }

    this.carritoService.agregarProducto(this.producto);
  }

  obtenerCantidadEnCarrito(): number {
    return this.producto ? this.carritoService.obtenerCantidadProducto(this.producto.id) : 0;
  }
}
