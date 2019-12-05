import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Consecutivomaestro } from '../../interfaces/consecutivomaestro';



@Component({
  selector: 'app-consecutivomaestrov',
  templateUrl: './consecutivomaestrov.component.html',
  styleUrls: ['./consecutivomaestrov.component.css']
})
export class ConsecutivomaestrovComponent implements OnInit {


  unidadt: Consecutivomaestro []= [];

  
  constructor(private Service: ServicioService,) { }

  ngOnInit() {

    this.Service.getconsecutivomaestro()
    .subscribe( async (res)=> {
      this.unidadt = res
    }, err => {
      console.log(err);
    });


  }

}
