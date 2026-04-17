import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface MensajeContacto {
  nombre: string;
  correo: string;
  asunto: string;
  mensaje: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private readonly apiUrl = `${environment.apiBaseUrl}/contacto`;

  constructor(private http: HttpClient) {}

  enviarMensaje(mensaje: MensajeContacto): Observable<{ mensaje: string; id: number }> {
    return this.http.post<{ mensaje: string; id: number }>(this.apiUrl, mensaje);
  }
}
