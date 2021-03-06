import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { TipoBienestarina } from '../../interfaces/tipobienestarina';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-modificareferenciabm',
  templateUrl: './modificareferenciabm.component.html',
  styleUrls: ['./modificareferenciabm.component.css']
})
export class ModificareferenciabmComponent implements OnInit {

  public tipobienestarina: TipoBienestarina[] = [];
  unidadmedidad: string[] = ["Bolsa", "Caja"];
  unidadsecundario: string[] = ["g", "ml"];
  Referencias: string[] = ["Granular", "Liquida"];

  bine: TipoBienestarina = {
    idTipoBienesterina: 1,
    TipoBienesterina: '',
    Codigo: 0,
    Estado: 1,
    Referencia: '',
    UnidadPrincipal: '',
    Cantidad: 0,
    UnidadSecundaria: '',
  };

  constructor(
    private activeRoute: ActivatedRoute,
    private Service: ServicioService,
    private router: Router,
    private fb: FormBuilder) { }

  //----Validaciones de campos
  RefForm: FormGroup;
  submitted = false;

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.RefForm.valid) {

      this.updateDatos();

    } else if (this.RefForm.invalid) {
      this.showMenssagenull();
    }
  }


  ngOnInit() {

    //Validador--------------------
    this.RefForm = this.fb.group({
      Estado: ['', Validators.required],
      Codigo: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      TipoBienesterina: ['', [Validators.required, Validators.pattern('^[0-9 a-z A-Z ñ á é í ó ú\(\)\.]*$')]],
      Referencia: ['', Validators.required],
      unidad: ['', Validators.required],
      Cantidad: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      unidadsecundario: ['', Validators.required],
    });

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getTipobienestarinaid(params.id)
        .subscribe(res => {
          console.log(res);
          this.bine = Object(res);
        }, err => {
          console.log(err);
        }
        );
    }

  }

  onReset() {
    this.submitted = false;
    this.RefForm.reset();
  }

  get f() { return this.RefForm.controls; }

  updateDatos() {
    this.Service.putTipobienestarina(this.bine.idTipoBienesterina, this.bine)
      .subscribe(
        res => {
          console.log(res);
          this.showMenssage();
        }, err => {
          console.log(err);
        }
      );
  }

  Referencia() {
    if (this.bine.Referencia == "Granular") {
      this.bine.UnidadPrincipal = "Bolsa";
      this.bine.UnidadSecundaria = "g";
    } else if (this.bine.Referencia == "Liquida") {
      this.bine.UnidadPrincipal = "Caja";
      this.bine.UnidadSecundaria = "ml";
    }
  }

  presentacion() {
    if (this.bine.UnidadPrincipal == "Bolsa") {
      this.bine.Referencia = "Granular";
      this.bine.UnidadSecundaria = "g";
    } else if (this.bine.Referencia == "Caja") {
      this.bine.Referencia = "Liquida";
      this.bine.UnidadSecundaria = "ml";
    }
  }

  showMenssage() {
    Swal.fire({
      title: 'Modificado',
      text: 'Dsto maestro modificado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {

        this.router.navigate(['/modificarreferenciab']);
      }
    });
  }

  showMenssagenull() {
    Swal.fire({
      title: 'Error',
      text: 'Campos inválidos',
      type: 'warning',
      confirmButtonText: 'Entendido'
    });
  }




}
