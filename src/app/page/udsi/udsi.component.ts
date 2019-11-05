import { Component, OnInit } from '@angular/core';
import { Uds } from '../../interfaces/uds';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { Puntoentrega } from 'src/app/interfaces/puntoentrega';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-udsi',
  templateUrl: './udsi.component.html',
  styleUrls: ['./udsi.component.css']
})
export class UdsiComponent implements OnInit {
  
  centros: Centrozonal []=[];
  puntos: Puntoentrega[]=[];

  unidad : Uds = {
    NombreUDS: '',
    CodigoInternoUDS: '',
    Direccion: '',
    ReponsableUDS: '',
    Estado: 1,
    Telefono: '',
    CodigoExternoUDS: '',
    idPuntoEntrega : 0,
    idCentrosZonales : 0,
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

  }

    //insertar Datos ------------------------------------------------
    insertDatos() {
      this.Service.postUds(this.unidad).subscribe(res => {
        console.log(this.unidad);
        console.log(res);
        this.showMenssage();
      },
        err => {
          console.log(err);
          this.showMenssage2();
        });
  
    }

    
  //mensajes de creacion
  showMenssage() {
    Swal.fire({
      title: 'Creado!',
      text: 'UDS creada',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/uds']);
    
      }
    });
  }
  //Mensaje de error

  showMenssage2() {
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
