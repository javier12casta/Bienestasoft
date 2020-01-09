import { Component, OnInit } from '@angular/core';
import { Centrozonal } from '../../interfaces/centrozonal';
import { ServicioService } from '../../servicio.service';
import { Regional } from '../../interfaces/regional';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import { Centrozonalt } from 'src/app/interfaces/centrozonalt';

@Component({
  selector: 'app-reportecentrozonal',
  templateUrl: './reportecentrozonal.component.html',
  styleUrls: ['./reportecentrozonal.component.css']
})
export class ReportecentrozonalComponent implements OnInit {

  centros: Centrozonalt[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  Nombrereporte = 'Reporte centro zonal';

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getCentroTabla()
      .subscribe(async (data) => {
        this.centros = data;
        console.log(data);
        console.log('funciona');
      }
      );

  }
  Generareporte(){
    
    window.scrollTo(0,0); 

    html2canvas(document.getElementById('contentToConvert'), {
      // Opciones
      allowTaint: true,
      useCORS: false,
      // Calidad del PDF
      scale: 1,
     
    }).then(function(canvas) {


      var img = canvas.toDataURL("image/png");
      var doc = new jspdf();
      var width = doc.internal.pageSize.getWidth();
      var height = doc.internal.pageSize.getHeight(); 
      
      doc.addImage(img,'PNG',0, 0, width, height );
  
       doc.save('reportecentrozonal.pdf');



      

      
      
    });
}
}