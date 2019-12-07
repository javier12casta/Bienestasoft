import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Centrodistribuciont } from 'src/app/interfaces/centrodistribuciont';

@Component({
  selector: 'app-centrodistribucionp',
  templateUrl: './centrodistribucionp.component.html',
  styleUrls: ['./centrodistribucionp.component.css']
})
export class CentrodistribucionpComponent implements OnInit {

  cen: Centrodistribuciont[] = [];


  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getCentrodistribucionp()
    .subscribe(async (data) => {
      this.cen = data;
      console.log(data);
    }
    );


  }

}
