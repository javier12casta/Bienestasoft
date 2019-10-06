import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntregaComponent } from './page/entrega/entrega.component';
import { AppComponent } from './app.component';
import { AcudienteBeneficiarioComponent } from './page/acudiente-beneficiario/acudiente-beneficiario.component';
import { AcudientesComponent } from './page/acudientes/acudientes.component';
import { BarrioComponent } from './page/barrio/barrio.component';
import { BarrioliComponent } from './page/barrioli/barrioli.component';
import { BeneficiariosComponent } from './page/beneficiarios/beneficiarios.component';
import { CentrozonalComponent } from './page/centrozonal/centrozonal.component';
import { CentrozonaliComponent } from './page/centrozonali/centrozonali.component';
import { ComunaComponent } from './page/comuna/comuna.component';
import { ComunaliComponent } from './page/comunali/comunali.component';
import { DatosContactoBeneficiarioComponent } from './page/datos-contacto-beneficiario/datos-contacto-beneficiario.component';
import { InventarioComponent } from './page/inventario/inventario.component';
import { DatosContactoUsuarioComponent } from './page/datos-contacto-usuario/datos-contacto-usuario.component';
import { DatosGeneralesBeneficiarioComponent } from './page/datos-generales-beneficiario/datos-generales-beneficiario.component';
import { ListaMaestrosBienestarinaComponent } from './page/lista-maestros-bienestarina/lista-maestros-bienestarina.component';
import { ListadoPreciosComponent } from './page/listado-precios/listado-precios.component';
import { MunicipioComponent } from './page/municipio/municipio.component';
import { MunicipioliComponent } from './page/municipioli/municipioli.component';
import { MenuComponent } from './page/menu/menu.component';
import { PuntoentregaComponent } from './page/puntoentrega/puntoentrega.component';
import { RegionalComponent } from './page/regional/regional.component';
import { RegionaliComponent } from './page/regionali/regionali.component';
import { ReportesComponent } from './page/reportes/reportes.component';
import { RolComponent } from './page/rol/rol.component';
import { RoliComponent } from './page/roli/roli.component';
import { UdsComponent } from './page/uds/uds.component';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { LoginComponent } from './login/login.component';
import { UsuarioyrolesComponent } from './page/usuarioyroles/usuarioyroles.component';
import { UsuarionivelComponent } from './page/usuarionivel/usuarionivel.component';
import { ModificarusuariosComponent } from './page/modificarusuarios/modificarusuarios.component';
import { Modificarusuarios1Component } from './page/modificarusuarios1/modificarusuarios1.component';
import { InhabilitarusuariosComponent } from './page/inhabilitarusuarios/inhabilitarusuarios.component';
import { ListaMaestrosBienestarinaModificarComponent } from './page/lista-maestros-bienestarina-modificar/lista-maestros-bienestarina-modificar.component';
import { ListaMaestrosBienestarinaInhabilitarComponent } from './page/lista-maestros-bienestarina-inhabilitar/lista-maestros-bienestarina-inhabilitar.component';
import { DatosGeneralesUsuarioComponent } from './page/datos-generales-usuario/datos-generales-usuario.component';
import { ModificarbeneficiariosComponent } from './page/modificarbeneficiarios/modificarbeneficiarios.component';
import { Modificarbeneficiarios1Component } from './page/modificarbeneficiarios1/modificarbeneficiarios1.component';
import { InhabilitarbeneficiariosComponent } from './page/inhabilitarbeneficiarios/inhabilitarbeneficiarios.component';
import { Inhabilitarbeneficiarios1Component } from './page/inhabilitarbeneficiarios1/inhabilitarbeneficiarios1.component';
import { PuntoentregaiComponent } from './page/puntoentregai/puntoentregai.component';
import { UdsiComponent } from './page/udsi/udsi.component';


import { CentrozonalmComponent } from './page/centrozonalm/centrozonalm.component';


import { ServiciosymodalidadesComponent } from './page/serviciosymodalidades/serviciosymodalidades.component';
import { ReferenciasbienestarinaComponent } from './page/referenciasbienestarina/referenciasbienestarina.component';
import { DatosvariosComponent } from './page/datosvarios/datosvarios.component';
import { PermisosComponent } from './page/permisos/permisos.component';


