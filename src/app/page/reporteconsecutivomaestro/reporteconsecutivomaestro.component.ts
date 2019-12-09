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
    pdf.save('reporteconsecutivomaestro.pdf'); // Generated PDF
    });
       
    
    }

}
