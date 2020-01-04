import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { Puntoentrega } from 'src/app/interfaces/puntoentrega';
import { Uds } from 'src/app/interfaces/uds';
import Swal from 'sweetalert2';
import { Usuarios } from 'src/app/interfaces/usuarios';

@Component({
  selector: 'app-puntoentregainh',
  templateUrl: './puntoentregainh.component.html',
  styleUrls: ['./puntoentregainh.component.css']
})
export class PuntoentregainhComponent implements OnInit {
  centro: Centrozonal[] = [];
  uds: Uds[] = [];
  punto: Puntoentrega[] = [];
  unidades: Uds[] = [];
  usuarios: Usuarios[] = [];

  centros: Centrozonal = {
    idCentrosZonales: 0,
    NombreCentroZonal: '',
    idMunicipios: 1,
    Comuna: '',
    CodigoExternoJcz: '',
    CodigoExternoCZ: 0,
    Estado: 1,
    idRegional: 2,
  };

  puntos: Puntoentrega = {
    idPuntoEntrega: 0,
    NombrePE: '',
    CodigoInternoPE: '',
    Direccion: '',
    Responsable: '',
    Estado: 1,
    Telefono: '',
    CodigoExternoPE: '',
    idCentrosZonales: 0,
    BarrioPE: '',
    Comuna: '',
  };

  constructor(
    private Service: ServicioService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    // get punto id
    var estado = 0;
    const params = this.activeRoute.snapshot.params;
    //console.log(params);
    if (params.id) {
      this.Service.getPuntoid(params.id)
        .subscribe(res => {
          console.log(res);
          this.puntos = Object(res);
          estado = 1
          if(estado == 1 ){
            this.centrosEstado();
          }
        }, err => {
          console.log(err);
        }
        );
    }
    // get uds
    this.Service.getUds().subscribe(res => {
      this.unidades = Object(res);
    });

    this.Service.getUsuarios().subscribe(res => {
      this.usuarios = Object(res);
    }, err => {
      console.log(err);
    });

  }

  centrosEstado() {
    //centro zonal 
    var id: string = this.puntos.idCentrosZonales.toString();
    this.Service.getCentroid(id)
      .subscribe(res => {
        console.log(res);
        this.centros = Object(res);
      }, err => {
        console.log(err);
      }
      );
  }

  inhabilitarDatos() {
    const params = this.activeRoute.snapshot.params;
    var numero = params.id;
    var cont2: number = 0;
    var cont3: number = 0;
    console.log(this.centros.Estado);
    if (this.centros.Estado == 1) {
      for (let numeros of this.unidades) {
        if (numero == numeros.idPuntoEntrega && numeros.Estado == 1) {
          var cont: number = 0;
          var cont2 = cont + 1;
          //console.log('Comaparado', numero, numeros.idPuntoEntrega);
          //console.log('contador 2', cont2);
        } else if (numero == numeros.idPuntoEntrega && numeros.Estado == 0) {
          var cont: number = 0;
          cont3 = cont + 1;
          //console.log('contador 3', cont3);
        }
      } //cierra for()
      for (let numeros of this.usuarios) {
        if (numero == numeros.idPuntoEntrega && numeros.Estado == 1) {
          var cont: number = 0;
          var cont2 = cont + 1;
          //console.log('Comaparado', numero, numeros.idPuntoEntrega);
          //console.log('contador 2', cont2);
        } else if (numero == numeros.idPuntoEntrega && numeros.Estado == 0) {
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
    }//primer if
    else {
      this.showMenssage3();
      this.puntos.Estado = 0;
      this.updateDatos2();
    }
}

  


  updateDatos2() {
    this.Service.putPunto(this.puntos.idPuntoEntrega, this.puntos)
      .subscribe(
        res => {
          console.log(res);
          if (this.puntos.Estado == 1) {
            this.showMenssage();
          } else if (this.puntos.Estado == 0) {
            this.showMenssage4();
          }

        }, err => {
          console.log(err);
          this.showMenssage2();
        }
      );
  }

  showMenssage() {
    Swal.fire({
      title: 'Habilitado',
      text: 'Punto de entrega Habilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {

        this.router.navigate(['/puntoentregain']);

      }

    });
  }
  //Mensaje de error

  showMenssage2() {
    Swal.fire({
      title: 'Error',
      text: 'Error al modificar el punto de entrega',
      type: 'error',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/puntoentrega']);
      }
    });
  }
  showMenssage4() {
    Swal.fire({
      title: 'Inhabilitado',
      text: 'Punto de entrega inhabilitado',
      type: 'error',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {

        this.router.navigate(['/puntoentregain']);

      }

    });
  }

  showMenssage3() {
    Swal.fire({
      title: 'Error',
      text: 'No es posible inhabilitar el punto de entrega',
      type: 'error',
      confirmButtonText: 'Entendido'
    });
  }

}
