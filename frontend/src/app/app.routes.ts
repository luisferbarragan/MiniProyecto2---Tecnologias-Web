import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { AgregarProducto } from './pages/agregar-producto/agregar-producto';
import { Contacto } from './pages/contacto/contacto';
import { Catalogo } from './pages/catalogo/catalogo';
import { ProductoDetalle } from './pages/producto-detalle/producto-detalle';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'catalogo', component: Catalogo },
  { path: 'productos/:id', component: ProductoDetalle },
  { path: 'agregar-producto', component: AgregarProducto },
  { path: 'contacto', component: Contacto }
];
