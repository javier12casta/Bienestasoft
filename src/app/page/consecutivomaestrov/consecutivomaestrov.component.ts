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



    this.Service.Obtenerconsecutivosm1()
    .subscribe( async (res)=> {
      this.unidadt = res
    }, err => {
      console.log(err);
    });

    this.Service.Obtenerconsecutivosm2()
    .subscribe( async (res)=> {
      this.unidadt = res
    }, err => {
      console.log(err);
    });

    this.Service.Obtenerconsecutivosm3()
    .subscribe( async (res)=> {
      this.unidadt = res
    }, err => {
      console.log(err);
    });

    this.Service.Obtenerconsecutivosm4()
    .subscribe( async (res)=> {
      this.unidadt = res
    }, err => {
      console.log(err);
    });

    this.Service.Obtenerconsecutivosm5()
    .subscribe( async (res)=> {
      this.unidadt = res
    }, err => {
      console.log(err);
    });

    this.Service.Obtenerconsecutivosm6()
    .subscribe( async (res)=> {
      this.unidadt = res
    }, err => {
      console.log(err);
    });

    this.Service.Obtenerconsecutivosm7()
    .subscribe( async (res)=> {
      this.unidadt = res
    }, err => {
      console.log(err);
    });

    this.Service.Obtenerconsecutivosm8()
    .subscribe( async (res)=> {
      this.unidadt = res
    }, err => {
      console.log(err);
    });

    this.Service.Obtenerconsecutivosm9()
    .subscribe( async (res)=> {
      this.unidadt = res
    }, err => {
      console.log(err);
    });

    this.Service.Obtenerconsecutivosm10()
    .subscribe( async (res)=> {
      this.unidadt = res
    }, err => {
      console.log(err);
    });

    this.Service.Obtenerconsecutivosm11()
    .subscribe( async (res)=> {
      this.unidadt = res
    }, err => {
      console.log(err);
    });

    this.Service.Obtenerconsecutivosm12()
    .subscribe( async (res)=> {
      this.unidadt = res
    }, err => {
      console.log(err);
    });

    this.Service.Obtenerconsecutivosm13()
    .subscribe( async (res)=> {
      this.unidadt = res
    }, err => {
      console.log(err);
    });

    this.Service.Obtenerconsecutivosm14()
    .subscribe( async (res)=> {
      this.unidadt = res
    }, err => {
      console.log(err);
    });

    this.Service.Obtenerconsecutivosm15()
    .subscribe( async (res)=> {
      this.unidadt = res
    }, err => {
      console.log(err);
    });

    this.Service.Obtenerconsecutivosm16()
    .subscribe( async (res)=> {
      this.unidadt = res
    }, err => {
      console.log(err);
    });

    this.Service.Obtenerconsecutivosm17()
    .subscribe( async (res)=> {
      this.unidadt = res
    }, err => {
      console.log(err);
    });



    this.Service.getconsecutivomaestro()
    .subscribe( async (res)=> {
      this.unidadt = res
    }, err => {
      console.log(err);
    });


  }

}
