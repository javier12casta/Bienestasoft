import { Component, OnInit } from '@angular/core';
import { Salidaconsumo} from '../../interfaces/salidaconsumo';
import { ServicioService } from '../../servicio.service';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import { Salidaconsumot } from 'src/app/interfaces/salidaconsumot';

@Component({
  selector: 'app-reportesalidaconsumoi',
  templateUrl: './reportesalidaconsumoi.component.html',
  styleUrls: ['./reportesalidaconsumoi.component.css']
})
export class ReportesalidaconsumoiComponent implements OnInit {

  centroC: Salidaconsumot[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

     this.Service.getsalidaconsumoTabla()
    .subscribe( (data) => {
      this.centroC = Object(data);
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
    pdf.save('reportesalidaconsumo.pdf'); // Generated PDF
    });
       
    
    }

}
