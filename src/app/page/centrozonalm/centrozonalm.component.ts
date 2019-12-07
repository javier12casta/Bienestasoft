import { Component, OnInit } from '@angular/core';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';

import { Municipio } from '../../interfaces/municipio';
import { Comuna } from '../../interfaces/comuna';
import { Regional } from '../../interfaces/regional';
import { Barrio } from '../../interfaces/barrio';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-centrozonalm',
  templateUrl: './centrozonalm.component.html',
  styleUrls: ['./centrozonalm.component.css']
})
export class CentrozonalmComponent implements OnInit {
  public regional: Regional[] = [];
  municipios: Municipio[] = [];
  public options: Select2Options;

  constructor(
    private activeRoute: ActivatedRoute,
    private Service: ServicioService,
    private router:Router,
    private fb: FormBuilder
  ) {
  } 

  centros: Centrozonal = {
    idCentrosZonales: 0,
    NombreCentroZonal: '',
    idMunicipios: 1,
    Comuna: '',
    CodigoExternoJcz: '',
    CodigoExternoCZ: 0,
    Estado: 1,
    idRegional: 2,
  };

    //----Validaciones de campos
    czForm: FormGroup;
    submitted = false;
  
    onSubmit() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.czForm.valid) {
         this.updateDatos();
      }else{
      }
  
      // display form values on success
      console.log('Formulario', this.czForm.value);
    }

  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getCentroid(params.id)
        .subscribe(res => {
          console.log(res);
          this.centros = Object(res);
        }, err => {
          console.log(err);
        }
        );
    }
        //Validador--------------------
        this.czForm = this.fb.group({
          Estado: ['', Validators.required],
          NombreCentroZonal: ['', [Validators.required,Validators.pattern('^[a-z A-Z á é í ó ú]*$')]],
          idRegional: ['', Validators.required],
          idMunicipios: ['', Validators.required],
          Comuna: ['', [Validators.required,Validators.pattern('^[a-z A-Z á é í ó ú]*$')]],
          CodigoExternoJcz: ['', [Validators.required,Validators.pattern('^[a-z A-Z 0-9]*$')]],
          CodigoExternoCZ: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4),Validators.pattern('^[0-9]*$')]],
        });
    // Traer Muinicipios ---------------------------------------
    this.Service.getMunicipio()
      .subscribe(res => {
        this.municipios = res;
      }, err => {
        console.log(err);
      });

    //traer regionales -----------------------------------------
    this.Service.getRegional()
      .subscribe(res => {
        this.regional = res;
      }, err => {
        console.log(err);
      });
    //opciones del select ----------------------------------------
    this.options = {
      multiple: false,
      theme: 'classic',
      closeOnSelect: false
    }
  }

  onReset() {
    this.submitted = false;
    this.czForm.reset();
  }

  get f() { return this.czForm.controls; }

  //-----------------------------------------

  // Actualizar Datos---------------------------------------------
  updateDatos() {
    this.Service.putCentro(this.centros.idCentrosZonales, this.centros)
      .subscribe(
        res => {
          console.log(res);
          this.showMenssage();
        }, err => {
          this.showMenssage2();
          console.log(err);
        }
      );
  }

    //mensajes de creacion
    showMenssage(){
      Swal.fire({
        title: 'Modificado',
        text: 'Centro zonal modificado',
        type: 'success',
        confirmButtonText: 'Entendido'
      }).then((result) => {
        if (result.value) {
          
          this.router.navigate(['/centrozonal']);
      
        }
      });
    
    }
  //Mensaje de error
  
  showMenssage2(){
    Swal.fire({
      title: 'Error',
      text: 'Error al modificar el centro zonal',
      type: 'error',
      confirmButtonText: 'Entendido'
    });
  }
}
