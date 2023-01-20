import { Component, OnInit } from '@angular/core';
import { ManagerApiService } from 'src/app/services/manager-api.service';
import { ActivatedRoute } from "@angular/router";

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

  constructor(private manageApi: ManagerApiService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.servicio_selc = this.route.snapshot.paramMap.get("servi");
    this.getService();
  }

  servicio_seleccionado(event: any) {
    var serv = event.target.value;
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
    this.manageApi.getEspecialidades(servicio.target.value).subscribe(
      (data)=>{
        this.especialidades = data['especialidades'];
      }
  )}

}
