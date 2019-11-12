import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Listadocursos } from '../../interfaces/listadocursos';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reportelistadocursos',
  templateUrl: './reportelistadocursos.component.html',
  styleUrls: ['./reportelistadocursos.component.css']
})
export class ReportelistadocursosComponent implements OnInit {

  listadoc: Listadocursos[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {
    
    this.Service.getlistadocursos()
      .subscribe(async (data) => {
        this.listadoc = data;
        console.log(data);
        console.log('funciona');
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
    pdf.save('reportelistadocursos.pdf'); // Generated PDF
    });
       
    
    }


}