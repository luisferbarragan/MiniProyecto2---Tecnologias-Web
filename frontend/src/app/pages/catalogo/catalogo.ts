import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoCard } from '../../components/producto-card/producto-card';
import { Producto } from '../../models/producto.model';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, ProductoCard],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class Catalogo implements OnInit {
  productos: Producto[] = [];
  cargando = true;

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.obtenerProductos().subscribe({
      next: (productos) => {
        this.productos = productos;
        this.cargando = false;
      },
      error: () => {
        this.productos = [];
        this.cargando = false;
      }
    });
  }
}
