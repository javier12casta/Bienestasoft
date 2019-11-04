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
    idPersonalICBF: null,
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
    PerMaestros: '',
    idRol: 1,
    perAlmacenes: '',
    perCentrosD: '',
  };

  // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  estructura = [
    { name: "centrozonal", route: "/centrozonal", icon: "public" },
    { name: "puntoentrega", route: "/puntoentrega", icon: "public" },
    { name: "uds", route: "/uds", icon: "public" },
    { name: "Reporte centrozonal", route: "/reportecentrozonal", icon: "public" },
    { name: "Reporte Punto Entrega", route: "/reportepuntoentrega", icon: "face" },
    { name: "Reporte Unidad de servicio", route: "/reporteuds", icon: "face" },

  ];
  entrega = [
    { name: "Entrega", route: "/entrega", icon: "list_alt" },
    { name: "Reporte Entrega", route: "/reportentregab", icon: "list_alt" },
    { name: "Inventario", route: "/inventario", icon: "store" },
    { name: "Reporte Inventario", route: "/reporteinventario", icon: "store" },
    { name: "Recepcion", route: "/recepcion", icon: "list_alt" },

  ];
  beneficiarios = [

    { name: "acudientes", route: "/acudientes", icon: "face" },
    { name: "Crear beneficiarios ICBF", route: "/beneficiarios", icon: "face" },
    { name: "Modificar beneficiarios ICBF ", route: "/ModificarBeneficiario", icon: "face" },
    { name: "Inhabilitar beneficiarios ICBF", route: "/InhabilitarBeneficiario", icon: "face" },
    { name: "Reporte beneficiarios ICBF", route: "/reportebeneficiario", icon: "face" },


  ];

  rol = [

    { name: "rol", route: "/rol", icon: "face" },
    { name: "Modificar rol", route: "/roli", icon: "face" },
    { name: "Reporte Rol", route: "/reporterol", icon: "face" },
  ];

  Usuarios = [

    { name: "Crear usuarios", route: "/usuarios", icon: "face" },
    { name: "Modificar Usuarios", route: "/modificarusuarios", icon: "face" },
    { name: "Inhabilitar Usuarios", route: "/inhabilitarusuarios", icon: "face" },
    { name: "Reporte Usuarios", route: "/reporteusuarios", icon: "face" },

  ];

  datos = [

    { name: "Crear Datos Maestros", route: "/listamaestros", icon: "face" },
    { name: "Modificar Datos Maestros", route: "/modificarlistamaestro", icon: "face" },
    { name: "Inhabilitar Datos Maestros", route: "/listamaestrosinhabilitar", icon: "face" },
    { name: "Reporte Datos Maestros", route: "/reportes", icon: "face" },
  ];


  centrod = [


    { name: "Crear Centro Distribucion", route: "/centrodistribucion", icon: "face" },
    { name: "Modificar Centro Distribucion", route: "/modificarcentrod", icon: "face" },
    { name: "Inhabilitar Centro Distribucion", route: "/inhabilitarcentrod", icon: "face" },
    { name: "Reporte Centro Distribucion", route: "/reportecentrodistribucion", icon: "face" },
  ];

  almacen = [


    { name: "Crear Almacen", route: "/almacen", icon: "face" },
    { name: "Modificar Almacen", route: "/modificaralmacen", icon: "face" },
    { name: "Inhabilitar Almacen", route: "/inhabilitaralmacen", icon: "face" },
    { name: "Reporte Almacen", route: "/reportealmacen", icon: "face" },
  ];


  fillerContent = Array.from({ length: 50 }, () => '');

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
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
  //-----------------------------------------------------------------------------------------------
  estado = 0;
  obtenerStorage() {
    this.user = JSON.parse(localStorage.getItem("persona"));
    console.log(this.user);
    this.estado = 1;
  }


  ngOnInit() {
    this.obtenerStorage();
    if (this.estado == 1) {
      this.Service.getPermisosid(this.user.TipoUsuario).subscribe(res => {
        this.permisos = Object(res);
        console.log('Permiso get', this.permisos);
        // this.cargarpermiso();
        // this.cargarpermiso2();
        // this.cargarpermiso3();
        // this.cargarpermiso4();
        // this.cargarpermiso5();
        // this.cargarpermiso6();
        // this.cargarpermiso7();
        // this.cargarpermiso8();
        // this.cargarpermiso9();
        // this.cargarpermiso10();
        // this.cargarpermiso11();
      }, err => {
        console.log(err)
      });
    }
  }

  /*  
    cargarpermiso() {
      var centrostr = this.permisos.perCentros;
      var array = centrostr.split("");
      //console.log('carga', array);
  
      if (array[0] == "1") {
        this.filter = 1;
  
        if (array[1] == "1") {
          this.filter2 = 1;
  
          if (array[2] == "1") {
            this.filter3 = 1;
  
            if (array[3] == "1") {
              this.filter4 = 1;
  
              if (array[4] == "1") {
                this.filter5 = 1;
              }
              else if (array[4] == "0") {
                this.filter5 = 0;
              }
  
            }
            else if (array[3] == "0") {
              this.filter4 = 0;
  
              if (array[4] == "1") {
                this.filter5 = 1;
              }
              else if (array[4] == "0") {
                this.filter5 = 0;
              }
            }
  
          }
          else if (array[2] == "0") {
            this.filter3 = 0;
  
            if (array[3] == "1") {
              this.filter4 = 1;
  
              if (array[4] == "1") {
                this.filter5 = 1;
              }
              else if (array[4] == "0") {
                this.filter5 = 0;
              }
  
            }
            else if (array[3] == "0") {
              this.filter4 = 0;
  
              if (array[4] == "1") {
                this.filter5 = 1;
              }
              else if (array[4] == "0") {
                this.filter5 = 0;
              }
            }
  
          }
  
        }
        else if (array[1] == "0") {
          this.filter2 = 0;
  
          if (array[2] == "1") {
            this.filter3 = 1;
  
            if (array[3] == "1") {
              this.filter4 = 1;
  
              if (array[4] == "1") {
                this.filter5 = 1;
              }
              else if (array[4] == "0") {
                this.filter5 = 0;
              }
  
            }
            else if (array[3] == "0") {
              this.filter4 = 0;
  
              if (array[4] == "1") {
                this.filter5 = 1;
              }
              else if (array[4] == "0") {
                this.filter5 = 0;
              }
  
            }
  
          }
          else if (array[2] == "0") {
            this.filter3 = 0;
  
            if (array[3] == "1") {
              this.filter4 = 1;
  
              if (array[4] == "1") {
                this.filter5 = 1;
              }
              else if (array[4] == "0") {
                this.filter5 = 0;
              }
  
            }
            else if (array[3] == "0") {
              this.filter4 = 0;
  
              if (array[4] == "1") {
                this.filter5 = 1;
              }
              else if (array[4] == "0") {
                this.filter5 = 0;
              }
            }
  
          }
  
  
        }
  
      }
      else if (array[0] == "0") {
        this.filter = 0;
        if (array[1] == "1") {
          this.filter2 = 1;
          if (array[2] == "1") {
            this.filter3 = 1;
  
            if (array[3] == "1") {
              this.filter4 = 1;
              if (array[4] == "1") {
                this.filter5 = 1;
              }
              else if (array[4] == "0") {
                this.filter5 = 0;
              }
            }
            else if (array[3] == "0") {
              this.filter4 = 0;
  
              if (array[4] == "1") {
                this.filter5 = 1;
              }
              else if (array[4] == "0") {
                this.filter5 = 0;
              }
            }
  
          }
          else if (array[2] == "0") {
            this.filter3 = 0;
  
            if (array[3] == "1") {
              this.filter4 = 1;
  
              if (array[4] == "1") {
                this.filter5 = 1;
              }
              else if (array[4] == "0") {
                this.filter5 = 0;
              }
  
            }
            else if (array[3] == "0") {
              this.filter4 = 0;
  
              if (array[4] == "1") {
                this.filter5 = 1;
              }
              else if (array[4] == "0") {
                this.filter5 = 0;
              }
            }
  
          }
  
        }
        else if (array[1] == "0") {
          this.filter2 = 0;
  
          if (array[2] == "1") {
            this.filter3 = 1;
  
            if (array[3] == "1") {
              this.filter4 = 1;
  
              if (array[4] == "1") {
                this.filter5 = 1;
              }
              else if (array[4] == "0") {
                this.filter5 = 0;
              }
  
            }
            else if (array[3] == "0") {
              this.filter4 = 0;
  
              if (array[4] == "1") {
                this.filter5 = 1;
              }
              else if (array[4] == "0") {
                this.filter5 = 0;
              }
            }
  
          }
          else if (array[2] == "0") {
            this.filter3 = 0;
  
            if (array[3] == "1") {
              this.filter4 = 1;
  
              if (array[4] == "1") {
                this.filter5 = 1;
              }
              else if (array[4] == "0") {
                this.filter5 = 0;
              }
  
            }
            else if (array[3] == "0") {
              this.filter4 = 0;
  
              if (array[4] == "1") {
                this.filter5 = 1;
              }
              else if (array[4] == "0") {
                this.filter5 = 0;
              }
            }
  
          }
  
        }
  
      }
  
    } */

  /* 
  //---2 carga
  cargarpermiso2() {
    var centrostr = this.permisos.perPuntoen;
    var array = centrostr.split("");
    //console.log('carga', array);

    if (array[0] == "1") {
      this.filter6 = 1;

      if (array[1] == "1") {
        this.filter7 = 1;

        if (array[2] == "1") {
          this.filter8 = 1;

          if (array[3] == "1") {
            this.filter9 = 1;

            if (array[4] == "1") {
              this.filter10 = 1;
            }
            else if (array[4] == "0") {
              this.filter10 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter9 = 0;

            if (array[4] == "1") {
              this.filter10 = 1;
            }
            else if (array[4] == "0") {
              this.filter10 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter8 = 0;

          if (array[3] == "1") {
            this.filter9 = 1;

            if (array[4] == "1") {
              this.filter10 = 1;
            }
            else if (array[4] == "0") {
              this.filter10 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter9 = 0;

            if (array[4] == "1") {
              this.filter10 = 1;
            }
            else if (array[4] == "0") {
              this.filter10 = 0;
            }
          }

        }

      }
      else if (array[1] == "0") {
        this.filter7 = 0;

        if (array[2] == "1") {
          this.filter8 = 1;

          if (array[3] == "1") {
            this.filter9 = 1;

            if (array[4] == "1") {
              this.filter10 = 1;
            }
            else if (array[4] == "0") {
              this.filter10 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter9 = 0;

            if (array[4] == "1") {
              this.filter10 = 1;
            }
            else if (array[4] == "0") {
              this.filter10 = 0;
            }

          }

        }
        else if (array[2] == "0") {
          this.filter8 = 0;

          if (array[3] == "1") {
            this.filter9 = 1;

            if (array[4] == "1") {
              this.filter10 = 1;
            }
            else if (array[4] == "0") {
              this.filter10 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter9 = 0;

            if (array[4] == "1") {
              this.filter10 = 1;
            }
            else if (array[4] == "0") {
              this.filter10 = 0;
            }
          }

        }


      }

    }
    else if (array[0] == "0") {
      this.filter6 = 0;
      if (array[1] == "1") {
        this.filter7 = 1;
        if (array[2] == "1") {
          this.filter8 = 1;

          if (array[3] == "1") {
            this.filter9 = 1;
            if (array[4] == "1") {
              this.filter10 = 1;
            }
            else if (array[4] == "0") {
              this.filter10 = 0;
            }
          }
          else if (array[3] == "0") {
            this.filter9 = 0;

            if (array[4] == "1") {
              this.filter10 = 1;
            }
            else if (array[4] == "0") {
              this.filter10 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter8 = 0;

          if (array[3] == "1") {
            this.filter9 = 1;

            if (array[4] == "1") {
              this.filter10 = 1;
            }
            else if (array[4] == "0") {
              this.filter10 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter9 = 0;

            if (array[4] == "1") {
              this.filter10 = 1;
            }
            else if (array[4] == "0") {
              this.filter10 = 0;
            }
          }

        }

      }
      else if (array[1] == "0") {
        this.filter7 = 0;

        if (array[2] == "1") {
          this.filter8 = 1;

          if (array[3] == "1") {
            this.filter9 = 1;

            if (array[4] == "1") {
              this.filter10 = 1;
            }
            else if (array[4] == "0") {
              this.filter10 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter9 = 0;

            if (array[4] == "1") {
              this.filter10 = 1;
            }
            else if (array[4] == "0") {
              this.filter10 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter8 = 0;

          if (array[3] == "1") {
            this.filter9 = 1;

            if (array[4] == "1") {
              this.filter10 = 1;
            }
            else if (array[4] == "0") {
              this.filter10 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter9 = 0;

            if (array[4] == "1") {
              this.filter10 = 1;
            }
            else if (array[4] == "0") {
              this.filter10 = 0;
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
      this.filter11 = 1;

      if (array[1] == "1") {
        this.filter12 = 1;

        if (array[2] == "1") {
          this.filter13 = 1;

          if (array[3] == "1") {
            this.filter14 = 1;

            if (array[4] == "1") {
              this.filter15 = 1;
            }
            else if (array[4] == "0") {
              this.filter15 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter14 = 0;

            if (array[4] == "1") {
              this.filter15 = 1;
            }
            else if (array[4] == "0") {
              this.filter15 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter13 = 0;

          if (array[3] == "1") {
            this.filter14 = 1;

            if (array[4] == "1") {
              this.filter15 = 1;
            }
            else if (array[4] == "0") {
              this.filter15 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter14 = 0;

            if (array[4] == "1") {
              this.filter15 = 1;
            }
            else if (array[4] == "0") {
              this.filter15 = 0;
            }
          }

        }

      }
      else if (array[1] == "0") {
        this.filter12 = 0;

        if (array[2] == "1") {
          this.filter13 = 1;

          if (array[3] == "1") {
            this.filter14 = 1;

            if (array[4] == "1") {
              this.filter15 = 1;
            }
            else if (array[4] == "0") {
              this.filter15 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter14 = 0;

            if (array[4] == "1") {
              this.filter15 = 1;
            }
            else if (array[4] == "0") {
              this.filter15 = 0;
            }

          }

        }
        else if (array[2] == "0") {
          this.filter13 = 0;

          if (array[3] == "1") {
            this.filter14 = 1;

            if (array[4] == "1") {
              this.filter15 = 1;
            }
            else if (array[4] == "0") {
              this.filter15 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter14 = 0;

            if (array[4] == "1") {
              this.filter15 = 1;
            }
            else if (array[4] == "0") {
              this.filter15 = 0;
            }
          }

        }


      }

    }
    else if (array[0] == "0") {
      this.filter11 = 0;
      if (array[1] == "1") {
        this.filter12 = 1;
        if (array[2] == "1") {
          this.filter13 = 1;

          if (array[3] == "1") {
            this.filter14 = 1;
            if (array[4] == "1") {
              this.filter15 = 1;
            }
            else if (array[4] == "0") {
              this.filter15 = 0;
            }
          }
          else if (array[3] == "0") {
            this.filter14 = 0;

            if (array[4] == "1") {
              this.filter15 = 1;
            }
            else if (array[4] == "0") {
              this.filter15 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter13 = 0;

          if (array[3] == "1") {
            this.filter14 = 1;

            if (array[4] == "1") {
              this.filter15 = 1;
            }
            else if (array[4] == "0") {
              this.filter15 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter14 = 0;

            if (array[4] == "1") {
              this.filter15 = 1;
            }
            else if (array[4] == "0") {
              this.filter15 = 0;
            }
          }

        }

      }
      else if (array[1] == "0") {
        this.filter12 = 0;

        if (array[2] == "1") {
          this.filter13 = 1;

          if (array[3] == "1") {
            this.filter14 = 1;

            if (array[4] == "1") {
              this.filter15 = 1;
            }
            else if (array[4] == "0") {
              this.filter15 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter14 = 0;

            if (array[4] == "1") {
              this.filter15 = 1;
            }
            else if (array[4] == "0") {
              this.filter15 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter13 = 0;

          if (array[3] == "1") {
            this.filter14 = 1;

            if (array[4] == "1") {
              this.filter15 = 1;
            }
            else if (array[4] == "0") {
              this.filter15 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter14 = 0;

            if (array[4] == "1") {
              this.filter15 = 1;
            }
            else if (array[4] == "0") {
              this.filter15 = 0;
            }
          }

        }

      }

    }

  }
  //carga permiso 4-------
  cargarpermiso4() {
    var centrostr = this.permisos.perUsuarios;
    var array = centrostr.split("");
    // console.log('carga', array);

    if (array[0] == "1") {
      this.filter16 = 1;

      if (array[1] == "1") {
        this.filter17 = 1;

        if (array[2] == "1") {
          this.filter18 = 1;

          if (array[3] == "1") {
            this.filter19 = 1;

            if (array[4] == "1") {
              this.filter20 = 1;
            }
            else if (array[4] == "0") {
              this.filter20 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter19 = 0;

            if (array[4] == "1") {
              this.filter20 = 1;
            }
            else if (array[4] == "0") {
              this.filter20 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter18 = 0;

          if (array[3] == "1") {
            this.filter19 = 1;

            if (array[4] == "1") {
              this.filter20 = 1;
            }
            else if (array[4] == "0") {
              this.filter20 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter19 = 0;

            if (array[4] == "1") {
              this.filter20 = 1;
            }
            else if (array[4] == "0") {
              this.filter20 = 0;
            }
          }

        }

      }
      else if (array[1] == "0") {
        this.filter17 = 0;

        if (array[2] == "1") {
          this.filter18 = 1;

          if (array[3] == "1") {
            this.filter19 = 1;

            if (array[4] == "1") {
              this.filter20 = 1;
            }
            else if (array[4] == "0") {
              this.filter20 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter19 = 0;

            if (array[4] == "1") {
              this.filter20 = 1;
            }
            else if (array[4] == "0") {
              this.filter20 = 0;
            }

          }

        }
        else if (array[2] == "0") {
          this.filter18 = 0;

          if (array[3] == "1") {
            this.filter19 = 1;

            if (array[4] == "1") {
              this.filter20 = 1;
            }
            else if (array[4] == "0") {
              this.filter20 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter19 = 0;

            if (array[4] == "1") {
              this.filter20 = 1;
            }
            else if (array[4] == "0") {
              this.filter20 = 0;
            }
          }

        }


      }

    }
    else if (array[0] == "0") {
      this.filter16 = 0;
      if (array[1] == "1") {
        this.filter17 = 1;
        if (array[2] == "1") {
          this.filter18 = 1;

          if (array[3] == "1") {
            this.filter19 = 1;
            if (array[4] == "1") {
              this.filter20 = 1;
            }
            else if (array[4] == "0") {
              this.filter20 = 0;
            }
          }
          else if (array[3] == "0") {
            this.filter19 = 0;

            if (array[4] == "1") {
              this.filter20 = 1;
            }
            else if (array[4] == "0") {
              this.filter20 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter18 = 0;

          if (array[3] == "1") {
            this.filter19 = 1;

            if (array[4] == "1") {
              this.filter20 = 1;
            }
            else if (array[4] == "0") {
              this.filter20 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter19 = 0;

            if (array[4] == "1") {
              this.filter20 = 1;
            }
            else if (array[4] == "0") {
              this.filter20 = 0;
            }
          }

        }

      }
      else if (array[1] == "0") {
        this.filter17 = 0;

        if (array[2] == "1") {
          this.filter18 = 1;

          if (array[3] == "1") {
            this.filter19 = 1;

            if (array[4] == "1") {
              this.filter20 = 1;
            }
            else if (array[4] == "0") {
              this.filter20 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter19 = 0;

            if (array[4] == "1") {
              this.filter20 = 1;
            }
            else if (array[4] == "0") {
              this.filter20 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter18 = 0;

          if (array[3] == "1") {
            this.filter19 = 1;

            if (array[4] == "1") {
              this.filter20 = 1;
            }
            else if (array[4] == "0") {
              this.filter20 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter19 = 0;

            if (array[4] == "1") {
              this.filter20 = 1;
            }
            else if (array[4] == "0") {
              this.filter20 = 0;
            }
          }

        }

      }

    }

  }
  //carga permiso 5 --------
  cargarpermiso5() {
    var centrostr = this.permisos.perBeneficiarios;
    var array = centrostr.split("");
    // console.log('carga', array);

    if (array[0] == "1") {
      this.filter21 = 1;

      if (array[1] == "1") {
        this.filter22 = 1;

        if (array[2] == "1") {
          this.filter23 = 1;

          if (array[3] == "1") {
            this.filter24 = 1;

            if (array[4] == "1") {
              this.filter25 = 1;
            }
            else if (array[4] == "0") {
              this.filter25 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter24 = 0;

            if (array[4] == "1") {
              this.filter25 = 1;
            }
            else if (array[4] == "0") {
              this.filter25 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter23 = 0;

          if (array[3] == "1") {
            this.filter24 = 1;

            if (array[4] == "1") {
              this.filter25 = 1;
            }
            else if (array[4] == "0") {
              this.filter25 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter24 = 0;

            if (array[4] == "1") {
              this.filter25 = 1;
            }
            else if (array[4] == "0") {
              this.filter25 = 0;
            }
          }

        }

      }
      else if (array[1] == "0") {
        this.filter22 = 0;

        if (array[2] == "1") {
          this.filter23 = 1;

          if (array[3] == "1") {
            this.filter24 = 1;

            if (array[4] == "1") {
              this.filter25 = 1;
            }
            else if (array[4] == "0") {
              this.filter25 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter24 = 0;

            if (array[4] == "1") {
              this.filter25 = 1;
            }
            else if (array[4] == "0") {
              this.filter25 = 0;
            }

          }

        }
        else if (array[2] == "0") {
          this.filter23 = 0;

          if (array[3] == "1") {
            this.filter24 = 1;

            if (array[4] == "1") {
              this.filter25 = 1;
            }
            else if (array[4] == "0") {
              this.filter25 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter24 = 0;

            if (array[4] == "1") {
              this.filter25 = 1;
            }
            else if (array[4] == "0") {
              this.filter25 = 0;
            }
          }

        }


      }

    }
    else if (array[0] == "0") {
      this.filter21 = 0;
      if (array[1] == "1") {
        this.filter22 = 1;
        if (array[2] == "1") {
          this.filter23 = 1;

          if (array[3] == "1") {
            this.filter24 = 1;
            if (array[4] == "1") {
              this.filter25 = 1;
            }
            else if (array[4] == "0") {
              this.filter25 = 0;
            }
          }
          else if (array[3] == "0") {
            this.filter24 = 0;

            if (array[4] == "1") {
              this.filter25 = 1;
            }
            else if (array[4] == "0") {
              this.filter25 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter23 = 0;

          if (array[3] == "1") {
            this.filter24 = 1;

            if (array[4] == "1") {
              this.filter25 = 1;
            }
            else if (array[4] == "0") {
              this.filter25 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter24 = 0;

            if (array[4] == "1") {
              this.filter25 = 1;
            }
            else if (array[4] == "0") {
              this.filter25 = 0;
            }
          }

        }

      }
      else if (array[1] == "0") {
        this.filter22 = 0;

        if (array[2] == "1") {
          this.filter23 = 1;

          if (array[3] == "1") {
            this.filter24 = 1;

            if (array[4] == "1") {
              this.filter25 = 1;
            }
            else if (array[4] == "0") {
              this.filter25 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter24 = 0;

            if (array[4] == "1") {
              this.filter25 = 1;
            }
            else if (array[4] == "0") {
              this.filter25 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter23 = 0;

          if (array[3] == "1") {
            this.filter24 = 1;

            if (array[4] == "1") {
              this.filter25 = 1;
            }
            else if (array[4] == "0") {
              this.filter25 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter24 = 0;

            if (array[4] == "1") {
              this.filter25 = 1;
            }
            else if (array[4] == "0") {
              this.filter25 = 0;
            }
          }

        }

      }

    }

  }
  //carga permiso 6----------
  cargarpermiso6() {
    var centrostr = this.permisos.perEntrega;
    var array = centrostr.split("");
    // console.log('carga', array);

    if (array[0] == "1") {
      this.filter26 = 1;

      if (array[1] == "1") {
        this.filter27 = 1;

        if (array[2] == "1") {
          this.filter28 = 1;

          if (array[3] == "1") {
            this.filter29 = 1;

            if (array[4] == "1") {
              this.filter30 = 1;
            }
            else if (array[4] == "0") {
              this.filter30 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter29 = 0;

            if (array[4] == "1") {
              this.filter30 = 1;
            }
            else if (array[4] == "0") {
              this.filter30 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter28 = 0;

          if (array[3] == "1") {
            this.filter29 = 1;

            if (array[4] == "1") {
              this.filter30 = 1;
            }
            else if (array[4] == "0") {
              this.filter30 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter29 = 0;

            if (array[4] == "1") {
              this.filter30 = 1;
            }
            else if (array[4] == "0") {
              this.filter30 = 0;
            }
          }

        }

      }
      else if (array[1] == "0") {
        this.filter27 = 0;

        if (array[2] == "1") {
          this.filter28 = 1;

          if (array[3] == "1") {
            this.filter29 = 1;

            if (array[4] == "1") {
              this.filter30 = 1;
            }
            else if (array[4] == "0") {
              this.filter30 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter29 = 0;

            if (array[4] == "1") {
              this.filter30 = 1;
            }
            else if (array[4] == "0") {
              this.filter30 = 0;
            }

          }

        }
        else if (array[2] == "0") {
          this.filter28 = 0;

          if (array[3] == "1") {
            this.filter29 = 1;

            if (array[4] == "1") {
              this.filter30 = 1;
            }
            else if (array[4] == "0") {
              this.filter30 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter29 = 0;

            if (array[4] == "1") {
              this.filter30 = 1;
            }
            else if (array[4] == "0") {
              this.filter30 = 0;
            }
          }

        }


      }

    }
    else if (array[0] == "0") {
      this.filter26 = 0;
      if (array[1] == "1") {
        this.filter27 = 1;
        if (array[2] == "1") {
          this.filter28 = 1;

          if (array[3] == "1") {
            this.filter29 = 1;
            if (array[4] == "1") {
              this.filter30 = 1;
            }
            else if (array[4] == "0") {
              this.filter30 = 0;
            }
          }
          else if (array[3] == "0") {
            this.filter29 = 0;

            if (array[4] == "1") {
              this.filter30 = 1;
            }
            else if (array[4] == "0") {
              this.filter30 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter28 = 0;

          if (array[3] == "1") {
            this.filter29 = 1;

            if (array[4] == "1") {
              this.filter30 = 1;
            }
            else if (array[4] == "0") {
              this.filter30 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter29 = 0;

            if (array[4] == "1") {
              this.filter30 = 1;
            }
            else if (array[4] == "0") {
              this.filter30 = 0;
            }
          }

        }

      }
      else if (array[1] == "0") {
        this.filter27 = 0;

        if (array[2] == "1") {
          this.filter28 = 1;

          if (array[3] == "1") {
            this.filter29 = 1;

            if (array[4] == "1") {
              this.filter30 = 1;
            }
            else if (array[4] == "0") {
              this.filter30 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter29 = 0;

            if (array[4] == "1") {
              this.filter30 = 1;
            }
            else if (array[4] == "0") {
              this.filter30 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter28 = 0;

          if (array[3] == "1") {
            this.filter29 = 1;

            if (array[4] == "1") {
              this.filter30 = 1;
            }
            else if (array[4] == "0") {
              this.filter30 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter29 = 0;

            if (array[4] == "1") {
              this.filter30 = 1;
            }
            else if (array[4] == "0") {
              this.filter30 = 0;
            }
          }

        }

      }

    }

  }
  //carga permiso 7 ---------
  cargarpermiso7() {
    var centrostr = this.permisos.perCentrosD;
    var array = centrostr.split("");
    //console.log('carga', array);

    if (array[0] == "1") {
      this.filter31 = 1;

      if (array[1] == "1") {
        this.filter32 = 1;

        if (array[2] == "1") {
          this.filter33 = 1;

          if (array[3] == "1") {
            this.filter34 = 1;

            if (array[4] == "1") {
              this.filter35 = 1;
            }
            else if (array[4] == "0") {
              this.filter35 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter34 = 0;

            if (array[4] == "1") {
              this.filter35 = 1;
            }
            else if (array[4] == "0") {
              this.filter35 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter33 = 0;

          if (array[3] == "1") {
            this.filter34 = 1;

            if (array[4] == "1") {
              this.filter35 = 1;
            }
            else if (array[4] == "0") {
              this.filter35 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter34 = 0;

            if (array[4] == "1") {
              this.filter35 = 1;
            }
            else if (array[4] == "0") {
              this.filter35 = 0;
            }
          }

        }

      }
      else if (array[1] == "0") {
        this.filter32 = 0;

        if (array[2] == "1") {
          this.filter33 = 1;

          if (array[3] == "1") {
            this.filter34 = 1;

            if (array[4] == "1") {
              this.filter35 = 1;
            }
            else if (array[4] == "0") {
              this.filter35 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter34 = 0;

            if (array[4] == "1") {
              this.filter35 = 1;
            }
            else if (array[4] == "0") {
              this.filter35 = 0;
            }

          }

        }
        else if (array[2] == "0") {
          this.filter33 = 0;

          if (array[3] == "1") {
            this.filter34 = 1;

            if (array[4] == "1") {
              this.filter35 = 1;
            }
            else if (array[4] == "0") {
              this.filter35 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter34 = 0;

            if (array[4] == "1") {
              this.filter35 = 1;
            }
            else if (array[4] == "0") {
              this.filter35 = 0;
            }
          }

        }


      }

    }
    else if (array[0] == "0") {
      this.filter31 = 0;
      if (array[1] == "1") {
        this.filter32 = 1;
        if (array[2] == "1") {
          this.filter33 = 1;

          if (array[3] == "1") {
            this.filter34 = 1;
            if (array[4] == "1") {
              this.filter35 = 1;
            }
            else if (array[4] == "0") {
              this.filter35 = 0;
            }
          }
          else if (array[3] == "0") {
            this.filter34 = 0;

            if (array[4] == "1") {
              this.filter35 = 1;
            }
            else if (array[4] == "0") {
              this.filter35 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter33 = 0;

          if (array[3] == "1") {
            this.filter34 = 1;

            if (array[4] == "1") {
              this.filter35 = 1;
            }
            else if (array[4] == "0") {
              this.filter35 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter34 = 0;

            if (array[4] == "1") {
              this.filter35 = 1;
            }
            else if (array[4] == "0") {
              this.filter35 = 0;
            }
          }

        }

      }
      else if (array[1] == "0") {
        this.filter32 = 0;

        if (array[2] == "1") {
          this.filter33 = 1;

          if (array[3] == "1") {
            this.filter34 = 1;

            if (array[4] == "1") {
              this.filter35 = 1;
            }
            else if (array[4] == "0") {
              this.filter35 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter34 = 0;

            if (array[4] == "1") {
              this.filter35 = 1;
            }
            else if (array[4] == "0") {
              this.filter35 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter33 = 0;

          if (array[3] == "1") {
            this.filter34 = 1;

            if (array[4] == "1") {
              this.filter35 = 1;
            }
            else if (array[4] == "0") {
              this.filter35 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter34 = 0;

            if (array[4] == "1") {
              this.filter35 = 1;
            }
            else if (array[4] == "0") {
              this.filter35 = 0;
            }
          }

        }

      }

    }

  }
  //carga permiso 8----------
  cargarpermiso8() {
    var centrostr = this.permisos.perInventario;
    var array = centrostr.split("");
    // console.log('carga', array);

    if (array[0] == "1") {
      this.filter36 = 1;

      if (array[1] == "1") {
        this.filter37 = 1;

        if (array[2] == "1") {
          this.filter38 = 1;

          if (array[3] == "1") {
            this.filter39 = 1;

            if (array[4] == "1") {
              this.filter40 = 1;
            }
            else if (array[4] == "0") {
              this.filter40 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter39 = 0;

            if (array[4] == "1") {
              this.filter40 = 1;
            }
            else if (array[4] == "0") {
              this.filter40 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter38 = 0;

          if (array[3] == "1") {
            this.filter39 = 1;

            if (array[4] == "1") {
              this.filter40 = 1;
            }
            else if (array[4] == "0") {
              this.filter40 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter39 = 0;

            if (array[4] == "1") {
              this.filter40 = 1;
            }
            else if (array[4] == "0") {
              this.filter40 = 0;
            }
          }

        }

      }
      else if (array[1] == "0") {
        this.filter37 = 0;

        if (array[2] == "1") {
          this.filter38 = 1;

          if (array[3] == "1") {
            this.filter39 = 1;

            if (array[4] == "1") {
              this.filter40 = 1;
            }
            else if (array[4] == "0") {
              this.filter40 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter39 = 0;

            if (array[4] == "1") {
              this.filter40 = 1;
            }
            else if (array[4] == "0") {
              this.filter40 = 0;
            }

          }

        }
        else if (array[2] == "0") {
          this.filter38 = 0;

          if (array[3] == "1") {
            this.filter39 = 1;

            if (array[4] == "1") {
              this.filter40 = 1;
            }
            else if (array[4] == "0") {
              this.filter40 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter39 = 0;

            if (array[4] == "1") {
              this.filter40 = 1;
            }
            else if (array[4] == "0") {
              this.filter40 = 0;
            }
          }

        }


      }

    }
    else if (array[0] == "0") {
      this.filter36 = 0;
      if (array[1] == "1") {
        this.filter37 = 1;
        if (array[2] == "1") {
          this.filter38 = 1;

          if (array[3] == "1") {
            this.filter39 = 1;
            if (array[4] == "1") {
              this.filter40 = 1;
            }
            else if (array[4] == "0") {
              this.filter40 = 0;
            }
          }
          else if (array[3] == "0") {
            this.filter39 = 0;

            if (array[4] == "1") {
              this.filter40 = 1;
            }
            else if (array[4] == "0") {
              this.filter40 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter38 = 0;

          if (array[3] == "1") {
            this.filter39 = 1;

            if (array[4] == "1") {
              this.filter40 = 1;
            }
            else if (array[4] == "0") {
              this.filter40 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter39 = 0;

            if (array[4] == "1") {
              this.filter40 = 1;
            }
            else if (array[4] == "0") {
              this.filter40 = 0;
            }
          }

        }

      }
      else if (array[1] == "0") {
        this.filter37 = 0;

        if (array[2] == "1") {
          this.filter38 = 1;

          if (array[3] == "1") {
            this.filter39 = 1;

            if (array[4] == "1") {
              this.filter40 = 1;
            }
            else if (array[4] == "0") {
              this.filter40 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter39 = 0;

            if (array[4] == "1") {
              this.filter40 = 1;
            }
            else if (array[4] == "0") {
              this.filter40 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter38 = 0;

          if (array[3] == "1") {
            this.filter39 = 1;

            if (array[4] == "1") {
              this.filter40 = 1;
            }
            else if (array[4] == "0") {
              this.filter40 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter39 = 0;

            if (array[4] == "1") {
              this.filter40 = 1;
            }
            else if (array[4] == "0") {
              this.filter40 = 0;
            }
          }

        }

      }

    }

  }
  //carga permiso 9 ----------
  cargarpermiso9() {
    var centrostr = this.permisos.perRol;
    var array = centrostr.split("");
    //console.log('carga', array);

    if (array[0] == "1") {
      this.filter41 = 1;

      if (array[1] == "1") {
        this.filter42 = 1;

        if (array[2] == "1") {
          this.filter43 = 1;

          if (array[3] == "1") {
            this.filter44 = 1;

            if (array[4] == "1") {
              this.filter45 = 1;
            }
            else if (array[4] == "0") {
              this.filter45 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter44 = 0;

            if (array[4] == "1") {
              this.filter45 = 1;
            }
            else if (array[4] == "0") {
              this.filter45 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter43 = 0;

          if (array[3] == "1") {
            this.filter44 = 1;

            if (array[4] == "1") {
              this.filter45 = 1;
            }
            else if (array[4] == "0") {
              this.filter45 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter44 = 0;

            if (array[4] == "1") {
              this.filter45 = 1;
            }
            else if (array[4] == "0") {
              this.filter45 = 0;
            }
          }

        }

      }
      else if (array[1] == "0") {
        this.filter42 = 0;

        if (array[2] == "1") {
          this.filter43 = 1;

          if (array[3] == "1") {
            this.filter44 = 1;

            if (array[4] == "1") {
              this.filter45 = 1;
            }
            else if (array[4] == "0") {
              this.filter45 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter44 = 0;

            if (array[4] == "1") {
              this.filter45 = 1;
            }
            else if (array[4] == "0") {
              this.filter45 = 0;
            }

          }

        }
        else if (array[2] == "0") {
          this.filter43 = 0;

          if (array[3] == "1") {
            this.filter44 = 1;

            if (array[4] == "1") {
              this.filter45 = 1;
            }
            else if (array[4] == "0") {
              this.filter45 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter44 = 0;

            if (array[4] == "1") {
              this.filter45 = 1;
            }
            else if (array[4] == "0") {
              this.filter45 = 0;
            }
          }

        }


      }

    }
    else if (array[0] == "0") {
      this.filter41 = 0;
      if (array[1] == "1") {
        this.filter42 = 1;
        if (array[2] == "1") {
          this.filter43 = 1;

          if (array[3] == "1") {
            this.filter44 = 1;
            if (array[4] == "1") {
              this.filter45 = 1;
            }
            else if (array[4] == "0") {
              this.filter45 = 0;
            }
          }
          else if (array[3] == "0") {
            this.filter44 = 0;

            if (array[4] == "1") {
              this.filter45 = 1;
            }
            else if (array[4] == "0") {
              this.filter45 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter43 = 0;

          if (array[3] == "1") {
            this.filter44 = 1;

            if (array[4] == "1") {
              this.filter45 = 1;
            }
            else if (array[4] == "0") {
              this.filter45 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter44 = 0;

            if (array[4] == "1") {
              this.filter45 = 1;
            }
            else if (array[4] == "0") {
              this.filter45 = 0;
            }
          }

        }

      }
      else if (array[1] == "0") {
        this.filter42 = 0;

        if (array[2] == "1") {
          this.filter43 = 1;

          if (array[3] == "1") {
            this.filter44 = 1;

            if (array[4] == "1") {
              this.filter45 = 1;
            }
            else if (array[4] == "0") {
              this.filter45 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter44 = 0;

            if (array[4] == "1") {
              this.filter45 = 1;
            }
            else if (array[4] == "0") {
              this.filter45 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter43 = 0;

          if (array[3] == "1") {
            this.filter44 = 1;

            if (array[4] == "1") {
              this.filter45 = 1;
            }
            else if (array[4] == "0") {
              this.filter45 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter44 = 0;

            if (array[4] == "1") {
              this.filter45 = 1;
            }
            else if (array[4] == "0") {
              this.filter45 = 0;
            }
          }

        }

      }

    }

  }
  //carga permiso 10----------
  cargarpermiso10() {
    var centrostr = this.permisos.PerMaestros;
    var array = centrostr.split("");
    // console.log('carga', array);

    if (array[0] == "1") {
      this.filter46 = 1;

      if (array[1] == "1") {
        this.filter47 = 1;

        if (array[2] == "1") {
          this.filter48 = 1;

          if (array[3] == "1") {
            this.filter49 = 1;

            if (array[4] == "1") {
              this.filter50 = 1;
            }
            else if (array[4] == "0") {
              this.filter50 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter49 = 0;

            if (array[4] == "1") {
              this.filter50 = 1;
            }
            else if (array[4] == "0") {
              this.filter50 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter48 = 0;

          if (array[3] == "1") {
            this.filter49 = 1;

            if (array[4] == "1") {
              this.filter50 = 1;
            }
            else if (array[4] == "0") {
              this.filter50 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter49 = 0;

            if (array[4] == "1") {
              this.filter50 = 1;
            }
            else if (array[4] == "0") {
              this.filter50 = 0;
            }
          }

        }

      }
      else if (array[1] == "0") {
        this.filter47 = 0;

        if (array[2] == "1") {
          this.filter48 = 1;

          if (array[3] == "1") {
            this.filter49 = 1;

            if (array[4] == "1") {
              this.filter50 = 1;
            }
            else if (array[4] == "0") {
              this.filter50 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter49 = 0;

            if (array[4] == "1") {
              this.filter50 = 1;
            }
            else if (array[4] == "0") {
              this.filter50 = 0;
            }

          }

        }
        else if (array[2] == "0") {
          this.filter48 = 0;

          if (array[3] == "1") {
            this.filter49 = 1;

            if (array[4] == "1") {
              this.filter50 = 1;
            }
            else if (array[4] == "0") {
              this.filter50 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter49 = 0;

            if (array[4] == "1") {
              this.filter50 = 1;
            }
            else if (array[4] == "0") {
              this.filter50 = 0;
            }
          }

        }


      }

    }
    else if (array[0] == "0") {
      this.filter46 = 0;
      if (array[1] == "1") {
        this.filter47 = 1;
        if (array[2] == "1") {
          this.filter48 = 1;

          if (array[3] == "1") {
            this.filter49 = 1;
            if (array[4] == "1") {
              this.filter50 = 1;
            }
            else if (array[4] == "0") {
              this.filter50 = 0;
            }
          }
          else if (array[3] == "0") {
            this.filter49 = 0;

            if (array[4] == "1") {
              this.filter50 = 1;
            }
            else if (array[4] == "0") {
              this.filter50 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter48 = 0;

          if (array[3] == "1") {
            this.filter49 = 1;

            if (array[4] == "1") {
              this.filter50 = 1;
            }
            else if (array[4] == "0") {
              this.filter50 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter49 = 0;

            if (array[4] == "1") {
              this.filter50 = 1;
            }
            else if (array[4] == "0") {
              this.filter50 = 0;
            }
          }

        }

      }
      else if (array[1] == "0") {
        this.filter47 = 0;

        if (array[2] == "1") {
          this.filter48 = 1;

          if (array[3] == "1") {
            this.filter49 = 1;

            if (array[4] == "1") {
              this.filter50 = 1;
            }
            else if (array[4] == "0") {
              this.filter50 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter49 = 0;

            if (array[4] == "1") {
              this.filter50 = 1;
            }
            else if (array[4] == "0") {
              this.filter50 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter48 = 0;

          if (array[3] == "1") {
            this.filter49 = 1;

            if (array[4] == "1") {
              this.filter50 = 1;
            }
            else if (array[4] == "0") {
              this.filter50 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter49 = 0;

            if (array[4] == "1") {
              this.filter50 = 1;
            }
            else if (array[4] == "0") {
              this.filter50 = 0;
            }
          }

        }

      }

    }

  }
  //carga permiso 11----------
  cargarpermiso11() {
    var centrostr = this.permisos.perAlmacenes;
    var array = centrostr.split("");
    //console.log('carga', array);

    if (array[0] == "1") {
      this.filter51 = 1;

      if (array[1] == "1") {
        this.filter52 = 1;

        if (array[2] == "1") {
          this.filter53 = 1;

          if (array[3] == "1") {
            this.filter54 = 1;

            if (array[4] == "1") {
              this.filter55 = 1;
            }
            else if (array[4] == "0") {
              this.filter55 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter54 = 0;

            if (array[4] == "1") {
              this.filter55 = 1;
            }
            else if (array[4] == "0") {
              this.filter55 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter53 = 0;

          if (array[3] == "1") {
            this.filter54 = 1;

            if (array[4] == "1") {
              this.filter55 = 1;
            }
            else if (array[4] == "0") {
              this.filter55 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter54 = 0;

            if (array[4] == "1") {
              this.filter55 = 1;
            }
            else if (array[4] == "0") {
              this.filter55 = 0;
            }
          }

        }

      }
      else if (array[1] == "0") {
        this.filter52 = 0;

        if (array[2] == "1") {
          this.filter53 = 1;

          if (array[3] == "1") {
            this.filter54 = 1;

            if (array[4] == "1") {
              this.filter55 = 1;
            }
            else if (array[4] == "0") {
              this.filter55 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter54 = 0;

            if (array[4] == "1") {
              this.filter55 = 1;
            }
            else if (array[4] == "0") {
              this.filter55 = 0;
            }

          }

        }
        else if (array[2] == "0") {
          this.filter53 = 0;

          if (array[3] == "1") {
            this.filter54 = 1;

            if (array[4] == "1") {
              this.filter55 = 1;
            }
            else if (array[4] == "0") {
              this.filter55 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter54 = 0;

            if (array[4] == "1") {
              this.filter55 = 1;
            }
            else if (array[4] == "0") {
              this.filter55 = 0;
            }
          }

        }


      }

    }
    else if (array[0] == "0") {
      this.filter51 = 0;
      if (array[1] == "1") {
        this.filter52 = 1;
        if (array[2] == "1") {
          this.filter53 = 1;

          if (array[3] == "1") {
            this.filter54 = 1;
            if (array[4] == "1") {
              this.filter55 = 1;
            }
            else if (array[4] == "0") {
              this.filter55 = 0;
            }
          }
          else if (array[3] == "0") {
            this.filter54 = 0;

            if (array[4] == "1") {
              this.filter55 = 1;
            }
            else if (array[4] == "0") {
              this.filter55 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter53 = 0;

          if (array[3] == "1") {
            this.filter54 = 1;

            if (array[4] == "1") {
              this.filter55 = 1;
            }
            else if (array[4] == "0") {
              this.filter55 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter54 = 0;

            if (array[4] == "1") {
              this.filter55 = 1;
            }
            else if (array[4] == "0") {
              this.filter55 = 0;
            }
          }

        }

      }
      else if (array[1] == "0") {
        this.filter52 = 0;

        if (array[2] == "1") {
          this.filter53 = 1;

          if (array[3] == "1") {
            this.filter54 = 1;

            if (array[4] == "1") {
              this.filter55 = 1;
            }
            else if (array[4] == "0") {
              this.filter55 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter54 = 0;

            if (array[4] == "1") {
              this.filter55 = 1;
            }
            else if (array[4] == "0") {
              this.filter55 = 0;
            }
          }

        }
        else if (array[2] == "0") {
          this.filter53 = 0;

          if (array[3] == "1") {
            this.filter54 = 1;

            if (array[4] == "1") {
              this.filter55 = 1;
            }
            else if (array[4] == "0") {
              this.filter55 = 0;
            }

          }
          else if (array[3] == "0") {
            this.filter54 = 0;

            if (array[4] == "1") {
              this.filter55 = 1;
            }
            else if (array[4] == "0") {
              this.filter55 = 0;
            }
          }

        }

      }

    }

  }

 */
}
