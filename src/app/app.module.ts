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

//imports material modules
import {
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule
} from '@angular/material'; 
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { Select2Module } from 'ng2-select2';
import { RoliComponent } from './page/roli/roli.component';
import { PermisosComponent } from './page/permisos/permisos.component';

import { CentrozonalmComponent } from './page/centrozonalm/centrozonalm.component';
import { PuntoentregamComponent } from './page/puntoentregam/puntoentregam.component';
import { UdsmComponent } from './page/udsm/udsm.component';

import { ServiciosymodalidadesComponent } from './page/serviciosymodalidades/serviciosymodalidades.component';
import { ListadepreciosComponent } from './page/listadeprecios/listadeprecios.component';
import { ReferenciasbienestarinaComponent } from './page/referenciasbienestarina/referenciasbienestarina.component';
import { DatosvariosComponent } from './page/datosvarios/datosvarios.component';
import { Modificarusuarios1Component } from './page/modificarusuarios1/modificarusuarios1.component';



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

    CentrozonalmComponent,
    PuntoentregamComponent,
    UdsmComponent,

    ServiciosymodalidadesComponent,
    ListadepreciosComponent,
    ReferenciasbienestarinaComponent,
    DatosvariosComponent,
    Modificarusuarios1Component,
  

   


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
    Select2Module,
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
