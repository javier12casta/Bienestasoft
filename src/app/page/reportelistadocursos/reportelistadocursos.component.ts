import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Listadocursos } from '../../interfaces/listadocursos';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import { Listadocursost } from 'src/app/interfaces/listadocursost';

@Component({
  selector: 'app-reportelistadocursos',
  templateUrl: './reportelistadocursos.component.html',
  styleUrls: ['./reportelistadocursos.component.css']
})
export class ReportelistadocursosComponent implements OnInit {

  isHidden: boolean = true;
  isHidden1: boolean = true;
  isHidden2: boolean = true;
  fil;
  est;
  listadoc: Listadocursos[] = [];
  listad: Listadocursost[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  Nombrereporte = 'Reporte listado de cursos';

  constructor(private Service: ServicioService) { }

  ngOnInit() {
    
    this.Service.getlistadocursos()
      .subscribe(async (data) => {
        this.listadoc = data;
        console.log(data);
        console.log('funciona');
      }
      );

      this.Service.getlistadocursostabla()
    .subscribe(async (data) => {
      this.listad = data; 
      console.log(data);
      console.log('funciona');
    }
    );

  }

  Generareporte(){

    var doc = new jspdf("l", "pt", 'a2');
    var img = document.getElementById('imagen');
    var res = doc.autoTableHtmlToJson(document.getElementById("contentToConvert"));
    var fec = this.fecha;

    var header = function(data) {
      doc.setFontSize(18);
      doc.setTextColor(40);
      doc.setFontStyle('normal');

     doc.addImage(img, 'PNG', 50, 20, 50, 50);
    
      doc.text("Reporte listado de cursos" , 110 ,60 ,0 ,90 );
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
  
    doc.save("reportelistadocursos.pdf");
  }
      
  

  onChange(){

    if(this.fil == "Nombre Agente"){

      this.isHidden = true;
      this.isHidden1 = true;
      this.isHidden2 = false;
    }


    if(this.fil == "Fecha"){

      this.isHidden = false;
      this.isHidden1 = true;
      this.isHidden2 = true;
    }



    if(this.fil == "Estado"){

     this.isHidden = true;
     this.isHidden1 = false;
     this.isHidden2 = true;

    }

    }

    estad(){

      if(this.est == "Habilitado"){

        
      }
  
      if(this.est == "Deshabilitado"){
  
       
  
      }

    }


    
    }

