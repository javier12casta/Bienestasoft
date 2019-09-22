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
import { DatosGeneralesUsuarioComponent } from './page/datos-generales-usuario/datos-generales-usuario.component';
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
    DatosGeneralesUsuarioComponent,
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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
