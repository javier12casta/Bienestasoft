import { Component, OnInit } from '@angular/core';
import { Lprecios} from '../../interfaces/listaprecios';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-reportepreciosbienestarina',
  templateUrl: './reportepreciosbienestarina.component.html',
  styleUrls: ['./reportepreciosbienestarina.component.css']
})
export class ReportepreciosbienestarinaComponent implements OnInit {

  listapre: Lprecios[] = [];

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
