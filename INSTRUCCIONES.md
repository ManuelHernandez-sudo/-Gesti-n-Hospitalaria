# Frontend - Sistema de Gestión Hospitalaria (Angular)

Proyecto Angular **completo y ya armado** (no necesitas correr `ng new` ni copiar nada).
Incluye el módulo de Pacientes funcionando (listado + crear/editar).

## Cómo correrlo (3 pasos)

```bash
cd hospital-frontend
npm install
ng serve
```

Abre **http://localhost:4200**

## Requisito importante

El backend debe estar corriendo en `http://127.0.0.1:8000` (ver `backend-hospital.zip`,
carpeta separada). Sin el backend corriendo, verás el mensaje de error de conexión en
la pantalla de pacientes.

## Estructura

```
src/app/
 ├── app.component.ts/html/css   # layout general (header + router-outlet)
 ├── app.routes.ts                 # rutas de la aplicación
 ├── app.config.ts                 # providers (HttpClient, Router)
 └── pacientes/                    # módulo completo: modelo, servicio, listado, formulario
```

## Agregar los módulos de Citas e Historial Clínico

Copia la carpeta `pacientes/` y renómbrala (ej. `citas/`), ajusta:
- el modelo (`paciente.model.ts` → `cita.model.ts`) según los campos del backend
- la URL del servicio (`/api/pacientes/` → `/api/citas/`)
- los campos del formulario

Luego agrega las rutas nuevas en `app.routes.ts` siguiendo el mismo patrón.
