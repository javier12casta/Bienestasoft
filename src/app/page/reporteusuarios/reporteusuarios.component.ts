import { Component, OnInit } from '@angular/core';
import { Usuariost } from '../../interfaces/usuariost';
import { ServicioService } from '../../servicio.service';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-reporteusuarios',
  templateUrl: './reporteusuarios.component.html',
  styleUrls: ['./reporteusuarios.component.css']
})
export class ReporteusuariosComponent implements OnInit {

  usua: Usuariost[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getUsuariosc()
    .subscribe(async (data) => {
      this.usua = data;
      console.log(data);
    }
    );

    this.Service.getUsuariosp()
    .subscribe(async (data) => {
      this.usua = data;
      console.log(data);
    }
    );

    this.Service.getUsuariosu()
    .subscribe(async (data) => {
      this.usua = data;
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
    pdf.save('reporteusuarios.pdf'); // Generated PDF
    });
       
    
    }


}
