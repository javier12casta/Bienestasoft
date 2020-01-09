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
import { Inhabilitarusuarios1Component } from './page/inhabilitarusuarios1/inhabilitarusuarios1.component';
import { InhabilitarusuariosiComponent } from './page/inhabilitarusuariosi/inhabilitarusuariosi.component';
import { InhabilitarlistapComponent } from './page/inhabilitarlistap/inhabilitarlistap.component';
import { InhabilitarlistapiComponent } from './page/inhabilitarlistapi/inhabilitarlistapi.component';
import { InhabilitarlistadocComponent } from './page/inhabilitarlistadoc/inhabilitarlistadoc.component';
import { InhabilitarlistadociComponent } from './page/inhabilitarlistadoci/inhabilitarlistadoci.component';
import { ListaMaestrosBienestarinaModificarComponent } from './page/lista-maestros-bienestarina-modificar/lista-maestros-bienestarina-modificar.component';
import { ListaMaestrosBienestarinaInhabilitarComponent } from './page/lista-maestros-bienestarina-inhabilitar/lista-maestros-bienestarina-inhabilitar.component';
import { DatosGeneralesUsuarioComponent } from './page/datos-generales-usuario/datos-generales-usuario.component';
import { ModificarbeneficiariosComponent } from './page/modificarbeneficiarios/modificarbeneficiarios.component';
import { Modificarbeneficiarios1Component } from './page/modificarbeneficiarios1/modificarbeneficiarios1.component';
import { InhabilitarbeneficiariosComponent } from './page/inhabilitarbeneficiarios/inhabilitarbeneficiarios.component';
import { Inhabilitarbeneficiarios1Component } from './page/inhabilitarbeneficiarios1/inhabilitarbeneficiarios1.component';
import { InhabilitarbeneficiariosiComponent } from './page/inhabilitarbeneficiariosi/inhabilitarbeneficiariosi.component';
import { PuntoentregaiComponent } from './page/puntoentregai/puntoentregai.component';
import { UdsiComponent } from './page/udsi/udsi.component';
import { ModificarlistamaestrosComponent } from './page/modificarlistamaestros/modificarlistamaestros.component';
import { CentrozonalmComponent } from './page/centrozonalm/centrozonalm.component';
import { ServiciosymodalidadesComponent } from './page/serviciosymodalidades/serviciosymodalidades.component';
import { ReferenciasbienestarinaComponent } from './page/referenciasbienestarina/referenciasbienestarina.component';
import { DatosvariosComponent } from './page/datosvarios/datosvarios.component';
import { PermisosComponent } from './page/permisos/permisos.component';
import { ModificarusuariomComponent } from './page/modificarusuariom/modificarusuariom.component';
import { PuntoentregamComponent } from './page/puntoentregam/puntoentregam.component';
import { UdsmComponent } from './page/udsm/udsm.component';
import { ModificarserviciosmComponent } from './page/modificarserviciosm/modificarserviciosm.component';
import { ModificareferenciabComponent } from './page/modificareferenciab/modificareferenciab.component';
import { ModificarlistapComponent } from './page/modificarlistap/modificarlistap.component';
import { ModificarlistadocComponent } from './page/modificarlistadoc/modificarlistadoc.component';
import { ModificarlistadocmComponent } from './page/modificarlistadocm/modificarlistadocm.component';
import { ListadocursosComponent } from './page/listadocursos/listadocursos.component';
import { ModificarbeneficiariomComponent } from './page/modificarbeneficiariom/modificarbeneficiariom.component';
import { ModificarserviciommComponent } from './page/modificarserviciomm/modificarserviciomm.component';
import { ModificareferenciabmComponent } from './page/modificareferenciabm/modificareferenciabm.component';
import { ModificarlistapmComponent } from './page/modificarlistapm/modificarlistapm.component';
import { InhabilitarserviciosmComponent } from './page/inhabilitarserviciosm/inhabilitarserviciosm.component';
import { InhabilitarserviciosmiComponent } from './page/inhabilitarserviciosmi/inhabilitarserviciosmi.component';
import { InhabilitareferenciabComponent } from './page/inhabilitareferenciab/inhabilitareferenciab.component';
import { InhabilitareferenciabiComponent } from './page/inhabilitareferenciabi/inhabilitareferenciabi.component';
import { UsuariosvComponent } from './page/usuariosv/usuariosv.component';
import { UdsinhComponent } from './page/udsinh/udsinh.component';
import { PuntoentregainhComponent } from './page/puntoentregainh/puntoentregainh.component';
import { CentrozonalinhComponent } from './page/centrozonalinh/centrozonalinh.component';
import { CentrodistribucionComponent } from './page/centrodistribucion/centrodistribucion.component';
import { CentrodistribucioncComponent } from './page/centrodistribucionc/centrodistribucionc.component';
import { CentrodistribucionciComponent } from './page/centrodistribucionci/centrodistribucionci.component';
import { AlmacenComponent } from './page/almacen/almacen.component';
import { AlmacencComponent } from './page/almacenc/almacenc.component';
import { AlmacenciComponent } from './page/almacenci/almacenci.component';

