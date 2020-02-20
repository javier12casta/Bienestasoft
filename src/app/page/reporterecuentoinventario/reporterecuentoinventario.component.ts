import { Component, OnInit } from '@angular/core';
import { Recuentoinventario } from 'src/app/interfaces/recuentoinventario';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Recuentoinventariot } from 'src/app/interfaces/recuentoinventariot';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reporterecuentoinventario',
  templateUrl: './reporterecuentoinventario.component.html',
  styleUrls: ['./reporterecuentoinventario.component.css']
})
export class ReporterecuentoinventarioComponent implements OnInit {

  isHidden: boolean = true;
  isHidden1: boolean = true;
  isHidden2: boolean = true;

  fechas = "";
  presentacion = "";
  almacen = "";
  fil;
  est;
  recuento:Recuentoinventariot[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  Nombrereporte = 'Reporte recuento inventario';
  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getrecuentotabla()
    .subscribe(async (data) => {
      this.recuento = data;
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
    
      doc.text("Reporte recuento inventario" , 110 ,60 ,0 ,90 );
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
  
    doc.save("reporterecuentoinventario.pdf");
       
    
    }

    onChange(){

      if(this.fil == "Fecha de vencimiento"){
  
        this.isHidden = true;
        this.isHidden1 = true;
        this.isHidden2 = false;
      }
  
  
      if(this.fil == "Presentación"){
  
        this.isHidden = false;
        this.isHidden1 = true;
        this.isHidden2 = true;
      }
  
  
  
      if(this.fil == "Almacén"){
  
       this.isHidden = true;
       this.isHidden1 = false;
       this.isHidden2 = true;
  
      }
  
      }
  
      
  

}
