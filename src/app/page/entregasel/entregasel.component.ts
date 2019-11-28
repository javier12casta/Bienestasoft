import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entregasel',
  templateUrl: './entregasel.component.html',
  styleUrls: ['./entregasel.component.css']
})
export class EntregaselComponent implements OnInit {

  salida = '';

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService, private router:Router) { }

  ngOnInit() {



  }

  validar(){

    if(this.salida == 'Salida Para Centro De Distribución'){

      this.router.navigate(['/salidacentro']);
    
    }

    if(this.salida == 'Salida Para Beneficiario ICBF'){

      this.router.navigate(['/salidabeneficiario']);
    
    }

    if(this.salida == 'Salida Para Consumo Interno'){

      this.router.navigate(['/salidaconsumo']);
    
    }

  }

}
