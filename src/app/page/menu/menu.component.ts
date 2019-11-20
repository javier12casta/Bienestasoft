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
      var create = { name: "Crear Centro Zonal", route: "/centrozonali", icon: "public" };
      this.estructura.push(create);
      if (array[1] == "1") {
        var create = { name: "Modificar Centro Zonal", route: "/centrozonal", icon: "public" };
        this.estructura.push(create);

        if (array[2] == "1") {
          if (array[3] == "1") {
            var create = { name: "Reporte centrozonal", route: "/reportecentrozonal", icon: "public" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar centrozonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar centrozonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte centrozonal", route: "/reportecentrozonal", icon: "public" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar centrozonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar centrozonal", route: "/centrozonalin", icon: "public" };
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
            var create = { name: "Reporte centrozonal", route: "/reportecentrozonal", icon: "public" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar centrozonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar centrozonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }

        }
        else if (array[2] == "0") {

          if (array[3] == "1") {
            var create = { name: "Reporte centrozonal", route: "/reportecentrozonal", icon: "public" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar centrozonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {
            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar centrozonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {
            }
          }

        }


      }

    } else if (array[0] == "0") {

      if (array[1] == "1") {
        var create = { name: "Actualizar Centro Zonal", route: "/centrozonal", icon: "public" };
        this.estructura.push(create);

        if (array[2] == "1") {
          if (array[3] == "1") {
            var create = { name: "Reporte centrozonal", route: "/reportecentrozonal", icon: "list_alt" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar centrozonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar centrozonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte centrozonal", route: "/reportecentrozonal", icon: "list_alt" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar centrozonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar centrozonal", route: "/centrozonalin", icon: "public" };
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
            var create = { name: "Reporte centrozonal", route: "/reportecentrozonal", icon: "list_alt" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar centrozonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar centrozonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }

        }
        else if (array[2] == "0") {

          if (array[3] == "1") {
            var create = { name: "Reporte centrozonal", route: "/reportecentrozonal", icon: "list_alt" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar centrozonal", route: "/centrozonalin", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {
            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar centrozonal", route: "/centrozonalin", icon: "public" };
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
      var create = { name: "Crear Punto Entrega", route: "/puntoentregai", icon: "public" };
      this.estructura.push(create);
      if (array[1] == "1") {
        var create = { name: "Modificar Punto Entrega", route: "/puntoentrega", icon: "public" };
        this.estructura.push(create);
        if (array[2] == "1") {
          if (array[3] == "1") {

            var create = { name: "Reporte Punto Entrega", route: "/reportepuntoentrega", icon: "face" };
            this.estructura.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar Punto Entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar Punto Entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {


            var create = { name: "Reporte Punto Entrega", route: "/reportepuntoentrega", icon: "face" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar Punto Entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar Punto Entrega", route: "/puntoentregain", icon: "public" };
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


            var create = { name: "Reporte Punto Entrega", route: "/reportepuntoentrega", icon: "face" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar Punto Entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar Punto Entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }

          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {


            var create = { name: "Reporte Punto Entrega", route: "/reportepuntoentrega", icon: "face" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar Punto Entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar Punto Entrega", route: "/puntoentregain", icon: "public" };
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
        var create = { name: "Modificar Punto Entrega", route: "/puntoentrega", icon: "public" };
        this.estructura.push(create);

        if (array[2] == "1") {


          if (array[3] == "1") {


            var create = { name: "Reporte Punto Entrega", route: "/reportepuntoentrega", icon: "face" };
            this.estructura.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar Punto Entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }
          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar Punto Entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {


            var create = { name: "Reporte Punto Entrega", route: "/reportepuntoentrega", icon: "face" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar Punto Entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar Punto Entrega", route: "/puntoentregain", icon: "public" };
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


            var create = { name: "Reporte Punto Entrega", route: "/reportepuntoentrega", icon: "face" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar Punto Entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar Punto Entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {


            var create = { name: "Reporte Punto Entrega", route: "/reportepuntoentrega", icon: "face" };
            this.estructura.push(create);

            if (array[4] == "1") {
              var create = { name: "Inhabilitar Punto Entrega", route: "/puntoentregain", icon: "public" };
              this.estructura.push(create);

            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar Punto Entrega", route: "/puntoentregain", icon: "public" };
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
      var create = { name: "Crear UDS", route: "/udsi", icon: "public" };
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
        var create = { name: "Modificar Usuarios", route: "/modificarusuarios", icon: "face" };
        this.Usuarios.push(create);


        if (array[2] == "1") {


          if (array[3] == "1") {
            var create = { name: "Reporte Usuarios", route: "/reporteusuarios", icon: "face" };
              this.Usuarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar Usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar Usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte Usuarios", route: "/reporteusuarios", icon: "face" };
              this.Usuarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar Usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar Usuarios", route: "/inhabilitarusuarios", icon: "face" };
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
            var create = { name: "Reporte Usuarios", route: "/reporteusuarios", icon: "face" };
              this.Usuarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar Usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar Usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte Usuarios", route: "/reporteusuarios", icon: "face" };
              this.Usuarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar Usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar Usuarios", route: "/inhabilitarusuarios", icon: "face" };
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
        var create = { name: "Modificar Usuarios", route: "/modificarusuarios", icon: "face" };
        this.Usuarios.push(create);

        if (array[2] == "1") {


          if (array[3] == "1") {
            var create = { name: "Reporte Usuarios", route: "/reporteusuarios", icon: "face" };
              this.Usuarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar Usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar Usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte Usuarios", route: "/reporteusuarios", icon: "face" };
              this.Usuarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar Usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar Usuarios", route: "/inhabilitarusuarios", icon: "face" };
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
            var create = { name: "Reporte Usuarios", route: "/reporteusuarios", icon: "face" };
              this.Usuarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar Usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar Usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte Usuarios", route: "/reporteusuarios", icon: "face" };
              this.Usuarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar Usuarios", route: "/inhabilitarusuarios", icon: "face" };
this.Usuarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar Usuarios", route: "/inhabilitarusuarios", icon: "face" };
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
      var create = { name: "acudientes", route: "/acudientes", icon: "face" };
      this.beneficiarios.push(create);
      var create = { name: "Crear beneficiarios ICBF", route: "/datosgeneralesbeneficiario", icon: "face" };
      this.beneficiarios.push(create);

      if (array[1] == "1") {
        var create = { name: "Modificar beneficiarios ICBF ", route: "/ModificarBeneficiario", icon: "face" };
        this.beneficiarios.push(create);

        if (array[2] == "1") {


          if (array[3] == "1") {
            var create = { name: "Reporte beneficiarios ICBF", route: "/reportebeneficiario", icon: "face" };
              this.beneficiarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ICBF", route: "/InhabilitarBeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ICBF", route: "/InhabilitarBeneficiario", icon: "face" };
this.beneficiarios.push(create);

            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte beneficiarios ICBF", route: "/reportebeneficiario", icon: "face" };
              this.beneficiarios.push(create);



            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ICBF", route: "/InhabilitarBeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ICBF", route: "/InhabilitarBeneficiario", icon: "face" };
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
            var create = { name: "Reporte beneficiarios ICBF", route: "/reportebeneficiario", icon: "face" };
              this.beneficiarios.push(create);



            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ICBF", route: "/InhabilitarBeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ICBF", route: "/InhabilitarBeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte beneficiarios ICBF", route: "/reportebeneficiario", icon: "face" };
              this.beneficiarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ICBF", route: "/InhabilitarBeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ICBF", route: "/InhabilitarBeneficiario", icon: "face" };
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
        var create = { name: "Modificar beneficiarios ICBF ", route: "/ModificarBeneficiario", icon: "face" };
        this.beneficiarios.push(create);

        if (array[2] == "1") {


          if (array[3] == "1") {
            var create = { name: "Reporte beneficiarios ICBF", route: "/reportebeneficiario", icon: "face" };
              this.beneficiarios.push(create);


            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ICBF", route: "/InhabilitarBeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ICBF", route: "/InhabilitarBeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte beneficiarios ICBF", route: "/reportebeneficiario", icon: "face" };
              this.beneficiarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ICBF", route: "/InhabilitarBeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ICBF", route: "/InhabilitarBeneficiario", icon: "face" };
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
            var create = { name: "Reporte beneficiarios ICBF", route: "/reportebeneficiario", icon: "face" };
              this.beneficiarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ICBF", route: "/InhabilitarBeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ICBF", route: "/InhabilitarBeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }
          }

        }
        else if (array[2] == "0") {


          if (array[3] == "1") {
            var create = { name: "Reporte beneficiarios ICBF", route: "/reportebeneficiario", icon: "face" };
              this.beneficiarios.push(create);
            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ICBF", route: "/InhabilitarBeneficiario", icon: "face" };
this.beneficiarios.push(create);
            }
            else if (array[4] == "0") {

            }

          }
          else if (array[3] == "0") {


            if (array[4] == "1") {
              var create = { name: "Inhabilitar beneficiarios ICBF", route: "/InhabilitarBeneficiario", icon: "face" };
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
var create = { name: "Recepcion", route: "/recepcion", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "devoluciones", route: "/devoluciones", icon: "list_alt" };
     this.entrega.push(create);
      if (array[1] == "1") {
        

        if (array[2] == "1") {
          

          if (array[3] == "1") {
            var create = { name: "Reporte devoluciones", route: "/reportedevolucion", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte Entrega", route: "/reportentregab", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte Recepcion", route: "/reporterecepcion", icon: "list_alt" };
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
var create = { name: "Reporte Entrega", route: "/reportentregab", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte Recepcion", route: "/reporterecepcion", icon: "list_alt" };
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
var create = { name: "Reporte Entrega", route: "/reportentregab", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte Recepcion", route: "/reporterecepcion", icon: "list_alt" };
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
var create = { name: "Reporte Entrega", route: "/reportentregab", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte Recepcion", route: "/reporterecepcion", icon: "list_alt" };
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
var create = { name: "Reporte Entrega", route: "/reportentregab", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte Recepcion", route: "/reporterecepcion", icon: "list_alt" };
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
var create = { name: "Reporte Entrega", route: "/reportentregab", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte Recepcion", route: "/reporterecepcion", icon: "list_alt" };
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
var create = { name: "Reporte Entrega", route: "/reportentregab", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte Recepcion", route: "/reporterecepcion", icon: "list_alt" };
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
var create = { name: "Reporte Entrega", route: "/reportentregab", icon: "list_alt" };
     this.entrega.push(create);
var create = { name: "Reporte Recepcion", route: "/reporterecepcion", icon: "list_alt" };
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
    var create = { name: "Crear Centro Distribucion", route: "/centrodistribucion", icon: "face" };
     this.centrod.push(create);
    if (array[1] == "1") {
      var create = { name: "Modificar Centro Distribucion", route: "/modificarcentrod", icon: "face" };
     this.centrod.push(create);
      if (array[2] == "1") {
        

        if (array[3] == "1") {
          var create = { name: "Reporte Centro Distribucion", route: "/reportecentrodistribucion", icon: "face" };
     this.centrod.push(create);
          if (array[4] == "1") {
            var create = { name: "Inhabilitar Centro Distribucion", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }

        }
        else if (array[3] == "0") {
          

          if (array[4] == "1") {
            var create = { name: "Inhabilitar Centro Distribucion", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }
        }

      }
      else if (array[2] == "0") {
        

        if (array[3] == "1") {
          var create = { name: "Reporte Centro Distribucion", route: "/reportecentrodistribucion", icon: "face" };
     this.centrod.push(create);
          if (array[4] == "1") {
            var create = { name: "Inhabilitar Centro Distribucion", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }

        }
        else if (array[3] == "0") {
          

          if (array[4] == "1") {
            var create = { name: "Inhabilitar Centro Distribucion", route: "/inhabilitarcentrod", icon: "face" };
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
          var create = { name: "Reporte Centro Distribucion", route: "/reportecentrodistribucion", icon: "face" };
     this.centrod.push(create);
          if (array[4] == "1") {
            var create = { name: "Inhabilitar Centro Distribucion", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }

        }
        else if (array[3] == "0") {
          

          if (array[4] == "1") {
            var create = { name: "Inhabilitar Centro Distribucion", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }

        }

      }
      else if (array[2] == "0") {
        

        if (array[3] == "1") {
          var create = { name: "Reporte Centro Distribucion", route: "/reportecentrodistribucion", icon: "face" };
     this.centrod.push(create);
          if (array[4] == "1") {
            var create = { name: "Inhabilitar Centro Distribucion", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }

        }
        else if (array[3] == "0") {
          

          if (array[4] == "1") {
            var create = { name: "Inhabilitar Centro Distribucion", route: "/inhabilitarcentrod", icon: "face" };
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
      var create = { name: "Modificar Centro Distribucion", route: "/modificarcentrod", icon: "face" };
     this.centrod.push(create);
      if (array[2] == "1") {
        

        if (array[3] == "1") {
          var create = { name: "Reporte Centro Distribucion", route: "/reportecentrodistribucion", icon: "face" };
     this.centrod.push(create);
          if (array[4] == "1") {
            var create = { name: "Inhabilitar Centro Distribucion", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }
        }
        else if (array[3] == "0") {
          

          if (array[4] == "1") {
            var create = { name: "Inhabilitar Centro Distribucion", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }
        }

      }
      else if (array[2] == "0") {
        

        if (array[3] == "1") {
          var create = { name: "Reporte Centro Distribucion", route: "/reportecentrodistribucion", icon: "face" };
     this.centrod.push(create);
          if (array[4] == "1") {
            var create = { name: "Inhabilitar Centro Distribucion", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }

        }
        else if (array[3] == "0") {
          

          if (array[4] == "1") {
            var create = { name: "Inhabilitar Centro Distribucion", route: "/inhabilitarcentrod", icon: "face" };
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
          var create = { name: "Reporte Centro Distribucion", route: "/reportecentrodistribucion", icon: "face" };
     this.centrod.push(create);
          if (array[4] == "1") {
            var create = { name: "Inhabilitar Centro Distribucion", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }

        }
        else if (array[3] == "0") {
          

          if (array[4] == "1") {
            var create = { name: "Inhabilitar Centro Distribucion", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }
        }

      }
      else if (array[2] == "0") {
        

        if (array[3] == "1") {
          var create = { name: "Reporte Centro Distribucion", route: "/reportecentrodistribucion", icon: "face" };
     this.centrod.push(create);
          if (array[4] == "1") {
            var create = { name: "Inhabilitar Centro Distribucion", route: "/inhabilitarcentrod", icon: "face" };
     this.centrod.push(create);
          }
          else if (array[4] == "0") {
            
          }

        }
        else if (array[3] == "0") {
          

          if (array[4] == "1") {
            var create = { name: "Inhabilitar Centro Distribucion", route: "/inhabilitarcentrod", icon: "face" };
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
         var create = { name: "Reporte Inventario", route: "/reporteinventario", icon: "store" };
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
         var create = { name: "Reporte Inventario", route: "/reporteinventario", icon: "store" };
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
         var create = { name: "Reporte Inventario", route: "/reporteinventario", icon: "store" };
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
         var create = { name: "Reporte Inventario", route: "/reporteinventario", icon: "store" };
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
         var create = { name: "Reporte Inventario", route: "/reporteinventario", icon: "store" };
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
         var create = { name: "Reporte Inventario", route: "/reporteinventario", icon: "store" };
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
         var create = { name: "Reporte Inventario", route: "/reporteinventario", icon: "store" };
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
         var create = { name: "Reporte Inventario", route: "/reporteinventario", icon: "store" };
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
     var create = { name: "Crear Rol", route: "/rol", icon: "face" };
     this.rol.push(create);
   if (array[1] == "1") {
     var create = { name: "Modificar Rol", route: "/roli", icon: "face" };
     this.rol.push(create);


     if (array[2] == "1") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte Rol", route: "/reporterol", icon: "face" };
     this.rol.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar Rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar Rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte Rol", route: "/reporterol", icon: "face" };
     this.rol.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar Rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar Rol", route: "/rolin", icon: "face" };
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
         var create = { name: "Reporte Rol", route: "/reporterol", icon: "face" };
     this.rol.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar Rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar Rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte Rol", route: "/reporterol", icon: "face" };
     this.rol.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar Rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar Rol", route: "/rolin", icon: "face" };
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
     var create = { name: "Modificar Rol", route: "/roli", icon: "face" };
     this.rol.push(create);

     if (array[2] == "1") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte Rol", route: "/reporterol", icon: "face" };
     this.rol.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar Rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar Rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte Rol", route: "/reporterol", icon: "face" };
     this.rol.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar Rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar Rol", route: "/rolin", icon: "face" };
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
         var create = { name: "Reporte Rol", route: "/reporterol", icon: "face" };
     this.rol.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar Rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar Rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte Rol", route: "/reporterol", icon: "face" };
     this.rol.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar Rol", route: "/rolin", icon: "face" };
     this.rol.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar Rol", route: "/rolin", icon: "face" };
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
     var create = { name: "Crear Datos Maestros", route: "/listamaestros", icon: "face" };
    this.datos.push(create);
   if (array[1] == "1") {
     var create = { name: "Modificar Datos Maestros", route: "/modificarlistamaestro", icon: "face" };
    this.datos.push(create);
     if (array[2] == "1") {        
       if (array[3] == "1") {
         var create = { name: "Reporte Datos Maestros", route: "/reportes", icon: "face" };
    this.datos.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar Datos Maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar Datos Maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte Datos Maestros", route: "/reportes", icon: "face" };
    this.datos.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar Datos Maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar Datos Maestros", route: "/listamaestrosinhabilitar", icon: "face" };
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
         var create = { name: "Reporte Datos Maestros", route: "/reportes", icon: "face" };
    this.datos.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar Datos Maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar Datos Maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte Datos Maestros", route: "/reportes", icon: "face" };
    this.datos.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar Datos Maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar Datos Maestros", route: "/listamaestrosinhabilitar", icon: "face" };
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
     var create = { name: "Modificar Datos Maestros", route: "/modificarlistamaestro", icon: "face" };
    this.datos.push(create);
     if (array[2] == "1") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte Datos Maestros", route: "/reportes", icon: "face" };
    this.datos.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar Datos Maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar Datos Maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte Datos Maestros", route: "/reportes", icon: "face" };
    this.datos.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar Datos Maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar Datos Maestros", route: "/listamaestrosinhabilitar", icon: "face" };
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
         var create = { name: "Reporte Datos Maestros", route: "/reportes", icon: "face" };
    this.datos.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar Datos Maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar Datos Maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = { name: "Reporte Datos Maestros", route: "/reportes", icon: "face" };
    this.datos.push(create);
         if (array[4] == "1") {
           var create = { name: "Inhabilitar Datos Maestros", route: "/listamaestrosinhabilitar", icon: "face" };
    this.datos.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = { name: "Inhabilitar Datos Maestros", route: "/listamaestrosinhabilitar", icon: "face" };
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
     var create = {name: "Crear Almacen", route:"/almacenci", icon:"store"};
   this.almacen.push(create);

   if (array[1] == "1") {
     var create = {name: "Modificar Almacen", route:"/modificaralmacen", icon:"store"};
   this.almacen.push(create);
     if (array[2] == "1") {
            if (array[3] == "1") {
         var create = {name: "Reporte Almacen", route:"/reportealmacen", icon:"list_alt"};
   this.almacen.push(create);
         if (array[4] == "1") {
           var create = {name: "Inhabilitar Almacen", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = {name: "Inhabilitar Almacen", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = {name: "Reporte Almacen", route:"/reportealmacen", icon:"list_alt"};
   this.almacen.push(create);
         if (array[4] == "1") {
           var create = {name: "Inhabilitar Almacen", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = {name: "Inhabilitar Almacen", route:"/inhabilitaralmacen", icon:"store"};
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
         var create = {name: "Reporte Almacen", route:"/reportealmacen", icon:"list_alt"};
   this.almacen.push(create);
         if (array[4] == "1") {
           var create = {name: "Inhabilitar Almacen", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = {name: "Inhabilitar Almacen", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
        var create = {name: "Reporte Almacen", route:"/reportealmacen", icon:"list_alt"};
   this.almacen.push(create);
         if (array[4] == "1") {
           var create = {name: "Inhabilitar Almacen", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = {name: "Inhabilitar Almacen", route:"/inhabilitaralmacen", icon:"store"};
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
     var create = {name: "Modificar Almacen", route:"/modificaralmacen", icon:"store"};
   this.almacen.push(create);
     if (array[2] == "1") {
       

       if (array[3] == "1") {
         var create = {name: "Reporte Almacen", route:"/reportealmacen", icon:"list_alt"};
   this.almacen.push(create);
         if (array[4] == "1") {
           var create = {name: "Inhabilitar Almacen", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = {name: "Inhabilitar Almacen", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = {name: "Reporte Almacen", route:"/reportealmacen", icon:"list_alt"};
   this.almacen.push(create);
         if (array[4] == "1") {
           var create = {name: "Inhabilitar Almacen", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = {name: "Inhabilitar Almacen", route:"/inhabilitaralmacen", icon:"store"};
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
         var create = {name: "Reporte Almacen", route:"/reportealmacen", icon:"list_alt"};
   this.almacen.push(create);
         if (array[4] == "1") {
           var create = {name: "Inhabilitar Almacen", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = {name: "Inhabilitar Almacen", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }
       }

     }
     else if (array[2] == "0") {
       

       if (array[3] == "1") {
         var create = {name: "Reporte Almacen", route:"/reportealmacen", icon:"list_alt"};
   this.almacen.push(create);
         if (array[4] == "1") {
           var create = {name: "Inhabilitar Almacen", route:"/inhabilitaralmacen", icon:"store"};
   this.almacen.push(create);
         }
         else if (array[4] == "0") {
           
         }

       }
       else if (array[3] == "0") {
         

         if (array[4] == "1") {
           var create = {name: "Inhabilitar Almacen", route:"/inhabilitaralmacen", icon:"store"};
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
