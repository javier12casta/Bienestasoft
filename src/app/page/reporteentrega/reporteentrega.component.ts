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

    var doc = new jspdf('p', 'pt');
    var img = document.getElementById('imagen');
    var res = doc.autoTableHtmlToJson(document.getElementById("contentToConvert"));
    var fec = this.fecha;

    var header = function(data) {
      doc.setFontSize(18);
      doc.setTextColor(40);
      doc.setFontStyle('normal');

     doc.addImage(img, 'PNG', 50, 20, 50, 50);
    
      doc.text("Reporte punto de entrega" , 110 ,60 ,0 ,90 );
      doc.text(fec , 450 ,60 ,0 ,90 );
    };
  
    var options = {
      beforePageContent: header,
      margin: {
        top: 80
      },
      startY: doc.autoTableEndPosY() + 100
    };
  
    doc.autoTable(res.columns, res.data, options);
  
    doc.save("reportepuntoentrega.pdf");
    
    }

}
