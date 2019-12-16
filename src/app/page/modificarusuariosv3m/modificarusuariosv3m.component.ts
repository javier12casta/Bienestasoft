import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from '../../interfaces/usuarios';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Rol } from 'src/app/interfaces/rol';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { Puntoentrega} from 'src/app/interfaces/puntoentrega';
import { Uds } from 'src/app/interfaces/uds';
import { delay } from 'q';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Tipodocumento } from 'src/app/interfaces/tipodocumento';

@Component({
  selector: 'app-modificarusuariosv3m',
  templateUrl: './modificarusuariosv3m.component.html',
  styleUrls: ['./modificarusuariosv3m.component.css']
})
export class Modificarusuariosv3mComponent implements OnInit {
  type = "password";
  public usuarios: Usuarios[] = [];
  public rol: Rol[] = [];
  public doc: Tipodocumento[] = [];
  public cen: Centrozonal[] = [];
  public pe: Puntoentrega[] = [];
  public ud: Uds[] = [];

  x: Usuarios = {
    Nombres: '',
    Apellidos: '',
    Estado: 1,
    NumeroDocumento: null,
    FechaIngreso: null,
    NombreUsuarioSistema: '',
    Direccion: '',
    TelefonoFijo: null,
    TelefonoFijo2: null,
    TelefonoMovil: null,
    TelefonoMovil2: null,
    Email: '',
    tipo: '',
    TipoUsuario: '',
    idTipoDocumento: null,
    password: '',
    idUDS: null,
    idCentrosZonales: null,
    idPuntoEntrega: null,
  };

  constructor(
    private activeRoute: ActivatedRoute,
    private Service: ServicioService, 
    private router:Router,
    private fb: FormBuilder
  ) {} 

//----Validaciones de campos
usForm: FormGroup;
submitted = false;
onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.usForm.valid) {
    this.updateDatos();
  } else if (this.usForm.invalid) {
    this.showMenssagenull();
  }
  // display form values on success
  console.log('Formulario', this.usForm.value);
}

  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getUsuariosid(params.id)
        .subscribe(res => {
          this.x = Object(res);
          console.log(this.x);
          delay(2000);
          this
          this.onChange(Event);
        }, err => {
          console.log(err);
        }
        );
    }

    this.Service.ObtenerRoles()
    .subscribe(res => {
      this.rol = res;
    }, err => {
      console.log(err);
    });

    this.Service.gettipodocumento()
    .subscribe(res => {
      this.doc = res;
    }, err => {
      console.log(err);
    });

    this.Service.getCentro()
    .subscribe(res => {
      this.cen = res;
    }, err => {
      console.log(err);
    });

    const es = this.Service.getCentro()
    .subscribe(res => {
      this.cen = res;
    }, err => {
      console.log(err);
    });

    this.Service.getPunto()
    .subscribe(res => {
      this.pe = res;
    }, err => {
      console.log(err);
    });

    this.Service.getUds()
    .subscribe(res => {
      this.ud = res;
    }, err => {
      console.log(err);
    });

    this.usForm = this.fb.group({
      idUDS: ['', Validators.required],
      Estado: ['', Validators.required],
      idTipoDocumento: ['', Validators.required],
      NumeroDocumento: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      Nombres: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      Apellidos: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      FechaIngreso: ['', [Validators.required]],
      NombreUsuarioSistema: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern('^[0-9 a-z A-Z ñ á é í ó ú]*$')]],
      tipo: ['', Validators.required],
      TipoUsuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern('^[0-9 a-z A-Z ñ á é í ó ú]*$')]],
      Direccion: ['', [Validators.required, Validators.pattern('^[a-z A-Z 0-9 ñ á é í ó ú \-\_\´\¨\.\ #]*$')]],
      TelefonoFijo: ['', [Validators.required, Validators.minLength(7), Validators.pattern('^[0-9]*$')]],
      TelefonoFijo2: ['', [Validators.minLength(7), Validators.pattern('^[0-9]*$')]],
      TelefonoMovil: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      TelefonoMovil2: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      Email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]*$')]],
    });
 
  }

  get f() { return this.usForm.controls; }

    habilitado = true;
    habilitado1 = true;
    habilitado2 = true;
    onChange($event) {
      delay(2000);
      console.log(this.x.idCentrosZonales > 0 ||this.x.idCentrosZonales);
    
    if(this.x.idCentrosZonales !== null ){
      console.log('Entro al if');
      this.habilitado = false;
      this.habilitado1 = true;
      this.habilitado2 = true;

    }else if (this.x.idPuntoEntrega > 0 || this.x.idPuntoEntrega != null) {
      this.habilitado = true;
      this.habilitado1 = false;
      this.habilitado2 = true;

    }else if (this.x.idUDS > 0 || this.x.idUDS != null) {
      this.habilitado = true;
      this.habilitado1 = true;
      this.habilitado2 = false;
    }
     
  }

  showMenssage(){
    Swal.fire({
      title: 'Modificado',
      text: 'Usuario modificado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/modificarusuariov3']);
      }
    });
  }

  // Actualizar Datos---------------------------------------------
  updateDatos() {

    

      this.Service.putUsuarios(this.x.idUsuarios, this.x)
      .subscribe(
        res => {
          console.log(res);
          this.showMenssage();
        }, err => {
          console.log(err);
        }
      );
      
  }

  showMenssage3(){
    Swal.fire({
      title: 'Error',
      text: 'campos erroneos o vacios',
      type: 'error',
      confirmButtonText: 'Entendido'
    });
    }


      ver() {

        if (this.type == "password") {
    
          this.type = "text";
    
        } else {
    
          this.type = "password";
    
        }
    
    
      }
    
    
      showMenssagenull() {
        Swal.fire({
          title: 'Error',
          text: 'Campos vacios',
          type: 'warning',
          confirmButtonText: 'Entendido'
        });
      }

}
