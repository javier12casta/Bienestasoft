import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Uds } from '../../interfaces/uds';
import { Udst} from '../../interfaces/udst';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reporteuds',
  templateUrl: './reporteuds.component.html',
  styleUrls: ['./reporteuds.component.css']
})
export class ReporteudsComponent implements OnInit {

  unidad: Uds []= [];
  unidadt: Udst []= [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  Nombrereporte = 'Reporte UDS';
  
  constructor(private Service: ServicioService,) { }

  async ngOnInit() {

    await this.Service.getUds()
    .subscribe( async (res)=> {
      this.unidad = res
    }, err => {
      console.log(err);
    });

    this.Service.getUdsTabla()
    .subscribe( async (res)=> {
      this.unidadt = res
    }, err => {
      console.log(err);
    });

    this.Service.getUdsTabla()
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
    pdf.save('reporteuds.pdf'); // Generated PDF
    });
       
    
    }


}
