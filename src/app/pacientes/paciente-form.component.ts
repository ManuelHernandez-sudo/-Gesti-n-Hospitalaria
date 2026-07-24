import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PacientesService } from './pacientes.service';

@Component({
  selector: 'app-paciente-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './paciente-form.component.html',
})
export class PacienteFormComponent implements OnInit {
  form: FormGroup;
  editando = false;
  pacienteId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private pacientesService: PacientesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      genero: [''],
      cui: [''],
      telefono: [''],
      email: ['', Validators.email],
      tipo_sangre: [''],
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.editando = true;
      this.pacienteId = Number(idParam);
      this.pacientesService.obtener(this.pacienteId).subscribe((p) => this.form.patchValue(p));
    }
  }

  guardar(): void {
    if (this.form.invalid) return;

    const accion = this.editando
      ? this.pacientesService.actualizar(this.pacienteId!, this.form.value)
      : this.pacientesService.crear(this.form.value);

    accion.subscribe({
      next: () => this.router.navigate(['/pacientes']),
      error: (err) => alert(err?.error?.detail || 'Error al guardar el paciente'),
    });
  }
}
