import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './agregar-producto.html',
  styleUrl: './agregar-producto.css'
})
export class AgregarProducto {
  productoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      categoria: ['', Validators.required],
      marca: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      imagen: [''],
      descripcion: ['', Validators.required],
      disponible: [true]
    });
  }

  onSubmit() {
    if (this.productoForm.valid) {
      console.log('Producto agregado:', this.productoForm.value);
      // Aquí iría la lógica para enviar al backend
    } else {
      console.log('Formulario inválido');
    }
  }
}