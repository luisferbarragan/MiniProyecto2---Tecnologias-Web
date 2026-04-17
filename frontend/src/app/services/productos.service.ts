import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Producto } from '../models/producto.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = `${environment.apiBaseUrl}/productos`;

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<Producto[]> {
    return this.http
      .get<Producto[]>(`${this.apiUrl}?ts=${Date.now()}`)
      .pipe(map((productos) => productos.map((producto) => this.normalizarProducto(producto))));
  }

  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.http
      .get<Producto>(`${this.apiUrl}/${id}?ts=${Date.now()}`)
      .pipe(map((producto) => this.normalizarProducto(producto)));
  }

  crearProducto(producto: Omit<Producto, 'id'>): Observable<{ mensaje: string; id: number }> {
    return this.http.post<{ mensaje: string; id: number }>(this.apiUrl, producto);
  }

  private normalizarProducto(producto: Producto): Producto {
    return {
      ...producto,
      id: Number(producto.id),
      precio: Number(producto.precio),
      stock: Number(producto.stock)
    };
  }
}
