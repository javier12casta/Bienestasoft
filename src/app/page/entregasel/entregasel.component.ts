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

    if(this.salida == 'Salida para centro de distribución'){

      this.router.navigate(['/salidacentro']);
    
    }

    if(this.salida == 'Salida para beneficiario ICBF'){

      this.router.navigate(['/salidabeneficiario']);
    
    }

    if(this.salida == 'Salida para consumo interno'){

      this.router.navigate(['/salidaconsumo']);
    
    }

  }

}
