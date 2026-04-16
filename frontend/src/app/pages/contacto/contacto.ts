import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
  contacto = {
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Mensaje enviado:', this.contacto);
      // Aquí iría la lógica para enviar al backend
    } else {
      console.log('Formulario inválido');
    }
  }
}