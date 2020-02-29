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
import { Puntoentregat } from 'src/app/interfaces/puntoentregat';
import { Uds } from 'src/app/interfaces/uds';
import { Udst } from 'src/app/interfaces/udst';
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
 valor: boolean = true;
 valor1: boolean = true;
 valor2: boolean = false;
 id = {
  idv:null,
 };

fil;
  est;
  acudi = "";
  lotes = "";
  num = "";
  centroB: Salidabeneficiariot[] = [];

  region: Regional[] = [];
  centro: Centrozonal[] = [];
  municipio:  Municipio[] = [];
  punto:  Puntoentrega[] = [];
  ud: Uds[] = [];
  lprecios: Lprecios[] = [];
  mbienestarina: MaestroBienestarina[] = [];
  rep;
dic;
cod;
codo;
sup;
bar;
nomp;
tel;
check1 :boolean = false;
check2: boolean = false;
cen;





  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  Nombrereporte = 'FORMATO ENTREGA ALIMENTOS DE ALTO VALOR NUTRICIONAL A BENEFICIARIOS';
  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getsalidabeneficiarioTabla1()
    .subscribe( (data) => {
      this.centroB = Object(data);
      console.log(data);
      console.log('funciona tabla', this.centroB);
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


    
    this.Service.getPuntoTabla()
    .subscribe( (data) => {
      this.punid = Object(data);
      console.log(data);
      console.log('funciona');
    }
    );
    

    
    this.Service.getUdsTabla()
    .subscribe( (data) => {
      this.udid = Object(data);
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
      var doc = new jspdf("l", 'px', 'a2');

      var height = doc.internal.pageSize.getHeight(); 
      var width = doc.internal.pageSize.getWidth();
      doc.addImage(img,'PNG',0, 0,width-45, height);
      doc.save('reportesalidabeneficiario.pdf');

      
    });
    
    }

    onChange(){

      if(this.fil == "Primer nombre"){
  
        this.isHidden = true;
        this.isHidden1 = true;
        this.isHidden2 = false;
      }
  
  
      if(this.fil == "Número de documento"){
  
        this.isHidden = false;
        this.isHidden1 = true;
        this.isHidden2 = true;
      }
  
  
  
      if(this.fil == "Referencia bienestarina"){
  
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

         
          this.check1 = true;
          this.valor= false;
          this.valor2= true;
        
        }
        if(values.currentTarget.checked == false){

          this.check1 = false;
          this.valor= true;
          this.valor2= true;

        }

        if(values.currentTarget.checked == false && values.currentTarget.checked == false){


          this.valor2= false;

          this.rep = "";
        this.dic = "";
        this.cod = "";
        this.codo = "";
        this.sup = "";
        this.bar = "";
        this.nomp = "";
        this.tel = "";
        this.cen = "";

        }
        
        
        

      }

  
      checkValue(values:any){


if(values.currentTarget.checked == true){

 
  this.check2 = true;
  this.valor1= false;
  this.valor2= true;
}

if(values.currentTarget.checked == false){

  this.check2 = false;
  this.valor1= true;
  this.valor2= true;
}


if(values.currentTarget.checked == false && values.currentTarget.checked == false){


  this.valor2= false;

  this.rep = "";
        this.dic = "";
        this.cod = "";
        this.codo = "";
        this.sup = "";
        this.bar = "";
        this.nomp = "";
        this.tel = "";
        this.cen = "";
    

}



}





      punid:  Puntoentregat [] = [];
      udid: Udst [] = [];


      valores(values:any){

 
    
      

    for(let  p of this.punid ){

      if(values == p.NombrePE){
 
   this.rep = p.Responsable;
   this.dic = p.Direccion;
   this.cod = p.CodigoExternoPE;
   this.codo = p.CodigoExternoPE;
   this.sup = p.Responsable;
   this.bar = p.BarrioPE;
   this.nomp = p.NombrePE;
   this.tel = p.Telefono;
   this.cen = p.NombreCentroZonal;
  
  }
 
    }
      
 
       

  
 

      }

      
      valores2(values:any){

        
     
        for(let  u of this.udid ){

          if(values == u.NombreUDS){
           

       this.rep = u.ReponsableUDS;
       this.dic = u.Direccion;
       this.cod = u.CodigoInternoUDS;
       this.codo = u.CodigoExternoUDS;
       this.sup = u.ReponsableUDS;
       this.nomp = u.NombreUDS;
       this.tel = u.Telefono;
      this.cen = u.NombreCentroZonal;
      this.bar = u.Barrio;
    this.nomp = u.NombrePE;
    console.log('barrio' , u.Barrio);
          }
     
           }
     
           
    
      
     
    
          }

        
  
}
