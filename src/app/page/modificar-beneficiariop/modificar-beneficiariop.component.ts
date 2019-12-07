import { Component, OnInit } from '@angular/core';
import { Beneficiario } from '../../interfaces/beneficiario';
import { ServicioService } from '../../servicio.service';
import { Beneficiariot } from '../../interfaces/beneficiariot';

@Component({
  selector: 'app-modificar-beneficiariop',
  templateUrl: './modificar-beneficiariop.component.html',
  styleUrls: ['./modificar-beneficiariop.component.css']
})
export class ModificarBeneficiariopComponent implements OnInit {

  
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
