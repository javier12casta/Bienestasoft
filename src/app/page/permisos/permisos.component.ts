import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Permisos } from '../../interfaces/permisos';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent implements OnInit {

  public permisos: Permisos = {
    idPermiso: 0,
    perInventario: 0,
    perEntrega: 0,
    perBeneficiarios: 0,
    perAcudientes: 0,
    perRol: 0,
    perUsuarios: 0,
    perBarrios: 0,
    perComunas: 0,
    perMunicipios: 0,
    perCentros: 0,
    perRegionales: 0,
    perUDS: 0,
    perReportes: 0,
    PerMaestros: 0,
    idRol: 0,
  };
  // marked = false;
  //perCentros =  this.theCheckbox + this.Crear + this.vizualizar + this.Actualizar + this.Reportes + this.Inhabilitar;
  Checkbox = {
    Crear: 0,
    vizualizar: 0,
    Actualizar: 0,
    Reportes: 0,
    Inhabilitar: 0,
  };

  Checkbox2 = {
    Crear: 0,
    vizualizar: 0,
    Actualizar: 0,
    Reportes: 0,
    Inhabilitar: 0,
  };
  Checkbox3 = {
    Crear: 0,
    vizualizar: 0,
    Actualizar: 0,
    Reportes: 0,
    Inhabilitar: 0,
  };
  Checkbox4 = {
    Crear: 0,
    vizualizar: 0,
    Actualizar: 0,
    Reportes: 0,
    Inhabilitar: 0,
  };
  Checkbox5 = {
    Crear: 0,
    vizualizar: 0,
    Actualizar: 0,
    Reportes: 0,
    Inhabilitar: 0,
  };
  Checkbox6 = {
    Crear: 0,
    vizualizar: 0,
    Actualizar: 0,
    Reportes: 0,
    Inhabilitar: 0,
  };
  Checkbox7 = {
    Crear: 0,
    vizualizar: 0,
    Actualizar: 0,
    Reportes: 0,
    Inhabilitar: 0,
  };
  Checkbox8 = {
    Crear: 0,
    vizualizar: 0,
    Actualizar: 0,
    Reportes: 0,
    Inhabilitar: 0,
  };

  constructor(
    private activeRoute: ActivatedRoute,
    private Service: ServicioService,
  ) {

  }

  ngOnInit() {


  }
  //insertar Datos ------------------------------------------------

  insertDatos(data, data2, data3, data4, data5, data6, data7, data8) {
    data = this.Checkbox;
    this.permisos.perCentros = data;
    /*       this.Service.postPermisos(this.permisos).subscribe(res => {
            console.log(this.permisos);
            console.log(res);
            this.showMenssage();
          },
            err => {
              console.log(err);
              this.showMenssage();
            }); */
            console.log('si');
    console.log(this.permisos.perCentros);
  }

  filter;
  filter2;
  filter3;
  filter4;
  filter5;
  filter6;
  filter7;
  filter8;
  filter9;
  filter10;
  filter11;
  filter12;
  filter13;
  filter14;
  filter15;
  filter16;
  filter17;
  filter18;
  filter19;
  filter20;
  filter21;
  filter22;
  filter23;
  filter24;
  filter25;
  filter26;
  filter27;
  filter28;
  filter29;
  filter30;
  filter31;
  filter32;
  filter33;
  filter34;
  filter35;
  filter36;
  filter37;
  filter38;
  filter39;
  filter40;
  filter41;
  filter42;
  filter43;
  filter44;
  filter45;


  onFilterChange() {

    if (this.filter == true) {

      this.Checkbox.Crear = 1;
    } else {

      this.Checkbox.Crear = 0;
    }
  }


  onFilterChange2() {

    if (this.filter2 == true) {

      this.Checkbox.Actualizar = 1;
    } else {

      this.Checkbox.Actualizar = 0;
    }
  }
  onFilterChange3() {

    if (this.filter3 == true) {

      this.Checkbox.vizualizar = 1;
    } else {

      this.Checkbox.vizualizar = 0;
    }
  }

  onFilterChange4() {

    if (this.filter4 == true) {

      this.Checkbox.Reportes = 1;
    } else {

      this.Checkbox.Reportes = 0;
    }
  }
  onFilterChange5() {

    if (this.filter5 == true) {

      this.Checkbox.Inhabilitar = 1;
    } else {

      this.Checkbox.Inhabilitar = 0;
    }
  }
  //------punto entrega
  onFilterChange6() {

    if (this.filter6 == true) {

      this.Checkbox2.Crear = 1;
    } else {

      this.Checkbox2.Crear = 0;
    }
  }
  onFilterChange7() {

    if (this.filter7 == true) {

      this.Checkbox2.Actualizar = 1;
    } else {

      this.Checkbox2.Actualizar = 0;
    }
  }
  onFilterChange8() {

    if (this.filter8 == true) {

      this.Checkbox2.vizualizar = 1;
    } else {

      this.Checkbox2.vizualizar = 0;
    }
  }
  onFilterChange9() {

    if (this.filter9 == true) {

      this.Checkbox2.Reportes = 1;
    } else {

      this.Checkbox2.Reportes = 0;
    }
  }
  onFilterChange10() {

    if (this.filter10 == true) {

      this.Checkbox2.Inhabilitar = 1;
    } else {

      this.Checkbox2.Inhabilitar = 0;
    }
  }
  //-----
  onFilterChange11() {

    if (this.filter11 == true) {

      this.Checkbox3.Crear = 1;
    } else {

      this.Checkbox3.Crear = 0;
    }
  }
  onFilterChange12() {

    if (this.filter12 == true) {

      this.Checkbox3.Actualizar = 1;
    } else {

      this.Checkbox3.Actualizar = 0;
    }
  }
  onFilterChange13() {

    if (this.filter13 == true) {

      this.Checkbox3.vizualizar = 1;
    } else {

      this.Checkbox3.vizualizar = 0;
    }
  }
  onFilterChange14() {

    if (this.filter14 == true) {

      this.Checkbox3.Reportes = 1;
    } else {

      this.Checkbox3.Reportes = 0;
    }
  }
  onFilterChange15() {

    if (this.filter15 == true) {

      this.Checkbox3.Inhabilitar = 1;
    } else {

      this.Checkbox3.Inhabilitar = 0;
    }
  }
  //-------
  onFilterChange16() {

    if (this.filter16 == true) {

      this.Checkbox4.Crear = 1;
    } else {

      this.Checkbox4.Crear = 0;
    }
  }
  onFilterChange17() {

    if (this.filter17 == true) {

      this.Checkbox4.Actualizar = 1;
    } else {

      this.Checkbox4.Actualizar = 0;
    }
  }
  onFilterChange18() {

    if (this.filter18 == true) {

      this.Checkbox4.vizualizar = 1;
    } else {

      this.Checkbox4.vizualizar = 0;
    }
  }
  onFilterChange19() {

    if (this.filter19 == true) {

      this.Checkbox4.Reportes = 1;
    } else {

      this.Checkbox4.Reportes = 0;
    }
  }
  onFilterChange20() {

    if (this.filter20 == true) {

      this.Checkbox4.Inhabilitar = 1;
    } else {

      this.Checkbox4.Inhabilitar = 0;
    }
  }
  //-------
  onFilterChange21() {

    if (this.filter21 == true) {

      this.Checkbox5.Crear = 1;
    } else {

      this.Checkbox5.Crear = 0;
    }
  }
  onFilterChange22() {

    if (this.filter22 == true) {

      this.Checkbox5.Actualizar = 1;
    } else {

      this.Checkbox5.Actualizar = 0;
    }
  }
  onFilterChange23() {

    if (this.filter23 == true) {

      this.Checkbox5.vizualizar = 1;
    } else {

      this.Checkbox5.vizualizar = 0;
    }
  }
  onFilterChange24() {

    if (this.filter24 == true) {

      this.Checkbox5.Reportes = 1;
    } else {

      this.Checkbox5.Reportes = 0;
    }
  }
  onFilterChange25() {

    if (this.filter25 == true) {

      this.Checkbox5.Inhabilitar = 1;
    } else {

      this.Checkbox5.Inhabilitar = 0;
    }
  }
  //-------
  onFilterChange26() {

    if (this.filter26 == true) {

      this.Checkbox6.Crear = 1;
    } else {

      this.Checkbox6.Crear = 0;
    }
  }
  onFilterChange27() {

    if (this.filter27 == true) {

      this.Checkbox6.Actualizar = 1;
    } else {

      this.Checkbox6.Actualizar = 0;
    }
  }
  onFilterChange28() {

    if (this.filter28 == true) {

      this.Checkbox6.vizualizar = 1;
    } else {

      this.Checkbox6.vizualizar = 0;
    }
  }
  onFilterChange29() {

    if (this.filter29 == true) {

      this.Checkbox6.Reportes = 1;
    } else {

      this.Checkbox6.Reportes = 0;
    }
  }
  onFilterChange30() {

    if (this.filter30 == true) {

      this.Checkbox6.Inhabilitar = 1;
    } else {

      this.Checkbox6.Inhabilitar = 0;
    }
  }
  //-----
  onFilterChange31() {

    if (this.filter31 == true) {

      this.Checkbox7.Crear = 1;
    } else {

      this.Checkbox7.Crear = 0;
    }
  }
  onFilterChange32() {

    if (this.filter32 == true) {

      this.Checkbox7.Actualizar = 1;
    } else {

      this.Checkbox7.Actualizar = 0;
    }
  }
  onFilterChange33() {

    if (this.filter33 == true) {

      this.Checkbox7.vizualizar = 1;
    } else {

      this.Checkbox7.vizualizar = 0;
    }
  }
  onFilterChange34() {

    if (this.filter34 == true) {

      this.Checkbox7.Reportes = 1;
    } else {

      this.Checkbox7.Reportes = 0;
    }
  }
  onFilterChange35() {

    if (this.filter35 == true) {

      this.Checkbox7.Inhabilitar = 1;
    } else {

      this.Checkbox7.Inhabilitar = 0;
    }
  }
  //------
  onFilterChange36() {

    if (this.filter36 == true) {

      this.Checkbox8.Crear = 1;
    } else {

      this.Checkbox8.Crear = 0;
    }
  }
  onFilterChange37() {

    if (this.filter37 == true) {

      this.Checkbox8.Actualizar = 1;
    } else {

      this.Checkbox8.Actualizar = 0;
    }
  }
  onFilterChange38() {

    if (this.filter38 == true) {

      this.Checkbox8.vizualizar = 1;
    } else {

      this.Checkbox8.vizualizar = 0;
    }
  }

  onFilterChange39() {

    if (this.filter39 == true) {

      this.Checkbox8.Reportes = 1;
    } else {

      this.Checkbox8.Reportes = 0;
    }
  }
  onFilterChange40() {

    if (this.filter40 == true) {

      this.Checkbox8.Inhabilitar = 1;
    } else {

      this.Checkbox8.Inhabilitar = 0;
    }
  }

  //mensajes de asigancion
  showMenssage() {
    Swal.fire({
      title: 'Creado!',
      text: 'Centro Zonal Creado',
      type: 'success',
      confirmButtonText: 'Entendido'
    });
  }

}
