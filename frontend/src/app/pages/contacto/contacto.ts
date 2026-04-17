import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContactoService } from '../../services/contacto.service';

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
  enviando = false;
  mensajeExito = '';
  mensajeError = '';

  constructor(private contactoService: ContactoService) {}

  onSubmit(form: any): void {
    if (!form.valid) {
      return;
    }

    this.enviando = true;
    this.mensajeExito = '';
    this.mensajeError = '';

    this.contactoService.enviarMensaje(this.contacto).subscribe({
      next: () => {
        this.mensajeExito = 'Mensaje enviado correctamente.';
        this.contacto = {
          nombre: '',
          correo: '',
          asunto: '',
          mensaje: ''
        };
        form.resetForm();
        this.enviando = false;
      },
      error: (error: HttpErrorResponse) => {
        this.mensajeError = error.error?.mensaje || 'No se pudo enviar el mensaje.';
        this.enviando = false;
      }
    });
  }
}
