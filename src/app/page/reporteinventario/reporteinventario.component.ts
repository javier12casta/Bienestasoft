import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import { Puntoentrega } from '../../interfaces/puntoentrega';
import {Regional } from '../../interfaces/regional';
import {Centrozonal } from '../../interfaces/centrozonal';
import {Municipio } from '../../interfaces/municipio';
import {Lprecios } from '../../interfaces/listaprecios';
import {Recepcion } from '../../interfaces/recepcion';
import {Salidabeneficiariot } from '../../interfaces/Salidabeneficiariot';
import {Salidacentrot } from '../../interfaces/salidacentrot';
import {Salidaconsumot } from '../../interfaces/salidaconsumot';

@Component({
  selector: 'app-reporteinventario',
  templateUrl: './reporteinventario.component.html',
  styleUrls: ['./reporteinventario.component.css']
})
export class ReporteinventarioComponent implements OnInit {
  punto: Puntoentrega [] = [];
  region: Regional [] = [];
  centro: Centrozonal [] = [];
  mun: Municipio [] = [];
  pre: Lprecios [] = [];
  re: Recepcion [] = [];
  sab  : Salidabeneficiariot [] = [];
  sac  : Salidacentrot [] = [];
  sact  : Salidaconsumot [] = [];

  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  Nombrereporte = 'Reporte inventario';
  entrada = "";
  visible = true;
  visible1 = true;
  visible2 = true;
  visible3 = true;

  constructor(private service: ServicioService) { }

  ngOnInit() {

    this.service.getPunto()
    .subscribe(res => {
      this.punto = res;
    }, err => {
      console.log(err);
    });

    this.service.getRegional()
    .subscribe(res => {
      this.region = res;
    }, err => {
      console.log(err);
    });

    this.service.getCentro()
    .subscribe(res => {
      this.centro = res;
    }, err => {
      console.log(err);
    });

    this.service.getMunicipio()
    .subscribe(res => {
      this.mun = res;
    }, err => {
      console.log(err);
    });

    this.service.getListaprecios()
    .subscribe(res => {
      this.pre = res;
    }, err => {
      console.log(err);
    });

   
    this.service.getrecepciontabla()
    .subscribe(res => {
      this.re = res;
    }, err => {
      console.log(err);
    });


    this.service.getsalidabeneficiarioTabla()
    .subscribe(res => {
      this.sab = res;
    }, err => {
      console.log(err);
    });

    this.service.getsalidacentroTabla()
    .subscribe(res => {
      this.sac = res;
    }, err => {
      console.log(err);
    });


    this.service.getsalidaconsumoTabla()
    .subscribe(res => {
      this.sact = res;
    }, err => {
      console.log(err);
    });


  }

  Generareporte(){

    window.scrollTo(0,0); 

    html2canvas(document.getElementById('contentToConvert'), {
     
      // Opciones
      allowTaint: true,
      useCORS: false,
      // Calidad del PDF
      scale: 1,
      
    }).then(function(canvas) {

      var img = canvas.toDataURL("image/png");
      var doc = new jspdf('l', 'pt');

      var height = doc.internal.pageSize.getHeight(); 
      doc.addImage(img,'PNG',10, 0,830, height);
      doc.save('reporteinventario.pdf');

      
    });

    }

    onChange(){

    if(this.entrada == "0"){

    this.visible = false;
    this.visible1 = true;
    this.visible2 = true;
    this.visible3 = true;
   
   

    }

    if(this.entrada == "1"){

      this.visible = true;
      this.visible1 = false;
      this.visible2 = true;
      this.visible3 = true;

      }

      if(this.entrada == "2"){

        this.visible = true;
        this.visible1 = true;
        this.visible2 = false;
        this.visible3 = true;
    
        }


        if(this.entrada == "3"){

          this.visible = true;
          this.visible1 = true;
          this.visible2 = true;
          this.visible3 = false;
      
          }
    

    }

}
