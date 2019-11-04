import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-reporteinventario',
  templateUrl: './reporteinventario.component.html',
  styleUrls: ['./reporteinventario.component.css']
})
export class ReporteinventarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Generareporte(){

  
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
    // Few necessary setting options
    var imgWidth = 380;
    var pageHeight = 200;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jspdf('p', 'mm', 'a0'); // A4 size page of PDF
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, 1280, 720)
    pdf.save('reportealmacen.pdf'); // Generated PDF
    });   
       
    
    }

}
