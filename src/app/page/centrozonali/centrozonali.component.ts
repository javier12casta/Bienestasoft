import { Component, OnInit } from '@angular/core';
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
  x;
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
    }else{
    }

    // display form values on success
    console.log('Formulario', this.czForm.value);
  }

  ngOnInit() {
    //Validador--------------------
    this.czForm = this.fb.group({
      Estado: ['', Validators.required],
      NombreCentroZonal: ['', [Validators.required,Validators.pattern('^[a-z A-Z á é í ó ú]*$')]],
      idRegional: ['', Validators.required],
      idMunicipios: ['', Validators.required],
      Comuna: ['', [Validators.required,Validators.pattern('^[a-z A-Z á é í ó ú]*$')]],
      CodigoExternoJcz: ['', [Validators.required,Validators.pattern('^[a-z A-Z 0-9]*$')]],
      CodigoExternoCZ: ['', [Validators.required, Validators.minLength(4),Validators.maxLength(4),Validators.pattern('^[0-9]*$')]],
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



  }

  onReset() {
    this.submitted = false;
    this.czForm.reset();
  }

  get f() { return this.czForm.controls; }

  //-----------------------------------------

Validar(){

  for(let d of this.dup){

    this.x = d.cantidadD;
   
  }


  if(this.x > 1){

    this.showMenssage();

  }else{

   this.insertDatos();

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
  showMenssage(){
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

showMenssage2(){
  Swal.fire({
    title: 'Error',
    text: 'Error al crear centro zonal',
    type: 'error',
    confirmButtonText: 'Entendido'
  });
}

}
