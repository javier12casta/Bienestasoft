import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Listadocursos } from '../../interfaces/listadocursos';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Centrozonal } from 'src/app/interfaces/centrozonal';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificarlistadocm',
  templateUrl: './modificarlistadocm.component.html',
  styleUrls: ['./modificarlistadocm.component.css']
})
export class ModificarlistadocmComponent implements OnInit {

  public listacursos: Listadocursos[] = [];
  public cen1: Centrozonal[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private Service: ServicioService, 
    private router:Router,
    private fb: FormBuilder) { }

    listac: Listadocursos = {

      idListadoCursos : 1,
      NombreAgenteE : '',
      NumeroDocumento : '',
      Fecha : 0,
      Estado : 0,
      idTipoDocumento : 0,
      idConsecutivosMaestro :0,
      idBenefiarios : 0,
      idCentrosZonales : 0,
  
      };
  
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
   
   onReset() {
     this.submitted = false;
     this.RefForm.reset();
   }
 
   get f() { return this.RefForm.controls; }
      
  ngOnInit() {


    //Validador--------------------
    this.RefForm = this.fb.group({

      Centroz: ['', Validators.required],
      agente: ['', [Validators.required, Validators.pattern('^[a-z A-Z ñ á é í ó ú\(\)\.]*$')]],
      Numdoc: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      Estado: ['', Validators.required],
      fecha: ['', Validators.required]
    });

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getlistadocursossid(params.id)
        .subscribe(res => {
          console.log(res);
          this.listac = Object(res);
        }, err => {
          console.log(err);
        }
        );
    }

    this.Service.getCentro()
    .subscribe(res => {
      this.cen1 = res;
    }, err => {
      console.log(err);
    });
  }

  showMenssage(){
    Swal.fire({
      title: 'Modificado',
      text: 'Dato maestro modificado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/modificarlistadoc']);
        
    
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

  updateDatos() {
    this.Service.putlistadocursos(this.listac.idListadoCursos, this.listac)
      .subscribe(
        res => {
          console.log(res);
          this.showMenssage();
        }, err => {
          console.log(err);
        }
      );
  }

}