import {ModificarcentrodComponent } from './page/modificarcentrod/modificarcentrod.component';
import {ModificarcentrodiComponent } from './page/modificarcentrodi/modificarcentrodi.component';
import {ModificarcentromComponent } from './page/modificarcentrom/modificarcentrom.component';
import {ModificaralmacenComponent } from './page/modificaralmacen/modificaralmacen.component';
import {ModificaralmaceniComponent } from './page/modificaralmaceni/modificaralmaceni.component';
import {ModificaralmacenmComponent } from './page/modificaralmacenm/modificaralmacenm.component';
import {EntregaselComponent } from './page/entregasel/entregasel.component';

import {InhabilitaralmacenComponent } from './page/inhabilitaralmacen/inhabilitaralmacen.component';
import {InhabilitaralmacendiComponent } from './page/inhabilitaralmacendi/inhabilitaralmacendi.component';
import {InhabilitaralmacendmComponent } from './page/inhabilitaralmacendm/inhabilitaralmacendm.component';
import {InhabilitarcentrodComponent } from './page/inhabilitarcentrod/inhabilitarcentrod.component';
import {InhabilitarcentrodiComponent } from './page/inhabilitarcentrodi/inhabilitarcentrodi.component';
import {InhabilitarcentrodmComponent } from './page/inhabilitarcentrodm/inhabilitarcentrodm.component';
import {BeneficiariosmComponent } from './page/beneficiariosm/beneficiariosm.component';
import { ReporteusuariosComponent} from './page/reporteusuarios/reporteusuarios.component';
import { ReportealmacenComponent} from './page/reportealmacen/reportealmacen.component';
import { ReportebeneficiarioComponent} from './page/reportebeneficiario/reportebeneficiario.component';
import { ReportecentrodistribucionComponent} from './page/reportecentrodistribucion/reportecentrodistribucion.component';
import { ReportedatosnutricionalesComponent} from './page/reportedatosnutricionales/reportedatosnutricionales.component';
import { ReportelistadocursosComponent} from './page/reportelistadocursos/reportelistadocursos.component';
import { ReportepreciosbienestarinaComponent} from './page/reportepreciosbienestarina/reportepreciosbienestarina.component';
import { ReportereferenciabienestarinaComponent} from './page/reportereferenciabienestarina/reportereferenciabienestarina.component';
import { ReporteserviciosmodalidadesComponent} from './page/reporteserviciosmodalidades/reporteserviciosmodalidades.component';
import { ReportedatosvariosComponent} from './page/reportedatosvarios/reportedatosvarios.component';
import { ModificardatosnutricionalesComponent} from './page/modificardatosnutricionales/modificardatosnutricionales.component';
import { ModificardatosnutricionalesmComponent} from './page/modificardatosnutricionalesm/modificardatosnutricionalesm.component';
import { ReportecentrozonalComponent} from './page/reportecentrozonal/reportecentrozonal.component';
import { ReporteentregaComponent} from './page/reporteentrega/reporteentrega.component';
import { ReporteudsComponent} from './page/reporteuds/reporteuds.component';
import { EntregacComponent} from './page/entregac/entregac.component';
import {EntregamComponent } from './page/entregam/entregam.component';
import { EntregaiComponent} from './page/entregai/entregai.component';
import { ReporterolComponent} from './page/reporterol/reporterol.component';
import { ReporteentregabComponent} from './page/reporteentregab/reporteentregab.component';

import { InhabilitarudsComponent} from './page/inhabilitaruds/inhabilitaruds.component';
import { ServiciosymodalidadesvComponent} from './page/serviciosymodalidadesv/serviciosymodalidadesv.component';

import { RefrenciasbienestarinavComponent} from './page/refrenciasbienestarinav/refrenciasbienestarinav.component';
import { ListapreciosvComponent} from './page/listapreciosv/listapreciosv.component';
import { ListadocursosvComponent} from './page/listadocursosv/listadocursosv.component';
import { DatosvariosvComponent} from './page/datosvariosv/datosvariosv.component';
import { PermisosmComponent } from './page/permisosm/permisosm.component';

import { ReporteinventarioComponent} from './page/reporteinventario/reporteinventario.component';
import { RecepcionbienestrarinaComponent} from './page/recepcionbienestrarina/recepcionbienestrarina.component';
import { RecepcionbienestarinavComponent} from './page/recepcionbienestarinav/recepcionbienestarinav.component';
import { RecepcionbienestarinaviComponent} from './page/recepcionbienestarinavi/recepcionbienestarinavi.component';

import { RecepcioninvComponent} from './page/recepcioninv/recepcioninv.component';
import { InhabilitardatosnutricionalesComponent} from './page/inhabilitardatosnutricionales/inhabilitardatosnutricionales.component';

import { InhabilitardatosnutricionalesiComponent} from './page/inhabilitardatosnutricionalesi/inhabilitardatosnutricionalesi.component';

