import { Component, OnInit, Input } from '@angular/core';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { duplicadosz } from '../../interfaces/duplicadosz';
import { Municipio } from '../../interfaces/municipio';
import { Regional } from '../../interfaces/regional';
import { Select2OptionData } from 'ng2-select2';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-centrozonali',
  templateUrl: './centrozonali.component.html',
  styleUrls: ['./centrozonali.component.css']
})
export class CentrozonaliComponent implements OnInit {
  //public exampleData: Array<Select2OptionData>;
  public regional: Regional[] = [];
  municipios: Municipio[] = [];
  dup: duplicadosz[] = [];
  cz: Centrozonal[] = [];
  x;
  public options: Select2Options;



  constructor(
    private activeRoute: ActivatedRoute,
    private Service: ServicioService,
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  centros: Centrozonal = {
    idCentrosZonales: 0,
    NombreCentroZonal: '',
    idMunicipios: 1,
    Comuna: '',
    CodigoExternoJcz: '',
    CodigoExternoCZ: null,
    Estado: 1,
    idRegional: 1,
  };


  //----Validaciones de campos
  czForm: FormGroup;
  submitted = false;

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.czForm.valid) {
      this.Validar();
      if(this.campo1 == false && this.campo2 == false && this.campo3 == false){
        this.insertDatos();
      }
    } else if(this.czForm.invalid) {
      this.showMenssagenull();
    }

    // display form values on success
    console.log('Formulario', this.czForm.value);
  }

  ngOnInit() {
    //Validador--------------------
    this.czForm = this.fb.group({
      Estado: ['', Validators.required],
      NombreCentroZonal: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      idRegional: ['', Validators.required],
      idMunicipios: ['', Validators.required],
      Comuna: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú]*$')]],
      CodigoExternoJcz: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú 0-9]*$')]],
      CodigoExternoCZ: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('^[0-9]*$')]],
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

    this.Service.getduplicadoz()
      .subscribe(res => {
        this.dup = res;
      }, err => {
        console.log(err);
      });

    this.Service.getCentro().subscribe(res => {
      this.cz = Object(res);
      console.log(this.cz);
    }, err => {
      console.log(err);
    });

  }

  onReset() {
    this.submitted = false;
    this.czForm.reset();
  }

  get f() { return this.czForm.controls; }

  //------------------Validar si exiten los datos-----------------------
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

  //insertar Datos ------------------------------------------------
  insertDatos() {
    delete this.centros.idCentrosZonales;
    this.Service.postCentro(this.centros).subscribe(res => {
      console.log(this.centros);
      console.log(res);
      this.showMenssage();
    },
      err => {
        console.log(err);
        this.showMenssage();
      });

  }

  //mensajes de creacion
  showMenssage() {
    Swal.fire({
      title: 'Creado',
      text: 'Centro zonal creado ',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/centrozonaliv']);
      }
    });
  }
  //Mensaje de error

  showMenssage2() {
    Swal.fire({
      title: 'Error',
      text: 'Error al crear centro zonal',
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
