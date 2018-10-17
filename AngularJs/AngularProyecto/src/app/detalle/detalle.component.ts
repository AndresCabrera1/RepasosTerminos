import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-Detalle',
    templateUrl: './detalle.component.html'
})
export class DetalleComponent {
    lugar: any = {};
    id = null;
    arreglosObjeto: any = [
        { descripcion: 'loreimpus ser 1', id: 1, plan: 'gratis', cercania: 2, legania: 10, activo: true, nombre: 'mombre del servicio1' },
        { descripcion: 'loreimpus ser 2', id: 2, plan: 'pago', cercania: 1, legania: 10, activo: false, nombre: 'mombre del servicio2' },
        { descripcion: 'loreimpus ser 3', id: 3, plan: 'gratis', cercania: 2, legania: 10, activo: true, nombre: 'mombre del servicio3' },
        { descripcion: 'loreimpus ser 4', id: 4, plan: 'gratis', cercania: 3, legania: 10, activo: true, nombre: 'mombre del servicio4' },
        { descripcion: 'loreimpus ser 5', id: 5, plan: 'gratis', cercania: 2, legania: 10, activo: false, nombre: 'mombre del servicio5' },
        { descripcion: 'loreimpus ser 6', id: 6, plan: 'pago', cercania: 3, legania: 10, activo: true, nombre: 'mombre del servicio6' },
        { descripcion: 'loreimpus ser 7', id: 7, plan: 'gratis', cercania: 3, legania: 10, activo: false, nombre: 'mombre del servicio7' },
        { descripcion: 'loreimpus ser 8', id: 8, plan: 'gratis', cercania: 1, legania: 10, activo: true, nombre: 'mombre del servicio8' },
        { descripcion: 'loreimpus ser 9', id: 9, plan: 'gratis', cercania: 2, legania: 10, activo: true, nombre: 'mombre del servicio9' },
        { descripcion: 'loreimpus s 10', id: 10, plan: 'gratis', cercania: 3, legania: 10, activo: false, nombre: 'mombre del servicio10' },
        { descripcion: 'loreimpus ser 11', id: 11, plan: 'pago', cercania: 2, legania: 10, activo: true, nombre: 'mombre del servicio11' },
        { descripcion: 'loreimpus ser 12', id: 12, plan: 'pago', cercania: 1, legania: 10, activo: false, nombre: 'mombre del servicio12' },
    ];
    constructor(private route: ActivatedRoute) {
        // console.log(this.route.snapshot.params['id']);
        this.id = this.route.snapshot.params['id'];
        this.lugar = this.CapTurandoId();
    }
    CapTurandoId() {
       return  this.arreglosObjeto.find((lugar) => 2 === 2) || null;
    }

}
