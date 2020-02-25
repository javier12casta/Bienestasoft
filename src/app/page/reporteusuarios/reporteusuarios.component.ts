import { Component, OnInit } from '@angular/core';
import { Usuariost } from '../../interfaces/usuariost';
import { ServicioService } from '../../servicio.service';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import { Tipodocumento } from '../../interfaces/tipodocumento';

@Component({
  selector: 'app-reporteusuarios',
  templateUrl: './reporteusuarios.component.html',
  styleUrls: ['./reporteusuarios.component.css']
})
export class ReporteusuariosComponent implements OnInit {

  isHidden: boolean = true;
  isHidden1: boolean = true;
  isHidden2: boolean = true;
  fil;
  est = "";
  tipdoc = "";
  feci = "";
  tip: Tipodocumento[] = [];
  usua: Usuariost[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  Nombrereporte = 'Reporte usuarios';

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getUsuariosr()
    .subscribe(async (data) => {
      this.usua = data;
      console.log(data);
    }
    );

    this.Service.gettipodocumento()
    .subscribe(res => {
      this.tip = res;
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
      doc.setFontSize(8);
      doc.setTextColor(40);
      doc.setFontStyle('normal');

     doc.addImage(img, 'PNG', 50, 20, 50, 50);
    
      doc.text("Reporte usuarios" , 110 ,60 ,0 ,90 );
      doc.text(fec , 2150 ,60 ,0 ,90 );
    };
  
    var options = {
      beforePageContent: header,
      margin: {
        top: 80
      },
      startY: doc.autoTableEndPosY() + 100
    };
  
    doc.autoTable(res.columns, res.data, options);
  
    doc.save("reporteusuarios.pdf");
   
       
    
    }


    onChange(){

      if(this.fil == "Nombre"){
  
        this.isHidden = true;
        this.isHidden1 = true;
        this.isHidden2 = false;
      }
  
  
      if(this.fil == "Tipo de documento"){
  
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
