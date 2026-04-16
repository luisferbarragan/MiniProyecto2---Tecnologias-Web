import { computed, Injectable, signal } from '@angular/core';
import { Producto } from '../models/producto.model';

export interface CarritoItem {
  producto: Producto;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private readonly carritoItems = signal<CarritoItem[]>([]);

  readonly items = this.carritoItems.asReadonly();
  readonly cantidadTotal = computed(() =>
    this.carritoItems().reduce((total, item) => total + item.cantidad, 0)
  );
  readonly totalGeneral = computed(() =>
    this.carritoItems().reduce((total, item) => total + item.producto.precio * item.cantidad, 0)
  );

  agregarProducto(producto: Producto): void {
    this.carritoItems.update((items) => {
      const itemExistente = items.find((item) => item.producto.id === producto.id);

      if (itemExistente) {
        return items.map((item) =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...items, { producto, cantidad: 1 }];
    });
  }

  eliminarProducto(productoId: number): void {
    this.carritoItems.update((items) =>
      items.filter((item) => item.producto.id !== productoId)
    );
  }

  obtenerCantidadProducto(productoId: number): number {
    return this.carritoItems().find((item) => item.producto.id === productoId)?.cantidad ?? 0;
  }
}
