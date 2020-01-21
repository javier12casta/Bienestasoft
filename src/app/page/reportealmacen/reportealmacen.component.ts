import { Component, OnInit } from '@angular/core';
import { Almacen} from '../../interfaces/almacen';
import { Inventariocan} from '../../interfaces/inventariocan';
import { ServicioService } from '../../servicio.service';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reportealmacen',
  templateUrl: './reportealmacen.component.html',
  styleUrls: ['./reportealmacen.component.css']

})
export class ReportealmacenComponent implements OnInit {
  isHidden: boolean = true;
  isHidden1: boolean = true;
  isHidden2: boolean = true;

  alm: Almacen[] = [];
  inv: Inventariocan[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  Nombrereporte = 'Reporte almacén';
  fil;
  est;
  res;
  us;
  defaultValue = "Responsable";
  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getAlmacenr()
    .subscribe(async (data) => {
      this.alm = data;
      console.log(data);
    }
    );


    this.Service.getinventariocantidad()
    .subscribe(async (data) => {
      this.inv = data;
      console.log(data);
    }
    );

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
    
      doc.text("Reporte almacén" , 110 ,60 ,0 ,90 );
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
  
    doc.save("reportealmacen.pdf");
       
    
    }

    onChange(){

    if(this.fil == "Responsable"){

      this.isHidden = false;
      this.isHidden1 = true;
      this.isHidden2 = true;
    }

    if(this.fil == "Nombre almacén"){

      this.isHidden = true;
      this.isHidden1 = true;
      this.isHidden2 = false;
 
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

    cambiaLado(res) {
      this.us = res;
    }
   
}
