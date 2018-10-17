import { Component } from '@angular/core';

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html'
})

export class LugaresComponent {
    arreglosObjeto: any = [
          {id: 1, plan: 'gratis', cercania: 2, legania: 10, activo: true, nombre: 'mombre del servicio1' },
          {id: 2, plan: 'pago', cercania: 1, legania: 10, activo: false, nombre: 'mombre del servicio2' },
          {id: 3, plan: 'gratis', cercania: 2, legania: 10, activo: true, nombre: 'mombre del servicio3' },
          {id: 4, plan: 'gratis', cercania: 3, legania: 10, activo: true, nombre: 'mombre del servicio4' },
          {id: 5, plan: 'gratis', cercania: 2, legania: 10, activo: false, nombre: 'mombre del servicio5' },
          {id: 6, plan: 'pago', cercania: 3, legania: 10, activo: true, nombre: 'mombre del servicio6' },
          {id: 7, plan: 'gratis', cercania: 3, legania: 10, activo: false, nombre: 'mombre del servicio7' },
          {id: 8, plan: 'gratis', cercania: 1, legania: 10, activo: true, nombre: 'mombre del servicio8' },
          {id: 9, plan: 'gratis', cercania: 2, legania: 10, activo: true, nombre: 'mombre del servicio9' },
          {id: 10, plan: 'gratis', cercania: 3, legania: 10, activo: false, nombre: 'mombre del servicio10' },
          {id: 11, plan: 'pago', cercania: 2, legania: 10, activo: true, nombre: 'mombre del servicio11' },
          {id: 12, plan: 'pago', cercania: 1, legania: 10, activo: false, nombre: 'mombre del servicio12' },
        ];
        lat = 6.2686734;
        lng = -75.6664325;
}
