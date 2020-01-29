import { Component, OnInit } from "@angular/core";
import { ServicioService } from "../../servicio.service";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { Permisos } from "../../interfaces/permisos";

@Component({
  selector: "app-permisosm",
  templateUrl: "./permisosm.component.html",
  styleUrls: ["./permisosm.component.css"]
})
export class PermisosmComponent implements OnInit {
  permiso: Permisos[] = [];
  public permisos: Permisos = {
    idPermiso: 0,
    perInventario: "",
    perEntrega: "",
    perBeneficiarios: "",
    perRol: "",
    perUsuarios: "",
    perCentros: "",
    perUDS: "",
    perPuntoen: "",
    perMaestros: "",
    idRol: 1,
    perAlmacenes: "",
    perCentrosD: "",
    perRecepcion: "",
    perDevolucion: ""
  };
  // marked = false;
  //perCentros =  this.Crear + this.vizualizar + this.Actualizar + this.Reportes + this.Inhabilitar;
  Checkbox = {
    Crear: 0,
    vizualizar: 0,
    Actualizar: 0,
    Reportes: 0,
    Inhabilitar: 0
  };

  Checkbox2 = {
    Crear: 0,
    vizualizar: 0,
    Actualizar: 0,
    Reportes: 0,
    Inhabilitar: 0
  };
  Checkbox3 = {
    Crear: 0,
    vizualizar: 0,
    Actualizar: 0,
    Reportes: 0,
    Inhabilitar: 0
  };
  Checkbox4 = {
    Crear: 0,
    vizualizar: 0,
    Actualizar: 0,
    Reportes: 0,
    Inhabilitar: 0
  };
  Checkbox5 = {
    Crear: 0,
    vizualizar: 0,
    Actualizar: 0,
    Reportes: 0,
    Inhabilitar: 0
  };
  Checkbox6 = {
    Crear: 0,
    Reportes: 0
  };
  Checkbox7 = {
    Crear: 0,
    vizualizar: 0,
    Actualizar: 0,
    Reportes: 0,
    Inhabilitar: 0
  };
  Checkbox8 = {
    Crear: 0,
    vizualizar: 0,
    Actualizar: 0,
    Reportes: 0,
    Inhabilitar: 0
  };
  Checkbox9 = {
    Crear: 0,
    vizualizar: 0,
    Actualizar: 0,
    Reportes: 0,
    Inhabilitar: 0
  };

  Checkbox10 = {
    Crear: 0,
    vizualizar: 0,
    Actualizar: 0,
    Reportes: 0,
    Inhabilitar: 0
  };
  Checkbox11 = {
    Crear: 0,
    vizualizar: 0,
    Actualizar: 0,
    Reportes: 0,
    Inhabilitar: 0
  };
  Checkbox12 = {
    Crear: 0,
    Reportes: 0
  };

  Checkbox13 = {
    Crear: 0,
    Reportes: 0
  };

