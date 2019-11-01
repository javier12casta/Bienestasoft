import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Acudientes} from '../../interfaces/acudiente';

@Component({
  selector: 'app-acudientes',
  templateUrl: './acudientes.component.html',
  styleUrls: ['./acudientes.component.css']
})
export class AcudientesComponent implements OnInit {

  acu:Acudientes[] = [];


  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getAcudientes()
    .subscribe(async (data) => {
      this.acu = data;
      console.log(data);
    }
    );


  }

}
