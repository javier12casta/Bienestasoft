import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntregaComponent } from './page/entrega/entrega.component';
import { AcudienteBeneficiarioComponent } from './page/acudiente-beneficiario/acudiente-beneficiario.component';
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
import { UdsComponent } from './page/uds/uds.component';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { AcudientesComponent } from './page/acudientes/acudientes.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioyrolesComponent } from './page/usuarioyroles/usuarioyroles.component';
import { UsuarionivelComponent } from './page/usuarionivel/usuarionivel.component';
import { ModificarusuariosComponent } from './page/modificarusuarios/modificarusuarios.component';
import { InhabilitarusuariosComponent } from './page/inhabilitarusuarios/inhabilitarusuarios.component';
import { PuntoentregaiComponent } from './page/puntoentregai/puntoentregai.component';
import { UdsiComponent } from './page/udsi/udsi.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServicioService } from './servicio.service';
import { ListaMaestrosBienestarinaModificarComponent } from './page/lista-maestros-bienestarina-modificar/lista-maestros-bienestarina-modificar.component';
import { ListaMaestrosBienestarinaInhabilitarComponent } from './page/lista-maestros-bienestarina-inhabilitar/lista-maestros-bienestarina-inhabilitar.component';
import { DatosGeneralesUsuarioComponent } from './page/datos-generales-usuario/datos-generales-usuario.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ModificarbeneficiariosComponent } from './page/modificarbeneficiarios/modificarbeneficiarios.component';
import { Modificarbeneficiarios1Component } from './page/modificarbeneficiarios1/modificarbeneficiarios1.component';
import { InhabilitarbeneficiariosComponent } from './page/inhabilitarbeneficiarios/inhabilitarbeneficiarios.component';
import { Inhabilitarbeneficiarios1Component } from './page/inhabilitarbeneficiarios1/inhabilitarbeneficiarios1.component';
import { PermisosComponent } from './page/permisos/permisos.component';
//imports material modules
import {
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
} from '@angular/material'; 
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';

import { Select2Module } from 'ng2-select2';
import { RoliComponent } from './page/roli/roli.component';


import { CentrozonalmComponent } from './page/centrozonalm/centrozonalm.component';
import { PuntoentregamComponent } from './page/puntoentregam/puntoentregam.component';
import { UdsmComponent } from './page/udsm/udsm.component';

import { ServiciosymodalidadesComponent } from './page/serviciosymodalidades/serviciosymodalidades.component';
import { ListadepreciosComponent } from './page/listadeprecios/listadeprecios.component';
import { ReferenciasbienestarinaComponent } from './page/referenciasbienestarina/referenciasbienestarina.component';
import { DatosvariosComponent } from './page/datosvarios/datosvarios.component';
import { Modificarusuarios1Component } from './page/modificarusuarios1/modificarusuarios1.component';
import { ModificarusuariomComponent } from './page/modificarusuariom/modificarusuariom.component';
import { ModificarlistamaestrosComponent } from './page/modificarlistamaestros/modificarlistamaestros.component';
import { ModificarserviciosmComponent } from './page/modificarserviciosm/modificarserviciosm.component';
import { ModificareferenciabComponent } from './page/modificareferenciab/modificareferenciab.component';
import { ModificarlistapComponent } from './page/modificarlistap/modificarlistap.component';
import { ModificarlistadocComponent } from './page/modificarlistadoc/modificarlistadoc.component';
import { ListadocursosComponent } from './page/listadocursos/listadocursos.component';
import { ModificarbeneficiariomComponent } from './page/modificarbeneficiariom/modificarbeneficiariom.component';
import { ModificarserviciommComponent } from './page/modificarserviciomm/modificarserviciomm.component';
import { ModificareferenciabmComponent } from './page/modificareferenciabm/modificareferenciabm.component';
import { ModificarlistapmComponent } from './page/modificarlistapm/modificarlistapm.component';
import { ModificarlistadocmComponent } from './page/modificarlistadocm/modificarlistadocm.component';
import { InhabilitarbeneficiariosiComponent } from './page/inhabilitarbeneficiariosi/inhabilitarbeneficiariosi.component';
import { Inhabilitarusuarios1Component } from './page/inhabilitarusuarios1/inhabilitarusuarios1.component';
import { InhabilitarusuariosiComponent } from './page/inhabilitarusuariosi/inhabilitarusuariosi.component';
import { InhabilitarserviciosmComponent } from './page/inhabilitarserviciosm/inhabilitarserviciosm.component';
import { InhabilitarserviciosmiComponent } from './page/inhabilitarserviciosmi/inhabilitarserviciosmi.component';
import { InhabilitareferenciabComponent } from './page/inhabilitareferenciab/inhabilitareferenciab.component';
import { InhabilitareferenciabiComponent } from './page/inhabilitareferenciabi/inhabilitareferenciabi.component';
import { InhabilitarlistapComponent } from './page/inhabilitarlistap/inhabilitarlistap.component';
import { InhabilitarlistapiComponent } from './page/inhabilitarlistapi/inhabilitarlistapi.component';
import { InhabilitarlistadocComponent } from './page/inhabilitarlistadoc/inhabilitarlistadoc.component';
import { InhabilitarlistadociComponent } from './page/inhabilitarlistadoci/inhabilitarlistadoci.component';

