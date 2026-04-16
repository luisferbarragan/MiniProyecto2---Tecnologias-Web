import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoCard } from '../../components/producto-card/producto-card';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, ProductoCard],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class Catalogo {
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Carta Raichu V',
      categoria: 'Carta Coleccionable',
      marca: 'Pokemon TCG',
      precio: 189.99,
      stock: 12,
      imagen: 'https://via.placeholder.com/400x260.png?text=Raichu+V',
      descripcion: 'Carta brillante con un poderoso ataque eléctrico perfecta para tu mazo.'
    },
    {
      id: 2,
      nombre: 'Paquete de Energía Planta',
      categoria: 'Expansión',
      marca: 'Pokemon TCG',
      precio: 59.0,
      stock: 0,
      imagen: 'https://via.placeholder.com/400x260.png?text=Energía+Planta',
      descripcion: 'Set de 10 cartas de energía Planta para recargar tus ataques rápidamente.'
    },
    {
      id: 3,
      nombre: 'Caja de Mantenimiento',
      categoria: 'Accesorios',
      marca: 'Ultra Pro',
      precio: 129.5,
      stock: 7,
      imagen: 'https://via.placeholder.com/400x260.png?text=Caja+de+Mantenimiento',
      descripcion: 'Caja resistente para proteger tu colección y mantener tus cartas organizadas.'
    }
  ];
}
