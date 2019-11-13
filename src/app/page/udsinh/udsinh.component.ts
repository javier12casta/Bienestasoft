import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { Puntoentrega } from 'src/app/interfaces/puntoentrega';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Uds } from 'src/app/interfaces/uds';
import { Beneficiario } from 'src/app/interfaces/beneficiario';
import { Usuarios } from 'src/app/interfaces/usuarios';

@Component({
  selector: 'app-udsinh',
  templateUrl: './udsinh.component.html',
  styleUrls: ['./udsinh.component.css']
})
export class UdsinhComponent implements OnInit {
  
  centros: Centrozonal []=[];
  puntos: Puntoentrega[]=[];
  usuarios: Usuarios[] = [];
  benefi: Beneficiario [] = [];
  
  unidad: Uds = {
    idUDS: 0,
    NombreUDS: '',
    CodigoInternoUDS: '',
    Direccion: '',
    ReponsableUDS: '',
    Estado: 1,
    Telefono: '',
    CodigoExternoUDS: '',
    idPuntoEntrega: 0,
    idCentrosZonales: 0,
    Barrio: '',
    Comuna: '',
  };

  constructor(
    private Service: ServicioService,
    private activeRoute: ActivatedRoute,
    private router:Router
  ) { }

  modificar = false;
 ngOnInit() {

  this.Service.getPunto()
	.subscribe(res => {
	  this.puntos = res;
	}, err => {
	  console.log(err);
  });
  
  this.Service.getCentro()
	.subscribe(res => {
	  this.centros = res;
	}, err => {
	  console.log(err);
  });
  
  this.Service.getBeneficiarios().subscribe(res => {
    this.benefi = Object(res);
  }, err => {
    console.log(err);
  });
  this.Service.getUsuarios().subscribe(res => {
    this.usuarios = Object(res);
  }, err => {
    console.log(err);
  });

  }

  updateDatos() {
    const params = this.activeRoute.snapshot.params;
    var numero = params.id;
    var cont2: number = 0;
    var cont3: number = 0;

    for (let numeros of this.benefi) {
      if (numero == numeros.idUDS && numeros.Estado == 1) {
        var cont: number = 0;
        var cont2 = cont + 1;
        //this.showMenssage3();
      } else if(numero == numeros.idUDS && numeros.Estado == 0) {
        var cont: number = 0;
        cont3 = cont + 1;
      }
    }
    for (let numeros of this.usuarios) {
      if (numero == numeros.idUDS && numeros.Estado == 1) {
        var cont: number = 0;
        var cont2 = cont + 1;
        //console.log('Comaparado', numero, numeros.idPuntoEntrega);
        //console.log('contador 2', cont2);
      } else if (numero == numeros.idUDS && numeros.Estado == 0) {
        var cont: number = 0;
        cont3 = cont + 1;
        //console.log('contador 3', cont3);
      }
    if (cont2 == 0 && cont3 > 0) {
      console.log('funciona');
      this.updateDatos2();
    } else {
      //mensaje de no se puede inhabilitar
      this.showMenssage3();
    }

    }
    if (cont2 == 0 && cont3 >0){
      //console.log('funciona');
      this.updateDatos2();
    }else{
      //mensaje de no se puede inhabilitar
      this.showMenssage4();
    } 
  }
  
  showMenssage4() {
    Swal.fire({
      title: 'Error!',
      text: 'No es posible inhabilitar la UDS',
      type: 'error',
      confirmButtonText: 'Entendido'
    });
  }

  updateDatos2() {
    this.Service.putUds(this.unidad.idUDS, this.unidad)
      .subscribe(
        res => {
          console.log(res);
          this.showMenssage();
          if (this.unidad.Estado == 1){
            this.showMenssage();
          }else if(this.unidad.Estado == 0){
            this.showMenssage2();
          }
        }, err => {
          console.log(err);
          this.showMenssage2();
        }
      );
  }
    
  //mensajes de creacion
  showMenssage() {
    Swal.fire({
      title: 'Habilitado!',
      text: 'UDS habilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/uds']);
    
      }
    });
  }

  showMenssage2() {
    Swal.fire({
      title: 'Inhabilitado!',
      text: 'UDS inhabilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/uds']);
    
      }
    });
  }
  //Mensaje de error

  showMenssage3() {
    Swal.fire({
      title: 'Error!',
      text: 'Error al crear la UDS',
      type: 'error',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/uds']);
    
      }
    });
  }


}