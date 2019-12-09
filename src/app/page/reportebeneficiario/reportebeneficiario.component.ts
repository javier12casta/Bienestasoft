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
pdf.save('reportebeneficuarios.pdf'); // Generated PDF
});
   

}
}