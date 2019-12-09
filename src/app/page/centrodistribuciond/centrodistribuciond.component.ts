import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Centrodistribuciont } from 'src/app/interfaces/centrodistribuciont';

@Component({
  selector: 'app-centrodistribuciond',
  templateUrl: './centrodistribuciond.component.html',
  styleUrls: ['./centrodistribuciond.component.css']
})
export class CentrodistribuciondComponent implements OnInit {

  cen: Centrodistribuciont[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getCentrodistribucionu()
      .subscribe(async (data) => {
        this.cen = data;
        console.log(data);
      }
      );
      


  }


}
