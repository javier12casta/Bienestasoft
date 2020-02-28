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
salb :  Datosinventario [] = [];
salcon :  Datosinventario [] = [];
salcen :  Datosinventario [] = [];
vector1 = [];
vector2 = [];
vector = [];
isHidden2: boolean = true;
fil;
FechaRecepcion = "";
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
  checkb: boolean = false;
  checku: boolean = false;
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
      console.log(this.au);
     for(let r of this.au) {
       var dato = '-'
      r.benefi = dato;
      r.unidades = dato;
      r.cantidad  = 0;
      
     }
    }, err => {
      console.log(err);
    });

    this.service.getdatosinventariosa()
    .subscribe(res => {
      this.salb = res;
      console.log(this.salb);
     for(let r of this.salb) {
       var dato = 'x'
      r.benefi = dato;
      r.unidades = ' ';
      r.numero = 'N/A';
      r.Cantidad = 0;
     //this.au = this.salb.slice(0, this.salb.length);
     
     }
     this.vector1 =this.au.concat(this.salb);
     //console.log('nuevo array', this.vector1);
     
    }, err => {
      console.log(err);
    });

    this.service.getdatosinventarioco()
    .subscribe(res => {
      this.salcon = res;
      console.log(this.salcon);
     for(let r of this.salcon) {
       var dato = ' '
      r.benefi = dato;
      r.unidades = 'x';
      r.numero = 'N/A';
      r.Cantidad = 0;
     
     }
     var vec =this.vector1.concat(this.salcon);
     this.vector2 = this.au.concat(vec);
     //console.log('nuevo array', this.vector2);
     
    }, err => {
      console.log(err);
    });
     this.service.getdatosinventariocen()
    .subscribe(res => {
      this.salcen = res;
      console.log(this.salcen);
     for(let r of this.salcen) {
       var dato = '-'
      r.benefi = dato;
      r.unidades = '-';
      r.numero = 'N/A';
      r.Cantidad = 0;
     
     }
     var vec = this.vector2.concat(this.salcen);
     this.vector = this.au.concat(vec);
     console.log('nuevo array', this.vector);
     
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
      
    }).then(function(canvas) {0
  
      var doc = new jspdf('l', 'px', 'a2'); // aca es la configuracion de la joja

      var height = doc.internal.pageSize.getHeight();
      var width = doc.internal.pageSize.getWidth();
       
      doc.addImage(canvas.toDataURL("image/png"),'PNG',3, 0,width, height); //tamaño de la imagen
      
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

checkbeneficiario(values:any){

  if(values.currentTarget.checked == true){




  }else{


  }

}

checkunidade(values:any){

if(values.currentTarget.checked == true){

  

}else{
  

}
}

onChange(){

  if(this.fil == "Fecha de entrada"){


    this.isHidden2 = false;
  }else{

    
    this.isHidden2 = true;
  }
}


}
