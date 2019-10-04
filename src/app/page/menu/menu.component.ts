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
  fillerNav = [
    {name:"Entrega", route:"/entrega", icon: "list_alt"},
    {name:"Inventario", route: "/inventario", icon:"store" },
    {name:"acudientes", route: "/acudientes", icon:"face" },
    {name:"barrio", route: "/barrio", icon:"public" },
    {name:"Crear beneficiarios ICBF", route: "/beneficiarios", icon:"face" },
    {name:"Modificar beneficiarios ICBF ", route: "/ModificarBeneficiario", icon:"face" },
    {name:"Inhabilitar beneficiarios ICBF", route: "/InhabilitarBeneficiario", icon:"face" },
    {name:"centrozonal", route: "/centrozonal", icon:"public" },
    {name:"comuna", route: "/comuna", icon:"public" },
    {name:"municipio", route: "/municipio", icon:"public" },
    {name:"puntoentrega", route: "/puntoentrega", icon:"public" },
    {name:"regional", route: "/regional", icon:"public" },
    {name:"reportes", route: "/reportes", icon:"receipt" },
    {name:"rol", route: "/rol", icon:"face" },
    {name:"uds", route: "/uds", icon:"public" },
    {name:"Crear usuarios", route: "/usuarios", icon:"face" },
    {name:"Modificar Usuarios", route: "/modificarusuarios", icon:"face" },
    {name:"Inhabilitar Usuarios", route: "/inhabilitarusuarios", icon:"face" },
    {name:"Crear Datos Maestros", route: "/listamaestros", icon:"face" },
    {name:"Modificar Datos Maestros", route: "/listamaestrosmodificar", icon:"face" },
    {name:"Inhabilitar Datos Maestros", route: "/listamaestrosinhabilitar", icon:"face" },
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
