import { Component, OnInit } from '@angular/core';
import { Beneficiario } from 'src/app/interfaces/beneficiario';
import { ServicioService } from 'src/app/servicio.service';
import { Acudientes } from 'src/app/interfaces/acudiente';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-generales-beneficiario',
  templateUrl: './datos-generales-beneficiario.component.html',
  styleUrls: ['./datos-generales-beneficiario.component.css'],
  template: `
 
  <html>
  <title>Menu Desplegable</title>
  <head>
  </head>
  <body>

  <h1>Crear Beneficiario</h1>

  <div class="container" class="padre">
   <div class="card card-container">
  
  <form class="form-signin padding">
  <h1>Datos Generales Usuario</h1>

              <span class="btn btn-success" >Numero de documento de identidad</span>
              <h2></h2>
              <input type="number" class="form-control" [(ngModel)]="x.NumeroDocumento" name="Numerodoc"
            placeholder="Numero de documento " class="form-control">
              <h2></h2>
              <span class="btn btn-success" >Primer Nombre</span>
              <h2></h2>
              <input type="text" class="form-control" [(ngModel)]="x.PrimerNombre" name="primernombre"
              placeholder="Primer nombre" class="form-control">
               <h2></h2>
              <span class="btn btn-success" >Segundo Nombre</span>
              <h2></h2>
              <input type="text" class="form-control" [(ngModel)]="x.PrimerApellido" name="segundonombre"
            placeholder="Segundo Nombre" class="form-control">
             <h2></h2>
              <span class="btn btn-success" >Primer Apellido</span>
              <h2></h2>
              <input type="text" class="form-control" [(ngModel)]="x.SegundoNombre" name="primerapellido"
            placeholder="primer apellido" class="form-control">
             <h2></h2>
              <span class="btn btn-success" >Segundo Apellido</span>
              <h2></h2>
              <input type="text" class="form-control" [(ngModel)]="x.SegundoApellido" name="segundoapellido"
            placeholder="segundo apellido" class="form-control">
              <h2></h2>
              <span class="btn btn-success" >Estado del Beneficiario</span>
              <h2></h2>
              <label class="container1" [(ngModel)]="x.Estado">Habilitar
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                    <label class="container1" [(ngModel)]="x.Estado">Inhabilitar
                          <input type="checkbox">
                          <span class="checkmark"></span>
                  </label>
                  <h2></h2>
                  <span class="btn btn-success" >Genero</span>
                  <h2></h2>
                  <select class="select-css" >
                          <option value="0">Masculino</option>
                          <option value="1">Femenino</option>
                              
                  </select>
                  
                  <span class="btn btn-success">Fecha de Nacimiento:</span>

                  <input type="date" class="form-control" [(ngModel)]="x.FechaNacimiento" name="fechan" placeholder="Fecha Nacimiento" min="2018-01-01" max="2050-12-31" class="form-control">
	
     <h2></h2>
     <span class="btn btn-success" >Servicio o modalidad</span>
              <h2></h2>
              <input type="text" class="form-control" [(ngModel)]="x.ServicioOmodalidad" name="serv"
		placeholder="Servcio o modalidad" class="form-control" id="inputdoc">
              <h2></h2>
              <span class="btn btn-success">Fecha de Ingreso:</span>

              <input type="date" class="form-control" [(ngModel)]="x.FechaIngreso" name="fechai" placeholder="Fecha Ingreso" min="2018-01-01" max="2050-12-31" class="form-control">
	
                     <h2></h2>

              <h1>Acudiente Beneficiario</h1>

              <h2></h2>

              <span class="btn btn-success" >Tipo de Documento</span>
                <h2></h2>
                <select class="select-css" >
                        <option value="0">CC</option>
                        <option value="1">CE</option>
                        <option value="1">PA</option>
                </select>
                <h2></h2>

                <span class="btn btn-success">Numero de Documento de identidad Acudiente</span>
                <h2></h2>
                <input type="text" class="form-control" [(ngModel)]="y.NumeroDocumento" name="numerodoc"
		placeholder="numero de documento" class="form-control" >
                <h2></h2>

                <span class="btn btn-success">Nombres</span>
                <h2></h2>
                <input type="text" class="form-control" [(ngModel)]="y. Nombres" name="nom"
		placeholder="Nombres" class="form-control" id="inputdoc">
                <h2></h2>

                
                <span class="btn btn-success">Apellidos </span>
                <h2></h2>
                <input type="text" class="form-control" [(ngModel)]="y.Apellidos" name="apl"
                placeholder="Apelldios" class="form-control" >
               <h2></h2>

                <span class="btn btn-success" >Parentesco con el Beneficiario</span>
                <h2></h2>
                
                <select class="select-css" [(ngModel)]="y. Parentesco" >
                    <option value="0">Padre</option>
                    <option value="1">Madre</option>
                    <option value="2">Hermano(a)</option>
                    <option value="3">Abuelo(a)</option>
                    <option value="4">Tio(a)</option>
                    <option value="5">Persona con custodia</option>
                </select>

                <span class="btn btn-success">Genero</span>
                <h2></h2>
                
                <select class="select-css" >
                    <option value="0">Hombre</option>
                    <option value="1">Mujer</option>
                
                </select>

                <span class="btn btn-success">Fecha de Nacimiento </span>
                <h2></h2>
                <input type="date" class="form-control" [(ngModel)]="y.FechaNacimiento"  name="fechan" placeholder="Fecha Ingreso" min="2018-01-01" max="2050-12-31" class="form-control">
	
                       <h2></h2>

                       <span class="btn btn-success">Fecha de Ingreso</span>
                       <h2></h2>

                       <input type="date" class="form-control" [(ngModel)]="y.FechaIngreso" name="fechain" placeholder="Fecha Ingreso" min="2018-01-01" max="2050-12-31" class="form-control">
	
                              <h2></h2>

                              <span class="btn btn-success">Registro Biometrico</span>
                              <h2></h2>
                              <input type="text" [(ngModel)]="y.RegistroBiometrico" class="form-control" name="biometrico"
                              placeholder="Registro Biomerico" class="form-control" >
                              <h2></h2>

                              <h1>Datos De Contacto</h1>

                              <span class="btn btn-success" >Direccion</span>
                              <h2></h2>
                              <input type="text" class="form-control" [(ngModel)]="x.Direccion" name="dic2"
                              placeholder="Direccion" class="form-control" >
                              <h2></h2>
                              <span class="btn btn-success">Pais</span>
                              <h2></h2>
                              
                              <input type="text" class="form-control" [(ngModel)]="x.Pais" name="pais"
                placeholder="pais" class="form-control" >

                                  <h2></h2>
                                  
                                  <span class="btn btn-success" >Departamento</span>
                              <h2></h2>
                              <select [(ngModel)]="x.Departamento">
                                          <option value="0">Antioquia</option>
                                          <option value="1">Arauca</option>
                                          <option value="1">Atlantico</option>
                                          <option value="1">Bogota D.C</option>
                                          <option value="1">Bolivar</option>
                                          <option value="1">Boyaca</option>
                                          <option value="1">Caldas</option>
                                          <option value="1">Caqueta</option>
                                          <option value="1">Cauca</option>
                                          <option value="1">Cesar</option>
                                          <option value="1">Cordoba</option>
                                          <option value="1">Cundinamarca</option>
                                          <option value="1">Choco</option>
                                          <option value="1">Huila</option>
                                          <option value="1">La Guajira</option>
                                          <option value="1">Magdalena</option>
                                          <option value="1">Meta</option>
                                          <option value="1">Nariño</option>
                                          <option value="1">Norte de santander</option>
                                          <option value="1">Quidio</option>
                                          <option value="1">Risaralda</option>
                                          <option value="1">Santander</option>
                                          <option value="1">Sucre</option>
                                          <option value="1">Tolima</option>
                                          <option value="1">Valle del cauca</option>
                              </select>
                                  <h2></h2>
                              <span class="btn btn-success">Municipio</span>
                              <h2></h2>
                              <input type="text" class="form-control" [(ngModel)]="x.Municipio" name="Municipio"
                placeholder="Municipio" class="form-control" >
                                  <h2></h2>
                                  <span class="btn btn-success">Telefono fijo 1 </span>
                              <h2></h2>
                              <input type="number" class="form-control" [(ngModel)]="x.TelefonoFijo" name="tel1"
                placeholder="telefono 1" class="form-control" >
                              <h2></h2>
                              <span class="btn btn-success">Telefono Fijo 2</span>
                              <h2></h2>
                              <input type="number" class="form-control" [(ngModel)]="x.TelefonoFijo2" name="tel2"
                placeholder="telefono 2" class="form-control" >
                              <h2></h2>
                              <span class="btn btn-success">Telefono movil 1 </span>
                              <h2></h2>
                              <input type="number" class="form-control" [(ngModel)]="x.TelefonoMovil" name="movil"
                placeholder="Telefono Movil 1" class="form-control" >
                              <h2></h2>
                              <span class="btn btn-success">Telefono movil 2</span>
                              <h2></h2>
                              <input type="number" class="form-control" [(ngModel)]="x.TelefonoMovil2" name="movil2"
                placeholder="telefono Movil 2" class="form-control" >
                              <h2></h2>
                              <span class="btn btn-success">Email</span>
                              <h2></h2>
                              <input type="text" class="form-control" [(ngModel)]="x.Email" name="email"
                placeholder="Email" class="form-control" >
                                <h2></h2>
                                <button (click)="onClickMe()" class="btn btn-success">Aceptar</button>
                                {{clickMessage}}
                              <h2></h2>


      
  </form><!-- /form -->
  </div><!-- /card-container -->
  </div><!-- /card-container -->


</body>
</html>



  `


})
export class DatosGeneralesBeneficiarioComponent implements OnInit {