import { UsuariosvComponent } from './page/usuariosv/usuariosv.component';

import { CentrozonalinhComponent } from './page/centrozonalinh/centrozonalinh.component';
import { PuntoentregainhComponent } from './page/puntoentregainh/puntoentregainh.component';
import { UdsinhComponent } from './page/udsinh/udsinh.component';
import { CentrodistribucionComponent } from './page/centrodistribucion/centrodistribucion.component';
import { CentrodistribucioncComponent } from './page/centrodistribucionc/centrodistribucionc.component';
import { CentrodistribucionciComponent } from './page/centrodistribucionci/centrodistribucionci.component';
import { AlmacenComponent } from './page/almacen/almacen.component';
import { AlmacencComponent } from './page/almacenc/almacenc.component';
import { AlmacenciComponent } from './page/almacenci/almacenci.component';
import { ModificarcentrodComponent } from './page/modificarcentrod/modificarcentrod.component';
import { ModificarcentrodiComponent } from './page/modificarcentrodi/modificarcentrodi.component';
import { ModificaralmacenComponent } from './page/modificaralmacen/modificaralmacen.component';
import { ModificaralmaceniComponent } from './page/modificaralmaceni/modificaralmaceni.component';
import { ModificarcentromComponent } from './page/modificarcentrom/modificarcentrom.component';
import { ModificaralmacenmComponent } from './page/modificaralmacenm/modificaralmacenm.component';
import { InhabilitarcentrodComponent } from './page/inhabilitarcentrod/inhabilitarcentrod.component';
import { InhabilitarcentrodiComponent } from './page/inhabilitarcentrodi/inhabilitarcentrodi.component';
import { InhabilitarcentrodmComponent } from './page/inhabilitarcentrodm/inhabilitarcentrodm.component';
import { InhabilitaralmacenComponent } from './page/inhabilitaralmacen/inhabilitaralmacen.component';
import { InhabilitaralmacendiComponent } from './page/inhabilitaralmacendi/inhabilitaralmacendi.component';
import { InhabilitaralmacendmComponent } from './page/inhabilitaralmacendm/inhabilitaralmacendm.component';
import { BeneficiariosmComponent } from './page/beneficiariosm/beneficiariosm.component';
import { ReporteusuariosComponent } from './page/reporteusuarios/reporteusuarios.component';
import { ReporteserviciosmodalidadesComponent } from './page/reporteserviciosmodalidades/reporteserviciosmodalidades.component';
import { ReportebeneficiarioComponent } from './page/reportebeneficiario/reportebeneficiario.component';
import { ReportereferenciabienestarinaComponent } from './page/reportereferenciabienestarina/reportereferenciabienestarina.component';
import { ReportepreciosbienestarinaComponent } from './page/reportepreciosbienestarina/reportepreciosbienestarina.component';
import { ReportelistadocursosComponent } from './page/reportelistadocursos/reportelistadocursos.component';
import { ReportedatosnutricionalesComponent } from './page/reportedatosnutricionales/reportedatosnutricionales.component';
import { ReportecentrodistribucionComponent } from './page/reportecentrodistribucion/reportecentrodistribucion.component';
import { ReportealmacenComponent } from './page/reportealmacen/reportealmacen.component';
import { ReportedatosvariosComponent } from './page/reportedatosvarios/reportedatosvarios.component';
import { ModificardatosnutricionalesComponent } from './page/modificardatosnutricionales/modificardatosnutricionales.component';
import { ModificardatosnutricionalesmComponent } from './page/modificardatosnutricionalesm/modificardatosnutricionalesm.component';
import { ReportecentrozonalComponent } from './page/reportecentrozonal/reportecentrozonal.component';
import { ReporteentregaComponent } from './page/reporteentrega/reporteentrega.component';
import { ReporteudsComponent } from './page/reporteuds/reporteuds.component';
import { ReporterolComponent } from './page/reporterol/reporterol.component';
import { EntregacComponent } from './page/entregac/entregac.component';
import { EntregamComponent } from './page/entregam/entregam.component';
import { EntregaiComponent } from './page/entregai/entregai.component';
import { ReporteentregabComponent } from './page/reporteentregab/reporteentregab.component';
import { InhabilitarudsComponent } from './page/inhabilitaruds/inhabilitaruds.component';
import { ServiciosymodalidadesvComponent } from './page/serviciosymodalidadesv/serviciosymodalidadesv.component';
import { RefrenciasbienestarinavComponent } from './page/refrenciasbienestarinav/refrenciasbienestarinav.component';
import { ListapreciosvComponent } from './page/listapreciosv/listapreciosv.component';
import { ListadocursosvComponent } from './page/listadocursosv/listadocursosv.component';
import { DatosvariosvComponent } from './page/datosvariosv/datosvariosv.component';
import { PermisosmComponent } from './page/permisosm/permisosm.component';

