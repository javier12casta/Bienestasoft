import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Entrega } from '../../interfaces/entrega';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reporteentregab',
  templateUrl: './reporteentregab.component.html',
  styleUrls: ['./reporteentregab.component.css']
})
export class ReporteentregabComponent implements OnInit {
  ent: Entrega [] = [];
  constructor(private service: ServicioService) {

    this.service.ObtenerEntrega()
    .subscribe(res => {
      this.ent = res;
    }, err => {
      console.log(err);
    });


   }

  ngOnInit() {
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
    pdf.save('reporteentrega.pdf'); // Generated PDF
    });
       
    
    }


}
