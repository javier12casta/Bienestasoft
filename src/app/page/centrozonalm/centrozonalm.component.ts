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
  cz: Centrozonal[] = [];
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
  DesEstado = true;
    //----Validaciones de campos
    czForm: FormGroup;
    submitted = false;
  
    onSubmit() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.czForm.valid) {
        this.Validar();
        if(this.campo1 == false && this.campo2 == false && this.campo3 == false){
          this.updateDatos();
        }
         
      } else if(this.czForm.invalid) {
        this.showMenssagenull();
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
          NombreCentroZonal: ['', [Validators.required,Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
          idRegional: ['', Validators.required],
          idMunicipios: ['', Validators.required],
          Comuna: ['', [Validators.required,Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
          CodigoExternoJcz: ['', [Validators.required,Validators.pattern('^[a-z A-Z ñ á é í ó ú 0-9]*$')]],
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


    //-------------------Validar si exiten los datos----------------------
    campo1 = false;
    campo2 = false;
    campo3 = false;
    Validar() {
      console.log('nombre ingresado', this.centros.NombreCentroZonal);
      var contador = 0;
      var contador2 = 0;
      var contador3 = 0;
      var contador4 = 0;
      var contador5 = 0;
      var contador6 = 0;
      for (let d of this.cz) {
        if (d.NombreCentroZonal == this.centros.NombreCentroZonal) {
          contador = contador2 + 1;
          console.log('Nombre igual', contador);
        }
  
        if (d.CodigoExternoCZ == this.centros.CodigoExternoCZ) {
          contador3 = contador4 + 1;
  
          console.log('Codico CZ igual', contador3);
        }
  
        if (d.CodigoExternoJcz == this.centros.CodigoExternoJcz) {
          contador5 = contador6 + 1;
          this.campo3 = true;
          console.log('Codico JCZ igual', contador5);
        }
  
      }
      if (contador >= 1) {
        this.campo1 = true;
        this.showMenssage3();
      } else {
        this.campo1 = false;
      }
  
      if (contador3 >= 1) {
        this.campo2 = true;
        this.showMenssage4();
      }else{
        this.campo2 = false;
      }
  
      if (contador5 >= 1) {
        this.campo3 = true;
        this.showMenssage5();
      }else{
        this.campo3 = false;
      }
  
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

  showMenssage3() {
    Swal.fire({
      title: 'Error',
      text: 'El nombre del centro zonal ya exite',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

  showMenssage4() {
    Swal.fire({
      title: 'Error',
      text: 'El código externo ICBF centro zonal ya exite',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }

  showMenssage5() {
    Swal.fire({
      title: 'Error',
      text: 'El código externo JCZ ya exite',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
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
