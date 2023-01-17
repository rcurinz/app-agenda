import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIS } from 'src/app/apis-config/apis';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerApiService {

  constructor(private httpClient: HttpClient) { }

  getService():Observable<any>{
    return this.httpClient.get(APIS['projects'] +'servicios');
  }

  getEspecialidades(servicio):Observable<any>{
    return this.httpClient.get(APIS['projects'] +'servicios/especialidades/'+servicio);
  }

}
