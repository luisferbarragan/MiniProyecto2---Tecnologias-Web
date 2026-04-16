import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { AgregarProducto } from './pages/agregar-producto/agregar-producto';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'agregar-producto', component: AgregarProducto },
  { path: 'contacto', component: Contacto }
];
