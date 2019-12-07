import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Puntoentrega } from '../../interfaces/puntoentrega';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import {Puntoentregat } from '../../interfaces/puntoentregat';

@Component({
  selector: 'app-reporteentrega',
  templateUrl: './reporteentrega.component.html',
  styleUrls: ['./reporteentrega.component.css']
})
export class ReporteentregaComponent implements OnInit {
  punto: Puntoentrega [] = [];
  puntot: Puntoentregat [] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  Nombrereporte = 'Reporte punto de entrega';
  constructor(private service: ServicioService) { }

  ngOnInit() {

    this.service.getPunto()
    .subscribe(res => {
      this.punto = res;
    }, err => {
      console.log(err);
    });


    this.service.getPuntoTabla()
  .subscribe(res => {
    this.puntot = res;
  }, err => {
    console.log(err);
  });


  }

  Generareporte(){

    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
    // Few necessary setting options
    var imgWidth = 208;
    var pageHeight = 295;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('reportepuntoentrega.pdf'); // Generated PDF
    });
       
    
    }

}