  constructor(
    private activeRoute: ActivatedRoute,
    private Service: ServicioService,
    private router: Router
  ) {}

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    //traer permisos
    this.Service.getPermisosid(params.id).subscribe(res => {
      this.permisos = Object(res);
      console.log("Permiso get", this.permisos);
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
      this.cargarpermiso12();
      this.cargarpermiso13();
    }),
      err => {
        console.log(err);
      };
  }

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
            } else if (array[4] == "0") {
              this.filter5 = 0;
            }
          } else if (array[3] == "0") {
            this.filter4 = 0;

            if (array[4] == "1") {
              this.filter5 = 1;
            } else if (array[4] == "0") {
              this.filter5 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter3 = 0;

          if (array[3] == "1") {
            this.filter4 = 1;

            if (array[4] == "1") {
              this.filter5 = 1;
            } else if (array[4] == "0") {
              this.filter5 = 0;
            }
          } else if (array[3] == "0") {
            this.filter4 = 0;

            if (array[4] == "1") {
              this.filter5 = 1;
            } else if (array[4] == "0") {
              this.filter5 = 0;
            }
          }
        }
      } else if (array[1] == "0") {
        this.filter2 = 0;

        if (array[2] == "1") {
          this.filter3 = 1;

          if (array[3] == "1") {
            this.filter4 = 1;

            if (array[4] == "1") {
              this.filter5 = 1;
            } else if (array[4] == "0") {
              this.filter5 = 0;
            }
          } else if (array[3] == "0") {
            this.filter4 = 0;

            if (array[4] == "1") {
              this.filter5 = 1;
            } else if (array[4] == "0") {
              this.filter5 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter3 = 0;

          if (array[3] == "1") {
            this.filter4 = 1;

            if (array[4] == "1") {
              this.filter5 = 1;
            } else if (array[4] == "0") {
              this.filter5 = 0;
            }
          } else if (array[3] == "0") {
            this.filter4 = 0;

            if (array[4] == "1") {
              this.filter5 = 1;
            } else if (array[4] == "0") {
              this.filter5 = 0;
            }
          }
        }
      }
    } else if (array[0] == "0") {
      this.filter = 0;
      if (array[1] == "1") {
        this.filter2 = 1;
        if (array[2] == "1") {
          this.filter3 = 1;

          if (array[3] == "1") {
            this.filter4 = 1;
            if (array[4] == "1") {
              this.filter5 = 1;
            } else if (array[4] == "0") {
              this.filter5 = 0;
            }
          } else if (array[3] == "0") {
            this.filter4 = 0;

            if (array[4] == "1") {
              this.filter5 = 1;
            } else if (array[4] == "0") {
              this.filter5 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter3 = 0;

          if (array[3] == "1") {
            this.filter4 = 1;

            if (array[4] == "1") {
              this.filter5 = 1;
            } else if (array[4] == "0") {
              this.filter5 = 0;
            }
          } else if (array[3] == "0") {
            this.filter4 = 0;

            if (array[4] == "1") {
              this.filter5 = 1;
            } else if (array[4] == "0") {
              this.filter5 = 0;
            }
          }
        }
      } else if (array[1] == "0") {
        this.filter2 = 0;

        if (array[2] == "1") {
          this.filter3 = 1;

          if (array[3] == "1") {
            this.filter4 = 1;

            if (array[4] == "1") {
              this.filter5 = 1;
            } else if (array[4] == "0") {
              this.filter5 = 0;
            }
          } else if (array[3] == "0") {
            this.filter4 = 0;

            if (array[4] == "1") {
              this.filter5 = 1;
            } else if (array[4] == "0") {
              this.filter5 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter3 = 0;

          if (array[3] == "1") {
            this.filter4 = 1;

            if (array[4] == "1") {
              this.filter5 = 1;
            } else if (array[4] == "0") {
              this.filter5 = 0;
            }
          } else if (array[3] == "0") {
            this.filter4 = 0;

            if (array[4] == "1") {
              this.filter5 = 1;
            } else if (array[4] == "0") {
              this.filter5 = 0;
            }
          }
        }
      }
    }
  }
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
            } else if (array[4] == "0") {
              this.filter10 = 0;
            }
          } else if (array[3] == "0") {
            this.filter9 = 0;

            if (array[4] == "1") {
              this.filter10 = 1;
            } else if (array[4] == "0") {
              this.filter10 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter8 = 0;

          if (array[3] == "1") {
            this.filter9 = 1;

            if (array[4] == "1") {
              this.filter10 = 1;
            } else if (array[4] == "0") {
              this.filter10 = 0;
            }
          } else if (array[3] == "0") {
            this.filter9 = 0;

            if (array[4] == "1") {
              this.filter10 = 1;
            } else if (array[4] == "0") {
              this.filter10 = 0;
            }
          }
        }
      } else if (array[1] == "0") {
        this.filter7 = 0;

        if (array[2] == "1") {
          this.filter8 = 1;

          if (array[3] == "1") {
            this.filter9 = 1;

            if (array[4] == "1") {
              this.filter10 = 1;
            } else if (array[4] == "0") {
              this.filter10 = 0;
            }
          } else if (array[3] == "0") {
            this.filter9 = 0;

            if (array[4] == "1") {
              this.filter10 = 1;
            } else if (array[4] == "0") {
              this.filter10 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter8 = 0;

          if (array[3] == "1") {
            this.filter9 = 1;

            if (array[4] == "1") {
              this.filter10 = 1;
            } else if (array[4] == "0") {
              this.filter10 = 0;
            }
          } else if (array[3] == "0") {
            this.filter9 = 0;

            if (array[4] == "1") {
              this.filter10 = 1;
            } else if (array[4] == "0") {
              this.filter10 = 0;
            }
          }
        }
      }
    } else if (array[0] == "0") {
      this.filter6 = 0;
      if (array[1] == "1") {
        this.filter7 = 1;
        if (array[2] == "1") {
          this.filter8 = 1;

          if (array[3] == "1") {
            this.filter9 = 1;
            if (array[4] == "1") {
              this.filter10 = 1;
            } else if (array[4] == "0") {
              this.filter10 = 0;
            }
          } else if (array[3] == "0") {
            this.filter9 = 0;

            if (array[4] == "1") {
              this.filter10 = 1;
            } else if (array[4] == "0") {
              this.filter10 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter8 = 0;

          if (array[3] == "1") {
            this.filter9 = 1;

            if (array[4] == "1") {
              this.filter10 = 1;
            } else if (array[4] == "0") {
              this.filter10 = 0;
            }
          } else if (array[3] == "0") {
            this.filter9 = 0;

            if (array[4] == "1") {
              this.filter10 = 1;
            } else if (array[4] == "0") {
              this.filter10 = 0;
            }
          }
        }
      } else if (array[1] == "0") {
        this.filter7 = 0;

        if (array[2] == "1") {
          this.filter8 = 1;

          if (array[3] == "1") {
            this.filter9 = 1;

            if (array[4] == "1") {
              this.filter10 = 1;
            } else if (array[4] == "0") {
              this.filter10 = 0;
            }
          } else if (array[3] == "0") {
            this.filter9 = 0;

            if (array[4] == "1") {
              this.filter10 = 1;
            } else if (array[4] == "0") {
              this.filter10 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter8 = 0;

          if (array[3] == "1") {
            this.filter9 = 1;

            if (array[4] == "1") {
              this.filter10 = 1;
            } else if (array[4] == "0") {
              this.filter10 = 0;
            }
          } else if (array[3] == "0") {
            this.filter9 = 0;

            if (array[4] == "1") {
              this.filter10 = 1;
            } else if (array[4] == "0") {
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
            } else if (array[4] == "0") {
              this.filter15 = 0;
            }
          } else if (array[3] == "0") {
            this.filter14 = 0;

            if (array[4] == "1") {
              this.filter15 = 1;
            } else if (array[4] == "0") {
              this.filter15 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter13 = 0;

          if (array[3] == "1") {
            this.filter14 = 1;

            if (array[4] == "1") {
              this.filter15 = 1;
            } else if (array[4] == "0") {
              this.filter15 = 0;
            }
          } else if (array[3] == "0") {
            this.filter14 = 0;

            if (array[4] == "1") {
              this.filter15 = 1;
            } else if (array[4] == "0") {
              this.filter15 = 0;
            }
          }
        }
      } else if (array[1] == "0") {
        this.filter12 = 0;

        if (array[2] == "1") {
          this.filter13 = 1;

          if (array[3] == "1") {
            this.filter14 = 1;

            if (array[4] == "1") {
              this.filter15 = 1;
            } else if (array[4] == "0") {
              this.filter15 = 0;
            }
          } else if (array[3] == "0") {
            this.filter14 = 0;

            if (array[4] == "1") {
              this.filter15 = 1;
            } else if (array[4] == "0") {
              this.filter15 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter13 = 0;

          if (array[3] == "1") {
            this.filter14 = 1;

            if (array[4] == "1") {
              this.filter15 = 1;
            } else if (array[4] == "0") {
              this.filter15 = 0;
            }
          } else if (array[3] == "0") {
            this.filter14 = 0;

            if (array[4] == "1") {
              this.filter15 = 1;
            } else if (array[4] == "0") {
              this.filter15 = 0;
            }
          }
        }
      }
    } else if (array[0] == "0") {
      this.filter11 = 0;
      if (array[1] == "1") {
        this.filter12 = 1;
        if (array[2] == "1") {
          this.filter13 = 1;

          if (array[3] == "1") {
            this.filter14 = 1;
            if (array[4] == "1") {
              this.filter15 = 1;
            } else if (array[4] == "0") {
              this.filter15 = 0;
            }
          } else if (array[3] == "0") {
            this.filter14 = 0;

            if (array[4] == "1") {
              this.filter15 = 1;
            } else if (array[4] == "0") {
              this.filter15 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter13 = 0;

          if (array[3] == "1") {
            this.filter14 = 1;

            if (array[4] == "1") {
              this.filter15 = 1;
            } else if (array[4] == "0") {
              this.filter15 = 0;
            }
          } else if (array[3] == "0") {
            this.filter14 = 0;

            if (array[4] == "1") {
              this.filter15 = 1;
            } else if (array[4] == "0") {
              this.filter15 = 0;
            }
          }
        }
      } else if (array[1] == "0") {
        this.filter12 = 0;

        if (array[2] == "1") {
          this.filter13 = 1;

          if (array[3] == "1") {
            this.filter14 = 1;

            if (array[4] == "1") {
              this.filter15 = 1;
            } else if (array[4] == "0") {
              this.filter15 = 0;
            }
          } else if (array[3] == "0") {
            this.filter14 = 0;

            if (array[4] == "1") {
              this.filter15 = 1;
            } else if (array[4] == "0") {
              this.filter15 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter13 = 0;

          if (array[3] == "1") {
            this.filter14 = 1;

            if (array[4] == "1") {
              this.filter15 = 1;
            } else if (array[4] == "0") {
              this.filter15 = 0;
            }
          } else if (array[3] == "0") {
            this.filter14 = 0;

            if (array[4] == "1") {
              this.filter15 = 1;
            } else if (array[4] == "0") {
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
            } else if (array[4] == "0") {
              this.filter20 = 0;
            }
          } else if (array[3] == "0") {
            this.filter19 = 0;

            if (array[4] == "1") {
              this.filter20 = 1;
            } else if (array[4] == "0") {
              this.filter20 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter18 = 0;

          if (array[3] == "1") {
            this.filter19 = 1;

            if (array[4] == "1") {
              this.filter20 = 1;
            } else if (array[4] == "0") {
              this.filter20 = 0;
            }
          } else if (array[3] == "0") {
            this.filter19 = 0;

            if (array[4] == "1") {
              this.filter20 = 1;
            } else if (array[4] == "0") {
              this.filter20 = 0;
            }
          }
        }
      } else if (array[1] == "0") {
        this.filter17 = 0;

        if (array[2] == "1") {
          this.filter18 = 1;

          if (array[3] == "1") {
            this.filter19 = 1;

            if (array[4] == "1") {
              this.filter20 = 1;
            } else if (array[4] == "0") {
              this.filter20 = 0;
            }
          } else if (array[3] == "0") {
            this.filter19 = 0;

            if (array[4] == "1") {
              this.filter20 = 1;
            } else if (array[4] == "0") {
              this.filter20 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter18 = 0;

          if (array[3] == "1") {
            this.filter19 = 1;

            if (array[4] == "1") {
              this.filter20 = 1;
            } else if (array[4] == "0") {
              this.filter20 = 0;
            }
          } else if (array[3] == "0") {
            this.filter19 = 0;

            if (array[4] == "1") {
              this.filter20 = 1;
            } else if (array[4] == "0") {
              this.filter20 = 0;
            }
          }
        }
      }
    } else if (array[0] == "0") {
      this.filter16 = 0;
      if (array[1] == "1") {
        this.filter17 = 1;
        if (array[2] == "1") {
          this.filter18 = 1;

          if (array[3] == "1") {
            this.filter19 = 1;
            if (array[4] == "1") {
              this.filter20 = 1;
            } else if (array[4] == "0") {
              this.filter20 = 0;
            }
          } else if (array[3] == "0") {
            this.filter19 = 0;

            if (array[4] == "1") {
              this.filter20 = 1;
            } else if (array[4] == "0") {
              this.filter20 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter18 = 0;

          if (array[3] == "1") {
            this.filter19 = 1;

            if (array[4] == "1") {
              this.filter20 = 1;
            } else if (array[4] == "0") {
              this.filter20 = 0;
            }
          } else if (array[3] == "0") {
            this.filter19 = 0;

            if (array[4] == "1") {
              this.filter20 = 1;
            } else if (array[4] == "0") {
              this.filter20 = 0;
            }
          }
        }
      } else if (array[1] == "0") {
        this.filter17 = 0;

        if (array[2] == "1") {
          this.filter18 = 1;

          if (array[3] == "1") {
            this.filter19 = 1;

            if (array[4] == "1") {
              this.filter20 = 1;
            } else if (array[4] == "0") {
              this.filter20 = 0;
            }
          } else if (array[3] == "0") {
            this.filter19 = 0;

            if (array[4] == "1") {
              this.filter20 = 1;
            } else if (array[4] == "0") {
              this.filter20 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter18 = 0;

          if (array[3] == "1") {
            this.filter19 = 1;

            if (array[4] == "1") {
              this.filter20 = 1;
            } else if (array[4] == "0") {
              this.filter20 = 0;
            }
          } else if (array[3] == "0") {
            this.filter19 = 0;

            if (array[4] == "1") {
              this.filter20 = 1;
            } else if (array[4] == "0") {
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
            } else if (array[4] == "0") {
              this.filter25 = 0;
            }
          } else if (array[3] == "0") {
            this.filter24 = 0;

            if (array[4] == "1") {
              this.filter25 = 1;
            } else if (array[4] == "0") {
              this.filter25 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter23 = 0;

          if (array[3] == "1") {
            this.filter24 = 1;

            if (array[4] == "1") {
              this.filter25 = 1;
            } else if (array[4] == "0") {
              this.filter25 = 0;
            }
          } else if (array[3] == "0") {
            this.filter24 = 0;

            if (array[4] == "1") {
              this.filter25 = 1;
            } else if (array[4] == "0") {
              this.filter25 = 0;
            }
          }
        }
      } else if (array[1] == "0") {
        this.filter22 = 0;

        if (array[2] == "1") {
          this.filter23 = 1;

          if (array[3] == "1") {
            this.filter24 = 1;

            if (array[4] == "1") {
              this.filter25 = 1;
            } else if (array[4] == "0") {
              this.filter25 = 0;
            }
          } else if (array[3] == "0") {
            this.filter24 = 0;

            if (array[4] == "1") {
              this.filter25 = 1;
            } else if (array[4] == "0") {
              this.filter25 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter23 = 0;

          if (array[3] == "1") {
            this.filter24 = 1;

            if (array[4] == "1") {
              this.filter25 = 1;
            } else if (array[4] == "0") {
              this.filter25 = 0;
            }
          } else if (array[3] == "0") {
            this.filter24 = 0;

            if (array[4] == "1") {
              this.filter25 = 1;
            } else if (array[4] == "0") {
              this.filter25 = 0;
            }
          }
        }
      }
    } else if (array[0] == "0") {
      this.filter21 = 0;
      if (array[1] == "1") {
        this.filter22 = 1;
        if (array[2] == "1") {
          this.filter23 = 1;

          if (array[3] == "1") {
            this.filter24 = 1;
            if (array[4] == "1") {
              this.filter25 = 1;
            } else if (array[4] == "0") {
              this.filter25 = 0;
            }
          } else if (array[3] == "0") {
            this.filter24 = 0;

            if (array[4] == "1") {
              this.filter25 = 1;
            } else if (array[4] == "0") {
              this.filter25 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter23 = 0;

          if (array[3] == "1") {
            this.filter24 = 1;

            if (array[4] == "1") {
              this.filter25 = 1;
            } else if (array[4] == "0") {
              this.filter25 = 0;
            }
          } else if (array[3] == "0") {
            this.filter24 = 0;

            if (array[4] == "1") {
              this.filter25 = 1;
            } else if (array[4] == "0") {
              this.filter25 = 0;
            }
          }
        }
      } else if (array[1] == "0") {
        this.filter22 = 0;

        if (array[2] == "1") {
          this.filter23 = 1;

          if (array[3] == "1") {
            this.filter24 = 1;

            if (array[4] == "1") {
              this.filter25 = 1;
            } else if (array[4] == "0") {
              this.filter25 = 0;
            }
          } else if (array[3] == "0") {
            this.filter24 = 0;

            if (array[4] == "1") {
              this.filter25 = 1;
            } else if (array[4] == "0") {
              this.filter25 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter23 = 0;

          if (array[3] == "1") {
            this.filter24 = 1;

            if (array[4] == "1") {
              this.filter25 = 1;
            } else if (array[4] == "0") {
              this.filter25 = 0;
            }
          } else if (array[3] == "0") {
            this.filter24 = 0;

            if (array[4] == "1") {
              this.filter25 = 1;
            } else if (array[4] == "0") {
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
        this.filter29 = 1;
      } else if (array[1] == "0") {
        this.filter29 = 0;
      }
    } else if (array[0] == "0") {
      this.filter26 = 0;
      if (array[1] == "1") {
        this.filter29 = 1;
      } else if (array[1] == "0") {
        this.filter29 = 0;
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
            } else if (array[4] == "0") {
              this.filter35 = 0;
            }
          } else if (array[3] == "0") {
            this.filter34 = 0;

            if (array[4] == "1") {
              this.filter35 = 1;
            } else if (array[4] == "0") {
              this.filter35 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter33 = 0;

          if (array[3] == "1") {
            this.filter34 = 1;

            if (array[4] == "1") {
              this.filter35 = 1;
            } else if (array[4] == "0") {
              this.filter35 = 0;
            }
          } else if (array[3] == "0") {
            this.filter34 = 0;

            if (array[4] == "1") {
              this.filter35 = 1;
            } else if (array[4] == "0") {
              this.filter35 = 0;
            }
          }
        }
      } else if (array[1] == "0") {
        this.filter32 = 0;

        if (array[2] == "1") {
          this.filter33 = 1;

          if (array[3] == "1") {
            this.filter34 = 1;

            if (array[4] == "1") {
              this.filter35 = 1;
            } else if (array[4] == "0") {
              this.filter35 = 0;
            }
          } else if (array[3] == "0") {
            this.filter34 = 0;

            if (array[4] == "1") {
              this.filter35 = 1;
            } else if (array[4] == "0") {
              this.filter35 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter33 = 0;

          if (array[3] == "1") {
            this.filter34 = 1;

            if (array[4] == "1") {
              this.filter35 = 1;
            } else if (array[4] == "0") {
              this.filter35 = 0;
            }
          } else if (array[3] == "0") {
            this.filter34 = 0;

            if (array[4] == "1") {
              this.filter35 = 1;
            } else if (array[4] == "0") {
              this.filter35 = 0;
            }
          }
        }
      }
    } else if (array[0] == "0") {
      this.filter31 = 0;
      if (array[1] == "1") {
        this.filter32 = 1;
        if (array[2] == "1") {
          this.filter33 = 1;

          if (array[3] == "1") {
            this.filter34 = 1;
            if (array[4] == "1") {
              this.filter35 = 1;
            } else if (array[4] == "0") {
              this.filter35 = 0;
            }
          } else if (array[3] == "0") {
            this.filter34 = 0;

            if (array[4] == "1") {
              this.filter35 = 1;
            } else if (array[4] == "0") {
              this.filter35 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter33 = 0;

          if (array[3] == "1") {
            this.filter34 = 1;

            if (array[4] == "1") {
              this.filter35 = 1;
            } else if (array[4] == "0") {
              this.filter35 = 0;
            }
          } else if (array[3] == "0") {
            this.filter34 = 0;

            if (array[4] == "1") {
              this.filter35 = 1;
            } else if (array[4] == "0") {
              this.filter35 = 0;
            }
          }
        }
      } else if (array[1] == "0") {
        this.filter32 = 0;

        if (array[2] == "1") {
          this.filter33 = 1;

          if (array[3] == "1") {
            this.filter34 = 1;

            if (array[4] == "1") {
              this.filter35 = 1;
            } else if (array[4] == "0") {
              this.filter35 = 0;
            }
          } else if (array[3] == "0") {
            this.filter34 = 0;

            if (array[4] == "1") {
              this.filter35 = 1;
            } else if (array[4] == "0") {
              this.filter35 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter33 = 0;

          if (array[3] == "1") {
            this.filter34 = 1;

            if (array[4] == "1") {
              this.filter35 = 1;
            } else if (array[4] == "0") {
              this.filter35 = 0;
            }
          } else if (array[3] == "0") {
            this.filter34 = 0;

            if (array[4] == "1") {
              this.filter35 = 1;
            } else if (array[4] == "0") {
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
            } else if (array[4] == "0") {
              this.filter40 = 0;
            }
          } else if (array[3] == "0") {
            this.filter39 = 0;

            if (array[4] == "1") {
              this.filter40 = 1;
            } else if (array[4] == "0") {
              this.filter40 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter38 = 0;

          if (array[3] == "1") {
            this.filter39 = 1;

            if (array[4] == "1") {
              this.filter40 = 1;
            } else if (array[4] == "0") {
              this.filter40 = 0;
            }
          } else if (array[3] == "0") {
            this.filter39 = 0;

            if (array[4] == "1") {
              this.filter40 = 1;
            } else if (array[4] == "0") {
              this.filter40 = 0;
            }
          }
        }
      } else if (array[1] == "0") {
        this.filter37 = 0;

        if (array[2] == "1") {
          this.filter38 = 1;

          if (array[3] == "1") {
            this.filter39 = 1;

            if (array[4] == "1") {
              this.filter40 = 1;
            } else if (array[4] == "0") {
              this.filter40 = 0;
            }
          } else if (array[3] == "0") {
            this.filter39 = 0;

            if (array[4] == "1") {
              this.filter40 = 1;
            } else if (array[4] == "0") {
              this.filter40 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter38 = 0;

          if (array[3] == "1") {
            this.filter39 = 1;

            if (array[4] == "1") {
              this.filter40 = 1;
            } else if (array[4] == "0") {
              this.filter40 = 0;
            }
          } else if (array[3] == "0") {
            this.filter39 = 0;

            if (array[4] == "1") {
              this.filter40 = 1;
            } else if (array[4] == "0") {
              this.filter40 = 0;
            }
          }
        }
      }
    } else if (array[0] == "0") {
      this.filter36 = 0;
      if (array[1] == "1") {
        this.filter37 = 1;
        if (array[2] == "1") {
          this.filter38 = 1;

          if (array[3] == "1") {
            this.filter39 = 1;
            if (array[4] == "1") {
              this.filter40 = 1;
            } else if (array[4] == "0") {
              this.filter40 = 0;
            }
          } else if (array[3] == "0") {
            this.filter39 = 0;

            if (array[4] == "1") {
              this.filter40 = 1;
            } else if (array[4] == "0") {
              this.filter40 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter38 = 0;

          if (array[3] == "1") {
            this.filter39 = 1;

            if (array[4] == "1") {
              this.filter40 = 1;
            } else if (array[4] == "0") {
              this.filter40 = 0;
            }
          } else if (array[3] == "0") {
            this.filter39 = 0;

            if (array[4] == "1") {
              this.filter40 = 1;
            } else if (array[4] == "0") {
              this.filter40 = 0;
            }
          }
        }
      } else if (array[1] == "0") {
        this.filter37 = 0;

        if (array[2] == "1") {
          this.filter38 = 1;

          if (array[3] == "1") {
            this.filter39 = 1;

            if (array[4] == "1") {
              this.filter40 = 1;
            } else if (array[4] == "0") {
              this.filter40 = 0;
            }
          } else if (array[3] == "0") {
            this.filter39 = 0;

            if (array[4] == "1") {
              this.filter40 = 1;
            } else if (array[4] == "0") {
              this.filter40 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter38 = 0;

          if (array[3] == "1") {
            this.filter39 = 1;

            if (array[4] == "1") {
              this.filter40 = 1;
            } else if (array[4] == "0") {
              this.filter40 = 0;
            }
          } else if (array[3] == "0") {
            this.filter39 = 0;

            if (array[4] == "1") {
              this.filter40 = 1;
            } else if (array[4] == "0") {
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
            } else if (array[4] == "0") {
              this.filter45 = 0;
            }
          } else if (array[3] == "0") {
            this.filter44 = 0;

            if (array[4] == "1") {
              this.filter45 = 1;
            } else if (array[4] == "0") {
              this.filter45 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter43 = 0;

          if (array[3] == "1") {
            this.filter44 = 1;

            if (array[4] == "1") {
              this.filter45 = 1;
            } else if (array[4] == "0") {
              this.filter45 = 0;
            }
          } else if (array[3] == "0") {
            this.filter44 = 0;

            if (array[4] == "1") {
              this.filter45 = 1;
            } else if (array[4] == "0") {
              this.filter45 = 0;
            }
          }
        }
      } else if (array[1] == "0") {
        this.filter42 = 0;

        if (array[2] == "1") {
          this.filter43 = 1;

          if (array[3] == "1") {
            this.filter44 = 1;

            if (array[4] == "1") {
              this.filter45 = 1;
            } else if (array[4] == "0") {
              this.filter45 = 0;
            }
          } else if (array[3] == "0") {
            this.filter44 = 0;

            if (array[4] == "1") {
              this.filter45 = 1;
            } else if (array[4] == "0") {
              this.filter45 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter43 = 0;

          if (array[3] == "1") {
            this.filter44 = 1;

            if (array[4] == "1") {
              this.filter45 = 1;
            } else if (array[4] == "0") {
              this.filter45 = 0;
            }
          } else if (array[3] == "0") {
            this.filter44 = 0;

            if (array[4] == "1") {
              this.filter45 = 1;
            } else if (array[4] == "0") {
              this.filter45 = 0;
            }
          }
        }
      }
    } else if (array[0] == "0") {
      this.filter41 = 0;
      if (array[1] == "1") {
        this.filter42 = 1;
        if (array[2] == "1") {
          this.filter43 = 1;

          if (array[3] == "1") {
            this.filter44 = 1;
            if (array[4] == "1") {
              this.filter45 = 1;
            } else if (array[4] == "0") {
              this.filter45 = 0;
            }
          } else if (array[3] == "0") {
            this.filter44 = 0;

            if (array[4] == "1") {
              this.filter45 = 1;
            } else if (array[4] == "0") {
              this.filter45 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter43 = 0;

          if (array[3] == "1") {
            this.filter44 = 1;

            if (array[4] == "1") {
              this.filter45 = 1;
            } else if (array[4] == "0") {
              this.filter45 = 0;
            }
          } else if (array[3] == "0") {
            this.filter44 = 0;

            if (array[4] == "1") {
              this.filter45 = 1;
            } else if (array[4] == "0") {
              this.filter45 = 0;
            }
          }
        }
      } else if (array[1] == "0") {
        this.filter42 = 0;

        if (array[2] == "1") {
          this.filter43 = 1;

          if (array[3] == "1") {
            this.filter44 = 1;

            if (array[4] == "1") {
              this.filter45 = 1;
            } else if (array[4] == "0") {
              this.filter45 = 0;
            }
          } else if (array[3] == "0") {
            this.filter44 = 0;

            if (array[4] == "1") {
              this.filter45 = 1;
            } else if (array[4] == "0") {
              this.filter45 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter43 = 0;

          if (array[3] == "1") {
            this.filter44 = 1;

            if (array[4] == "1") {
              this.filter45 = 1;
            } else if (array[4] == "0") {
              this.filter45 = 0;
            }
          } else if (array[3] == "0") {
            this.filter44 = 0;

            if (array[4] == "1") {
              this.filter45 = 1;
            } else if (array[4] == "0") {
              this.filter45 = 0;
            }
          }
        }
      }
    }
  }
  //carga permiso 10----------
  cargarpermiso10() {
    var centrostr = this.permisos.perMaestros;
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
            } else if (array[4] == "0") {
              this.filter50 = 0;
            }
          } else if (array[3] == "0") {
            this.filter49 = 0;

            if (array[4] == "1") {
              this.filter50 = 1;
            } else if (array[4] == "0") {
              this.filter50 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter48 = 0;

          if (array[3] == "1") {
            this.filter49 = 1;

            if (array[4] == "1") {
              this.filter50 = 1;
            } else if (array[4] == "0") {
              this.filter50 = 0;
            }
          } else if (array[3] == "0") {
            this.filter49 = 0;

            if (array[4] == "1") {
              this.filter50 = 1;
            } else if (array[4] == "0") {
              this.filter50 = 0;
            }
          }
        }
      } else if (array[1] == "0") {
        this.filter47 = 0;

        if (array[2] == "1") {
          this.filter48 = 1;

          if (array[3] == "1") {
            this.filter49 = 1;

            if (array[4] == "1") {
              this.filter50 = 1;
            } else if (array[4] == "0") {
              this.filter50 = 0;
            }
          } else if (array[3] == "0") {
            this.filter49 = 0;

            if (array[4] == "1") {
              this.filter50 = 1;
            } else if (array[4] == "0") {
              this.filter50 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter48 = 0;

          if (array[3] == "1") {
            this.filter49 = 1;

            if (array[4] == "1") {
              this.filter50 = 1;
            } else if (array[4] == "0") {
              this.filter50 = 0;
            }
          } else if (array[3] == "0") {
            this.filter49 = 0;

            if (array[4] == "1") {
              this.filter50 = 1;
            } else if (array[4] == "0") {
              this.filter50 = 0;
            }
          }
        }
      }
    } else if (array[0] == "0") {
      this.filter46 = 0;
      if (array[1] == "1") {
        this.filter47 = 1;
        if (array[2] == "1") {
          this.filter48 = 1;

          if (array[3] == "1") {
            this.filter49 = 1;
            if (array[4] == "1") {
              this.filter50 = 1;
            } else if (array[4] == "0") {
              this.filter50 = 0;
            }
          } else if (array[3] == "0") {
            this.filter49 = 0;

            if (array[4] == "1") {
              this.filter50 = 1;
            } else if (array[4] == "0") {
              this.filter50 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter48 = 0;

          if (array[3] == "1") {
            this.filter49 = 1;

            if (array[4] == "1") {
              this.filter50 = 1;
            } else if (array[4] == "0") {
              this.filter50 = 0;
            }
          } else if (array[3] == "0") {
            this.filter49 = 0;

            if (array[4] == "1") {
              this.filter50 = 1;
            } else if (array[4] == "0") {
              this.filter50 = 0;
            }
          }
        }
      } else if (array[1] == "0") {
        this.filter47 = 0;

        if (array[2] == "1") {
          this.filter48 = 1;

          if (array[3] == "1") {
            this.filter49 = 1;

            if (array[4] == "1") {
              this.filter50 = 1;
            } else if (array[4] == "0") {
              this.filter50 = 0;
            }
          } else if (array[3] == "0") {
            this.filter49 = 0;

            if (array[4] == "1") {
              this.filter50 = 1;
            } else if (array[4] == "0") {
              this.filter50 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter48 = 0;

          if (array[3] == "1") {
            this.filter49 = 1;

            if (array[4] == "1") {
              this.filter50 = 1;
            } else if (array[4] == "0") {
              this.filter50 = 0;
            }
          } else if (array[3] == "0") {
            this.filter49 = 0;

            if (array[4] == "1") {
              this.filter50 = 1;
            } else if (array[4] == "0") {
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
            } else if (array[4] == "0") {
              this.filter55 = 0;
            }
          } else if (array[3] == "0") {
            this.filter54 = 0;

            if (array[4] == "1") {
              this.filter55 = 1;
            } else if (array[4] == "0") {
              this.filter55 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter53 = 0;

          if (array[3] == "1") {
            this.filter54 = 1;

            if (array[4] == "1") {
              this.filter55 = 1;
            } else if (array[4] == "0") {
              this.filter55 = 0;
            }
          } else if (array[3] == "0") {
            this.filter54 = 0;

            if (array[4] == "1") {
              this.filter55 = 1;
            } else if (array[4] == "0") {
              this.filter55 = 0;
            }
          }
        }
      } else if (array[1] == "0") {
        this.filter52 = 0;

        if (array[2] == "1") {
          this.filter53 = 1;

          if (array[3] == "1") {
            this.filter54 = 1;

            if (array[4] == "1") {
              this.filter55 = 1;
            } else if (array[4] == "0") {
              this.filter55 = 0;
            }
          } else if (array[3] == "0") {
            this.filter54 = 0;

            if (array[4] == "1") {
              this.filter55 = 1;
            } else if (array[4] == "0") {
              this.filter55 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter53 = 0;

          if (array[3] == "1") {
            this.filter54 = 1;

            if (array[4] == "1") {
              this.filter55 = 1;
            } else if (array[4] == "0") {
              this.filter55 = 0;
            }
          } else if (array[3] == "0") {
            this.filter54 = 0;

            if (array[4] == "1") {
              this.filter55 = 1;
            } else if (array[4] == "0") {
              this.filter55 = 0;
            }
          }
        }
      }
    } else if (array[0] == "0") {
      this.filter51 = 0;
      if (array[1] == "1") {
        this.filter52 = 1;
        if (array[2] == "1") {
          this.filter53 = 1;

          if (array[3] == "1") {
            this.filter54 = 1;
            if (array[4] == "1") {
              this.filter55 = 1;
            } else if (array[4] == "0") {
              this.filter55 = 0;
            }
          } else if (array[3] == "0") {
            this.filter54 = 0;

            if (array[4] == "1") {
              this.filter55 = 1;
            } else if (array[4] == "0") {
              this.filter55 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter53 = 0;

          if (array[3] == "1") {
            this.filter54 = 1;

            if (array[4] == "1") {
              this.filter55 = 1;
            } else if (array[4] == "0") {
              this.filter55 = 0;
            }
          } else if (array[3] == "0") {
            this.filter54 = 0;

            if (array[4] == "1") {
              this.filter55 = 1;
            } else if (array[4] == "0") {
              this.filter55 = 0;
            }
          }
        }
      } else if (array[1] == "0") {
        this.filter52 = 0;

        if (array[2] == "1") {
          this.filter53 = 1;

          if (array[3] == "1") {
            this.filter54 = 1;

            if (array[4] == "1") {
              this.filter55 = 1;
            } else if (array[4] == "0") {
              this.filter55 = 0;
            }
          } else if (array[3] == "0") {
            this.filter54 = 0;

            if (array[4] == "1") {
              this.filter55 = 1;
            } else if (array[4] == "0") {
              this.filter55 = 0;
            }
          }
        } else if (array[2] == "0") {
          this.filter53 = 0;

          if (array[3] == "1") {
            this.filter54 = 1;

            if (array[4] == "1") {
              this.filter55 = 1;
            } else if (array[4] == "0") {
              this.filter55 = 0;
            }
          } else if (array[3] == "0") {
            this.filter54 = 0;

            if (array[4] == "1") {
              this.filter55 = 1;
            } else if (array[4] == "0") {
              this.filter55 = 0;
            }
          }
        }
      }
    }
  }
  cargarpermiso12() {
    var centrostr = this.permisos.perRecepcion;
    var array = centrostr.split("");
    // console.log('carga', array);

    if (array[0] == "1") {
      this.filter27 = 1;

      if (array[1] == "1") {
        this.filter28 = 1;
      } else if (array[1] == "0") {
        this.filter28 = 0;
      }
    } else if (array[0] == "0") {
      this.filter27 = 0;
      if (array[1] == "1") {
        this.filter28 = 1;
      } else if (array[1] == "0") {
        this.filter28 = 0;
      }
    }
  }
  cargarpermiso13() {
    var centrostr = this.permisos.perEntrega;
    var array = centrostr.split("");
    // console.log('carga', array);

    if (array[0] == "1") {
      this.filter56 = 1;

      if (array[1] == "1") {
        this.filter57 = 1;
      } else if (array[1] == "0") {
        this.filter57 = 0;
      }
    } else if (array[0] == "0") {
      this.filter56 = 0;
      if (array[1] == "1") {
        this.filter57 = 1;
      } else if (array[1] == "0") {
        this.filter57 = 0;
      }
    }
  }
  //insertar Datos ------------------------------------------------

  updatetDatos(
    data,
    data2,
    data3,
    data4,
    data5,
    data6,
    data7,
    data8,
    data9,
    data10,
    data11,
    data12,
    data13
  ) {
    const params = this.activeRoute.snapshot.params;
    this.onFilterChange();
    this.onFilterChange2();
    this.onFilterChange3();
    this.onFilterChange4();
    this.onFilterChange5();
    this.onFilterChange6();
    this.onFilterChange7();
    this.onFilterChange8();
    this.onFilterChange9();
    this.onFilterChange10();
    this.onFilterChange11();
    this.onFilterChange12();
    this.onFilterChange13();
    this.onFilterChange14();
    this.onFilterChange15();
    this.onFilterChange16();
    this.onFilterChange17();
    this.onFilterChange18();
    this.onFilterChange19();
    this.onFilterChange20();
    this.onFilterChange21();
    this.onFilterChange22();
    this.onFilterChange23();
    this.onFilterChange24();
    this.onFilterChange25();
    this.onFilterChange26();
    this.onFilterChange27();
    this.onFilterChange28();
    this.onFilterChange29();
    this.onFilterChange31();
    this.onFilterChange32();
    this.onFilterChange33();
    this.onFilterChange34();
    this.onFilterChange35();
    this.onFilterChange36();
    this.onFilterChange37();
    this.onFilterChange38();
    this.onFilterChange39();
    this.onFilterChange40();
    this.onFilterChange41();
    this.onFilterChange42();
    this.onFilterChange43();
    this.onFilterChange44();
    this.onFilterChange45();
    this.onFilterChange46();
    this.onFilterChange47();
    this.onFilterChange48();
    this.onFilterChange49();
    this.onFilterChange50();
    this.onFilterChange51();
    this.onFilterChange52();
    this.onFilterChange53();
    this.onFilterChange54();
    this.onFilterChange55();
    this.onFilterChange56();
    this.onFilterChange57();

    data =
      this.Checkbox.Crear +
      "" +
      this.Checkbox.Actualizar +
      "" +
      this.Checkbox.vizualizar +
      "" +
      this.Checkbox.Reportes +
      "" +
      this.Checkbox.Inhabilitar +
      "";
    data2 =
      this.Checkbox2.Crear +
      "" +
      this.Checkbox2.Actualizar +
      "" +
      this.Checkbox2.vizualizar +
      "" +
      this.Checkbox2.Reportes +
      "" +
      this.Checkbox2.Inhabilitar +
      "";
    data3 =
      this.Checkbox3.Crear +
      "" +
      this.Checkbox3.Actualizar +
      "" +
      this.Checkbox3.vizualizar +
      "" +
      this.Checkbox3.Reportes +
      "" +
      this.Checkbox3.Inhabilitar +
      "";
    data4 =
      this.Checkbox4.Crear +
      "" +
      this.Checkbox4.Actualizar +
      "" +
      this.Checkbox4.vizualizar +
      "" +
      this.Checkbox4.Reportes +
      "" +
      this.Checkbox4.Inhabilitar +
      "";
    data5 =
      this.Checkbox5.Crear +
      "" +
      this.Checkbox5.Actualizar +
      "" +
      this.Checkbox5.vizualizar +
      "" +
      this.Checkbox5.Reportes +
      "" +
      this.Checkbox5.Inhabilitar +
      "";
    data6 = this.Checkbox6.Crear + "" + this.Checkbox6.Reportes + "";
    data7 =
      this.Checkbox7.Crear +
      "" +
      this.Checkbox7.Actualizar +
      "" +
      this.Checkbox7.vizualizar +
      "" +
      this.Checkbox7.Reportes +
      "" +
      this.Checkbox7.Inhabilitar +
      "";
    data8 =
      this.Checkbox8.Crear +
      "" +
      this.Checkbox8.Actualizar +
      "" +
      this.Checkbox8.vizualizar +
      "" +
      this.Checkbox8.Reportes +
      "" +
      this.Checkbox8.Inhabilitar +
      "";
    data9 =
      this.Checkbox9.Crear +
      "" +
      this.Checkbox9.Actualizar +
      "" +
      this.Checkbox9.vizualizar +
      "" +
      this.Checkbox9.Reportes +
      "" +
      this.Checkbox9.Inhabilitar +
      "";
    data10 =
      this.Checkbox10.Crear +
      "" +
      this.Checkbox10.Actualizar +
      "" +
      this.Checkbox10.vizualizar +
      "" +
      this.Checkbox10.Reportes +
      "" +
      this.Checkbox10.Inhabilitar +
      "";
    data11 =
      this.Checkbox11.Crear +
      "" +
      this.Checkbox11.Actualizar +
      "" +
      this.Checkbox11.vizualizar +
      "" +
      this.Checkbox11.Reportes +
      "" +
      this.Checkbox11.Inhabilitar +
      "";
    data12 = this.Checkbox12.Crear + "" + this.Checkbox12.Reportes + "";
    data13 = this.Checkbox13.Crear + "" + this.Checkbox13.Reportes + "";

    this.permisos.idRol = params.id;
    this.permisos.perCentros = data;
    this.permisos.perEntrega = data6;
    this.permisos.perRecepcion = data12;
    this.permisos.perDevolucion = data13;
    this.permisos.perUDS = data3;
    this.permisos.perUsuarios = data4;
    this.permisos.perBeneficiarios = data5;
    this.permisos.perPuntoen = data2;
    this.permisos.perCentrosD = data7;
    this.permisos.perInventario = data8;
    this.permisos.perRol = data9;
    this.permisos.perMaestros = data10;
    this.permisos.perAlmacenes = data11;
    console.log("Los permisos", this.permisos);
    this.Service.putPermisos(params.id, this.permisos).subscribe(
      res => {
        console.log(this.permisos);
        console.log(res);
        this.showMenssage();
      },
      err => {
        console.log(err);
        this.showMenssage();
      }
    );
    console.log("si");
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
  filter46;
  filter47;
  filter48;
  filter49;
  filter50;
  filter51;
  filter52;
  filter53;
  filter54;
  filter55;
  filter56;
  filter57;
  //---------------centro zonal
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
  //-------------------------- Unidad de servicio
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
  //---------------------------- Usuarios
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
  //-------------------------- Beneficiarios
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
  //--------------------------- Entrega
  onFilterChange26() {
    if (this.filter26 == true) {
      this.Checkbox6.Crear = 1;
    } else {
      this.Checkbox6.Crear = 0;
    }
  }
  onFilterChange27() {
    if (this.filter27 == true) {
      this.Checkbox12.Crear = 1;
    } else {
      this.Checkbox12.Crear = 0;
    }
  }
  onFilterChange28() {
    if (this.filter28 == true) {
      this.Checkbox12.Reportes = 1;
    } else {
      this.Checkbox12.Reportes = 0;
    }
  }
  onFilterChange29() {
    if (this.filter29 == true) {
      this.Checkbox6.Reportes = 1;
    } else {
      this.Checkbox6.Reportes = 0;
    }
  }
  //----------------------centro Distribucion
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
  //----------------------Inventarios
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
  //------------------------------- Roles
  onFilterChange41() {
    if (this.filter41 == true) {
      this.Checkbox9.Crear = 1;
    } else {
      this.Checkbox9.Crear = 0;
    }
  }
  onFilterChange42() {
    if (this.filter42 == true) {
      this.Checkbox9.Actualizar = 1;
    } else {
      this.Checkbox9.Actualizar = 0;
    }
  }
  onFilterChange43() {
    if (this.filter43 == true) {
      this.Checkbox9.vizualizar = 1;
    } else {
      this.Checkbox9.vizualizar = 0;
    }
  }
  onFilterChange44() {
    if (this.filter44 == true) {
      this.Checkbox9.Reportes = 1;
    } else {
      this.Checkbox9.Reportes = 0;
    }
  }
  onFilterChange45() {
    if (this.filter45 == true) {
      this.Checkbox9.Inhabilitar = 1;
    } else {
      this.Checkbox9.Inhabilitar = 0;
    }
  }
  //-------------------------------Datos maestros
  onFilterChange46() {
    if (this.filter46 == true) {
      this.Checkbox10.Crear = 1;
    } else {
      this.Checkbox10.Crear = 0;
    }
  }
  onFilterChange47() {
    if (this.filter47 == true) {
      this.Checkbox10.Actualizar = 1;
    } else {
      this.Checkbox10.Actualizar = 0;
    }
  }
  onFilterChange48() {
    if (this.filter48 == true) {
      this.Checkbox10.vizualizar = 1;
    } else {
      this.Checkbox10.vizualizar = 0;
    }
  }
  onFilterChange49() {
    if (this.filter49 == true) {
      this.Checkbox10.Reportes = 1;
    } else {
      this.Checkbox10.Reportes = 0;
    }
  }
  onFilterChange50() {
    if (this.filter50 == true) {
      this.Checkbox10.Inhabilitar = 1;
    } else {
      this.Checkbox10.Inhabilitar = 0;
    }
  }
  //--------------------Almacenes
  onFilterChange51() {
    if (this.filter51 == true) {
      this.Checkbox11.Crear = 1;
    } else {
      this.Checkbox11.Crear = 0;
    }
  }
  onFilterChange52() {
    if (this.filter52 == true) {
      this.Checkbox11.Actualizar = 1;
    } else {
      this.Checkbox11.Actualizar = 0;
    }
  }
  onFilterChange53() {
    if (this.filter53 == true) {
      this.Checkbox11.vizualizar = 1;
    } else {
      this.Checkbox11.vizualizar = 0;
    }
  }
  onFilterChange54() {
    if (this.filter54 == true) {
      this.Checkbox11.Reportes = 1;
    } else {
      this.Checkbox11.Reportes = 0;
    }
  }
  onFilterChange55() {
    if (this.filter55 == true) {
      this.Checkbox11.Inhabilitar = 1;
    } else {
      this.Checkbox11.Inhabilitar = 0;
    }
  }
  onFilterChange56() {
    if (this.filter56 == true) {
      this.Checkbox13.Crear = 1;
    } else {
      this.Checkbox13.Crear = 0;
    }
  }
  onFilterChange57() {
    if (this.filter57 == true) {
      this.Checkbox13.Reportes = 1;
    } else {
      this.Checkbox13.Reportes = 0;
    }
  }

  //mensajes de asigancion
  showMenssage() {
    Swal.fire({
      title: "Modificados!",
      text: "Permisos Modificados",
      type: "success",
      confirmButtonText: "Entendido"
    }).then(res => {
      if (res.value) {
        console.log("confirmed");
        this.router.navigate(["/roli"]);
      }
    });
  }
}
