import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import {Regional } from '../../interfaces/regional';
import {Centrozonal } from '../../interfaces/centrozonal';
import {Municipio } from '../../interfaces/municipio';
import {Lprecios, Lpreciost } from '../../interfaces/listaprecios';
import {Recepcion } from '../../interfaces/recepcion';
import {Salidabeneficiariot} from '../../interfaces/salidabeneficiariot';
import {Salidacentrot } from '../../interfaces/salidacentrot';
import {Salidaconsumot } from '../../interfaces/salidaconsumot';
import { Puntoentregat } from 'src/app/interfaces/puntoentregat';
import {Acta } from '../../interfaces/acta';
import {Beneficiario } from '../../interfaces/beneficiario';
import {Datosinventario } from '../../interfaces/datosinventario';

@Component({
  selector: 'app-reporteinventario',
  templateUrl: './reporteinventario.component.html',
  styleUrls: ['./reporteinventario.component.css']
})
export class ReporteinventarioComponent implements OnInit {
  punto: Puntoentregat [] = [];
  region: Regional [] = [];
  centro: Centrozonal [] = [];
  mun: Municipio [] = [];
  pre: Lpreciost [] = []
  re: Recepcion [] = [];
  sab  : Salidabeneficiariot [] = [];
  sac  : Salidacentrot [] = [];
  sact  : Salidaconsumot [] = [];
  act: Acta [] = [];
  ben: Beneficiario [] = [];
  
  salc: Salidacentrot [] = [];
  salco: Salidaconsumot [] = [];
  val;
au :  Datosinventario [] = [];

  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  Nombrereporte = 'Reporte inventario';
  entrada = "";
  visible = true;
  visible1 = true;
  visible2 = true;
  visible3 = true;
  check1 :boolean = false;
  check2: boolean = false;
  check3: boolean = false;

  check4 :boolean = false;
  check5: boolean = false;
  check6: boolean = false;
  txt: boolean = false;
  txt1: boolean = true;
  txt2: boolean = true;
  txt3: boolean = true;
 rep;
 reg;
 cen;
cod;
muni;
id = {
  idv:null,
 };

  constructor(private service: ServicioService) { }

  ngOnInit() {

    this.service.getPuntoTabla()
    .subscribe(res => {
      this.punto = res;
    }, err => {
      console.log(err);
    });

    this.service.getRegional()
    .subscribe(res => {
      this.region = res;
    }, err => {
      console.log(err);
    });

    this.service.getCentro()
    .subscribe(res => {
      this.centro = res;
    }, err => {
      console.log(err);
    });

    this.service.getMunicipio()
    .subscribe(res => {
      this.mun = res;
    }, err => {
      console.log(err);
    });

 
   
    this.service.getrecepciontabla()
    .subscribe(res => {
      this.re = res;
    }, err => {
      console.log(err);
    });


    this.service.getsalidabeneficiarioTabla1()
    .subscribe(res => {
      this.sab = res;
    }, err => {
      console.log(err);
    });

   
    this.service.getdatosinventario()
    .subscribe(res => {
      this.au = res;
    }, err => {
      console.log(err);
    });
 

   
    this.service.getActa()
    .subscribe(res => {
      this.act = res;
    }, err => {
      console.log(err);
    });


    this.service.getBeneficiarios()
    .subscribe(res => {
      this.ben = res;
    }, err => {
      console.log(err);
    });

    

   


    this.visible = false;

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

      var img = canvas.toDataURL("image/png", 1.0);
      var doc = new jspdf('l', 'mm', 'a1');

      var height = doc.internal.pageSize.getHeight();
       
      doc.addImage(img,'PNG',10, 0,730, height);
      
      doc.save('reporteinventario.pdf');
      
    });
   
    }

  

    

    
   
   

    

   
          
    

    

    checkValue(values:any){

      if(values.currentTarget.checked == true){

 
        this.check2 = true;
        this.check3 = true;
        this.check4 = true;
        this.check5 = true;
        this.check6 = true;

        this.service.getListapreciostabla()
    .subscribe(res => {
    //  this.prel.length = 0;
      this.pre = res;
      console.log('variable pre ' , this.pre);
    }, err => {
      console.log(err);
    });

        
      }else{

        this.check2 = false;
        this.check3 = false;
        this.check4 = false;
        this.check5 = false;
        this.check6 = false;
        this.pre.length = 0;
      }


    }

    checkValue1(values:any){

      if(values.currentTarget.checked == true){

 
        this.check1 = true;
        this.check3 = true;
        this.check4 = true;
        this.check5 = true;
        this.check6 = true;

        this.service.getListapreciostabla()
    .subscribe(res => {
    //  this.prel.length = 0;
      this.pre = res;
    }, err => {
      console.log(err);
    });
        
      }else{

        this.check1 = false;
        this.check3 = false;
        this.check4 = false;
        this.check5 = false;
        this.check6 = false;
        this.pre.length = 0;
      }


    }


    checkValue2(values:any){

      if(values.currentTarget.checked == true){

 
        this.check1 = true;
        this.check2 = true;
        this.check4 = true;
        this.check5 = true;
        this.check6 = true;
        

        this.service.getListapreciostabla()
    .subscribe(res => {
    //  this.prel.length = 0;
      this.pre = res;
    }, err => {
      console.log(err);
    });

      }else{

        this.check1 = false;
        this.check2 = false;
        this.check4 = false;
        this.check5 = false;
        this.check6 = false;
        this.pre.length = 0;
      }


    }
    checkValue3(values:any){

      if(values.currentTarget.checked == true){

        this.check1 = true;
        this.check2 = true;
        this.check3 = true;
        this.check4 = true;
        this.check6 = true;


      }else{

        this.check1 = false;
        this.check2 = false;
        this.check3 = false;
        this.check4 = false;
        this.check6 = false;
      }

    }

    checkValue4(values:any){

if(values.currentTarget.checked == true){

  this.check1 = true;
  this.check2 = true;
  this.check3 = true;
  this.check5 = true;
  this.check6 = true;

  this.service.getListapreciostabla1()
    .subscribe(res => {
    //  this.prel.length = 0;
      this.pre = res;
    }, err => {
      console.log(err);
    });


      }else{

  this.check1 = false;
  this.check2 = false;
  this.check3 = false;
  this.check5 = false;
  this.check6 = false;
  this.pre.length = 0;
      }

    }

    checkValue5(values:any){

      if(values.currentTarget.checked == true){


      }else{
        
      }

    }

    checkValue6(values:any){

      if(values.currentTarget.checked == true){

        this.check1 = true;
        this.check2 = true;
        this.check3 = true;
        this.check4 = true;
        this.check5 = true;
        this.txt = false;

      }else{

  this.check1 = false;
  this.check2 = false;
  this.check3 = false;
  this.check4 = false;
  this.check5 = false;
 
  this.txt = true;
      }

    }

    valores(values:any){
      console.log('res' );

      for(let p of this.punto ){

        if(values == p.NombrePE){
   

    this.rep = p.Responsable;
    this.cen = p.NombreCentroZonal;
    this.cod =p.CodigoExternoPE;

    }
   
      }

    }

}
