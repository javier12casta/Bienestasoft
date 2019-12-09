import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Beneficiario } from '../../interfaces/beneficiario';
import { Beneficiariot } from '../../interfaces/beneficiariot';

@Component({
  selector: 'app-beneficiariosmp',
  templateUrl: './beneficiariosmp.component.html',
  styleUrls: ['./beneficiariosmp.component.css']
})
export class BeneficiariosmpComponent implements OnInit {

  ben: Beneficiario[] = [];
  bene: Beneficiariot[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();

  constructor(private Service: ServicioService) { }

  ngOnInit() {

  
      this.Service.getBeneficiariosp()
      .subscribe(async (data) => {
        this.bene = data;
        console.log(data);
      }
      );
      

  }


}
