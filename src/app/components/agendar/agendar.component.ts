import { Component, OnInit } from '@angular/core';
import { ManagerApiService } from 'src/app/services/manager-api.service';
import { ActivatedRoute } from "@angular/router";
import {SelectItem} from 'primeng/api';
@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.scss']
})
export class AgendarComponent implements OnInit {

  servicios;
  especialidades ;
  mostrar = false;
  servicio_selc = "";
  value8;
  cities;
  items: SelectItem[];
  item: string;

  constructor(private manageApi: ManagerApiService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({label: 'Item ' + i, value: 'Item ' + i});
        }
    this.servicio_selc = this.route.snapshot.paramMap.get("servi");
    this.getService();
    this.getEspecialidades(this.servicio_selc);
  }

  servicio_seleccionado() {
    var serv = this.servicio_selc
    console.log(serv);
    if(serv !== ""){
      this.mostrar = true;
    }
  }

  getService(){
    this.manageApi.getService().subscribe(
      (data)=>{
        this.servicios = data['servicios'];
      }
  )};

  getEspecialidades(servicio){
    this.manageApi.getEspecialidades(servicio).subscribe(
      (data)=>{
        this.especialidades = data['especialidades'];
      }
  )}

}
