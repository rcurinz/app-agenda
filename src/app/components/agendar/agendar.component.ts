import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.scss']
})
export class AgendarComponent implements OnInit {

  servicios = [
    "Ingles",
    "Servicio Tecnico Computacional",
    "Calculo"
  ]
  
  especialidades = {
    "Ingles": {
      1:"Enseñanza basica",
      2:"Enseñanza media",
      3:"Enseñanza superior"
    },
    "Servicio Tecnico Computacional": {
      1:"Instalacion de software",
      2:"Formateo",
      3:"Limpieza de sistema operativo"
    },
    "Calculo": {
      1:"Logaritmo",
      2:"Integrales",
      3:"Derivadas",
      4:"Optimizacion"
    }
  }
  mostrar = false;

  constructor() { }

  ngOnInit(): void {
  }

  servicio_seleccionado(event: any) {
    var serv = event.target.value;
    console.log(serv);
    if(serv !== ""){
      this.mostrar = true;
    }
    
  }

}
