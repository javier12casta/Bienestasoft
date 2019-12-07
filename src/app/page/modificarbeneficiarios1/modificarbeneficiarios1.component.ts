import { Component, OnInit } from '@angular/core';
import { Beneficiario } from '../../interfaces/beneficiario';
import { ServicioService } from '../../servicio.service';
import { Beneficiariot } from '../../interfaces/beneficiariot';

import { Regional } from '../../interfaces/regional';

@Component({
  selector: 'app-modificarbeneficiarios1',
  templateUrl: './modificarbeneficiarios1.component.html',
  styleUrls: ['./modificarbeneficiarios1.component.css'],




})
export class Modificarbeneficiarios1Component implements OnInit {
 
  bene: Beneficiariot[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

  

    this.Service.getBeneficiariosc()
      .subscribe(async (data) => {
        this.bene = data;
        console.log(data);
      }
      );

  }

}
