import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import { Puntoentrega } from '../../interfaces/puntoentrega';
import {Regional } from '../../interfaces/regional';
import {Centrozonal } from '../../interfaces/centrozonal';
import {Municipio } from '../../interfaces/municipio';
import {Lprecios } from '../../interfaces/listaprecios';


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

   



  }

  Generareporte(){

  
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
    // Few necessary setting options
    var imgWidth = 1366;
    var pageHeight = 720;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jspdf('p', 'mm', 'a0'); // A4 size page of PDF
    var position = 20;
    pdf.addImage(contentDataURL, 'PNG', 10, position, 750, 700)
    pdf.save('reporteinventario.pdf'); // Generated PDF
    });   
       
    
    }

}