import { SalidacentroComponent} from './page/salidacentro/salidacentro.component';
import { SalidacentrocComponent} from './page/salidacentroc/salidacentroc.component';
import { SalidabeneficiarioComponent} from './page/salidabeneficiario/salidabeneficiario.component';
import { SalidabeneficiariocComponent} from './page/salidabeneficiarioc/salidabeneficiarioc.component';
import { SalidaconsumoComponent} from './page/salidaconsumo/salidaconsumo.component';
import { SalidaconsumocComponent} from './page/salidaconsumoc/salidaconsumoc.component';
import { DevolucionesComponent} from './page/devoluciones/devoluciones.component';
import { DevolucionescComponent} from './page/devolucionesc/devolucionesc.component';

import { TrasladoComponent} from './page/traslado/traslado.component';
import { TrasladocComponent} from './page/trasladoc/trasladoc.component';
import { InventariovComponent} from './page/inventariov/inventariov.component';
import { InventariocComponent} from './page/inventarioc/inventarioc.component';
import { ReporterecepcionComponent} from './page/reporterecepcion/reporterecepcion.component';
import { RecuentoinventarioComponent} from './page/recuentoinventario/recuentoinventario.component';
import { RecuentoinventariocComponent} from './page/recuentoinventarioc/recuentoinventarioc.component';
import { ReportedevolucionesComponent} from './page/reportedevoluciones/reportedevoluciones.component';

import { ReportesalidacentrodComponent} from './page/reportesalidacentrod/reportesalidacentrod.component';
import { ReportesalidaconsumoiComponent} from './page/reportesalidaconsumoi/reportesalidaconsumoi.component';
import { ReportesalidabeneficiarioComponent} from './page/reportesalidabeneficiario/reportesalidabeneficiario.component';
import { CentrozonalinComponent } from './page/centrozonalin/centrozonalin.component';
import { PuntoentregainComponent } from './page/puntoentregain/puntoentregain.component';
import { UdsinComponent } from './page/udsin/udsin.component';
import { RolinComponent } from './page/rolin/rolin.component';
import { RolinhComponent } from './page/rolinh/rolinh.component';
import { RolmComponent } from './page/rolm/rolm.component';
import { CentrozonalivComponent } from './page/centrozonaliv/centrozonaliv.component';
import { PuntoentregavComponent } from './page/puntoentregav/puntoentregav.component';
import { UdsvComponent } from './page/udsv/udsv.component';
import { RolvComponent } from './page/rolv/rolv.component';
import { CrearalmacenComponent} from './page/crearalmacen/crearalmacen.component';
import { ConsecutivomaestrovComponent} from './page/consecutivomaestrov/consecutivomaestrov.component';
import { ReporteconsecutivomaestroComponent} from './page/reporteconsecutivomaestro/reporteconsecutivomaestro.component';
import { Usuariov1Component} from './page/usuariov1/usuariov1.component';
import { Usuariov2Component} from './page/usuariov2/usuariov2.component';
import { UsuarioudsComponent} from './page/usuariouds/usuariouds.component';
import { Modificarusuariosv2Component} from './page/modificarusuariosv2/modificarusuariosv2.component';
import { Modificarusuariosv2mComponent} from './page/modificarusuariosv2m/modificarusuariosv2m.component';
import { Modificarusuariosv3Component} from './page/modificarusuariosv3/modificarusuariosv3.component';
import { Modificarusuariosv3mComponent} from './page/modificarusuariosv3m/modificarusuariosv3m.component';
import { Inhabilitarusuarios2Component} from './page/inhabilitarusuarios2/inhabilitarusuarios2.component';
import { Inhabilitarusuarios3Component} from './page/inhabilitarusuarios3/inhabilitarusuarios3.component';
import {InhabilitarusuariospComponent} from './page/inhabilitarusuariosp/inhabilitarusuariosp.component';
import { InhabilitarusuariosuComponent} from './page/inhabilitarusuariosu/inhabilitarusuariosu.component';
import { NivelnumerocuposComponent} from './page/nivelnumerocupos/nivelnumerocupos.component';
import {CentrodistribuciondComponent} from './page/centrodistribuciond/centrodistribuciond.component';

import { CentrodistribucionuiComponent} from './page/centrodistribucionui/centrodistribucionui.component';


import { CentrodistribucionpComponent} from './page/centrodistribucionp/centrodistribucionp.component';

import { CentrodistribucionpiComponent} from './page/centrodistribucionpi/centrodistribucionpi.component';

import {ModificarcentropComponent} from './page/modificarcentrop/modificarcentrop.component';

import { ModificarcentropiComponent} from './page/modificarcentropi/modificarcentropi.component';


import { ModificarcentrouComponent} from './page/modificarcentrou/modificarcentrou.component';

import { ModificarcentrouiComponent} from './page/modificarcentroui/modificarcentroui.component';



import {InhabilitarcentropComponent} from './page/inhabilitarcentrop/inhabilitarcentrop.component';

import { InhabilitarcentropiComponent} from './page/inhabilitarcentropi/inhabilitarcentropi.component';


import { InhabilitarcentrouComponent} from './page/inhabilitarcentrou/inhabilitarcentrou.component';

import { InhabilitarcentrouiComponent} from './page/inhabilitarcentroui/inhabilitarcentroui.component';

