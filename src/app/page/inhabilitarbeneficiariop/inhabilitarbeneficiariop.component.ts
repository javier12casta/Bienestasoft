import { Component, OnInit } from '@angular/core';
import { Beneficiario } from '../../interfaces/beneficiario';
import { ServicioService } from '../../servicio.service';
import { Beneficiariot } from '../../interfaces/beneficiariot';

@Component({
  selector: 'app-inhabilitarbeneficiariop',
  templateUrl: './inhabilitarbeneficiariop.component.html',
  styleUrls: ['./inhabilitarbeneficiariop.component.css']
})
export class InhabilitarbeneficiariopComponent implements OnInit {

  benefi: Beneficiario[] = [];
  bene: Beneficiariot[] = [];
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
