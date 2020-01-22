import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Consecutivomaestro } from '../../interfaces/consecutivomaestro';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reporteconsecutivomaestro',
  templateUrl: './reporteconsecutivomaestro.component.html',
  styleUrls: ['./reporteconsecutivomaestro.component.css']
})
export class ReporteconsecutivomaestroComponent implements OnInit {

  unidadt: Consecutivomaestro []= [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  Nombrereporte = 'Reporte consecutivo maestro';
  constructor(private Service: ServicioService,) { }


  ngOnInit() {

    this.Service.getconsecutivomaestro()
    .subscribe( async (res)=> {
      this.unidadt = res
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
    
      doc.text("Reporte consecutivo maestro" , 110 ,60 ,0 ,90 );
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
  
    doc.save("reporteconsecutivomaestro.pdf");
       
    
    }

}
