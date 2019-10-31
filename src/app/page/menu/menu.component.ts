import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})  
export class MenuComponent implements OnInit {
  
  mobileQuery: MediaQueryList;

 // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  estructura =     [
    {name:"centrozonal", route: "/centrozonal", icon:"public" },
    {name:"puntoentrega", route: "/puntoentrega", icon:"public" },
    {name:"uds", route: "/uds", icon:"public" },
    {name:"Reporte centrozonal", route: "/reportecentrozonal", icon:"public" },
    {name:"Reporte Punto Entrega", route: "/reportepuntoentrega", icon:"face" },
    {name:"Reporte Unidad de servicio", route: "/reporteuds", icon:"face" },

  ];
  entrega = [
    {name:"Entrega", route:"/entrega", icon: "list_alt"},
    {name:"Reporte Entrega", route:"/reportentregab", icon: "list_alt"},
    {name:"Inventario", route: "/inventario", icon:"store" },
    {name:"Reporte Inventario", route: "/reporteinventario", icon:"store" },
    {name:"Recepcion", route:"/recepcion", icon: "list_alt"},

  ];
  beneficiarios = [

    {name:"acudientes", route: "/acudientes", icon:"face" },
    {name:"Crear beneficiarios ICBF", route: "/beneficiarios", icon:"face" },
    {name:"Modificar beneficiarios ICBF ", route: "/ModificarBeneficiario", icon:"face" },
    {name:"Inhabilitar beneficiarios ICBF", route: "/InhabilitarBeneficiario", icon:"face" },
    {name:"Reporte beneficiarios ICBF", route: "/reportebeneficiario", icon:"face" },

   
  ];

  rol = [

    {name:"rol", route: "/rol", icon:"face" },
    {name:"Modificar rol", route: "/roli", icon:"face" },
    {name:"Reporte Rol", route: "/reporterol", icon:"face" },
  ];

    Usuarios = [

      {name:"Crear usuarios", route: "/usuarios", icon:"face" },
      {name:"Modificar Usuarios", route: "/modificarusuarios", icon:"face" },
      {name:"Inhabilitar Usuarios", route: "/inhabilitarusuarios", icon:"face" },
      {name:"Reporte Usuarios", route: "/reporteusuarios", icon:"face" },

    ];
 
  datos = [

    {name:"Crear Datos Maestros", route: "/listamaestros", icon:"face" },
    {name:"Modificar Datos Maestros", route: "/modificarlistamaestro", icon:"face" },
    {name:"Inhabilitar Datos Maestros", route: "/listamaestrosinhabilitar", icon:"face" },
    {name:"Reporte Datos Maestros", route: "/reportes", icon:"face" },
  ];


  centrod = [


    {name:"Crear Centro Distribucion", route: "/centrodistribucion", icon:"face" },
    {name:"Modificar Centro Distribucion", route: "/modificarcentrod", icon:"face" },
    {name:"Inhabilitar Centro Distribucion", route: "/inhabilitarcentrod", icon:"face" },
    {name:"Reporte Centro Distribucion", route: "/reportecentrodistribucion", icon:"face" },
  ];

  almacen = [


    {name:"Crear Almacen", route: "/almacen", icon:"face" },
    {name:"Modificar Almacen", route: "/modificaralmacen", icon:"face" },
    {name:"Inhabilitar Almacen", route: "/inhabilitaralmacen", icon:"face" },
    {name:"Reporte Almacen", route: "/reportealmacen", icon:"face" },
  ];
  

  fillerContent = Array.from({length: 50}, () =>'');

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  ngOnInit() {
  }

}