import { ModificarusuariomComponent } from './page/modificarusuariom/modificarusuariom.component';

import { PuntoentregamComponent } from './page/puntoentregam/puntoentregam.component';
import { UdsmComponent } from './page/udsm/udsm.component';




const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'entrega', component:EntregaComponent},
  {path:'acudientesbeneficirio', component: AcudienteBeneficiarioComponent},
  {path:'acudientes', component:AcudientesComponent},
  {path:'barrio', component:BarrioComponent},
  {path:'barrioli', component:BarrioliComponent},
  {path:'barrioli/:id', component:BarrioliComponent},
  {path:'beneficiarios', component:BeneficiariosComponent},
  {path:'centrozonal', component:CentrozonalComponent},
  {path:'centrozonali', component:CentrozonaliComponent},
  {path:'centrozonalm/:id', component:CentrozonalmComponent},
  {path:'comuna', component:ComunaComponent},
  {path:'comunali', component: ComunaliComponent},
  {path:'comunali/:id', component: ComunaliComponent},
  {path:'datosbeneficiario', component: DatosContactoBeneficiarioComponent},
  {path:'inventario', component:InventarioComponent},
  {path:'datoscontactousuario', component: DatosContactoUsuarioComponent},
  {path:'datosgeneralesbeneficiario', component:DatosGeneralesBeneficiarioComponent},
  {path:'listamaestros', component:ListaMaestrosBienestarinaComponent},
  {path:'listaprecios', component: ListadoPreciosComponent},
  {path:'municipio', component: MunicipioComponent},
  {path:'municipioli', component:MunicipioliComponent},
  {path:'municipioli/:id', component:MunicipioliComponent},
  {path:'menu', component:MenuComponent},
  {path:'puntoentrega', component: PuntoentregaComponent},
  {path:'puntoentregai', component: PuntoentregaiComponent},
  {path:'puntoentregam/:id', component: PuntoentregamComponent},
  {path:'regional', component:RegionalComponent},
  {path:'regionali', component: RegionaliComponent},
  {path:'regionali/:id', component: RegionaliComponent},
  {path:'reportes', component:ReportesComponent},
  {path:'rol', component: RolComponent},
  {path:'rol/:id', component: RolComponent},
  {path:'roli', component: RoliComponent},
  {path:'roli/:id', component: RolComponent},
  {path:'uds', component: UdsComponent},
  {path:'udsi', component: UdsiComponent},
  {path:'udsm/:id', component: UdsmComponent},
  {path:'usuarios', component: UsuariosComponent},
  {path:'usuariosroles', component: UsuarioyrolesComponent},
  {path:'usuariosnivel', component: UsuarionivelComponent},
  {path:'modificarusuarios', component: ModificarusuariosComponent},
  {path:'modificarusuarios1', component: Modificarusuarios1Component},
  {path:'inhabilitarusuarios', component: InhabilitarusuariosComponent},
  {path:'listamaestrosmodificar', component: ListaMaestrosBienestarinaModificarComponent},
  {path:'listamaestrosinhabilitar', component: ListaMaestrosBienestarinaInhabilitarComponent},
  {path:'listamaestros', component:ListaMaestrosBienestarinaComponent},
  {path:'datosgeneralesusuario', component:DatosGeneralesUsuarioComponent},
  {path:'ModificarBeneficiario', component: ModificarbeneficiariosComponent },
  {path:'ModificarBeneficiario1', component: Modificarbeneficiarios1Component },
  {path:'InhabilitarBeneficiario', component: InhabilitarbeneficiariosComponent },
  {path:'InhabilitarBeneficiario1', component: Inhabilitarbeneficiarios1Component },
  {path:'serviciosmodalidades', component:ServiciosymodalidadesComponent },
  {path:'refrenciasbienestarina', component: ReferenciasbienestarinaComponent},
  {path:'datosvarios', component: DatosvariosComponent},
  {path:'permisos', component: PermisosComponent },
  {path:'modificarusuariom/:id', component: ModificarusuariomComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
