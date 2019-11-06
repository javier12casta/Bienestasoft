import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Entrega } from '../../interfaces/entrega';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporteentregab',
  templateUrl: './reporteentregab.component.html',
  styleUrls: ['./reporteentregab.component.css']
})
export class ReporteentregabComponent implements OnInit {
  ent: Entrega [] = [];
  salida = '';
  constructor(private activeRoute: ActivatedRoute,
    private service: ServicioService, private router:Router) {

    this.service.ObtenerEntrega()
    .subscribe(res => {
      this.ent = res;
    }, err => {
      console.log(err);
    });

   }

  ngOnInit() {
  }

  validar(){

    if(this.salida == 'Reporte para centro de distribución'){

      this.router.navigate(['/reportentregacentrodistribucion']);
    
    }

    if(this.salida == 'Reporte para beneficiario ICBF'){

     
      this.router.navigate(['/reporteentregabeneficiario']);
    
    }

    if(this.salida == 'Reporte para consumo interno'){

      this.router.navigate(['/reporteentregaconsumo']);
    }

  }


 


}
