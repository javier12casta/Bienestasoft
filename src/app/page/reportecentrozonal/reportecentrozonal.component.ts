import { Component, OnInit } from '@angular/core';
import { Centrozonal } from '../../interfaces/centrozonal';
import { ServicioService } from '../../servicio.service';
import { Regional } from '../../interfaces/regional';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import { Centrozonalt } from 'src/app/interfaces/centrozonalt';

@Component({
  selector: 'app-reportecentrozonal',
  templateUrl: './reportecentrozonal.component.html',
  styleUrls: ['./reportecentrozonal.component.css']
})
export class ReportecentrozonalComponent implements OnInit {

  centros: Centrozonalt[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  Nombrereporte = 'Reporte centro zonal';

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getCentroTabla()
      .subscribe(async (data) => {
        this.centros = data;
        console.log(data);
        console.log('funciona');
      }
      );

  }
  Generareporte(){
    
    window.scrollTo(0,0); 

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
    pdf.save('reportecentrozonal.pdf'); // Generated PDF
    });
}
}