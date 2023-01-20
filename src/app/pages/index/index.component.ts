import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule,Router } from '@angular/router';
import { ManagerApiService } from 'src/app/services/manager-api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  responsiveOptions;
  products: any[];
  sortOrder: number;
  sortField: string;

  constructor(private router: Router,private route: ActivatedRoute,private manageApi: ManagerApiService) {
   }

  ngOnInit(): void {
    this.getService()
  }

  getService(){
    this.manageApi.getService().subscribe(
      (data)=>{
        console.log(data);
        this.products = data['servicios'];
      }
  )};



}
