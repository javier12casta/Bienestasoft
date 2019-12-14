import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { ServicioService } from '../../servicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Permisos } from '../../interfaces/permisos';
import { Usuarios } from 'src/app/interfaces/usuarios';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  mobileQuery: MediaQueryList;

  user: Usuarios = {
    idUsuarios: 1,
    Nombres: "",
    Apellidos: "",
    Estado: 1,
    NumeroDocumento: 0,
    FechaIngreso: 0,
    NombreUsuarioSistema: "",
    Direccion: "",
    TelefonoFijo: 0,
    TelefonoFijo2: 0,
    TelefonoMovil: 0,
    TelefonoMovil2: 0,
    Email: "",
    idPuntoEntrega : null,
    idUDS: null,
    idTipoDocumento: 1,
    TipoUsuario: "",
    password: ""
  }

  public permisos: Permisos = {
    idPermiso: 0,
    perInventario: '',
    perEntrega: '',
    perBeneficiarios: '',
    perRol: '',
    perUsuarios: '',
    perCentros: '',
    perUDS: '',
    perPuntoen: '',
    perMaestros: '',
    idRol: 1,
    perAlmacenes: '',
    perCentrosD: '',
  };

  //------------------------------------Menu----------------------------------------------------------
logout()
{
  localStorage.clear();
  this.router.navigate(['']);
}
  fillerContent = Array.from({ length: 50 }, () => '');

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private router:Router,
    private activeRoute: ActivatedRoute,
    private Service: ServicioService,
  ) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;
  //--------------------------------------Traer Datos locale storage---------------------------------------------------------
  estado = 0;
  obtenerStorage() {
    this.user = JSON.parse(localStorage.getItem("persona"));
    console.log(this.user);
    this.estado = 1;
  }

