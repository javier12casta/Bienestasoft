import { Component, OnInit } from '@angular/core';
import { Beneficiarior } from '../../interfaces/beneficiarior';
import { ServicioService } from '../../servicio.service';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import { Regional } from '../../interfaces/regional';
import { UserOptions } from 'jspdf';
import { Beneficiariot } from '../../interfaces/beneficiariot';


@Component({
  selector: 'app-reportebeneficiario',
  templateUrl: './reportebeneficiario.component.html',
  styleUrls: ['./reportebeneficiario.component.css']
  

})
export class ReportebeneficiarioComponent implements OnInit {

  benefi: Beneficiarior[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  Nombrereporte = 'Reporte beneficiario';

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getBeneficiariosr()
    .subscribe(async (data) => {
      this.benefi = data;
      console.log(data);
      console.log('funciona');
    }
    );

  
  }

  Generareporte(){

    var doc = new jspdf("l", "pt", 'a1');
    var img = document.getElementById('imagen');
    var res = doc.autoTableHtmlToJson(document.getElementById("contentToConvert"));
    var fec = this.fecha;

    var header = function(data) {
      doc.setFontSize(9);
      doc.setTextColor(40);
      doc.setFontStyle('normal');

     doc.addImage(img, 'PNG', 50, 20, 50, 50);
    
      doc.text("Reporte beneficiario" , 110 ,60 ,0 ,90 );
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
    doc.save("reportebeneficiarios.pdf");
   
}
}