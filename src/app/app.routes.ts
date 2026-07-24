import { Routes } from '@angular/router';
import { PacientesListComponent } from './pacientes/pacientes-list.component';
import { PacienteFormComponent } from './pacientes/paciente-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pacientes', pathMatch: 'full' },
  { path: 'pacientes', component: PacientesListComponent },
  { path: 'pacientes/nuevo', component: PacienteFormComponent },
  { path: 'pacientes/:id/editar', component: PacienteFormComponent },

  // Replica este mismo patrón (service + list + form) para 'citas' e 'historial'.
  // Ejemplo: crea src/app/citas/ con citas.service.ts, citas-list.component.ts, cita-form.component.ts
];
