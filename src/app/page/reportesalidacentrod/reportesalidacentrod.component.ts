import { Component, OnInit } from '@angular/core';
import { Salidacentro} from '../../interfaces/salidacentro';
import { ServicioService } from '../../servicio.service';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import { Salidacentrot } from 'src/app/interfaces/salidacentrot';

@Component({
  selector: 'app-reportesalidacentrod',
  templateUrl: './reportesalidacentrod.component.html',
  styleUrls: ['./reportesalidacentrod.component.css']
})
export class ReportesalidacentrodComponent implements OnInit {
  isHidden: boolean = true;
  isHidden1: boolean = true;
  isHidden2: boolean = true;


fil;
  est;
  centroD: Salidacentrot[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  Nombrereporte = 'Reporte centro distribución';
  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getsalidacentroTabla()
      .subscribe( (data) => {
        this.centroD = Object(data);
        console.log(data);
        console.log('funciona');
      }
      );
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
    
      doc.text("Reporte centro distribución" , 110 ,60 ,0 ,90 );
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
  
    doc.save("reportesalidacentrodistribucion.pdf");
       
    
    }

    onChange(){

      if(this.fil == "Fecha registro"){
  
        this.isHidden = true;
        this.isHidden1 = true;
        this.isHidden2 = false;
      }
  
  
      if(this.fil == "Presentación"){
  
        this.isHidden = false;
        this.isHidden1 = true;
        this.isHidden2 = true;
      }
  
  
  
      if(this.fil == "Lote"){
  
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
