export interface Paciente {
  id?: number;
  nombre: string;
  apellido: string;
  fecha_nacimiento: string; // formato YYYY-MM-DD
  genero?: string;
  cui?: string;
  telefono?: string;
  email?: string;
  tipo_sangre?: string;
}
