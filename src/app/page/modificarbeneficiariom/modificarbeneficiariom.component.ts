import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Beneficiario } from '../../interfaces/beneficiario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificarbeneficiariom',
  templateUrl: './modificarbeneficiariom.component.html',
  styleUrls: ['./modificarbeneficiariom.component.css']
})
export class ModificarbeneficiariomComponent implements OnInit {

  public beneficiarios: Beneficiario[] = [];

  constructor(   private activeRoute: ActivatedRoute,
    private Service: ServicioService,) { }


    ben: Beneficiario = {

    idBeneficiarios: 1,
    NumeroDocumento : 0,
    FechaIngreso : 0 ,
    FechaNacimiento: 0 ,
    PrimerNombre : '',
    PrimerApellido: '',
    SegundoNombre : '',
    Direccion : '',
    Pais : '',
    Departamento : '',
    Municipio : '',
    TelefonoFijo : 0 ,
    TelefonoFijo2 : 0 ,
    TelefonoMovil : 0,
    TelefonoMovil2 : 0 ,
    Email : '',
    Estado : '',
    idGenero: 0,
    idTipoDocumento: 0,
    SegundoApellido: '',
    ServicioOmodalidad : '',

    };

  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getBeneficiariosid(params.id)
        .subscribe(res => {
          console.log(res);
          this.ben = Object(res);
        }, err => {
          console.log(err);
        }
        );
    }
  }

  showMenssage(){
    Swal.fire({
      title: 'Modificado!',
      text: 'Beneficiario Modificado',
      type: 'success',
      confirmButtonText: 'Ok'
    });
  }


  updateDatos() {
    this.Service.putBeneficiarios(this.ben.idBeneficiarios, this.ben)
      .subscribe(
        res => {
          console.log(res);
          this.showMenssage();
        }, err => {
          console.log(err);
        }
      );
  }

}
