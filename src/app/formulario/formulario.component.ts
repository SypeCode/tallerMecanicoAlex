import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
/*import {cliente} from '../cliente';*/

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"],
})
export class FormularioComponent implements OnInit {
  registro = [];
  cliente: any;
  nombre: string;
  dui: string;
  vehiculo: number;
  costo: number;
  detalle: string;
  contador: number;
  descuento: number;
  visita: number;
  total: number;
  fecha: string;
  constructor() {}
  ngOnInit() {
    this.nombre = "";
    this.dui = "";
    this.vehiculo;
    this.costo ;
    this.detalle = "";
    this.contador = 0;
    this.descuento = 0;
    this.visita = 0;
    this.total = 0;
    this.fecha = new Date().toLocaleDateString();
  }

  limpiar(){
    this.nombre = "";
    this.dui = "";
    this.vehiculo= null;
    this.costo = null;
    this.detalle = "";
   
  }

  ingresar() {
    this.descuento = 0;
    this.visita = 0;

    for (let i = 0; i < this.registro.length; i++) {
      if (this.registro[i].dui == this.dui) {
        //Si existe la visita con el dui ingresado en todos los registros
        this.visita++; //total de visitas para el dui ingresado
      }
    }

    if (this.visita == 1) {
      this.descuento = this.costo * 0.05;
      this.total = this.costo - this.descuento;
    } else if (this.visita == 3) {
      this.descuento = this.costo * 0.1;
      this.total = this.costo - this.descuento;
    } else {
      this.total = this.costo;
    }

    this.cliente = {
      nombre: this.nombre,
      dui: this.dui,
      vehiculo: this.vehiculo,
      costo: this.costo,
      descuento: this.descuento,
      total: this.total,
      detalle: this.detalle,
      fecha: this.fecha
    };
    this.registro.push(this.cliente);
    this.contador++;

    
  }
}
