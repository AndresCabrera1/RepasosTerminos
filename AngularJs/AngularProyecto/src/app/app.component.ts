import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ola k ace';
  ver = false;
  nombre = ' ';
  arreglosObjeto: any = [
    { plan: 'gratis', cercania: 2, legania: 10, activo: true, nombre: 'mombre del servicio1' },
    { plan: 'pago', cercania: 1, legania: 10, activo: false, nombre: 'mombre del servicio2' },
    { plan: 'gratis', cercania: 2, legania: 10, activo: true, nombre: 'mombre del servicio3' },
    { plan: 'gratis', cercania: 3, legania: 10, activo: true, nombre: 'mombre del servicio4' },
    { plan: 'gratis', cercania: 2, legania: 10, activo: false, nombre: 'mombre del servicio5' },
    { plan: 'pago', cercania: 3, legania: 10, activo: true, nombre: 'mombre del servicio6' },
    { plan: 'gratis', cercania: 3, legania: 10, activo: false, nombre: 'mombre del servicio7' },
    { plan: 'gratis', cercania: 1, legania: 10, activo: true, nombre: 'mombre del servicio8' },
    { plan: 'gratis', cercania: 2, legania: 10, activo: true, nombre: 'mombre del servicio9' },
    { plan: 'gratis', cercania: 3, legania: 10, activo: false, nombre: 'mombre del servicio10' },
    { plan: 'pago', cercania: 2, legania: 10, activo: true, nombre: 'mombre del servicio11' },
    { plan: 'pago', cercania: 1, legania: 10, activo: false, nombre: 'mombre del servicio12' },
  ];
  lat = 6.2686734;
  lng = -75.6664325;

  constructor() {
    setTimeout(() => {
      this.ver = true;
    }, 3000);
  }

  ahciendoAlgo() {
    alert('hacemos algo');
    console.log(`este es el nombre:  ${this.nombre}`);
  }
}