import { NivelalmacenComponent} from './page/nivelalmacen/nivelalmacen.component';


import { AlmacenpComponent} from './page/almacenp/almacenp.component';

import { AlmacenpiComponent} from './page/almacenpi/almacenpi.component';


import { AlmacenuComponent} from './page/almacenu/almacenu.component';

import { AlmacenuiComponent} from './page/almacenui/almacenui.component';



import { ModificaralmacenpComponent} from './page/modificaralmacenp/modificaralmacenp.component';

import { ModificaralmacenpiComponent} from './page/modificaralmacenpi/modificaralmacenpi.component';


import { ModificaralmacenuComponent} from './page/modificaralmacenu/modificaralmacenu.component';

import { ModificaralmacenuiComponent} from './page/modificaralmacenui/modificaralmacenui.component';



import {InhabilitaralmacenpComponent} from './page/inhabilitaralmacenp/inhabilitaralmacenp.component';

import { InhabilitaralmacenpiComponent} from './page/inhabilitaralmacenpi/inhabilitaralmacenpi.component';


import { InhabilitaralmacenuComponent} from './page/inhabilitaralmacenu/inhabilitaralmacenu.component';

import { InhabilitaralmacenuiComponent} from './page/inhabilitaralmacenui/inhabilitaralmacenui.component';

import { NivelbeneficiarioComponent} from './page/nivelbeneficiario/nivelbeneficiario.component';


import { BeneficiariosmpComponent} from './page/beneficiariosmp/beneficiariosmp.component';

import { BeneficiariosmpiComponent} from './page/beneficiariosmpi/beneficiariosmpi.component';

import { BeneficiariosmuComponent} from './page/beneficiariosmu/beneficiariosmu.component';

import { BeneficiariosmuiComponent} from './page/beneficiariosmui/beneficiariosmui.component';



import { ModificarBeneficiariopComponent} from './page/modificar-beneficiariop/modificar-beneficiariop.component';

import { ModificarBeneficiariopiComponent} from './page/modificar-beneficiariopi/modificar-beneficiariopi.component';

import { ModificarBeneficiariouComponent} from './page/modificar-beneficiariou/modificar-beneficiariou.component';

import { ModificarBeneficiariouiComponent} from './page/modificar-beneficiarioui/modificar-beneficiarioui.component';

import {ModificarnivelbeneficiarioComponent} from './page/modificarnivelbeneficiario/modificarnivelbeneficiario.component';



import {InhabilitarnivelbeneficiarioComponent} from './page/inhabilitarnivelbeneficiario/inhabilitarnivelbeneficiario.component';



import {InhabilitarbeneficiariopComponent} from './page/inhabilitarbeneficiariop/inhabilitarbeneficiariop.component';

import {InhabilitarbeneficiariopiComponent} from './page/inhabilitarbeneficiariopi/inhabilitarbeneficiariopi.component';

import {InhabilitarbeneficiariouComponent} from './page/inhabilitarbeneficiariou/inhabilitarbeneficiariou.component';
import {InhabilitarbeneficiariouiComponent} from './page/inhabilitarbeneficiarioui/inhabilitarbeneficiarioui.component';

import {NivelistadocursosComponent} from './page/nivelistadocursos/nivelistadocursos.component';



import {ListadocursospComponent} from './page/listadocursosp/listadocursosp.component';
import {ListadocursospiComponent} from './page/listadocursospi/listadocursospi.component';
import {ListadocursosuComponent} from './page/listadocursosu/listadocursosu.component';
import {ListadocursosuiComponent} from './page/listadocursosui/listadocursosui.component';

import {NivelistadocursosmComponent} from './page/nivelistadocursosm/nivelistadocursosm.component';
import {ModificarlistadocursospComponent} from './page/modificarlistadocursosp/modificarlistadocursosp.component';
import {ModificarlistadocursospiComponent} from './page/modificarlistadocursospi/modificarlistadocursospi.component';
import {ModificarlistadocursosuComponent} from './page/modificarlistadocursosu/modificarlistadocursosu.component';
import {ModificarlistadocursosuiComponent} from './page/modificarlistadocursosui/modificarlistadocursosui.component';




import {NivelistadocursosiComponent} from './page/nivelistadocursosi/nivelistadocursosi.component';
import {IlistadocursospiComponent} from './page/ilistadocursospi/ilistadocursospi.component';
import {IlistadocursospComponent} from './page/ilistadocursosp/ilistadocursosp.component';
import {IlistadocursosuComponent} from './page/ilistadocursosu/ilistadocursosu.component';
import {IlistadocursosuiComponent} from './page/ilistadocursosui/ilistadocursosui.component';

import {NiveldatosnutricionalesComponent} from './page/niveldatosnutricionales/niveldatosnutricionales.component';


import {DatosvariospComponent} from './page/datosvariosp/datosvariosp.component';
import {DatosvariospiComponent} from './page/datosvariospi/datosvariospi.component';
import {DatosvariosuComponent} from './page/datosvariosu/datosvariosu.component';
import {DatosvariosuiComponent} from './page/datosvariosui/datosvariosui.component';

