import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Beneficiario } from '../../interfaces/beneficiario';
import { Beneficiariot } from '../../interfaces/beneficiariot';

@Component({
  selector: 'app-beneficiariosmu',
  templateUrl: './beneficiariosmu.component.html',
  styleUrls: ['./beneficiariosmu.component.css']
})
export class BeneficiariosmuComponent implements OnInit {

  
  ben: Beneficiario[] = [];
  bene: Beneficiariot[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

  
      this.Service.getBeneficiariosu()
      .subscribe(async (data) => {
        this.bene = data;
        console.log(data);
      }
      );
      

  }


}