import { ReporteinventarioComponent } from './page/reporteinventario/reporteinventario.component';
import { RecepcionbienestrarinaComponent } from './page/recepcionbienestrarina/recepcionbienestrarina.component';
import { RecepcionbienestarinavComponent } from './page/recepcionbienestarinav/recepcionbienestarinav.component';
import { RecepcionbienestarinaviComponent } from './page/recepcionbienestarinavi/recepcionbienestarinavi.component';
import { RecepcioninvComponent } from './page/recepcioninv/recepcioninv.component';
import { InhabilitardatosnutricionalesComponent } from './page/inhabilitardatosnutricionales/inhabilitardatosnutricionales.component';
import { InhabilitardatosnutricionalesiComponent } from './page/inhabilitardatosnutricionalesi/inhabilitardatosnutricionalesi.component';
import { InventariovComponent } from './page/inventariov/inventariov.component';
import { InventariocComponent } from './page/inventarioc/inventarioc.component';
import { EntregaselComponent } from './page/entregasel/entregasel.component';
import { SalidacentroComponent } from './page/salidacentro/salidacentro.component';
import { SalidabeneficiarioComponent } from './page/salidabeneficiario/salidabeneficiario.component';
import { SalidaconsumoComponent } from './page/salidaconsumo/salidaconsumo.component';
import { SalidacentrocComponent } from './page/salidacentroc/salidacentroc.component';
import { SalidabeneficiariocComponent } from './page/salidabeneficiarioc/salidabeneficiarioc.component';
import { SalidaconsumocComponent } from './page/salidaconsumoc/salidaconsumoc.component';
import { DevolucionesComponent } from './page/devoluciones/devoluciones.component';
import { DevolucionescComponent } from './page/devolucionesc/devolucionesc.component';
import { TrasladoComponent } from './page/traslado/traslado.component';
import { TrasladocComponent } from './page/trasladoc/trasladoc.component';
import { RecuentoinventarioComponent } from './page/recuentoinventario/recuentoinventario.component';
import { RecuentoinventariocComponent } from './page/recuentoinventarioc/recuentoinventarioc.component';
import { ReporterecepcionComponent } from './page/reporterecepcion/reporterecepcion.component';
import { ReportedevolucionesComponent } from './page/reportedevoluciones/reportedevoluciones.component';
import { ReportesalidacentrodComponent } from './page/reportesalidacentrod/reportesalidacentrod.component';
import { ReportesalidabeneficiarioComponent } from './page/reportesalidabeneficiario/reportesalidabeneficiario.component';
import { ReportesalidaconsumoiComponent } from './page/reportesalidaconsumoi/reportesalidaconsumoi.component';
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
import { CrearalmacenComponent } from './page/crearalmacen/crearalmacen.component';
import { ConsecutivomaestrovComponent } from './page/consecutivomaestrov/consecutivomaestrov.component';
import { ReporteconsecutivomaestroComponent } from './page/reporteconsecutivomaestro/reporteconsecutivomaestro.component';

