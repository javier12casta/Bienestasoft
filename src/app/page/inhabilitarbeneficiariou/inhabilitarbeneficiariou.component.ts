import { Component, OnInit } from '@angular/core';
import { Beneficiario } from '../../interfaces/beneficiario';
import { ServicioService } from '../../servicio.service';
import { Beneficiariot } from '../../interfaces/beneficiariot';

@Component({
  selector: 'app-inhabilitarbeneficiariou',
  templateUrl: './inhabilitarbeneficiariou.component.html',
  styleUrls: ['./inhabilitarbeneficiariou.component.css']
})
export class InhabilitarbeneficiariouComponent implements OnInit {

  
  benefi: Beneficiario[] = [];
  bene: Beneficiariot[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
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
