import { Component, OnInit } from '@angular/core';
import { Salidabeneficiario} from '../../interfaces/salidabeneficiario';
import { ServicioService } from '../../servicio.service';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import { Salidabeneficiariot } from 'src/app/interfaces/salidabeneficiariot';

@Component({
  selector: 'app-reportesalidabeneficiario',
  templateUrl: './reportesalidabeneficiario.component.html',
  styleUrls: ['./reportesalidabeneficiario.component.css']
})
export class ReportesalidabeneficiarioComponent implements OnInit {

  centroB: Salidabeneficiariot[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  Nombrereporte = 'Reporte entrega beneficiario';
  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getsalidabeneficiarioTabla()
    .subscribe( (data) => {
      this.centroB = Object(data);
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
    pdf.save('reportesalidabeneficiario.pdf'); // Generated PDF
    });
       
    
    }

}