import { ReactiveFormsModule } from '@angular/forms';
import { Usuariov1Component } from './page/usuariov1/usuariov1.component';
import { Usuariov2Component } from './page/usuariov2/usuariov2.component';
import { UsuarioudsComponent } from './page/usuariouds/usuariouds.component';
import { Modificarusuariosv2Component } from './page/modificarusuariosv2/modificarusuariosv2.component';
import { Modificarusuariosv3Component } from './page/modificarusuariosv3/modificarusuariosv3.component';
import { Modificarusuariosv2mComponent } from './page/modificarusuariosv2m/modificarusuariosv2m.component';
import { Modificarusuariosv3mComponent } from './page/modificarusuariosv3m/modificarusuariosv3m.component';
import { Inhabilitarusuarios2Component } from './page/inhabilitarusuarios2/inhabilitarusuarios2.component';
import { Inhabilitarusuarios3Component } from './page/inhabilitarusuarios3/inhabilitarusuarios3.component';
import { InhabilitarusuariospComponent } from './page/inhabilitarusuariosp/inhabilitarusuariosp.component';
import { InhabilitarusuariosuComponent } from './page/inhabilitarusuariosu/inhabilitarusuariosu.component';
import { CentrodistribucionpComponent } from './page/centrodistribucionp/centrodistribucionp.component';
import { CentrodistribuciondComponent } from './page/centrodistribuciond/centrodistribuciond.component';
import { CentrodistribucionpiComponent } from './page/centrodistribucionpi/centrodistribucionpi.component';
import { CentrodistribucionuiComponent } from './page/centrodistribucionui/centrodistribucionui.component';
import { ModificarcentropComponent } from './page/modificarcentrop/modificarcentrop.component';
import { ModificarcentropiComponent } from './page/modificarcentropi/modificarcentropi.component';
import { ModificarcentrouComponent } from './page/modificarcentrou/modificarcentrou.component';
import { ModificarcentrouiComponent } from './page/modificarcentroui/modificarcentroui.component';
import { InhabilitarcentropComponent } from './page/inhabilitarcentrop/inhabilitarcentrop.component';
import { InhabilitarcentropiComponent } from './page/inhabilitarcentropi/inhabilitarcentropi.component';
import { InhabilitarcentrouComponent } from './page/inhabilitarcentrou/inhabilitarcentrou.component';
import { InhabilitarcentrouiComponent } from './page/inhabilitarcentroui/inhabilitarcentroui.component';
import { NivelalmacenComponent } from './page/nivelalmacen/nivelalmacen.component';
import { AlmacenpComponent } from './page/almacenp/almacenp.component';
import { AlmacenuComponent } from './page/almacenu/almacenu.component';
import { AlmacenpiComponent } from './page/almacenpi/almacenpi.component';
import { AlmacenuiComponent } from './page/almacenui/almacenui.component';
import { ModificaralmacenpComponent } from './page/modificaralmacenp/modificaralmacenp.component';
import { ModificaralmacenpiComponent } from './page/modificaralmacenpi/modificaralmacenpi.component';
import { ModificaralmacenuComponent } from './page/modificaralmacenu/modificaralmacenu.component';
import { ModificaralmacenuiComponent } from './page/modificaralmacenui/modificaralmacenui.component';
import { InhabilitaralmacenpComponent } from './page/inhabilitaralmacenp/inhabilitaralmacenp.component';
import { InhabilitaralmacenpiComponent } from './page/inhabilitaralmacenpi/inhabilitaralmacenpi.component';
import { InhabilitaralmacenuComponent } from './page/inhabilitaralmacenu/inhabilitaralmacenu.component';
import { InhabilitaralmacenuiComponent } from './page/inhabilitaralmacenui/inhabilitaralmacenui.component';
import { NivelbeneficiarioComponent } from './page/nivelbeneficiario/nivelbeneficiario.component';
import { BeneficiariosmpComponent } from './page/beneficiariosmp/beneficiariosmp.component';
import { BeneficiariosmpiComponent } from './page/beneficiariosmpi/beneficiariosmpi.component';
import { BeneficiariosmuComponent } from './page/beneficiariosmu/beneficiariosmu.component';
import { BeneficiariosmuiComponent } from './page/beneficiariosmui/beneficiariosmui.component';
import { ModificarnivelbeneficiarioComponent } from './page/modificarnivelbeneficiario/modificarnivelbeneficiario.component';
import { ModificarBeneficiariopComponent } from './page/modificar-beneficiariop/modificar-beneficiariop.component';
import { ModificarBeneficiariouComponent } from './page/modificar-beneficiariou/modificar-beneficiariou.component';
import { ModificarBeneficiariopiComponent } from './page/modificar-beneficiariopi/modificar-beneficiariopi.component';
import { ModificarBeneficiariouiComponent } from './page/modificar-beneficiarioui/modificar-beneficiarioui.component';
import { InhabilitarnivelbeneficiarioComponent } from './page/inhabilitarnivelbeneficiario/inhabilitarnivelbeneficiario.component';
import { InhabilitarbeneficiariopComponent } from './page/inhabilitarbeneficiariop/inhabilitarbeneficiariop.component';
import { InhabilitarbeneficiariopiComponent } from './page/inhabilitarbeneficiariopi/inhabilitarbeneficiariopi.component';
import { InhabilitarbeneficiariouComponent } from './page/inhabilitarbeneficiariou/inhabilitarbeneficiariou.component';
import { InhabilitarbeneficiariouiComponent } from './page/inhabilitarbeneficiarioui/inhabilitarbeneficiarioui.component';
import { NivelistadocursosComponent } from './page/nivelistadocursos/nivelistadocursos.component';
import { ListadocursospComponent } from './page/listadocursosp/listadocursosp.component';
import { ListadocursospiComponent } from './page/listadocursospi/listadocursospi.component';
import { ListadocursosuComponent } from './page/listadocursosu/listadocursosu.component';
import { ListadocursosuiComponent } from './page/listadocursosui/listadocursosui.component';
import { NivelistadocursosmComponent } from './page/nivelistadocursosm/nivelistadocursosm.component';
import { ModificarlistadocursospComponent } from './page/modificarlistadocursosp/modificarlistadocursosp.component';
import { ModificarlistadocursospiComponent } from './page/modificarlistadocursospi/modificarlistadocursospi.component';
import { ModificarlistadocursosuComponent } from './page/modificarlistadocursosu/modificarlistadocursosu.component';
import { ModificarlistadocursosuiComponent } from './page/modificarlistadocursosui/modificarlistadocursosui.component';
import { NivelistadocursosiComponent } from './page/nivelistadocursosi/nivelistadocursosi.component';
import { IlistadocursospiComponent } from './page/ilistadocursospi/ilistadocursospi.component';
import { IlistadocursospComponent } from './page/ilistadocursosp/ilistadocursosp.component';
import { IlistadocursosuComponent } from './page/ilistadocursosu/ilistadocursosu.component';
import { IlistadocursosuiComponent } from './page/ilistadocursosui/ilistadocursosui.component';
import { NiveldatosnutricionalesComponent } from './page/niveldatosnutricionales/niveldatosnutricionales.component';
import { DatosvariospComponent } from './page/datosvariosp/datosvariosp.component';
import { DatosvariospiComponent } from './page/datosvariospi/datosvariospi.component';
import { DatosvariosuComponent } from './page/datosvariosu/datosvariosu.component';
import { DatosvariosuiComponent } from './page/datosvariosui/datosvariosui.component';
import { NiveldatosnutricionalesmComponent } from './page/niveldatosnutricionalesm/niveldatosnutricionalesm.component';
import { ModificardatosnutricionalespComponent } from './page/modificardatosnutricionalesp/modificardatosnutricionalesp.component';
import { ModificardatosnutricionalespiComponent } from './page/modificardatosnutricionalespi/modificardatosnutricionalespi.component';
import { ModificardatosnutricionalesuComponent } from './page/modificardatosnutricionalesu/modificardatosnutricionalesu.component';
import { ModificardatosnutricionalesuiComponent } from './page/modificardatosnutricionalesui/modificardatosnutricionalesui.component';
import { NiveldatosnutricionalesiComponent } from './page/niveldatosnutricionalesi/niveldatosnutricionalesi.component';
import { IdatosnutricionalespComponent } from './page/idatosnutricionalesp/idatosnutricionalesp.component';
import { IdatosnutricionalespiComponent } from './page/idatosnutricionalespi/idatosnutricionalespi.component';
import { IdatosnutricionalesuComponent } from './page/idatosnutricionalesu/idatosnutricionalesu.component';
import { IdatosnutricionalesuiComponent } from './page/idatosnutricionalesui/idatosnutricionalesui.component';
import { NivelnumerocuposComponent } from './page/nivelnumerocupos/nivelnumerocupos.component';
import { NumerocuposcComponent } from './page/numerocuposc/numerocuposc.component';
import { NumerocuposciComponent } from './page/numerocuposci/numerocuposci.component';
import { NumerocupospComponent } from './page/numerocuposp/numerocuposp.component';
import { NumerocupospiComponent } from './page/numerocupospi/numerocupospi.component';
import { NumerocuposuComponent } from './page/numerocuposu/numerocuposu.component';
import { NumerocuposuiComponent } from './page/numerocuposui/numerocuposui.component';
import { ModificarnivelnumerocuposComponent } from './page/modificarnivelnumerocupos/modificarnivelnumerocupos.component';
import { ModificarnumerocuposcComponent } from './page/modificarnumerocuposc/modificarnumerocuposc.component';
import { ModificarnumerocuposciComponent } from './page/modificarnumerocuposci/modificarnumerocuposci.component';
import { ModificarnumerocupospComponent } from './page/modificarnumerocuposp/modificarnumerocuposp.component';
import { ModificarnumerocupospiComponent } from './page/modificarnumerocupospi/modificarnumerocupospi.component';
import { ModificarnumerocuposuComponent } from './page/modificarnumerocuposu/modificarnumerocuposu.component';
import { ModificarnumerocuposuiComponent } from './page/modificarnumerocuposui/modificarnumerocuposui.component';
import { ReportenumerocuposComponent } from './page/reportenumerocupos/reportenumerocupos.component';
import { InhabilitarnivelnumerocuposComponent } from './page/inhabilitarnivelnumerocupos/inhabilitarnivelnumerocupos.component';
import { InhabilitarnivelnumerocuposcComponent } from './page/inhabilitarnivelnumerocuposc/inhabilitarnivelnumerocuposc.component';
import { InhabilitarnivelnumerocuposciComponent } from './page/inhabilitarnivelnumerocuposci/inhabilitarnivelnumerocuposci.component';
import { InhabilitarnivelnumerocupospComponent } from './page/inhabilitarnivelnumerocuposp/inhabilitarnivelnumerocuposp.component';
import { InhabilitarnivelnumerocupospiComponent } from './page/inhabilitarnivelnumerocupospi/inhabilitarnivelnumerocupospi.component';
import { InhabilitarnivelnumerocuposuComponent } from './page/inhabilitarnivelnumerocuposu/inhabilitarnivelnumerocuposu.component';
import { InhabilitarnivelnumerocuposuiComponent } from './page/inhabilitarnivelnumerocuposui/inhabilitarnivelnumerocuposui.component';
import { CargainventarioComponent } from './page/cargainventario/cargainventario.component';
import { CargainventarioinicialComponent } from './page/cargainventarioinicial/cargainventarioinicial.component';
import { ReporterecuentoinventarioComponent } from './page/reporterecuentoinventario/reporterecuentoinventario.component';
import { ReporteformatoentregabComponent } from './page/reporteformatoentregab/reporteformatoentregab.component';


