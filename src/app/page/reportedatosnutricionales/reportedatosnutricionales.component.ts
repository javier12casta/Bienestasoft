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
    pdf.save('reportedatosnutricionales.pdf'); // Generated PDF
    });
       
    
    }

}
