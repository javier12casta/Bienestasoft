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

    var doc = new jspdf('p', 'pt');
    var img = document.getElementById('imagen');
    var res = doc.autoTableHtmlToJson(document.getElementById("contentToConvert"));
    var fec = this.fecha;

    var header = function(data) {
      doc.setFontSize(18);
      doc.setTextColor(40);
      doc.setFontStyle('normal');

     doc.addImage(img, 'PNG', 50, 20, 50, 50);
    
      doc.text("Reporte UDS" , 110 ,60 ,0 ,90 );
      doc.text(fec , 450 ,60 ,0 ,90 );
    };
  
    var options = {
      beforePageContent: header,
      margin: {
        top: 80
      },
      startY: doc.autoTableEndPosY() + 100
    };
  
    doc.autoTable(res.columns, res.data, options);
  
    doc.save("reporteuds.pdf");
       
    
    }


}
