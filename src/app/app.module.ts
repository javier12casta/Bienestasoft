import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

//imports material modules
import {
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule
} from '@angular/material'; 
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { UsuarioyrolesComponent } from './page/usuarioyroles/usuarioyroles.component';
import { UsuarionivelComponent } from './page/usuarionivel/usuarionivel.component';
import { ModificarusuariosComponent } from './page/modificarusuarios/modificarusuarios.component';
import { InhabilitarusuariosComponent } from './page/inhabilitarusuarios/inhabilitarusuarios.component';
import { PuntoentregaiComponent } from './page/puntoentregai/puntoentregai.component';
import { UdsiComponent } from './page/udsi/udsi.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
