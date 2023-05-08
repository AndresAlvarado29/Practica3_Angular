import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl:`index.html`,
  styleUrls: [`global_styles.css`],
  
})
export class App {
  nombre="";
  apellido="";
  correo="";
  celular="";
  direccion="";
  
}

bootstrapApplication(App);