import {NiveldatosnutricionalesmComponent} from './page/niveldatosnutricionalesm/niveldatosnutricionalesm.component';


import {ModificardatosnutricionalespComponent} from './page/modificardatosnutricionalesp/modificardatosnutricionalesp.component';
import {ModificardatosnutricionalespiComponent} from './page/modificardatosnutricionalespi/modificardatosnutricionalespi.component';
import {ModificardatosnutricionalesuComponent} from './page/modificardatosnutricionalesu/modificardatosnutricionalesu.component';
import {ModificardatosnutricionalesuiComponent} from './page/modificardatosnutricionalesui/modificardatosnutricionalesui.component';


import {NiveldatosnutricionalesiComponent} from './page/niveldatosnutricionalesi/niveldatosnutricionalesi.component';
import {IdatosnutricionalespComponent} from './page/idatosnutricionalesp/idatosnutricionalesp.component';
import {IdatosnutricionalespiComponent} from './page/idatosnutricionalespi/idatosnutricionalespi.component';
import {IdatosnutricionalesuComponent} from './page/idatosnutricionalesu/idatosnutricionalesu.component';
import {IdatosnutricionalesuiComponent} from './page/idatosnutricionalesui/idatosnutricionalesui.component';



const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'entrega', component:EntregaComponent},
  {path:'acudientesbeneficirio', component: AcudienteBeneficiarioComponent},
  {path:'acudientes', component:AcudientesComponent},
  {path:'barrio', component:BarrioComponent},
  {path:'barrioli', component:BarrioliComponent},
  {path:'barrioli/:id', component:BarrioliComponent},
  {path:'beneficiarios', component:BeneficiariosComponent},
  {path:'beneficiariosm', component:BeneficiariosmComponent},
  {path:'centrozonal', component:CentrozonalComponent},
  {path:'centrozonalin', component:CentrozonalinComponent},
  {path:'centrozonali', component:CentrozonaliComponent},
  {path:'centrozonalm/:id', component:CentrozonalmComponent},
  {path:'centrozonalinh/:id', component:CentrozonalinhComponent},
  {path:'comuna', component:ComunaComponent},
  {path:'comunali', component: ComunaliComponent},
  {path:'comunali/:id', component: ComunaliComponent},
  {path:'datosbeneficiario', component: DatosContactoBeneficiarioComponent},
  {path:'inventario', component:InventarioComponent},
  {path:'inventariov', component: InventariovComponent},
  {path:'inventarioc', component: InventariocComponent},
  {path:'datoscontactousuario', component: DatosContactoUsuarioComponent},
  {path:'datosgeneralesbeneficiario', component:DatosGeneralesBeneficiarioComponent},
  {path:'listamaestros', component:ListaMaestrosBienestarinaComponent},
  {path:'listaprecios', component: ListadoPreciosComponent},
  {path:'municipio', component: MunicipioComponent},
  {path:'municipioli', component:MunicipioliComponent},
  {path:'municipioli/:id', component:MunicipioliComponent},
  {path:'menu', component:MenuComponent},
  {path:'puntoentrega', component: PuntoentregaComponent},
  {path:'puntoentregain', component: PuntoentregainComponent},
  {path:'puntoentregai', component: PuntoentregaiComponent},
  {path:'puntoentregam/:id', component: PuntoentregamComponent},
  {path:'puntoentregainh/:id', component: PuntoentregainhComponent},
  {path:'regional', component:RegionalComponent},
  {path:'regionali', component: RegionaliComponent},
  {path:'regionali/:id', component: RegionaliComponent},
  {path:'reportes', component:ReportesComponent},
  {path:'rol', component: RolComponent},
  {path:'rolm/:id', component: RolmComponent},
  {path:'rolin', component: RolinComponent},
  {path:'rolinh/:id', component: RolinhComponent},
  {path:'roli', component: RoliComponent},
  {path:'roli/:id', component: RolComponent},
  {path:'uds', component: UdsComponent},
  {path:'udsin', component: UdsinComponent},
  {path:'udsi', component: UdsiComponent},
  {path:'udsm/:id', component: UdsmComponent},
  {path:'udsinh/:id', component: UdsinhComponent},
  {path:'usuarios', component: UsuariosComponent},
  {path:'usuariosv', component: UsuariosvComponent},
  {path:'usuariosroles', component: UsuarioyrolesComponent},
  {path:'usuariosnivel', component: UsuarionivelComponent},
  {path:'modificarusuarios', component: ModificarusuariosComponent},
  {path:'modificarusuarios1', component: Modificarusuarios1Component},
  {path:'inhabilitarusuarios', component: InhabilitarusuariosComponent},
  {path:'inhabilitarusuarios1', component: Inhabilitarusuarios1Component},
  {path:'inhabilitarusuariosi/:id', component: InhabilitarusuariosiComponent },
  {path:'listamaestrosmodificar', component: ListaMaestrosBienestarinaModificarComponent},
  {path:'listamaestrosinhabilitar', component: ListaMaestrosBienestarinaInhabilitarComponent},
  {path:'listamaestros', component:ListaMaestrosBienestarinaComponent},
  {path:'datosgeneralesusuario', component:DatosGeneralesUsuarioComponent},
  {path:'ModificarBeneficiario', component: ModificarbeneficiariosComponent },
  {path:'ModificarBeneficiario1', component: Modificarbeneficiarios1Component },
  {path:'modificarbeneficiariom/:id', component: ModificarbeneficiariomComponent },
  {path:'InhabilitarBeneficiario', component: InhabilitarbeneficiariosComponent },
  {path:'InhabilitarBeneficiario1', component: Inhabilitarbeneficiarios1Component },
  {path:'InhabilitarBeneficiarioi/:id', component: InhabilitarbeneficiariosiComponent},
  {path:'serviciosmodalidades', component:ServiciosymodalidadesComponent },
  {path:'refrenciasbienestarina', component: ReferenciasbienestarinaComponent},
  {path:'datosvarios', component: DatosvariosComponent},
  {path:'permisos', component: PermisosComponent },
  {path:'permisos/:id', component: PermisosComponent },
  {path:'permisosm/:id', component: PermisosmComponent },
  {path:'permisosm', component: PermisosmComponent },
  {path:'modificarusuariom/:id', component: ModificarusuariomComponent },
  {path:'modificarlistamaestro', component: ModificarlistamaestrosComponent },
  {path:'modificarserviciom', component: ModificarserviciosmComponent },
  {path:'modificarserviciomm/:id', component: ModificarserviciommComponent },
  {path:'inhabilitarserviciom', component: InhabilitarserviciosmComponent },
  {path:'inhabilitarserviciomi/:id', component: InhabilitarserviciosmiComponent  },
  {path:'modificarreferenciab', component: ModificareferenciabComponent },
  {path:'modificarreferenciabm/:id', component: ModificareferenciabmComponent },
  {path:'inhabilitareferenciab', component:  InhabilitareferenciabComponent},
  {path:'inhabilitareferenciabi/:id', component:  InhabilitareferenciabiComponent},
  {path:'inhabilitarelistap', component: InhabilitarlistapComponent  },
  {path:'inhabilitarelistapi/:id', component: InhabilitarlistapiComponent  },
  {path:'inhabilitarelistadoc', component: InhabilitarlistadocComponent  },
  {path:'inhabilitarelistadoci/:id', component:  InhabilitarlistadociComponent },
  {path:'modificarlistac', component: ModificarlistapComponent },
  {path:'modificarlistacm/:id', component: ModificarlistapmComponent},
  {path:'modificarlistadoc', component: ModificarlistadocComponent },
  {path:'modificarlistadocm/:id', component: ModificarlistadocmComponent },
  {path:'listadocursos', component: ListadocursosComponent },

  {path:'centrodistribucion', component: CentrodistribucionComponent },
  {path:'centrodistribucionc', component: CentrodistribucioncComponent },
  {path:'centrodistribucionci', component: CentrodistribucionciComponent },

  {path:'almacen', component: AlmacenComponent },
  {path:'almacenc', component: AlmacencComponent },
  {path:'almacenci', component: AlmacenciComponent },

  {path:'modificarcentrod', component:  ModificarcentrodComponent},
  {path:'modificarcentroi', component:  ModificarcentrodiComponent},
  {path:'modificarcentrom/:id', component: ModificarcentromComponent },
 
  {path:'modificaralmacen', component: ModificaralmacenComponent },
  {path:'modificaralmaceni', component:  ModificaralmaceniComponent},
  {path:'modificaralmacenm/:id', component:  ModificaralmacenmComponent},


  {path:'inhabilitarcentrod', component: InhabilitarcentrodComponent },
  {path:'inhabilitarcentroi', component: InhabilitarcentrodiComponent  },
  {path:'inhabilitarcentrom/:id', component: InhabilitarcentrodmComponent},
 
  {path:'inhabilitaralmacen', component: InhabilitaralmacenComponent },
  {path:'inhabilitaralmaceni', component: InhabilitaralmacendiComponent },
  {path:'inhabilitaralmacenm/:id', component: InhabilitaralmacendmComponent },
  {path:'reporteusuarios', component: ReporteusuariosComponent},
  
  {path:'reportealmacen', component: ReportealmacenComponent},
  {path:'reportebeneficiario', component: ReportebeneficiarioComponent},
  {path:'reportecentrodistribucion', component: ReportecentrodistribucionComponent},
  {path:'reportedatosnutricionales', component: ReportedatosnutricionalesComponent},
  {path:'reportelistadocursos', component: ReportelistadocursosComponent},
  {path:'reportepreciosbienestarina', component: ReportepreciosbienestarinaComponent},
  {path:'reportereferenciabienestarina', component: ReportereferenciabienestarinaComponent},
  {path:'reporteserviciosymodalidades', component: ReporteserviciosmodalidadesComponent},
  {path:'reportedatosvarios', component: ReportedatosvariosComponent},

  {path:'modificardatosnutricionales', component: ModificardatosnutricionalesComponent},
  {path:'modificardatosnutricionalesm/:id', component: ModificardatosnutricionalesmComponent},

  {path:'reportecentrozonal', component: ReportecentrozonalComponent},

  {path:'reportepuntoentrega', component: ReporteentregaComponent},
  {path:'reporteuds', component:  ReporteudsComponent},
  {path:'reporterol', component:  ReporterolComponent},
  {path:'entregac', component:  EntregacComponent},
  {path:'entregam/:id', component:  EntregamComponent},
  {path:'entregai/:id', component:  EntregaiComponent},

  {path:'reportentregab', component:  ReporteentregabComponent},
  {path:'inhabilitaruds/:id', component:  InhabilitarudsComponent},
  

  {path:'serviciosymodalidadesv', component: ServiciosymodalidadesvComponent},

  {path:'referenciasbienestarinav', component: RefrenciasbienestarinavComponent},
  {path:'listapreciosv', component: ListapreciosvComponent},
  {path:'listadocursosv', component: ListadocursosvComponent},
  {path:'datosvariosv', component: DatosvariosvComponent},

  {path:'reporteinventario', component: ReporteinventarioComponent},
  {path:'recepcion', component: RecepcionbienestrarinaComponent},
  {path:'recepcionv', component:  RecepcionbienestarinavComponent},
  {path:'recepcionvi', component:  RecepcionbienestarinaviComponent},
  {path:'recepcioninv', component:  RecepcioninvComponent},
  {path:'inhabilitardatosnutricionales', component: InhabilitardatosnutricionalesComponent},
  {path:'inhabilitardatosnutricionalesi/:id', component: InhabilitardatosnutricionalesiComponent},
  {path:'entregasel', component: EntregaselComponent},



  {path:'salidacentro', component: SalidacentroComponent},
  {path:'salidacentroc', component: SalidacentrocComponent},
  {path:'salidabeneficiario', component: SalidabeneficiarioComponent},
  {path:'salidabeneficiarioc', component: SalidabeneficiariocComponent},
  {path:'salidaconsumo', component: SalidaconsumoComponent},
  {path:'salidaconsumoc', component: SalidaconsumocComponent},

  {path:'devoluciones', component: DevolucionesComponent},
  {path:'devolucionesc', component: DevolucionescComponent},

  {path:'traslado', component: TrasladoComponent},
  {path:'trasladoc', component: TrasladocComponent},

  {path:'recuentoinventario', component: RecuentoinventarioComponent},
  {path:'recuentoinventarioc', component: RecuentoinventariocComponent},
  {path:'reporterecepcion', component:ReporterecepcionComponent },
  {path:'reportedevolucion', component: ReportedevolucionesComponent },

  {path:'reportentregacentrodistribucion', component: ReportesalidacentrodComponent},
  {path:'reporteentregaconsumo', component:ReportesalidaconsumoiComponent },
  {path:'reporteentregabeneficiario', component:  ReportesalidabeneficiarioComponent },
  {path:'centrozonaliv', component:   CentrozonalivComponent },
  {path:'puntoentregav', component:   PuntoentregavComponent },
  {path:'udsv', component:  UdsvComponent },
  {path:'rolv', component:  RolvComponent },
  {path:'crearalmacen', component:   CrearalmacenComponent },
  {path:'consecutivomaestrov', component:    ConsecutivomaestrovComponent },
  {path:'reporteconsecutivomaestro', component:   ReporteconsecutivomaestroComponent},
  {path:'usuariosv1', component:    Usuariov1Component},
  {path:'usuariosv2', component:    Usuariov2Component},
  
  {path:'usuariouds', component:    UsuarioudsComponent},
  {path:'modificarusuariov2', component:    Modificarusuariosv2Component},
  {path:'modificarusuariov2m/:id', component:    Modificarusuariosv2mComponent},
  {path:'modificarusuariov3', component:    Modificarusuariosv3Component},
  {path:'modificarusuariov3m/:id', component:    Modificarusuariosv3mComponent},

  {path:'inhabilitarusuarios2', component:    Inhabilitarusuarios2Component},
  {path:'inhabilitarusuarios3', component:    Inhabilitarusuarios3Component},
 
  {path:'inhabilitarusuariosp/:id', component:    InhabilitarusuariospComponent},
  {path:'inhabilitarusuariosu/:id', component:    InhabilitarusuariosuComponent},
 
  {path:'centrodistribucionu', component:   CentrodistribuciondComponent  },
  {path:'centrodistribucionui', component:   CentrodistribucionuiComponent },
  {path:'centrodistribucionp', component:     CentrodistribucionpComponent},
  {path:'centrodistribucionpi', component:    CentrodistribucionpiComponent},
  
  {path:'modificarcentrop', component:   ModificarcentropComponent  },
  {path:'modificarcentropi/:id', component:   ModificarcentropiComponent },
  {path:'modificarcentrou', component:     ModificarcentrouComponent},
  {path:'modificarcentroui/:id', component:    ModificarcentrouiComponent},

  {path:'inhabilitarcentrop', component:   InhabilitarcentropComponent  },
  {path:'inhabilitarpi/:id', component:   InhabilitarcentropiComponent },
  {path:'inhabilitaru', component:     InhabilitarcentrouComponent},
  {path:'inhabilitarui/:id', component:    InhabilitarcentrouiComponent},
  
  {path:'nivelalmacen', component:    NivelalmacenComponent},


  {path:'almacenp', component:    AlmacenpComponent},

  {path:'almacenpi', component:    AlmacenpiComponent},
  {path:'almacenu', component:    AlmacenuComponent},

  {path:'almacenui', component:    AlmacenuiComponent},


  {path:'modificaralmacenp', component:    ModificaralmacenpComponent},

  {path:'modificaralmacenpi/:id', component:    ModificaralmacenpiComponent},
  {path:'modificaralmacenu', component:    ModificaralmacenuComponent},

  {path:'modificaralmacenui/:id', component:    ModificaralmacenuiComponent},

 
  {path:'inhabilitaralmacenp', component:    InhabilitaralmacenpComponent},

  {path:'inhabilitaralmacenpi/:id', component:    InhabilitaralmacenpiComponent},
  {path:'inhabilitaralmacenu', component:     InhabilitaralmacenuComponent},

  {path:'inhabilitaralmacenui/:id', component:  InhabilitaralmacenuiComponent},

  {path:'nivelbeneficiario', component:  NivelbeneficiarioComponent},
  {path:'modificarnivelbeneficiario', component:  ModificarnivelbeneficiarioComponent},
  

  {path:'beneficiariosmp', component:  BeneficiariosmpComponent},
  {path:'beneficiariosmpi', component:  BeneficiariosmpiComponent},
  {path:'beneficiariosmu', component:  BeneficiariosmuComponent},
  {path:'beneficiariosmui', component:  BeneficiariosmuiComponent},


  {path:'modificarbeneficiariosp', component:  ModificarBeneficiariopComponent},
  {path:'modificarbeneficiariospi/:id', component:  ModificarBeneficiariopiComponent},
  {path:'modificarbeneficiariosu', component:  ModificarBeneficiariouComponent},
  {path:'modificarbeneficiariosui/:id', component:  ModificarBeneficiariouiComponent},

  {path:'inhabilitarnivelbeneficiario', component:  InhabilitarnivelbeneficiarioComponent},


  {path:'inhabilitarbeneficiariosp', component:  InhabilitarbeneficiariopComponent},
  {path:'inhabilitarbeneficiariospi/:id', component:  InhabilitarbeneficiariopiComponent},
  {path:'inhabilitarbeneficiariosu', component:  InhabilitarbeneficiariouComponent},
  {path:'inhabilitarbeneficiariosui/:id', component:  InhabilitarbeneficiariouiComponent},

  {path:'nivelistadocursos', component:  NivelistadocursosComponent},
  

  {path:'listadocursosp', component:  ListadocursospComponent},
  {path:'listadocursospi', component:  ListadocursospiComponent},
  {path:'listadocursosu', component:  ListadocursosuComponent},
  {path:'listadocursosui', component:  ListadocursosuiComponent},

  
  {path:'nivelistadocursosm', component:  NivelistadocursosmComponent},
  {path:'modificarlistadocursosp', component:  ModificarlistadocursospComponent},
  {path:'modificarlistadocursospi/:id', component:  ModificarlistadocursospiComponent},
  {path:'modificarlistadocursosu', component:  ModificarlistadocursosuComponent},
  {path:'modificarlistadocursosui/:id', component:  ModificarlistadocursosuiComponent},

 
  {path:'nivelistadocursosi', component:  NivelistadocursosiComponent},
  {path:'ilistadocursosp', component:  IlistadocursospComponent },
  {path:'ilistadocursospi/:id', component: IlistadocursospiComponent},
  {path:'ilistadocursosu', component:  IlistadocursosuComponent},
  {path:'ilistadocursosui/:id', component:  IlistadocursosuiComponent},

  {path:'niveldatosnutricionales', component:  NiveldatosnutricionalesComponent},

  
  {path:'datosvariosp', component:  DatosvariospComponent},

  {path:'datosvariospi', component:  DatosvariospiComponent},

  {path:'datosvariosu', component:  DatosvariosuComponent},

  {path:'datosvariosui', component:  DatosvariosuiComponent},
  
  {path:'niveldatosnutricionalesm', component:  NiveldatosnutricionalesmComponent},
 
  {path:'modificardatosnutricionalesp', component:  ModificardatosnutricionalespComponent},
  {path:'modificardatosnutricionalespi/:id', component:  ModificardatosnutricionalespiComponent},
  {path:'modificardatosnutricionalesu', component:  ModificardatosnutricionalesuComponent},
  {path:'modificardatosnutricionalesui/:id', component:  ModificardatosnutricionalesuiComponent},

 
  {path:'niveldatosnutricionalesi', component:  NiveldatosnutricionalesiComponent},
  {path:'idatosnutricionalesp', component:  IdatosnutricionalespComponent},
  {path:'idatosnutricionalespi/:id', component:  IdatosnutricionalespiComponent},
  {path:'idatosnutricionalesu', component:  IdatosnutricionalesuComponent},
  {path:'idatosnutricionalesui/:id', component:  IdatosnutricionalesuiComponent},

  {path:'nivelnumerocupos', component:  NivelnumerocuposComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
