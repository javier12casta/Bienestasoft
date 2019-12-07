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
