import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Centrodistribucion } from '../../interfaces/centrodistribucion';
import Swal from 'sweetalert2';
import { Puntoentrega } from 'src/app/interfaces/puntoentrega';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificarcentropi',
  templateUrl: './modificarcentropi.component.html',
  styleUrls: ['./modificarcentropi.component.css']
})
export class ModificarcentropiComponent implements OnInit {

  public centrod: Centrodistribucion[] = [];
  public cen: Puntoentrega[] = [];

  constructor( private activeRoute: ActivatedRoute,
    private Service: ServicioService,private router:Router,private fb: FormBuilder) { }


    cend: Centrodistribucion = {

    idCentroDistribucion: 1,
    NumeroExterno:'',
    Nombre : '',
    Responsable : '' ,
    Direccion : '',
    Barrio :'',
    Telefono : 0,
    Estado : 0,
    };

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

    this.usForm = this.fb.group({
      idCentroDistribucion: ['', Validators.required],
      Estado: ['', Validators.required],
      NumeroExterno: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      Nombre: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      Responsable: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      Direccion: ['', [Validators.required, Validators.pattern('^[a-z A-Z 0-9 ñ á é í ó ú \-\_\´\¨\.\ #]*$')]],
      Barrio: ['', [Validators.required, Validators.pattern('^[a-z A-Z 0-9 ñ á é í ó ú \-\_\´\¨\.\ #]*$')]],
      Telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      idPuntoEntrega: ['', Validators.required],
    });

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getcentrodistribucionid(params.id)
        .subscribe(res => {
          this.cend = Object(res);
          console.log(this.cend);
        }, err => {
          console.log(err);
        }
        );
    }

    this.Service.getPunto()
    .subscribe(res => {
      this.cen = res;
    }, err => {
      console.log(err);
    });
   


  }

  get f() { return this.usForm.controls; }

  showMenssage(){
    Swal.fire({
      title: 'Modificado!',
      text: 'Centro Distribucion Modificado',
      type: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/modificarcentrop']);
    
      }
    });
  }

  updateDatos() {
    this.Service.putcentrodistribucion(this.cend.idCentroDistribucion, this.cend)
      .subscribe(
        res => {
          console.log(res);
          this.showMenssage();
        }, err => {
          console.log(err);
        }
      );
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
