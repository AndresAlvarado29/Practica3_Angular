import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="encabezado">
    <h1 class="letrasencabezado">Practica de {{name}}!</h1>
    <h2 class="letrasencabezado">Bienvenidos</h2>
  </div>
  <div class="ladoderecho">
  links
  </div>
  <div class="ladoizquierdo">
  contacto
  </div>
  <div> 
  <footer class="pie">
  <p>&copy; 2023 Mi Empresa. Todos los derechos reservados.</p>
  <p>Contáctanos: info@miempresa.com</p>
  </footer>
  </div>  
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