//------------------------------ Traer datos API y cargar permisos pra el menu ----------------------------------------------------
  ngOnInit() {
    this.obtenerStorage();
    if (this.estado == 1) {
      this.Service.getPermisosid(this.user.TipoUsuario).subscribe(res => {
        this.permisos = Object(res);
        console.log('Permiso get', this.permisos);
        this.cargarpermiso();
        this.cargarpermiso2();
        this.cargarpermiso3();
        this.cargarpermiso4();
        this.cargarpermiso5();
        this.cargarpermiso6();
        this.cargarpermiso7();
        this.cargarpermiso8();
        this.cargarpermiso9();
        this.cargarpermiso10();
        this.cargarpermiso11();
      }, err => {
        console.log(err)
      });
    }
  }
  //-------------------------------------------------------------------------------------------------------
  estructura = [];

  cargarpermiso() {
    var centrostr = this.permisos.perCentros;
    var array = centrostr.split("");
    if (array[0] == "1") {
      var create = { name: "Crear centro zonal", route: "/centrozonaliv", icon: "public"  };
      this.estructura.push(create);
      if (array[1] == "1") {
        var create = { name: "Modificar centro zonal", route: "/centrozonal", icon: "public" };
        this.estructura.push(create);

        if (array[2] == "1") {
          if (array[3] == "1") {
            var create = { name: "Reporte centro zonal", route: "/reportecentrozonal", icon: "public" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar centro zonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar centro zonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte centro zonal", route: "/reportecentrozonal", icon: "public" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar centro zonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar centro zonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }

      }
      else if (array[1] == "0") {

        if (array[2] == "1") {
          if (array[3] == "1") {
            var create = { name: "Reporte centro zonal", route: "/reportecentrozonal", icon: "public" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar centro zonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar centro zonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }

        }
        else if (array[2] == "0") {

          if (array[3] == "1") {
            var create = { name: "Reporte centro zonal", route: "/reportecentrozonal", icon: "public" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar centro zonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {
            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar centro zonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {
            }
          }

        }


      }

    } else if (array[0] == "0") {

      if (array[1] == "1") {
        var create = { name: "Actualizar centro zonal", route: "/centrozonal", icon: "public" };
        this.estructura.push(create);

        if (array[2] == "1") {
          if (array[3] == "1") {
            var create = { name: "Reporte centro zonal", route: "/reportecentrozonal", icon: "list_alt" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar centro zonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar centro zonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte centro zonal", route: "/reportecentrozonal", icon: "list_alt" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar centro zonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar centro zonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }

      }
      else if (array[1] == "0") {

        if (array[2] == "1") {
          if (array[3] == "1") {
            var create = { name: "Reporte centro zonal", route: "/reportecentrozonal", icon: "list_alt" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar centro zonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar centro zonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }

        }
        else if (array[2] == "0") {

          if (array[3] == "1") {
            var create = { name: "Reporte centro zonal", route: "/reportecentrozonal", icon: "list_alt" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar centro zonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {
            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar centro zonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {
            }
          }

        }


      }

    }
    //------------------------------------------------------------

  }

  //---2 carga
  cargarpermiso2() {
    var centrostr = this.permisos.perPuntoen;
    var array = centrostr.split("");
    //console.log('carga', array);

    if (array[0] == "1") {
      var create = { name: "Crear punto entrega", route: "/puntoentregav", icon: "public" };
      this.estructura.push(create);
      if (array[1] == "1") {
        var create = { name: "Modificar punto entrega", route: "/puntoentrega", icon: "public" };
        this.estructura.push(create);
        if (array[2] == "1") {
          if (array[3] == "1") {

            var create = { name: "Reporte punto entrega", route: "/reportepuntoentrega", icon: "face" };
            this.estructura.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar punto entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar punto entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {


            var create = { name: "Reporte punto entrega", route: "/reportepuntoentrega", icon: "face" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar punto entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar punto entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }
          }

        }

      }
      else if (array[1] == "0") {


        if (array[2] == "1") {


          if (array[3] == "1") {


            var create = { name: "Reporte punto entrega", route: "/reportepuntoentrega", icon: "face" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar punto entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar punto entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }

          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {


            var create = { name: "Reporte punto entrega", route: "/reportepuntoentrega", icon: "face" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar punto entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar punto entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }
          }

        }


      }

    }
    else if (array[0] == "0") {

      if (array[1] == "1") {
        var create = { name: "Modificar punto entrega", route: "/puntoentrega", icon: "public" };
        this.estructura.push(create);

        if (array[2] == "1") {


          if (array[3] == "1") {


            var create = { name: "Reporte punto entrega", route: "/reportepuntoentrega", icon: "face" };
            this.estructura.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar punto entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }
          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar punto entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {


            var create = { name: "Reporte punto entrega", route: "/reportepuntoentrega", icon: "face" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar punto entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar punto entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }
          }

        }

      }
      else if (array[1] == "0") {


        if (array[2] == "1") {


          if (array[3] == "1") {


            var create = { name: "Reporte punto entrega", route: "/reportepuntoentrega", icon: "face" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar punto entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar punto entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {


            var create = { name: "Reporte punto entrega", route: "/reportepuntoentrega", icon: "face" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar punto entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar punto entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }
          }

        }

      }

    }

  }

  //cargar 3--------------
  cargarpermiso3() {
    var centrostr = this.permisos.perUDS;
    var array = centrostr.split("");
    //console.log('carga', array);

    if (array[0] == "1") {
      var create = { name: "Crear UDS", route: "/udsv", icon: "public" };
      this.estructura.push(create);

      if (array[1] == "1") {
        var create = { name: "Modificar UDS", route: "/uds", icon: "public" };
        this.estructura.push(create);

        if (array[2] == "1") {


          if (array[3] == "1") {
            var create = { name: "Reporte UDS", route: "/reporteuds", icon: "face" };
              this.estructura.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar UDS", route: "/udsin", icon: "public" };
this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar UDS", route: "/udsin", icon: "public" };
this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte UDS", route: "/reporteuds", icon: "face" };
              this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar UDS", route: "/udsin", icon: "public" };
this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar UDS", route: "/udsin", icon: "public" };
this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }

      }
      else if (array[1] == "0") {


        if (array[2] == "1") {


          if (array[3] == "1") {
            var create = { name: "Reporte UDS", route: "/reporteuds", icon: "face" };
              this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar UDS", route: "/udsin", icon: "public" };
this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar UDS", route: "/udsin", icon: "public" };
this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte UDS", route: "/reporteuds", icon: "face" };
              this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar UDS", route: "/udsin", icon: "public" };
this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar UDS", route: "/udsin", icon: "public" };
this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }


      }

    }
    else if (array[0] == "0") {

      if (array[1] == "1") {
        var create = { name: "Modificar UDS", route: "/uds", icon: "public" };
        this.estructura.push(create);

        if (array[2] == "1") {
          if (array[3] == "1") {
            var create = { name: "Reporte UDS", route: "/reporteuds", icon: "face" };
              this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar UDS", route: "/udsin", icon: "public" };
this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }
          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar UDS", route: "/udsin", icon: "public" };
this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte UDS", route: "/reporteuds", icon: "face" };
              this.estructura.push(create);


            if (array[4] == "1") {
              var create = { name: "Inhabilitar UDS", route: "/udsin", icon: "public" };
this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar UDS", route: "/udsin", icon: "public" };
this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }

      }
      else if (array[1] == "0") {


        if (array[2] == "1") {


          if (array[3] == "1") {
            var create = { name: "Reporte UDS", route: "/reporteuds", icon: "face" };
              this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar UDS", route: "/udsin", icon: "public" };
this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar UDS", route: "/udsin", icon: "public" };
this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte UDS", route: "/reporteuds", icon: "face" };
              this.estructura.push(create);


            if (array[4] == "1") {
              var create = { name: "Inhabilitar UDS", route: "/udsin", icon: "public" };
this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar UDS", route: "/udsin", icon: "public" };
this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }

      }

    }

  }
  //carga permiso 4-------
  Usuarios = [];
  cargarpermiso4() {
    var centrostr = this.permisos.perUsuarios;
    var array = centrostr.split("");
    // console.log('carga', array);

    if (array[0] == "1") {
      var create = { name: "Crear usuarios", route: "/usuarios", icon: "face" };
      this.Usuarios.push(create);

      if (array[1] == "1") {
        var create = { name: "Modificar usuarios", route: "/modificarusuarios", icon: "face" };
        this.Usuarios.push(create);


        if (array[2] == "1") {


          if (array[3] == "1") {
            var create = { name: "Reporte usuarios", route: "/reporteusuarios", icon: "face" };
              this.Usuarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte usuarios", route: "/reporteusuarios", icon: "face" };
              this.Usuarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }

      }
      else if (array[1] == "0") {


        if (array[2] == "1") {


          if (array[3] == "1") {
            var create = { name: "Reporte usuarios", route: "/reporteusuarios", icon: "face" };
              this.Usuarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte usuarios", route: "/reporteusuarios", icon: "face" };
              this.Usuarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }


      }

    }
    else if (array[0] == "0") {

      if (array[1] == "1") {
        var create = { name: "Modificar usuarios", route: "/modificarusuarios", icon: "face" };
        this.Usuarios.push(create);

        if (array[2] == "1") {


          if (array[3] == "1") {
            var create = { name: "Reporte usuarios", route: "/reporteusuarios", icon: "face" };
              this.Usuarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte usuarios", route: "/reporteusuarios", icon: "face" };
              this.Usuarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }

      }
      else if (array[1] == "0") {


        if (array[2] == "1") {


          if (array[3] == "1") {
            var create = { name: "Reporte usuarios", route: "/reporteusuarios", icon: "face" };
              this.Usuarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte usuarios", route: "/reporteusuarios", icon: "face" };
              this.Usuarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }

      }

    }

  }
  //carga permiso 5 --------
  beneficiarios = [];
  cargarpermiso5() {
    var centrostr = this.permisos.perBeneficiarios;
    var array = centrostr.split("");
    // console.log('carga', array);

    if (array[0] == "1") {
      var create = { name: "Acudientes", route: "/acudientes", icon: "face" };
      this.beneficiarios.push(create);
      var create = { name: "Crear beneficiarios ", route: "/nivelbeneficiario", icon: "face" };
      this.beneficiarios.push(create);

      if (array[1] == "1") {
        var create = { name: "Modificar beneficiarios  ", route: "/modificarnivelbeneficiario", icon: "face" };
        this.beneficiarios.push(create);

        if (array[2] == "1") {


          if (array[3] == "1") {
            var create = { name: "Reporte beneficiarios ", route: "/reportebeneficiario", icon: "face" };
              this.beneficiarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ", route: "/inhabilitarnivelbeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ", route: "/inhabilitarnivelbeneficiario", icon: "face" };
this.beneficiarios.push(create);

            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte beneficiarios ", route: "/reportebeneficiario", icon: "face" };
              this.beneficiarios.push(create);



            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ", route: "/inhabilitarnivelbeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ", route: "/inhabilitarnivelbeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }

      }
      else if (array[1] == "0") {


        if (array[2] == "1") {


          if (array[3] == "1") {
            var create = { name: "Reporte beneficiarios ", route: "/reportebeneficiario", icon: "face" };
              this.beneficiarios.push(create);



            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ", route: "/inhabilitarnivelbeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ", route: "/inhabilitarnivelbeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte beneficiarios ", route: "/reportebeneficiario", icon: "face" };
              this.beneficiarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ", route: "/inhabilitarnivelbeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ", route: "/inhabilitarnivelbeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }


      }

    }
    else if (array[0] == "0") {

      if (array[1] == "1") {
        var create = { name: "Modificar beneficiarios ", route: "/inhabilitarnivelbeneficiario", icon: "face" };
        this.beneficiarios.push(create);

        if (array[2] == "1") {


          if (array[3] == "1") {
            var create = { name: "Reporte beneficiarios ", route: "/reportebeneficiario", icon: "face" };
              this.beneficiarios.push(create);


            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ", route: "/inhabilitarnivelbeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ", route: "/inhabilitarnivelbeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte beneficiarios ", route: "/reportebeneficiario", icon: "face" };
              this.beneficiarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ", route: "/inhabilitarnivelbeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ", route: "/inhabilitarnivelbeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }

      }
      else if (array[1] == "0") {


        if (array[2] == "1") {


          if (array[3] == "1") {
            var create = { name: "Reporte beneficiarios", route: "/reportebeneficiario", icon: "face" };
              this.beneficiarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ", route: "/inhabilitarnivelbeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ", route: "/inhabilitarnivelbeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte beneficiarios ", route: "/reportebeneficiario", icon: "face" };
              this.beneficiarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ", route: "/inhabilitarnivelbeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ", route: "/inhabilitarnivelbeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }

      }

    }

  }
  //carga permiso 6----------
  entrega = [];
  cargarpermiso6() {
    var centrostr = this.permisos.perEntrega;
    var array = centrostr.split("");
    // console.log('carga', array);

    if (array[0] == "1") {
      var create = { name: "Entrega", route: "/entregasel", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Recepción", route: "/recepcion", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Devoluciones", route: "/devoluciones", icon: "list_alt" };
     this.entrega.push(create);
      if (array[1] == "1") {
        

        if (array[2] == "1") {
          

          if (array[3] == "1") {
            var create = { name: "Reporte devoluciones", route: "/reportedevolucion", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte entrega", route: "/reportentregab", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte recepción", route: "/reporterecepcion", icon: "list_alt" };
     this.entrega.push(create);
            if (array[4] == "1") {
              
            }
            else if (array[4] == "0") {
              
            }

          }
          else if (array[3] == "0") {
            

            if (array[4] == "1") {
              
            }
            else if (array[4] == "0") {
              
            }
          }

        }
        else if (array[2] == "0") {
          

          if (array[3] == "1") {
            var create = { name: "Reporte devoluciones", route: "/reportedevolucion", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte entrega", route: "/reportentregab", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte recepción", route: "/reporterecepcion", icon: "list_alt" };
     this.entrega.push(create);
            if (array[4] == "1") {
              
            }
            else if (array[4] == "0") {
              
            }

          }
          else if (array[3] == "0") {
            

            if (array[4] == "1") {
              
            }
            else if (array[4] == "0") {
              
            }
          }

        }

      }
      else if (array[1] == "0") {
        

        if (array[2] == "1") {
          

          if (array[3] == "1") {
            var create = { name: "Reporte devoluciones", route: "/reportedevolucion", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte entrega", route: "/reportentregab", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte recepción", route: "/reporterecepcion", icon: "list_alt" };
     this.entrega.push(create);
            if (array[4] == "1") {
              
            }
            else if (array[4] == "0") {
              
            }

          }
          else if (array[3] == "0") {
            

            if (array[4] == "1") {
              
            }
            else if (array[4] == "0") {
              
            }

          }

        }
        else if (array[2] == "0") {
          

          if (array[3] == "1") {
            var create = { name: "Reporte devoluciones", route: "/reportedevolucion", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte entrega", route: "/reportentregab", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte recepción", route: "/reporterecepcion", icon: "list_alt" };
     this.entrega.push(create);
            if (array[4] == "1") {
              
            }
            else if (array[4] == "0") {
              
            }

          }
          else if (array[3] == "0") {
            

            if (array[4] == "1") {
              
            }
            else if (array[4] == "0") {
              
            }
          }

        }


      }

    }
    else if (array[0] == "0") {
      
      if (array[1] == "1") {
        
        if (array[2] == "1") {
          

          if (array[3] == "1") {
            var create = { name: "Reporte devoluciones", route: "/reportedevolucion", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte entrega", route: "/reportentregab", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte recepción", route: "/reporterecepcion", icon: "list_alt" };
     this.entrega.push(create);
            if (array[4] == "1") {
              
            }
            else if (array[4] == "0") {
              
            }
          }
          else if (array[3] == "0") {
            

            if (array[4] == "1") {
              
            }
            else if (array[4] == "0") {
              
            }
          }

        }
        else if (array[2] == "0") {
          

          if (array[3] == "1") {
            var create = { name: "Reporte devoluciones", route: "/reportedevolucion", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte entrega", route: "/reportentregab", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte recepción", route: "/reporterecepcion", icon: "list_alt" };
     this.entrega.push(create);
            if (array[4] == "1") {
              
            }
            else if (array[4] == "0") {
              
            }

          }
          else if (array[3] == "0") {
            

            if (array[4] == "1") {
              
            }
            else if (array[4] == "0") {
              
            }
          }

        }

      }
      else if (array[1] == "0") {
        

        if (array[2] == "1") {
          

          if (array[3] == "1") {
            var create = { name: "Reporte devoluciones", route: "/reportedevolucion", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte entrega", route: "/reportentregab", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte recepción", route: "/reporterecepcion", icon: "list_alt" };
     this.entrega.push(create);
            if (array[4] == "1") {
              
            }
            else if (array[4] == "0") {
              
            }

          }
          else if (array[3] == "0") {
            

            if (array[4] == "1") {
              
            }
            else if (array[4] == "0") {
              
            }
          }

        }
        else if (array[2] == "0") {
          

          if (array[3] == "1") {
            var create = { name: "Reporte devoluciones", route: "/reportedevolucion", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte entrega", route: "/reportentregab", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte recepción", route: "/reporterecepcion", icon: "list_alt" };
     this.entrega.push(create);
            if (array[4] == "1") {
              
            }
            else if (array[4] == "0") {
              
            }

          }
          else if (array[3] == "0") {
            

            if (array[4] == "1") {
              
            }
            else if (array[4] == "0") {
              
            }
          }

        }

      }

    }

  }

 //carga permiso 7 ---------
 centrod = [];
 cargarpermiso7() {
  var centrostr = this.permisos.perCentrosD;
  var array = centrostr.split("");
  //console.log('carga', array);

  if (array[0] == "1") {
    var create = { name: "Crear centro distribución", route: "/centrodistribucion", icon: "face" };
     this.centrod.push(create);
    if (array[1] == "1") {
      var create = { name: "Modificar centro distribución", route: "/modificarcentrod", icon: "face" };
     this.centrod.push(create);
      if (array[2] == "1") {
        

        if (array[3] == "1") {
          var create = { name: "Reporte centro distribución", route: "/reportecentrodistribucion", icon: "face" };
     this.centrod.push(create);
          if (array[4] == "1") {
            var create = { name: "Inhabilitar centro distribución", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }

        }
        else if (array[3] == "0") {
          

          if (array[4] == "1") {
            var create = { name: "Inhabilitar centro distribución", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }
        }

      }
      else if (array[2] == "0") {
        

        if (array[3] == "1") {
          var create = { name: "Reporte centro distribución", route: "/reportecentrodistribucion", icon: "face" };
     this.centrod.push(create);
          if (array[4] == "1") {
            var create = { name: "Inhabilitar centro distribución", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }

        }
        else if (array[3] == "0") {
          

          if (array[4] == "1") {
            var create = { name: "Inhabilitar centro distribución", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }
        }

      }

    }
    else if (array[1] == "0") {
      

      if (array[2] == "1") {
        

        if (array[3] == "1") {
          var create = { name: "Reporte centro distribución", route: "/reportecentrodistribucion", icon: "face" };
     this.centrod.push(create);
          if (array[4] == "1") {
            var create = { name: "Inhabilitar centro distribución", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }

        }
        else if (array[3] == "0") {
          

          if (array[4] == "1") {
            var create = { name: "Inhabilitar centro distribución", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }

        }

      }
      else if (array[2] == "0") {
        

        if (array[3] == "1") {
          var create = { name: "Reporte centro distribución", route: "/reportecentrodistribucion", icon: "face" };
     this.centrod.push(create);
          if (array[4] == "1") {
            var create = { name: "Inhabilitar centro distribución", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }

        }
        else if (array[3] == "0") {
          

          if (array[4] == "1") {
            var create = { name: "Inhabilitar centro distribución", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }
        }

      }


    }

  }
  else if (array[0] == "0") {
    
    if (array[1] == "1") {
      var create = { name: "Modificar centro distribución", route: "/modificarcentrod", icon: "face" };
     this.centrod.push(create);
      if (array[2] == "1") {
        

        if (array[3] == "1") {
          var create = { name: "Reporte centro distribución", route: "/reportecentrodistribucion", icon: "face" };
     this.centrod.push(create);
          if (array[4] == "1") {
            var create = { name: "Inhabilitar centro distribución", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }
        }
        else if (array[3] == "0") {
          

          if (array[4] == "1") {
            var create = { name: "Inhabilitar centro distribución", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }
        }

      }
      else if (array[2] == "0") {
        

        if (array[3] == "1") {
          var create = { name: "Reporte centro distribución", route: "/reportecentrodistribucion", icon: "face" };
     this.centrod.push(create);
          if (array[4] == "1") {
            var create = { name: "Inhabilitar centro distribución", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }

        }
        else if (array[3] == "0") {
          

          if (array[4] == "1") {
            var create = { name: "Inhabilitar centro distribución", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }
        }

      }

    }
    else if (array[1] == "0") {
      

      if (array[2] == "1") {
        

        if (array[3] == "1") {
          var create = { name: "Reporte centro distribución", route: "/reportecentrodistribucion", icon: "face" };
     this.centrod.push(create);
          if (array[4] == "1") {
            var create = { name: "Inhabilitar centro distribución", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }

        }
        else if (array[3] == "0") {
          

          if (array[4] == "1") {
            var create = { name: "Inhabilitar centro distribución", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }
        }

      }
      else if (array[2] == "0") {
        

        if (array[3] == "1") {
          var create = { name: "Reporte centro distribución", route: "/reportecentrodistribucion", icon: "face" };
     this.centrod.push(create);
          if (array[4] == "1") {
            var create = { name: "Inhabilitar centro distribución", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }

        }
        else if (array[3] == "0") {
          

          if (array[4] == "1") {
            var create = { name: "Inhabilitar centro distribución", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }
        }

      }

    }

  }

}
 //carga permiso 8----------
 inventarios = [];
 cargarpermiso8() {
  var centrostr = this.permisos.perInventario;
  var array = centrostr.split("");
  // console.log('carga', array);

  if (array[0] == "1") {
          var create = { name: "Inventario", route: "/inventario", icon: "store" };
    this.inventarios.push(create);
   if (array[1] == "1") {
     

     if (array[2] == "1") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte inventario", route: "/reporteinventario", icon: "store" };
    this.inventarios.push(create);
         if (array[4] == "1") {
           
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           
         }
         else if (array[4] == "0") {
           
         }
       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte inventario", route: "/reporteinventario", icon: "store" };
    this.inventarios.push(create);
         if (array[4] == "1") {
           
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           
         }
         else if (array[4] == "0") {
           
         }
       }

     }

   }
   else if (array[1] == "0") {
     

     if (array[2] == "1") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte inventario", route: "/reporteinventario", icon: "store" };
    this.inventarios.push(create);
         if (array[4] == "1") {
           
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           
         }
         else if (array[4] == "0") {
           
         }

       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte inventario", route: "/reporteinventario", icon: "store" };
    this.inventarios.push(create);
         if (array[4] == "1") {
           
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           
         }
         else if (array[4] == "0") {
           
         }
       }

     }


   }

 }
 else if (array[0] == "0") {
   
   if (array[1] == "1") {
     
     if (array[2] == "1") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte inventario", route: "/reporteinventario", icon: "store" };
    this.inventarios.push(create);
         if (array[4] == "1") {
           
         }
         else if (array[4] == "0") {
           
         }
       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           
         }
         else if (array[4] == "0") {
           
         }
       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte inventario", route: "/reporteinventario", icon: "store" };
    this.inventarios.push(create);
         if (array[4] == "1") {
           
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           
         }
         else if (array[4] == "0") {
           
         }
       }

     }

   }
   else if (array[1] == "0") {
     

     if (array[2] == "1") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte inventario", route: "/reporteinventario", icon: "store" };
    this.inventarios.push(create);
         if (array[4] == "1") {
           
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           
         }
         else if (array[4] == "0") {
           
         }
       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte inventario", route: "/reporteinventario", icon: "store" };
    this.inventarios.push(create);
         if (array[4] == "1") {
           
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           
         }
         else if (array[4] == "0") {
           
         }
       }

     }

   }

 }

}
 //carga permiso 9 ----------
 rol = [];
 cargarpermiso9() {
  var centrostr = this.permisos.perRol;
  var array = centrostr.split("");
  //console.log('carga', array);

  if (array[0] == "1") {
     var create = { name: "Crear rol", route: "/rolv", icon: "face" };
     this.rol.push(create);
   if (array[1] == "1") {
     var create = { name: "Modificar rol", route: "/roli", icon: "face" };
     this.rol.push(create);


     if (array[2] == "1") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte rol", route: "/reporterol", icon: "face" };
     this.rol.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte rol", route: "/reporterol", icon: "face" };
     this.rol.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }

   }
   else if (array[1] == "0") {
     

     if (array[2] == "1") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte rol", route: "/reporterol", icon: "face" };
     this.rol.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte rol", route: "/reporterol", icon: "face" };
     this.rol.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }


   }

 }
 else if (array[0] == "0") {
   
   if (array[1] == "1") {
     var create = { name: "Modificar rol", route: "/roli", icon: "face" };
     this.rol.push(create);

     if (array[2] == "1") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte rol", route: "/reporterol", icon: "face" };
     this.rol.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte rol", route: "/reporterol", icon: "face" };
     this.rol.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }

   }
   else if (array[1] == "0") {
     

     if (array[2] == "1") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte rol", route: "/reporterol", icon: "face" };
     this.rol.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte rol", route: "/reporterol", icon: "face" };
     this.rol.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }

   }

 }

}

 //carga permiso 10----------
 datos = [];
 cargarpermiso10() {
  var centrostr = this.permisos.perMaestros;
  var array = centrostr.split("");
  // console.log('carga', array);

  if (array[0] == "1" ) {
     var create = { name: "Crear servicio y modalidad", route: "/serviciosymodalidadesv", icon: "face" };
    this.datos.push(create);
    var create = { name: "Crear referencia bienestarina", route: "/referenciasbienestarinav", icon: "face" };
    this.datos.push(create);
    var create = { name: "Crear listado de precios", route: "/listapreciosv", icon: "face" };
    this.datos.push(create);
    var create = { name: "Crear listado de cursos", route: "/nivelistadocursos", icon: "face" };
    this.datos.push(create);
    var create = { name: "Crear datos nutricionales", route: "/niveldatosnutricionales", icon: "face" };
    this.datos.push(create);


    var create = { name: "Reporte consecutivo maestros", route: "/reporteconsecutivomaestro", icon: "face" };
    this.datos.push(create);
    var create = { name: "Ver consecutivos maestros", route: "/consecutivomaestrov", icon: "face" };
    this.datos.push(create);
   if (array[1] == "1") {
     var create = { name: "Modificar servicio y modalidad", route: "/modificarserviciom", icon: "face" };
    this.datos.push(create);
    var create = { name: "Modificar referencia bienestarina", route: "/modificarreferenciab", icon: "face" };
    this.datos.push(create);
    var create = { name: "Modificar listado de precios", route: "/modificarlistac", icon: "face" };
    this.datos.push(create);
    var create = { name: "Modificar listado de cursos", route: "/nivelistadocursosm", icon: "face" };
    this.datos.push(create);
    var create = { name: "Modificar datos nutricionales", route: "/niveldatosnutricionalesm", icon: "face" };
    this.datos.push(create);
     if (array[2] == "1") {        
       if (array[3] == "1") {
         var create = { name: "Reporte datos maestros", route: "/reportes", icon: "face" };
    this.datos.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar datos maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar datos maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte datos maestros", route: "/reportes", icon: "face" };
    this.datos.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar datos maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar datos maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }

   }
   else if (array[1] == "0") {
     

     if (array[2] == "1") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte datos maestros", route: "/reportes", icon: "face" };
    this.datos.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar datos maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar datos maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte datos maestros", route: "/reportes", icon: "face" };
    this.datos.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar datos maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar datos maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }


   }

 }
 else if (array[0] == "0") {
   
   if (array[1] == "1") {
    var create = { name: "Modificar servicio y modalidad", route: "/modificarserviciom", icon: "face" };
    this.datos.push(create);
    var create = { name: "Modificar referencia bienestarina", route: "/modificarreferenciab", icon: "face" };
    this.datos.push(create);
    var create = { name: "Modificar listado de precios", route: "/modificarlistac", icon: "face" };
    this.datos.push(create);
    var create = { name: "Modificar listado de cursos", route: "/modificarlistadoc", icon: "face" };
    this.datos.push(create);
    var create = { name: "Modificar datos nutricionales", route: "/modificardatosnutricionales", icon: "face" };
    this.datos.push(create);
     if (array[2] == "1") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte datos maestros", route: "/reportes", icon: "face" };
    this.datos.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar datos maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar datos maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte datos maestros", route: "/reportes", icon: "face" };
    this.datos.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar datos maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar datos maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }

   }
   else if (array[1] == "0") {
     

     if (array[2] == "1") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte datos maestros", route: "/reportes", icon: "face" };
    this.datos.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar datos maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar datos maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte datos maestros", route: "/reportes", icon: "face" };
    this.datos.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar datos maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar datos maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }

   }

 }

}

 //carga permiso 11----------
 almacen =[];
 cargarpermiso11() {
  var centrostr = this.permisos.perAlmacenes;
  var array = centrostr.split("");
  //console.log('carga', array);

  if (array[0] == "1") {
     var create = {name: "Crear almacén", route:"/crearalmacen", icon:"store"};
   this.almacen.push(create);

   if (array[1] == "1") {
     var create = {name: "Modificar almacén", route:"/modificaralmacen", icon:"store"};
   this.almacen.push(create);
     if (array[2] == "1") {
            if (array[3] == "1") {
         var create = {name: "Reporte almacén", route:"/reportealmacen", icon:"list_alt"};
   this.almacen.push(create);
         if (array[4] == "1") {
           var create = {name: "Inhabilitar almacén", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = {name: "Inhabilitar almacén", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = {name: "Reporte almacén", route:"/reportealmacen", icon:"list_alt"};
   this.almacen.push(create);
         if (array[4] == "1") {
           var create = {name: "Inhabilitar almacén", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = {name: "Inhabilitar almacén", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }

   }
   else if (array[1] == "0") {
     

     if (array[2] == "1") {
       

       if (array[3] == "1") {
         var create = {name: "Reporte almacén", route:"/reportealmacen", icon:"list_alt"};
   this.almacen.push(create);
         if (array[4] == "1") {
           var create = {name: "Inhabilitar almacén", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = {name: "Inhabilitar almacén", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
        var create = {name: "Reporte almacén", route:"/reportealmacen", icon:"list_alt"};
   this.almacen.push(create);
         if (array[4] == "1") {
           var create = {name: "Inhabilitar almacén", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = {name: "Inhabilitar almacén", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }


   }

 }
 else if (array[0] == "0") {
   
   if (array[1] == "1") {
     var create = {name: "Modificar almacén", route:"/modificaralmacen", icon:"store"};
   this.almacen.push(create);
     if (array[2] == "1") {
       

       if (array[3] == "1") {
         var create = {name: "Reporte almacén", route:"/reportealmacen", icon:"list_alt"};
   this.almacen.push(create);
         if (array[4] == "1") {
           var create = {name: "Inhabilitar almacén", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = {name: "Inhabilitar almacén", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = {name: "Reporte almacén", route:"/reportealmacen", icon:"list_alt"};
   this.almacen.push(create);
         if (array[4] == "1") {
           var create = {name: "Inhabilitar almacén", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = {name: "Inhabilitar almacén", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }

   }
   else if (array[1] == "0") {
     

     if (array[2] == "1") {
       

       if (array[3] == "1") {
         var create = {name: "Reporte almacén", route:"/reportealmacen", icon:"list_alt"};
   this.almacen.push(create);
         if (array[4] == "1") {
           var create = {name: "Inhabilitar almacén", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = {name: "Inhabilitar almacén", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = {name: "Reporte almacén", route:"/reportealmacen", icon:"list_alt"};
   this.almacen.push(create);
         if (array[4] == "1") {
           var create = {name: "Inhabilitar almacén", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = {name: "Inhabilitar almacén", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }

   }

 }

}


}
