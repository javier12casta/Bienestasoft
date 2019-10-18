import { Component, OnInit } from '@angular/core';
import { Centrodistribucion } from '../../interfaces/centrodistribucion';
import { ServicioService } from '../../servicio.service';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reportecentrodistribucion',
  templateUrl: './reportecentrodistribucion.component.html',
  styleUrls: ['./reportecentrodistribucion.component.css']
})
export class ReportecentrodistribucionComponent implements OnInit {

  cen: Centrodistribucion[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getcentrodistribucion()
      .subscribe(async (data) => {
        this.cen = data;
        console.log(data);
      }
      );

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
    pdf.save('reportecentrodistribucion.pdf'); // Generated PDF
    });
       
    
    }


}
