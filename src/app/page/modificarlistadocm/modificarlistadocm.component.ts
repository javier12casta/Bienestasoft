import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Listadocursos } from '../../interfaces/listadocursos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificarlistadocm',
  templateUrl: './modificarlistadocm.component.html',
  styleUrls: ['./modificarlistadocm.component.css']
})
export class ModificarlistadocmComponent implements OnInit {

  public listacursos: Listadocursos[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,) { }

    listac: Listadocursos = {

      idListadoCursos : 1,
      NombreAgenteE : '',
      NumeroDocumento : '',
      Fecha : 0,
      Estado : 0,
      idTipoDocumento : 0,
      idConsecutivosMaestro :0,
      idBenefiarios : 0,
  
      };

      
  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getlistadocursossid(params.id)
        .subscribe(res => {
          console.log(res);
          this.listac = Object(res);
        }, err => {
          console.log(err);
        }
        );
    }

  }

  showMenssage(){
    Swal.fire({
      title: 'Creado!',
      text: 'Dato Maestro Creado',
      type: 'success',
      confirmButtonText: 'Aceptar'
    });
  }

  updateDatos() {
    this.Service.putlistadocursos(this.listac.idListadoCursos, this.listac)
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


