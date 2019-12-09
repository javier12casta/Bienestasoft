import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Acudientes} from '../../interfaces/acudiente';
import { AcudientesA} from '../../interfaces/AcudienteA';

@Component({
  selector: 'app-acudientes',
  templateUrl: './acudientes.component.html',
  styleUrls: ['./acudientes.component.css']
})
export class AcudientesComponent implements OnInit {

  acu:Acudientes[] = [];
  acud:AcudientesA[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  
  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getAcudientes()
    .subscribe(async (data) => {
      this.acu = data;
      console.log(data);
    }
    );

    this.Service.getAcudientesA()
    .subscribe(async (data) => {
      this.acud = data;
      console.log(data);
    }
    );


  }

}