  x : Beneficiario = {

    NumeroDocumento : 0,
    FechaIngreso : 0 ,
    FechaNacimiento:0 ,
    PrimerNombre : '',
    PrimerApellido: '',
    SegundoNombre : '',
    Direccion : '',
    Pais : '',
    Departamento : '',
    Municipio : '',
    TelefonoFijo : 0 ,
    TelefonoFijo2 : 0 ,
    TelefonoMovil : 0 ,
    TelefonoMovil2 : 0 ,
    Email : '',
    Estado : '',
    idGenero: 1,
    idTipoDocumento: 1,
    SegundoApellido: '',
    ServicioOmodalidad : '',

  };

  y : Acudientes = {


    NumeroDocumento : 0,
    Nombres : '',
    Apellidos : '',
    Parentesco : '',
    idGenero : 1,
    idTipoDocumento : 1,
    FechaNacimiento : 0,
    FechaIngreso : 0,
    RegistroBiometrico :'',

  };

  showMenssage(){

    Swal.fire({
      title: 'Creado!',
      text: 'Beneficiario Creado',
      type: 'success',
      confirmButtonText: 'Ok'
       }).then((result) => {
        if (result.value) {
          
          this.router.navigate(['/beneficiariosm']);

        }

    });
  }



  onClickMe() {

   
    this.Service.postBeneficiarios(this.x).subscribe(res => {
      console.log(this.x);
      this.showMenssage();
      },
      err => {
        console.log(err);
      });

      this.Service.postAcudientes(this.y).subscribe(res => {
        console.log(this.x);
        },
        err => {
          console.log(err);
        });


  }
  constructor(private Service: ServicioService, private router:Router) { }

  ngOnInit() {
  }



}
