import { Component, OnInit } from '@angular/core';
import { Almacent} from '../../interfaces/almacent';
import { Uds} from '../../interfaces/uds';
import { ServicioService } from '../../servicio.service';


@Component({
  selector: 'app-inhabilitaralmacenu',
  templateUrl: './inhabilitaralmacenu.component.html',
  styleUrls: ['./inhabilitaralmacenu.component.css']
})
export class InhabilitaralmacenuComponent implements OnInit {

  
  
  almac: Almacent[] = [];
  cen: Uds[] = [];

  constructor(private Service: ServicioService) { }

  ngOnInit() {

    this.Service.getAlmacenu()
    .subscribe(async (data) => {
      this.almac = data;
      console.log(data);
      console.log('funciona');
    }
    );

  
    
  }

}
