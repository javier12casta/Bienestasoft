import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { InBeneficiario } from '../../interfaces/inhabilitarBenefiario';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inhabilitarbeneficiariopi',
  templateUrl: './inhabilitarbeneficiariopi.component.html',
  styleUrls: ['./inhabilitarbeneficiariopi.component.css']
})
export class InhabilitarbeneficiariopiComponent implements OnInit {

  public beneficiarios: InBeneficiario[] = [];
  

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService, private router:Router) { }

    ben: InBeneficiario = {

      idBeneficiarios: 1,
      Estado : '',
      
   };

      

  ngOnInit() {

    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.Service.getBeneficiariosid(params.id)
        .subscribe(res => {
          console.log(res);
          this.ben = Object(res);
        }, err => {
          console.log(err);
        }
        );
    }

  }

  showMenssage(){
    Swal.fire({
      title: 'Deshabilitado',
      text: 'Beneficiario deshabilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/inhabilitarbeneficiariosp']);
        window.location.reload();

      }


    });
  }

  showMenssage1(){
    Swal.fire({
      title: 'Habilitado',
      text: 'Beneficiario Habilitado',
      type: 'success',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.value) {
        
        this.router.navigate(['/inhabilitarbeneficiariosp']);

      }
    });
  }

  EnableDatos(){

    this.Service.putBeneficiariosInhabilitar(this.ben.idBeneficiarios, this.ben)
      .subscribe(
        res => {
          console.log(res);

          if(this.ben.Estado == "1"){

            this.showMenssage1();

          }else{

            this.showMenssage();
          }


        }, err => {
          console.log(err);
        }
      );
  }

}
