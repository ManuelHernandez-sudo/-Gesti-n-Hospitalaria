import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './paciente.model';

// Ajusta esta URL si tu backend corre en otro puerto/host
const API_URL = 'http://127.0.0.1:8000/api/pacientes/';

@Injectable({ providedIn: 'root' })
export class PacientesService {
  constructor(private http: HttpClient) {}

  listar(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(API_URL);
  }

  obtener(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(`${API_URL}${id}`);
  }

  crear(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(API_URL, paciente);
  }

  actualizar(id: number, paciente: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(`${API_URL}${id}`, paciente);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}${id}`);
  }
}
