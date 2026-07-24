import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PacientesService } from './pacientes.service';
import { Paciente } from './paciente.model';

@Component({
  selector: 'app-pacientes-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pacientes-list.component.html',
})
export class PacientesListComponent implements OnInit {
  pacientes: Paciente[] = [];
  cargando = true;
  error = '';

  constructor(private pacientesService: PacientesService) {}

  ngOnInit(): void {
    this.cargarPacientes();
  }

  cargarPacientes(): void {
    this.cargando = true;
    this.pacientesService.listar().subscribe({
      next: (data) => {
        this.pacientes = data;
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'No se pudo conectar con el backend. ¿Está corriendo en el puerto 8000?';
        this.cargando = false;
        console.error(err);
      },
    });
  }

  eliminar(id: number): void {
    if (!confirm('¿Eliminar este paciente?')) return;
    this.pacientesService.eliminar(id).subscribe(() => this.cargarPacientes());
  }
}
