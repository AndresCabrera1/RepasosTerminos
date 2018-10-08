import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'ola k ace';
  ver = false;
  nombre = " ";
  arreglosObjeto:any=[
    {nombre:'mombre del servicio1'},
    {nombre:'mombre del servicio2'},
    {nombre:'mombre del servicio3'},
    {nombre:'mombre del servicio4'},
    {nombre:'mombre del servicio5'},
    {nombre:'mombre del servicio6'},
    {nombre:'mombre del servicio7'},
    {nombre:'mombre del servicio8'},
    {nombre:'mombre del servicio9'},
    {nombre:'mombre del servicio10'},
    {nombre:'mombre del servicio11'},
    {nombre:'mombre del servicio12'},
    
  ]
  
    constructor(){
        setTimeout(() => {
          this.ver= true;
        },3000);
        
    }
    
    ahciendoAlgo(){
      alert("hacemos algo");
      console.log(`este es el nombre;  ${this.nombre}`);
    }
}
