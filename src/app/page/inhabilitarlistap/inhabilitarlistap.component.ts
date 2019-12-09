import { Component, OnInit } from '@angular/core';
import { Lprecios} from '../../interfaces/listaprecios';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-inhabilitarlistap',
  templateUrl: './inhabilitarlistap.component.html',
  styleUrls: ['./inhabilitarlistap.component.css']
})
export class InhabilitarlistapComponent implements OnInit {
  listapre: Lprecios[] = [];
  f = new Date();
  fecha = this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear();
  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getListaprecios()
    .subscribe(async (data) => {
      this.listapre = data;
      console.log(data);
      console.log('funciona');
    }
    );
    
  }

}
