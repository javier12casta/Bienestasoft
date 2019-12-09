import { Component, OnInit } from '@angular/core';
import { Almacen} from '../../interfaces/almacen';
import { ServicioService } from '../../servicio.service';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reportealmacen',
  templateUrl: './reportealmacen.component.html',
  styleUrls: ['./reportealmacen.component.css']

})
export class ReportealmacenComponent implements OnInit {

  alm: Almacen[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  Nombrereporte = 'Reporte almacen';

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getAlmacenr()
    .subscribe(async (data) => {
      this.alm = data;
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
    pdf.save('reportealmacen.pdf'); // Generated PDF
    });
       
    
    }


}
