import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificarbeneficiarios',
  templateUrl: './modificarbeneficiarios.component.html',
  styleUrls: ['./modificarbeneficiarios.component.css'],
  template: `
  
  <html>
    <title></title>
    <head>
    </head>
    <body>
        <h1>Modificar Beneficiario</h1>
    <h1>Seleccionar el nivel</h1>
    <div class="container"  class="padre">
     <div class="card card-container" >
    
    <form class="form-signin padding" >
    <h2></h2>
    <span class="btn btn-success" >Nivel</span>
    <h2></h2>
    
    <select class="select-css">
            <option value="0">Centro Zonal</option>
            <option value="1">Punto De Entrega</option>
            <option value="1">Unidad de servicio</option>
    </select>
    
           <h2></h2>
           <button type="button" class="btn btn-success" routerLink="/ModificarBeneficiario1">siguiente</button>
           <h2></h2>

           

    </form><!-- /form -->
    </div><!-- /card-container -->
    </div><!-- /card-container -->


</body>
</html>
  
  `
})
export class ModificarbeneficiariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
