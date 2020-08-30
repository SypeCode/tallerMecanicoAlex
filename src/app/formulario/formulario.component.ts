import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
/*import {cliente} from '../cliente';*/

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  registro=[];
  cliente:any;
  nombre:string;
  dui:string;
  vehiculo:number;
  costo:number;
  detalle:string;
  contador:number;
  id:number;
  constructor() { }
  ngOnInit() {
  this.nombre="";
  this.dui="";
  this.vehiculo=0;
  this.costo=0;
  this.detalle="";
  this.contador=0;
  this.id=0;
  }
 ingresar(){

this.id =this.contador;
this.cliente={"nombre":this.nombre,"dui":this.dui,"vehiculo":this.vehiculo,"costo":this.costo,"detalle":this.detalle, "id":this.id};
this.registro.push(this.cliente);
this.contador++;

}

}
