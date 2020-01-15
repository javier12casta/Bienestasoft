import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Datosvarios } from '../../interfaces/datosvarios';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reportedatosnutricionales',
  templateUrl: './reportedatosnutricionales.component.html',
  styleUrls: ['./reportedatosnutricionales.component.css']
})
export class ReportedatosnutricionalesComponent implements OnInit {

  datosv: Datosvarios[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  Nombrereporte = 'Reporte datos nutricionales';

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getdatosvarios()
      .subscribe(async (data) => {
        this.datosv = data;
        console.log(data);
        console.log('funciona');
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
    
      doc.text("Reporte datos nutricionales" , 110 ,60 ,0 ,90 );
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
  
    doc.save("reportedatosnutricionales.pdf");
    
    }

}
