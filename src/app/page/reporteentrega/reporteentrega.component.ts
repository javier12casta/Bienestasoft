import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Puntoentrega } from '../../interfaces/puntoentrega';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import {Puntoentregat } from '../../interfaces/puntoentregat';
 
import { Municipio } from '../../interfaces/municipio';

@Component({
  selector: 'app-reporteentrega',
  templateUrl: './reporteentrega.component.html',
  styleUrls: ['./reporteentrega.component.css']
})
export class ReporteentregaComponent implements OnInit {

  isHidden: boolean = true;
  isHidden1: boolean = true;
  isHidden2: boolean = true;


fil;
  est;
  municipios: Municipio[] = [];


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


  this.service.getMunicipio()
  .subscribe(res => {
    this.municipios = res;
  }, err => {
    console.log(err);
  });



  }

  Generareporte(){

    var doc = new jspdf("l", "pt", 'a2');
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

    onChange(){

      if(this.fil == "Nombre PE"){
  
        this.isHidden = true;
        this.isHidden1 = true;
        this.isHidden2 = false;
      }
  
  
      if(this.fil == "Código externo ICBF"){
  
        this.isHidden = false;
        this.isHidden1 = true;
        this.isHidden2 = true;
      }
  
  
  
      if(this.fil == "Estado"){
  
       this.isHidden = true;
       this.isHidden1 = false;
       this.isHidden2 = true;
  
      }
  
      }
  
      estad(){
  
        if(this.est == "Habilitado"){
  
          
        }
    
        if(this.est == "Deshabilitado"){
    
         
    
        }
  
      }
  
  
      opmunicipio(){
  
  
  
      }

}
