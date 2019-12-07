import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Beneficiario } from '../../interfaces/beneficiario';
import { Uds } from '../../interfaces/uds';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Udst } from 'src/app/interfaces/udst';

@Component({
  selector: 'app-modificar-beneficiarioui',
  templateUrl: './modificar-beneficiarioui.component.html',
  styleUrls: ['./modificar-beneficiarioui.component.css']
})
export class ModificarBeneficiariouiComponent implements OnInit {

  
  
  public beneficiarios: Beneficiario[] = [];
  public ud: Uds[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,private router:Router) { }


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
    TelefonoMovil : '',
    TelefonoMovil2 : '' ,
    Email : '',
    Estado : 1,
    idGenero: 0,
    idTipoDocumento: 0,
    SegundoApellido: '',
    ServicioOmodalidad : '',
    idUDS : null,

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

    this.Service.getUds()
    .subscribe(async (data) => {
      this.ud = data;
      console.log(data);
      console.log('funciona');
    });


  }

  showMenssage(){
    Swal.fire({
      title: 'Modificado',
      text: 'Beneficiario Modificado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/modificarbeneficiariosu']);

      }
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
