import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule, RouterLink],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {
  readonly carritoService = inject(CarritoService);
  readonly items = this.carritoService.items;
  readonly totalGeneral = this.carritoService.totalGeneral;
  readonly carritoVacio = computed(() => this.items().length === 0);

  obtenerSubtotal(precio: number, cantidad: number): number {
    return precio * cantidad;
  }

  eliminarProducto(productoId: number): void {
    this.carritoService.eliminarProducto(productoId);
  }
}
