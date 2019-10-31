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
import { ReporteinventarioComponent } from './page/reporteinventario/reporteinventario.component';
import { RecepcionbienestrarinaComponent } from './page/recepcionbienestrarina/recepcionbienestrarina.component';
import { RecepcionbienestarinavComponent } from './page/recepcionbienestarinav/recepcionbienestarinav.component';
import { RecepcionbienestarinaviComponent } from './page/recepcionbienestarinavi/recepcionbienestarinavi.component';
import { RecepcioninvComponent } from './page/recepcioninv/recepcioninv.component';



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

    ListadepreciosComponent,
    PermisosComponent,
    ReferenciasbienestarinaComponent,
    DatosvariosComponent,
    Modificarusuarios1Component,
    PermisosComponent,
    

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
    

    ReporteinventarioComponent,
    

    RecepcionbienestrarinaComponent,
    

    RecepcionbienestarinavComponent,
    

    RecepcionbienestarinaviComponent,
    

    RecepcioninvComponent,
    

    
    

  


 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Material Imports Module
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTreeModule,
    Select2Module,
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
