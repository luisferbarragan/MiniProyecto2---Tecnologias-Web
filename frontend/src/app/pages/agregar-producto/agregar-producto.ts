import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './agregar-producto.html',
  styleUrl: './agregar-producto.css'
})
export class AgregarProducto {
  productoForm: FormGroup;
  enviando = false;
  mensajeExito = '';
  mensajeError = '';

  constructor(
    private fb: FormBuilder,
    private productosService: ProductosService
  ) {
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      categoria: ['', Validators.required],
      marca: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      imagen: ['', Validators.required],
      descripcion: ['', Validators.required],
      disponible: [true]
    });
  }

  onSubmit(): void {
    if (this.productoForm.invalid) {
      this.productoForm.markAllAsTouched();
      return;
    }

    this.enviando = true;
    this.mensajeExito = '';
    this.mensajeError = '';

    this.productosService.crearProducto(this.productoForm.getRawValue()).subscribe({
      next: () => {
        this.mensajeExito = 'Producto guardado correctamente.';
        this.productoForm.reset({
          nombre: '',
          categoria: '',
          marca: '',
          precio: '',
          stock: '',
          imagen: '',
          descripcion: '',
          disponible: true
        });
        this.enviando = false;
      },
      error: () => {
        this.mensajeError = 'No se pudo guardar el producto.';
        this.enviando = false;
      }
    });
  }
}
