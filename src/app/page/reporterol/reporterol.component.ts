import { Component, OnInit } from '@angular/core';
import { Rol} from '../../interfaces/rol';
import { ServicioService } from '../../servicio.service';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-reporterol',
  templateUrl: './reporterol.component.html',
  styleUrls: ['./reporterol.component.css']
})
export class ReporterolComponent implements OnInit {

  trol: Rol[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  Nombrereporte = 'Reporte rol';

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.ObtenerRoles()
    .subscribe(async (data) => {
      this.trol = data;
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
    pdf.save('reporterol.pdf'); // Generated PDF
    });
       
    
    }


}
