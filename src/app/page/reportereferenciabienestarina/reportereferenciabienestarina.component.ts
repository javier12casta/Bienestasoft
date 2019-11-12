import { Component, OnInit } from '@angular/core';
import { TipoBienestarina } from '../../interfaces/tipobienestarina';
import { ServicioService } from '../../servicio.service';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reportereferenciabienestarina',
  templateUrl: './reportereferenciabienestarina.component.html',
  styleUrls: ['./reportereferenciabienestarina.component.css']
})
export class ReportereferenciabienestarinaComponent implements OnInit {

  tbienestarina: TipoBienestarina[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getTipobienestarina()
    .subscribe(async (data) => {
      this.tbienestarina = data;
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
    pdf.save('reportereferenciabienestarina.pdf'); // Generated PDF
    });
       
    
    }


}