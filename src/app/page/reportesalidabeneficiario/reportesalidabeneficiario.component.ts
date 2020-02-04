import { Component, OnInit } from '@angular/core';
import { Salidabeneficiario} from '../../interfaces/salidabeneficiario';
import { ServicioService } from '../../servicio.service';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import { Salidabeneficiariot } from 'src/app/interfaces/salidabeneficiariot';
import { Regional } from 'src/app/interfaces/regional';

import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { Municipio } from 'src/app/interfaces/municipio';
import { Puntoentrega } from 'src/app/interfaces/puntoentrega';
import { Uds } from 'src/app/interfaces/uds';
import { Lprecios } from 'src/app/interfaces/listaprecios';
import { MaestroBienestarina } from 'src/app/interfaces/maestrosBienestarina';






@Component({
  selector: 'app-reportesalidabeneficiario',
  templateUrl: './reportesalidabeneficiario.component.html',
  styleUrls: ['./reportesalidabeneficiario.component.css']
})
export class ReportesalidabeneficiarioComponent implements OnInit {

  isHidden: boolean = true;
  isHidden1: boolean = true;
  isHidden2: boolean = true;
 valor: boolean = false;
 valor1: boolean = false;

fil;
  est;
  centroB: Salidabeneficiariot[] = [];

  region: Regional[] = [];
  centro: Centrozonal[] = [];
  municipio:  Municipio[] = [];
  punto:  Puntoentrega[] = [];
  ud: Uds[] = [];
  lprecios: Lprecios[] = [];
  mbienestarina: MaestroBienestarina[] = [];
  rep;









  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  Nombrereporte = 'FORMATO ENTREGA ALIMENTOS DE ALTO VALOR NUTRICIONAL A BENEFICIARIOS';
  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getsalidabeneficiarioTabla1()
    .subscribe( (data) => {
      this.centroB = Object(data);
      console.log(data);
      console.log('funciona');
    }
    );

    this.Service.getRegional()
    .subscribe( (data) => {
      this.region = Object(data);
      console.log(data);
      console.log('funciona');
    }
    );

    this.Service.getCentro()
    .subscribe( (data) => {
      this.centro = Object(data);
      console.log(data);
      console.log('funciona');
    }
    );

    this.Service.getMunicipio()
    .subscribe( (data) => {
      this.municipio = Object(data);
      console.log(data);
      console.log('funciona');
    }
    );

   
   
    this.Service.getUds()
    .subscribe( (data) => {
      this.ud = Object(data);
      console.log(data);
      console.log('funciona');
    }
    );

    this.Service.getListaprecios()
    .subscribe( (data) => {
      this.lprecios = Object(data);
      console.log(data);
      console.log('funciona');
    }
    );

    this.Service.getMaestrosBienestrina()
    .subscribe( (data) => {
      this.mbienestarina = Object(data);
      console.log(data);
      console.log('funciona');
    }
    );

    this.Service.getPunto()
    .subscribe( (data) => {
      this.punto = Object(data);
      console.log(data);
      console.log('funciona');
    }
    );
    
    for (let entry of this.punto) {
      
      this.rep =  entry.Responsable;
     
    }


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
      var doc = new jspdf("l", "pt", 'a2');

      var height = doc.internal.pageSize.getHeight(); 
      doc.addImage(img,'PNG',10, 0,1600, height);
      doc.save('reportesalidabeneficiario.pdf');

      
    });
    
    }

    onChange(){

      if(this.fil == "Acudiente"){
  
        this.isHidden = true;
        this.isHidden1 = true;
        this.isHidden2 = false;
      }
  
  
      if(this.fil == "Presentación"){
  
        this.isHidden = false;
        this.isHidden1 = true;
        this.isHidden2 = true;
      }
  
  
  
      if(this.fil == "Lote"){
  
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
  
      valores1(values:any){

        if(values.currentTarget.checked == true){

          this.valor= true;
          this.valor1= false;
         
        
        
        }
        if(values.currentTarget.checked == false){

          this.valor= false;
          this.valor1= true;


        }

        if(values.currentTarget.checked == true && values.currentTarget.checked == true){

          this.valor= true;
          this.valor1= true;

        }
        
        

      }

  
      checkValue(values:any){


if(values.currentTarget.checked == true){

  this.valor= false;
  this.valor1= true;
 


}

if(values.currentTarget.checked == false){

  this.valor= true;
  this.valor1= false;
  
}


if(values.currentTarget.checked == true && values.currentTarget.checked == true){

  this.valor= true;
  this.valor1= true;

}




    

      }
      

}