import { FiltroZonalPipe} from '../app/pipes/filtroZonal.pipe';
import { FiltroPEPipe} from '../app/pipes/filtroPE.pipe';
import { PipesModule } from 'w-ng5';
import { FiltroUDSPipe } from './pipes/filtroUDS.pipe';
import { FiltroservicioymodalidadesPipe } from './pipes/filtroservicioymodalidades.pipe';
import { FiltroreferenciabienestarinaPipe } from './pipes/filtroreferenciabienestarina.pipe';
import { FiltropreciobienestarinaPipe } from './pipes/filtropreciobienestarina.pipe';
import {FiltrolistadocursosPipe } from './pipes/filtrolistadocursos.pipe';
import {FiltrodatosnutricionalesPipe } from './pipes/filtrodatosnutricionales.pipe';
import {FiltronumerocuposPipe } from './pipes/filtronumerocupos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EntregaComponent,
    AcudienteBeneficiarioComponent,
    BarrioComponent,
    BarrioliComponent,
    BeneficiariosComponent,
    CentrozonalComponent,
    CentrozonaliComponent,
    ComunaComponent,
    ComunaliComponent,
    DatosContactoBeneficiarioComponent,
    InventarioComponent,
    DatosContactoUsuarioComponent,
    DatosGeneralesBeneficiarioComponent,
    ListaMaestrosBienestarinaComponent,
    ListadoPreciosComponent,
    MunicipioComponent,
    MunicipioliComponent,
    MenuComponent,
    PuntoentregaComponent,
    RegionalComponent,
    RegionaliComponent,
    ReportesComponent,
    RolComponent,
    UdsComponent,
    UsuariosComponent,
    AcudientesComponent,
    LoginComponent,
    UsuarioyrolesComponent,
    UsuarionivelComponent,
    ModificarusuariosComponent,
    InhabilitarusuariosComponent,
    PuntoentregaiComponent,
    UdsiComponent,
    ListaMaestrosBienestarinaModificarComponent,
    ListaMaestrosBienestarinaInhabilitarComponent,
    DatosGeneralesUsuarioComponent,
    ModificarbeneficiariosComponent,
    Modificarbeneficiarios1Component,
    InhabilitarbeneficiariosComponent,
    Inhabilitarbeneficiarios1Component,
    RoliComponent,
    PermisosComponent,
    CentrozonalmComponent,
    PuntoentregamComponent,
    UdsmComponent,
    ServiciosymodalidadesComponent,
    ReferenciasbienestarinaComponent,
    ListadepreciosComponent,
    DatosvariosComponent,
    Modificarusuarios1Component,
    ModificarusuariomComponent,
    ModificarlistamaestrosComponent,
    ModificarserviciosmComponent,
    ModificareferenciabComponent,
    ModificarlistapComponent,
    ModificarlistadocComponent,
    ListadocursosComponent,
    ModificarbeneficiariomComponent,
    ModificarserviciommComponent,
    ModificareferenciabmComponent,
    ModificarlistapmComponent,
    ModificarlistadocmComponent,
    InhabilitarbeneficiariosiComponent,
    Inhabilitarusuarios1Component,
    InhabilitarusuariosiComponent,
    InhabilitarserviciosmComponent,
    InhabilitarserviciosmiComponent,
    InhabilitareferenciabComponent,
    InhabilitareferenciabiComponent,
    InhabilitarlistapComponent,
    InhabilitarlistapiComponent,
    InhabilitarlistadocComponent,
    InhabilitarlistadociComponent,
    UsuariosvComponent,
    CentrozonalinhComponent,
    PuntoentregainhComponent,
    UdsinhComponent,
    CentrodistribucionComponent,
    CentrodistribucioncComponent,
    CentrodistribucionciComponent,
    AlmacenComponent,
    AlmacencComponent,
    AlmacenciComponent,
    ModificarcentrodComponent,
    ModificarcentrodiComponent,
    ModificaralmacenComponent,
    ModificaralmaceniComponent,
    ModificarcentromComponent,
    ModificaralmacenmComponent,
    InhabilitarcentrodComponent,
    InhabilitarcentrodiComponent,
    InhabilitarcentrodmComponent,
    InhabilitaralmacenComponent,
    InhabilitaralmacendiComponent,
    InhabilitaralmacendmComponent,
    BeneficiariosmComponent,
    ReporteusuariosComponent,
    ReporteserviciosmodalidadesComponent,
    ReportebeneficiarioComponent,
    ReportereferenciabienestarinaComponent,
    ReportepreciosbienestarinaComponent,
    ReportelistadocursosComponent,
    ReportedatosnutricionalesComponent,
    ReportecentrodistribucionComponent,
    ReportealmacenComponent,
    ReportedatosvariosComponent,
    ModificardatosnutricionalesComponent,
    ModificardatosnutricionalesmComponent,
    ReportecentrozonalComponent,
    ReporteentregaComponent,
    ReporteudsComponent,
    ReporterolComponent,
    EntregacComponent,
    EntregamComponent,
    EntregaiComponent,
    ReporteentregabComponent,
    InhabilitarudsComponent,
    ServiciosymodalidadesvComponent,
    RefrenciasbienestarinavComponent,
    ListapreciosvComponent,
    ListadocursosvComponent,
    DatosvariosvComponent,
    PermisosmComponent,
    ReporteinventarioComponent,
    RecepcionbienestrarinaComponent,
    RecepcionbienestarinavComponent,
    RecepcionbienestarinaviComponent,
    RecepcioninvComponent,
    InhabilitardatosnutricionalesComponent,
    InhabilitardatosnutricionalesiComponent,
    InventariovComponent,
    InventariocComponent,
    EntregaselComponent,
    SalidacentroComponent,
    SalidabeneficiarioComponent,
    SalidaconsumoComponent,
    SalidacentrocComponent,
    SalidabeneficiariocComponent,
    SalidaconsumocComponent,
    DevolucionesComponent,
    DevolucionescComponent,
    TrasladoComponent,
    TrasladocComponent,
    RecuentoinventarioComponent,
    RecuentoinventariocComponent,
    ReporterecepcionComponent,
    ReportedevolucionesComponent,
    ReportesalidacentrodComponent,
    ReportesalidabeneficiarioComponent,
    ReportesalidaconsumoiComponent,
    CentrozonalinComponent,
    PuntoentregainComponent,
    UdsinComponent,
    RolinComponent,
    RolinhComponent,
    RolmComponent,
    CentrozonalivComponent,
    PuntoentregavComponent,
    UdsvComponent,
    RolvComponent,
    CrearalmacenComponent,
    ConsecutivomaestrovComponent,
    ReporteconsecutivomaestroComponent,
    Usuariov1Component,
    Usuariov2Component,
    UsuarioudsComponent,
    Modificarusuariosv2Component,
    Modificarusuariosv3Component,
    Modificarusuariosv2mComponent,
    Modificarusuariosv3mComponent,
    Inhabilitarusuarios2Component,
    Inhabilitarusuarios3Component,
    InhabilitarusuariospComponent,
    InhabilitarusuariosuComponent,
    CentrodistribucionpComponent,
    CentrodistribuciondComponent,
    CentrodistribucionpiComponent,
    CentrodistribucionuiComponent,
    ModificarcentropComponent,
    ModificarcentropiComponent,
    ModificarcentrouComponent,
    ModificarcentrouiComponent,
    InhabilitarcentropComponent,
    InhabilitarcentropiComponent,
    InhabilitarcentrouComponent,
    InhabilitarcentrouiComponent,
    NivelalmacenComponent,
    AlmacenpComponent,
    AlmacenuComponent,
    AlmacenpiComponent,
    AlmacenuiComponent,
    ModificaralmacenpComponent,
    ModificaralmacenpiComponent,
    ModificaralmacenuComponent,
    ModificaralmacenuiComponent,
    InhabilitaralmacenpComponent,
    InhabilitaralmacenpiComponent,
    InhabilitaralmacenuComponent,
    InhabilitaralmacenuiComponent,
    NivelbeneficiarioComponent,
    BeneficiariosmpComponent,
    BeneficiariosmpiComponent,
    BeneficiariosmuComponent,
    BeneficiariosmuiComponent,
    ModificarnivelbeneficiarioComponent,
    ModificarBeneficiariopComponent,
    ModificarBeneficiariouComponent,
    ModificarBeneficiariopiComponent,
    ModificarBeneficiariouiComponent,
    InhabilitarnivelbeneficiarioComponent,
    InhabilitarbeneficiariopComponent,
    InhabilitarbeneficiariopiComponent,
    InhabilitarbeneficiariouComponent,
    InhabilitarbeneficiariouiComponent,
    NivelistadocursosComponent,
    ListadocursospComponent,
    ListadocursospiComponent,
    ListadocursosuComponent,
    ListadocursosuiComponent,
    NivelistadocursosmComponent,
    ModificarlistadocursospComponent,
    ModificarlistadocursospiComponent,
    ModificarlistadocursosuComponent,
    ModificarlistadocursosuiComponent,
    NivelistadocursosiComponent,
    IlistadocursospiComponent,
    IlistadocursospComponent,
    IlistadocursosuComponent,
    IlistadocursosuiComponent,
    NiveldatosnutricionalesComponent,
    DatosvariospComponent,
    DatosvariospiComponent,
    DatosvariosuComponent,
    DatosvariosuiComponent,
    NiveldatosnutricionalesmComponent,
    ModificardatosnutricionalespComponent,
    ModificardatosnutricionalespiComponent,
    ModificardatosnutricionalesuComponent,
    ModificardatosnutricionalesuiComponent,
    NiveldatosnutricionalesiComponent,
    IdatosnutricionalespComponent,
    IdatosnutricionalespiComponent,
    IdatosnutricionalesuComponent,
    IdatosnutricionalesuiComponent,
    NivelnumerocuposComponent,
    NumerocuposcComponent,
    NumerocuposciComponent,
    NumerocupospComponent,
    NumerocupospiComponent,
    NumerocuposuComponent,
    NumerocuposuiComponent,
    ModificarnivelnumerocuposComponent,
    ModificarnumerocuposcComponent,
    ModificarnumerocuposciComponent,
    ModificarnumerocupospComponent,
    ModificarnumerocupospiComponent,
    ModificarnumerocuposuComponent,
    ModificarnumerocuposuiComponent,
    ReportenumerocuposComponent,
    InhabilitarnivelnumerocuposComponent,
    InhabilitarnivelnumerocuposcComponent,
    InhabilitarnivelnumerocuposciComponent,
    InhabilitarnivelnumerocupospComponent,
    InhabilitarnivelnumerocupospiComponent,
    InhabilitarnivelnumerocuposuComponent,
    InhabilitarnivelnumerocuposuiComponent,
    CargainventarioComponent,
    CargainventarioinicialComponent,
    ReporterecuentoinventarioComponent,
    ReporteformatoentregabComponent,
    
    FiltroZonalPipe,
    FiltroPEPipe,
    FiltroUDSPipe,
    FiltroservicioymodalidadesPipe,
    FiltroreferenciabienestarinaPipe,
    FiltropreciobienestarinaPipe,
    FiltrolistadocursosPipe,
    FiltrodatosnutricionalesPipe,
    FiltronumerocuposPipe,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    //Material Imports Module
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatTreeModule,
    Select2Module,
    PipesModule,
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
