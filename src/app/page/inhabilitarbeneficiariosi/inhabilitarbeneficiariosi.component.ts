import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { InBeneficiario } from '../../interfaces/inhabilitarBenefiario';

@Component({
  selector: 'app-inhabilitarbeneficiariosi',
  templateUrl: './inhabilitarbeneficiariosi.component.html',
  styleUrls: ['./inhabilitarbeneficiariosi.component.css']
})
export class InhabilitarbeneficiariosiComponent implements OnInit {

  public beneficiarios: InBeneficiario[] = [];
  

  constructor(private activeRoute: ActivatedRoute,
    private Service: ServicioService,) { }

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


  EnableDatos(){

    this.Service.putBeneficiariosInhabilitar(this.ben.idBeneficiarios, this.ben)
      .subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
      );
  }

}
