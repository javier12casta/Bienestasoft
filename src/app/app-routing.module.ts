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


import {NumerocuposcComponent} from './page/numerocuposc/numerocuposc.component';
import {NumerocuposciComponent} from './page/numerocuposci/numerocuposci.component';
import {NumerocupospComponent} from './page/numerocuposp/numerocuposp.component';
import {NumerocupospiComponent} from './page/numerocupospi/numerocupospi.component';
import {NumerocuposuComponent} from './page/numerocuposu/numerocuposu.component';
import {NumerocuposuiComponent} from './page/numerocuposui/numerocuposui.component';



import {ModificarnivelnumerocuposComponent} from './page/modificarnivelnumerocupos/modificarnivelnumerocupos.component';
import {ModificarnumerocuposcComponent} from './page/modificarnumerocuposc/modificarnumerocuposc.component';
import {ModificarnumerocuposciComponent} from './page/modificarnumerocuposci/modificarnumerocuposci.component';
import {ModificarnumerocupospComponent} from './page/modificarnumerocuposp/modificarnumerocuposp.component';
import {ModificarnumerocupospiComponent} from './page/modificarnumerocupospi/modificarnumerocupospi.component';
import {ModificarnumerocuposuComponent} from './page/modificarnumerocuposu/modificarnumerocuposu.component';
import {ModificarnumerocuposuiComponent} from './page/modificarnumerocuposui/modificarnumerocuposui.component';


import {ReportenumerocuposComponent} from './page/reportenumerocupos/reportenumerocupos.component';

import {InhabilitarnivelnumerocuposComponent} from './page/inhabilitarnivelnumerocupos/inhabilitarnivelnumerocupos.component';
import {InhabilitarnivelnumerocuposcComponent} from './page/inhabilitarnivelnumerocuposc/inhabilitarnivelnumerocuposc.component';
import {InhabilitarnivelnumerocuposciComponent} from './page/inhabilitarnivelnumerocuposci/inhabilitarnivelnumerocuposci.component';
import {InhabilitarnivelnumerocupospComponent} from './page/inhabilitarnivelnumerocuposp/inhabilitarnivelnumerocuposp.component';
import {InhabilitarnivelnumerocupospiComponent} from './page/inhabilitarnivelnumerocupospi/inhabilitarnivelnumerocupospi.component';
import {InhabilitarnivelnumerocuposuComponent} from './page/inhabilitarnivelnumerocuposu/inhabilitarnivelnumerocuposu.component';
import {InhabilitarnivelnumerocuposuiComponent} from './page/inhabilitarnivelnumerocuposui/inhabilitarnivelnumerocuposui.component';

import {CargainventarioComponent} from './page/cargainventario/cargainventario.component';
import {CargainventarioinicialComponent} from './page/cargainventarioinicial/cargainventarioinicial.component';

import {ReporterecuentoinventarioComponent} from './page/reporterecuentoinventario/reporterecuentoinventario.component';


import {ReporteformatoentregabComponent} from './page/reporteformatoentregab/reporteformatoentregab.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'entrega', component:EntregaComponent, canActivate: [AuthGuard]},
  {path:'acudientesbeneficirio', component: AcudienteBeneficiarioComponent, canActivate: [AuthGuard]},
  {path:'acudientes', component:AcudientesComponent, canActivate: [AuthGuard]},
  {path:'barrio', component:BarrioComponent, canActivate: [AuthGuard]},
  {path:'barrioli', component:BarrioliComponent, canActivate: [AuthGuard]},
  {path:'barrioli/:id', component:BarrioliComponent, canActivate: [AuthGuard]},
  {path:'beneficiarios', component:BeneficiariosComponent, canActivate: [AuthGuard]},
  {path:'beneficiariosm', component:BeneficiariosmComponent, canActivate: [AuthGuard]},
  {path:'centrozonal', component:CentrozonalComponent, canActivate: [AuthGuard]},
  {path:'centrozonalin', component:CentrozonalinComponent, canActivate: [AuthGuard]},
  {path:'centrozonali', component:CentrozonaliComponent, canActivate: [AuthGuard]},
  {path:'centrozonalm/:id', component:CentrozonalmComponent, canActivate: [AuthGuard]},
  {path:'centrozonalinh/:id', component:CentrozonalinhComponent, canActivate: [AuthGuard]},
  {path:'comuna', component:ComunaComponent, canActivate: [AuthGuard]},
  {path:'comunali', component: ComunaliComponent, canActivate: [AuthGuard]},
  {path:'comunali/:id', component: ComunaliComponent},
  {path:'datosbeneficiario', component: DatosContactoBeneficiarioComponent},
  {path:'inventario', component:InventarioComponent, canActivate: [AuthGuard]},
  {path:'inventariov', component: InventariovComponent, canActivate: [AuthGuard]},
  {path:'inventarioc', component: InventariocComponent, canActivate: [AuthGuard]},
  {path:'datoscontactousuario', component: DatosContactoUsuarioComponent, canActivate: [AuthGuard]},
  {path:'datosgeneralesbeneficiario', component:DatosGeneralesBeneficiarioComponent, canActivate: [AuthGuard]},
  {path:'listamaestros', component:ListaMaestrosBienestarinaComponent, canActivate: [AuthGuard]},
  {path:'listaprecios', component: ListadoPreciosComponent, canActivate: [AuthGuard]},
  {path:'municipio', component: MunicipioComponent, canActivate: [AuthGuard]},
  {path:'municipioli', component:MunicipioliComponent, canActivate: [AuthGuard]},
  {path:'municipioli/:id', component:MunicipioliComponent, canActivate: [AuthGuard]},
  {path:'menu', component:MenuComponent, canActivate: [AuthGuard]},
  {path:'puntoentrega', component: PuntoentregaComponent, canActivate: [AuthGuard]},
  {path:'puntoentregain', component: PuntoentregainComponent, canActivate: [AuthGuard]},
  {path:'puntoentregai', component: PuntoentregaiComponent, canActivate: [AuthGuard]},
  {path:'puntoentregam/:id', component: PuntoentregamComponent, canActivate: [AuthGuard]},
  {path:'puntoentregainh/:id', component: PuntoentregainhComponent, canActivate: [AuthGuard]},
  {path:'regional', component:RegionalComponent, canActivate: [AuthGuard]},
  {path:'regionali', component: RegionaliComponent, canActivate: [AuthGuard]},
  {path:'regionali/:id', component: RegionaliComponent, canActivate: [AuthGuard]},
  {path:'reportes', component:ReportesComponent, canActivate: [AuthGuard]},
  {path:'rol', component: RolComponent, canActivate: [AuthGuard]},
  {path:'rolm/:id', component: RolmComponent, canActivate: [AuthGuard]},
  {path:'rolin', component: RolinComponent, canActivate: [AuthGuard]},
  {path:'rolinh/:id', component: RolinhComponent, canActivate: [AuthGuard]},
  {path:'roli', component: RoliComponent, canActivate: [AuthGuard]},
  {path:'roli/:id', component: RolComponent, canActivate: [AuthGuard]},
  {path:'uds', component: UdsComponent, canActivate: [AuthGuard]},
  {path:'udsin', component: UdsinComponent, canActivate: [AuthGuard]},
  {path:'udsi', component: UdsiComponent, canActivate: [AuthGuard]},
  {path:'udsm/:id', component: UdsmComponent, canActivate: [AuthGuard]},
  {path:'udsinh/:id', component: UdsinhComponent, canActivate: [AuthGuard]},
  {path:'usuarios', component: UsuariosComponent, canActivate: [AuthGuard]},
  {path:'usuariosv', component: UsuariosvComponent, canActivate: [AuthGuard]},
  {path:'usuariosroles', component: UsuarioyrolesComponent, canActivate: [AuthGuard]},
  {path:'usuariosnivel', component: UsuarionivelComponent, canActivate: [AuthGuard]},
  {path:'modificarusuarios', component: ModificarusuariosComponent, canActivate: [AuthGuard]},
  {path:'modificarusuarios1', component: Modificarusuarios1Component, canActivate: [AuthGuard]},
  {path:'inhabilitarusuarios', component: InhabilitarusuariosComponent, canActivate: [AuthGuard]},
  {path:'inhabilitarusuarios1', component: Inhabilitarusuarios1Component, canActivate: [AuthGuard]},
  {path:'inhabilitarusuariosi/:id', component: InhabilitarusuariosiComponent , canActivate: [AuthGuard]},
  {path:'listamaestrosmodificar', component: ListaMaestrosBienestarinaModificarComponent, canActivate: [AuthGuard]},
  {path:'listamaestrosinhabilitar', component: ListaMaestrosBienestarinaInhabilitarComponent, canActivate: [AuthGuard]},
  {path:'listamaestros', component:ListaMaestrosBienestarinaComponent, canActivate: [AuthGuard]},
  {path:'datosgeneralesusuario', component:DatosGeneralesUsuarioComponent, canActivate: [AuthGuard]},
  {path:'ModificarBeneficiario', component: ModificarbeneficiariosComponent , canActivate: [AuthGuard]},
  {path:'ModificarBeneficiario1', component: Modificarbeneficiarios1Component , canActivate: [AuthGuard]},
  {path:'modificarbeneficiariom/:id', component: ModificarbeneficiariomComponent , canActivate: [AuthGuard]},
  {path:'InhabilitarBeneficiario', component: InhabilitarbeneficiariosComponent , canActivate: [AuthGuard]},
  {path:'InhabilitarBeneficiario1', component: Inhabilitarbeneficiarios1Component , canActivate: [AuthGuard] },
  {path:'InhabilitarBeneficiarioi/:id', component: InhabilitarbeneficiariosiComponent, canActivate: [AuthGuard] },
  {path:'serviciosmodalidades', component:ServiciosymodalidadesComponent , canActivate: [AuthGuard]},
  {path:'refrenciasbienestarina', component: ReferenciasbienestarinaComponent, canActivate: [AuthGuard]},
  {path:'datosvarios', component: DatosvariosComponent, canActivate: [AuthGuard]},
  {path:'permisos', component: PermisosComponent , canActivate: [AuthGuard]},
  {path:'permisos/:id', component: PermisosComponent , canActivate: [AuthGuard]},
  {path:'permisosm/:id', component: PermisosmComponent , canActivate: [AuthGuard]},
  {path:'permisosm', component: PermisosmComponent , canActivate: [AuthGuard]},
  {path:'modificarusuariom/:id', component: ModificarusuariomComponent , canActivate: [AuthGuard]},
  {path:'modificarlistamaestro', component: ModificarlistamaestrosComponent , canActivate: [AuthGuard]},
  {path:'modificarserviciom', component: ModificarserviciosmComponent , canActivate: [AuthGuard]},
  {path:'modificarserviciomm/:id', component: ModificarserviciommComponent , canActivate: [AuthGuard]},
  {path:'inhabilitarserviciom', component: InhabilitarserviciosmComponent , canActivate: [AuthGuard]},
  {path:'inhabilitarserviciomi/:id', component: InhabilitarserviciosmiComponent  , canActivate: [AuthGuard]},
  {path:'modificarreferenciab', component: ModificareferenciabComponent , canActivate: [AuthGuard]},
  {path:'modificarreferenciabm/:id', component: ModificareferenciabmComponent , canActivate: [AuthGuard]},
  {path:'inhabilitareferenciab', component:  InhabilitareferenciabComponent, canActivate: [AuthGuard]},
  {path:'inhabilitareferenciabi/:id', component:  InhabilitareferenciabiComponent, canActivate: [AuthGuard]},
  {path:'inhabilitarelistap', component: InhabilitarlistapComponent  , canActivate: [AuthGuard]},
  {path:'inhabilitarelistapi/:id', component: InhabilitarlistapiComponent  , canActivate: [AuthGuard]},
  {path:'inhabilitarelistadoc', component: InhabilitarlistadocComponent  , canActivate: [AuthGuard]},
  {path:'inhabilitarelistadoci/:id', component:  InhabilitarlistadociComponent , canActivate: [AuthGuard]},
  {path:'modificarlistac', component: ModificarlistapComponent , canActivate: [AuthGuard]},
  {path:'modificarlistacm/:id', component: ModificarlistapmComponent, canActivate: [AuthGuard]},
  {path:'modificarlistadoc', component: ModificarlistadocComponent , canActivate: [AuthGuard]},
  {path:'modificarlistadocm/:id', component: ModificarlistadocmComponent , canActivate: [AuthGuard]},
  {path:'listadocursos', component: ListadocursosComponent , canActivate: [AuthGuard]},

  {path:'centrodistribucion', component: CentrodistribucionComponent , canActivate: [AuthGuard]},
  {path:'centrodistribucionc', component: CentrodistribucioncComponent , canActivate: [AuthGuard]},
  {path:'centrodistribucionci', component: CentrodistribucionciComponent , canActivate: [AuthGuard]},

  {path:'almacen', component: AlmacenComponent , canActivate: [AuthGuard]},
  {path:'almacenc', component: AlmacencComponent , canActivate: [AuthGuard]},
  {path:'almacenci', component: AlmacenciComponent , canActivate: [AuthGuard]},

  {path:'modificarcentrod', component:  ModificarcentrodComponent, canActivate: [AuthGuard]},
  {path:'modificarcentroi', component:  ModificarcentrodiComponent, canActivate: [AuthGuard]},
  {path:'modificarcentrom/:id', component: ModificarcentromComponent , canActivate: [AuthGuard]},
 
  {path:'modificaralmacen', component: ModificaralmacenComponent , canActivate: [AuthGuard]},
  {path:'modificaralmaceni', component:  ModificaralmaceniComponent, canActivate: [AuthGuard]},
  {path:'modificaralmacenm/:id', component:  ModificaralmacenmComponent, canActivate: [AuthGuard]},


  {path:'inhabilitarcentrod', component: InhabilitarcentrodComponent , canActivate: [AuthGuard]},
  {path:'inhabilitarcentroi', component: InhabilitarcentrodiComponent  , canActivate: [AuthGuard]},
  {path:'inhabilitarcentrom/:id', component: InhabilitarcentrodmComponent, canActivate: [AuthGuard]},
 
  {path:'inhabilitaralmacen', component: InhabilitaralmacenComponent , canActivate: [AuthGuard]},
  {path:'inhabilitaralmaceni', component: InhabilitaralmacendiComponent , canActivate: [AuthGuard]},
  {path:'inhabilitaralmacenm/:id', component: InhabilitaralmacendmComponent , canActivate: [AuthGuard]},
  {path:'reporteusuarios', component: ReporteusuariosComponent, canActivate: [AuthGuard]},
  
  {path:'reportealmacen', component: ReportealmacenComponent, canActivate: [AuthGuard]},
  {path:'reportebeneficiario', component: ReportebeneficiarioComponent, canActivate: [AuthGuard]},
  {path:'reportecentrodistribucion', component: ReportecentrodistribucionComponent, canActivate: [AuthGuard]},
  {path:'reportedatosnutricionales', component: ReportedatosnutricionalesComponent, canActivate: [AuthGuard]},
  {path:'reportelistadocursos', component: ReportelistadocursosComponent, canActivate: [AuthGuard]},
  {path:'reportepreciosbienestarina', component: ReportepreciosbienestarinaComponent, canActivate: [AuthGuard]},
  {path:'reportereferenciabienestarina', component: ReportereferenciabienestarinaComponent, canActivate: [AuthGuard]},
  {path:'reporteserviciosymodalidades', component: ReporteserviciosmodalidadesComponent, canActivate: [AuthGuard]},
  {path:'reportedatosvarios', component: ReportedatosvariosComponent, canActivate: [AuthGuard]},

  {path:'modificardatosnutricionales', component: ModificardatosnutricionalesComponent, canActivate: [AuthGuard]},
  {path:'modificardatosnutricionalesm/:id', component: ModificardatosnutricionalesmComponent, canActivate: [AuthGuard]},

  {path:'reportecentrozonal', component: ReportecentrozonalComponent, canActivate: [AuthGuard]},

  {path:'reportepuntoentrega', component: ReporteentregaComponent, canActivate: [AuthGuard]},
  {path:'reporteuds', component:  ReporteudsComponent, canActivate: [AuthGuard]},
  {path:'reporterol', component:  ReporterolComponent, canActivate: [AuthGuard]},
  {path:'entregac', component:  EntregacComponent, canActivate: [AuthGuard]},
  {path:'entregam/:id', component:  EntregamComponent, canActivate: [AuthGuard]},
  {path:'entregai/:id', component:  EntregaiComponent, canActivate: [AuthGuard]},

  {path:'reportentregab', component:  ReporteentregabComponent, canActivate: [AuthGuard]},
  {path:'inhabilitaruds/:id', component:  InhabilitarudsComponent, canActivate: [AuthGuard]},
  

  {path:'serviciosymodalidadesv', component: ServiciosymodalidadesvComponent, canActivate: [AuthGuard]},

  {path:'referenciasbienestarinav', component: RefrenciasbienestarinavComponent, canActivate: [AuthGuard]},
  {path:'listapreciosv', component: ListapreciosvComponent, canActivate: [AuthGuard]},
  {path:'listadocursosv', component: ListadocursosvComponent, canActivate: [AuthGuard]},
  {path:'datosvariosv', component: DatosvariosvComponent, canActivate: [AuthGuard]},

  {path:'reporteinventario', component: ReporteinventarioComponent, canActivate: [AuthGuard]},
  {path:'recepcion', component: RecepcionbienestrarinaComponent, canActivate: [AuthGuard]},
  {path:'recepcionv', component:  RecepcionbienestarinavComponent, canActivate: [AuthGuard]},
  {path:'recepcionvi', component:  RecepcionbienestarinaviComponent, canActivate: [AuthGuard]},
  {path:'recepcioninv', component:  RecepcioninvComponent, canActivate: [AuthGuard]},
  {path:'inhabilitardatosnutricionales', component: InhabilitardatosnutricionalesComponent, canActivate: [AuthGuard]},
  {path:'inhabilitardatosnutricionalesi/:id', component: InhabilitardatosnutricionalesiComponent, canActivate: [AuthGuard]},
  {path:'entregasel', component: EntregaselComponent, canActivate: [AuthGuard]},



  {path:'salidacentro', component: SalidacentroComponent, canActivate: [AuthGuard]},
  {path:'salidacentroc', component: SalidacentrocComponent, canActivate: [AuthGuard]},
  {path:'salidabeneficiario', component: SalidabeneficiarioComponent, canActivate: [AuthGuard]},
  {path:'salidabeneficiarioc', component: SalidabeneficiariocComponent, canActivate: [AuthGuard]},
  {path:'salidaconsumo', component: SalidaconsumoComponent, canActivate: [AuthGuard]},
  {path:'salidaconsumoc', component: SalidaconsumocComponent, canActivate: [AuthGuard]},

  {path:'devoluciones', component: DevolucionesComponent, canActivate: [AuthGuard]},
  {path:'devolucionesc', component: DevolucionescComponent, canActivate: [AuthGuard]},

  {path:'traslado', component: TrasladoComponent, canActivate: [AuthGuard]},
  {path:'trasladoc', component: TrasladocComponent, canActivate: [AuthGuard]},

  {path:'recuentoinventario', component: RecuentoinventarioComponent, canActivate: [AuthGuard]},
  {path:'recuentoinventarioc', component: RecuentoinventariocComponent, canActivate: [AuthGuard]},
  {path:'reporterecepcion', component:ReporterecepcionComponent, canActivate: [AuthGuard] },
  {path:'reportedevolucion', component: ReportedevolucionesComponent , canActivate: [AuthGuard]},

  {path:'reportentregacentrodistribucion', component: ReportesalidacentrodComponent, canActivate: [AuthGuard]},
  {path:'reporteentregaconsumo', component:ReportesalidaconsumoiComponent , canActivate: [AuthGuard]},
  {path:'reporteentregabeneficiario', component:  ReportesalidabeneficiarioComponent , canActivate: [AuthGuard]},
  {path:'centrozonaliv', component:   CentrozonalivComponent, canActivate: [AuthGuard] },
  {path:'puntoentregav', component:   PuntoentregavComponent , canActivate: [AuthGuard]},
  {path:'udsv', component:  UdsvComponent, canActivate: [AuthGuard] },
  {path:'rolv', component:  RolvComponent, canActivate: [AuthGuard] },
  {path:'crearalmacen', component:   CrearalmacenComponent , canActivate: [AuthGuard]},
  {path:'consecutivomaestrov', component:    ConsecutivomaestrovComponent , canActivate: [AuthGuard]},
  {path:'reporteconsecutivomaestro', component:   ReporteconsecutivomaestroComponent, canActivate: [AuthGuard]},
  {path:'usuariosv1', component:    Usuariov1Component, canActivate: [AuthGuard]},
  {path:'usuariosv2', component:    Usuariov2Component, canActivate: [AuthGuard]},
  
  {path:'usuariouds', component:    UsuarioudsComponent, canActivate: [AuthGuard]},
  {path:'modificarusuariov2', component:    Modificarusuariosv2Component, canActivate: [AuthGuard]},
  {path:'modificarusuariov2m/:id', component:    Modificarusuariosv2mComponent, canActivate: [AuthGuard]},
  {path:'modificarusuariov3', component:    Modificarusuariosv3Component, canActivate: [AuthGuard]},
  {path:'modificarusuariov3m/:id', component:    Modificarusuariosv3mComponent, canActivate: [AuthGuard]},

  {path:'inhabilitarusuarios2', component:    Inhabilitarusuarios2Component, canActivate: [AuthGuard]},
  {path:'inhabilitarusuarios3', component:    Inhabilitarusuarios3Component, canActivate: [AuthGuard]},
 
  {path:'inhabilitarusuariosp/:id', component:    InhabilitarusuariospComponent, canActivate: [AuthGuard]},
  {path:'inhabilitarusuariosu/:id', component:    InhabilitarusuariosuComponent, canActivate: [AuthGuard]},
 
  {path:'centrodistribucionu', component:   CentrodistribuciondComponent  , canActivate: [AuthGuard]},
  {path:'centrodistribucionui', component:   CentrodistribucionuiComponent , canActivate: [AuthGuard]},
  {path:'centrodistribucionp', component:     CentrodistribucionpComponent, canActivate: [AuthGuard]},
  {path:'centrodistribucionpi', component:    CentrodistribucionpiComponent, canActivate: [AuthGuard]},
  
  {path:'modificarcentrop', component:   ModificarcentropComponent  , canActivate: [AuthGuard]},
  {path:'modificarcentropi/:id', component:   ModificarcentropiComponent , canActivate: [AuthGuard]},
  {path:'modificarcentrou', component:     ModificarcentrouComponent, canActivate: [AuthGuard]},
  {path:'modificarcentroui/:id', component:    ModificarcentrouiComponent, canActivate: [AuthGuard]},

  {path:'inhabilitarcentrop', component:   InhabilitarcentropComponent , canActivate: [AuthGuard] },
  {path:'inhabilitarpi/:id', component:   InhabilitarcentropiComponent , canActivate: [AuthGuard]},
  {path:'inhabilitaru', component:     InhabilitarcentrouComponent, canActivate: [AuthGuard]},
  {path:'inhabilitarui/:id', component:    InhabilitarcentrouiComponent, canActivate: [AuthGuard]},
  
  {path:'nivelalmacen', component:    NivelalmacenComponent, canActivate: [AuthGuard]},


  {path:'almacenp', component:    AlmacenpComponent, canActivate: [AuthGuard]},

  {path:'almacenpi', component:    AlmacenpiComponent, canActivate: [AuthGuard]},
  {path:'almacenu', component:    AlmacenuComponent, canActivate: [AuthGuard]},

  {path:'almacenui', component:    AlmacenuiComponent, canActivate: [AuthGuard]},


  {path:'modificaralmacenp', component:    ModificaralmacenpComponent, canActivate: [AuthGuard]},

  {path:'modificaralmacenpi/:id', component:    ModificaralmacenpiComponent, canActivate: [AuthGuard]},
  {path:'modificaralmacenu', component:    ModificaralmacenuComponent, canActivate: [AuthGuard]},

  {path:'modificaralmacenui/:id', component:    ModificaralmacenuiComponent, canActivate: [AuthGuard]},

 
  {path:'inhabilitaralmacenp', component:    InhabilitaralmacenpComponent, canActivate: [AuthGuard]},

  {path:'inhabilitaralmacenpi/:id', component:    InhabilitaralmacenpiComponent, canActivate: [AuthGuard]},
  {path:'inhabilitaralmacenu', component:     InhabilitaralmacenuComponent, canActivate: [AuthGuard]},

  {path:'inhabilitaralmacenui/:id', component:  InhabilitaralmacenuiComponent, canActivate: [AuthGuard]},

  {path:'nivelbeneficiario', component:  NivelbeneficiarioComponent, canActivate: [AuthGuard]},
  {path:'modificarnivelbeneficiario', component:  ModificarnivelbeneficiarioComponent, canActivate: [AuthGuard]},
  

  {path:'beneficiariosmp', component:  BeneficiariosmpComponent, canActivate: [AuthGuard]},
  {path:'beneficiariosmpi', component:  BeneficiariosmpiComponent, canActivate: [AuthGuard]},
  {path:'beneficiariosmu', component:  BeneficiariosmuComponent, canActivate: [AuthGuard]},
  {path:'beneficiariosmui', component:  BeneficiariosmuiComponent, canActivate: [AuthGuard]},


  {path:'modificarbeneficiariosp', component:  ModificarBeneficiariopComponent, canActivate: [AuthGuard]},
  {path:'modificarbeneficiariospi/:id', component:  ModificarBeneficiariopiComponent, canActivate: [AuthGuard]},
  {path:'modificarbeneficiariosu', component:  ModificarBeneficiariouComponent, canActivate: [AuthGuard]},
  {path:'modificarbeneficiariosui/:id', component:  ModificarBeneficiariouiComponent, canActivate: [AuthGuard]},

  {path:'inhabilitarnivelbeneficiario', component:  InhabilitarnivelbeneficiarioComponent, canActivate: [AuthGuard]},


  {path:'inhabilitarbeneficiariosp', component:  InhabilitarbeneficiariopComponent, canActivate: [AuthGuard]},
  {path:'inhabilitarbeneficiariospi/:id', component:  InhabilitarbeneficiariopiComponent, canActivate: [AuthGuard]},
  {path:'inhabilitarbeneficiariosu', component:  InhabilitarbeneficiariouComponent, canActivate: [AuthGuard]},
  {path:'inhabilitarbeneficiariosui/:id', component:  InhabilitarbeneficiariouiComponent, canActivate: [AuthGuard]},

  {path:'nivelistadocursos', component:  NivelistadocursosComponent, canActivate: [AuthGuard]},
  

  {path:'listadocursosp', component:  ListadocursospComponent, canActivate: [AuthGuard]},
  {path:'listadocursospi', component:  ListadocursospiComponent, canActivate: [AuthGuard]},
  {path:'listadocursosu', component:  ListadocursosuComponent, canActivate: [AuthGuard]},
  {path:'listadocursosui', component:  ListadocursosuiComponent, canActivate: [AuthGuard]},

  
  {path:'nivelistadocursosm', component:  NivelistadocursosmComponent, canActivate: [AuthGuard]},
  {path:'modificarlistadocursosp', component:  ModificarlistadocursospComponent, canActivate: [AuthGuard]},
  {path:'modificarlistadocursospi/:id', component:  ModificarlistadocursospiComponent, canActivate: [AuthGuard]},
  {path:'modificarlistadocursosu', component:  ModificarlistadocursosuComponent, canActivate: [AuthGuard]},
  {path:'modificarlistadocursosui/:id', component:  ModificarlistadocursosuiComponent, canActivate: [AuthGuard]},

 
  {path:'nivelistadocursosi', component:  NivelistadocursosiComponent, canActivate: [AuthGuard]},
  {path:'ilistadocursosp', component:  IlistadocursospComponent , canActivate: [AuthGuard]},
  {path:'ilistadocursospi/:id', component: IlistadocursospiComponent, canActivate: [AuthGuard]},
  {path:'ilistadocursosu', component:  IlistadocursosuComponent, canActivate: [AuthGuard]},
  {path:'ilistadocursosui/:id', component:  IlistadocursosuiComponent, canActivate: [AuthGuard]},

  {path:'niveldatosnutricionales', component:  NiveldatosnutricionalesComponent, canActivate: [AuthGuard]},

  
  {path:'datosvariosp', component:  DatosvariospComponent, canActivate: [AuthGuard]},

  {path:'datosvariospi', component:  DatosvariospiComponent, canActivate: [AuthGuard]},

  {path:'datosvariosu', component:  DatosvariosuComponent, canActivate: [AuthGuard]},

  {path:'datosvariosui', component:  DatosvariosuiComponent, canActivate: [AuthGuard]},
  
  {path:'niveldatosnutricionalesm', component:  NiveldatosnutricionalesmComponent, canActivate: [AuthGuard]},
 
  {path:'modificardatosnutricionalesp', component:  ModificardatosnutricionalespComponent, canActivate: [AuthGuard]},
  {path:'modificardatosnutricionalespi/:id', component:  ModificardatosnutricionalespiComponent, canActivate: [AuthGuard]},
  {path:'modificardatosnutricionalesu', component:  ModificardatosnutricionalesuComponent, canActivate: [AuthGuard]},
  {path:'modificardatosnutricionalesui/:id', component:  ModificardatosnutricionalesuiComponent, canActivate: [AuthGuard]},

 
  {path:'niveldatosnutricionalesi', component:  NiveldatosnutricionalesiComponent, canActivate: [AuthGuard]},
  {path:'idatosnutricionalesp', component:  IdatosnutricionalespComponent, canActivate: [AuthGuard]},
  {path:'idatosnutricionalespi/:id', component:  IdatosnutricionalespiComponent, canActivate: [AuthGuard]},
  {path:'idatosnutricionalesu', component:  IdatosnutricionalesuComponent, canActivate: [AuthGuard]},
  {path:'idatosnutricionalesui/:id', component:  IdatosnutricionalesuiComponent, canActivate: [AuthGuard]},

  {path:'nivelnumerocupos', component:  NivelnumerocuposComponent, canActivate: [AuthGuard]},

  {path:'numerocuposc', component:  NumerocuposcComponent, canActivate: [AuthGuard]},
  {path:'numerocuposci', component:  NumerocuposciComponent, canActivate: [AuthGuard]},
  {path:'numerocuposp', component:  NumerocupospComponent, canActivate: [AuthGuard]},
  {path:'numerocupospi', component:  NumerocupospiComponent, canActivate: [AuthGuard]},
  {path:'numerocuposu', component:  NumerocuposuComponent, canActivate: [AuthGuard]},
  {path:'numerocuposui', component:  NumerocuposuiComponent, canActivate: [AuthGuard]},


  {path:'modificarnivelnumerocupos', component:  ModificarnivelnumerocuposComponent, canActivate: [AuthGuard]},

  {path:'modificarnumerocuposc', component:  ModificarnumerocuposcComponent, canActivate: [AuthGuard]},
  {path:'modificarnumerocuposci/:id', component:  ModificarnumerocuposciComponent, canActivate: [AuthGuard]},
  {path:'modificarnumerocuposp', component:  ModificarnumerocupospComponent, canActivate: [AuthGuard]},
  {path:'modificarnumerocupospi/:id', component:  ModificarnumerocupospiComponent, canActivate: [AuthGuard]},
  {path:'modificarnumerocuposu', component:  ModificarnumerocuposuComponent, canActivate: [AuthGuard]},
  {path:'modificarnumerocuposui/:id', component:  ModificarnumerocuposuiComponent, canActivate: [AuthGuard]},

  {path:'reportenumerocupos', component:  ReportenumerocuposComponent, canActivate: [AuthGuard]},
  


  {path:'inhabilitarnivelnumerocupos', component:  InhabilitarnivelnumerocuposComponent, canActivate: [AuthGuard]},
  {path:'inhabilitarnumerocuposc', component:  InhabilitarnivelnumerocuposcComponent, canActivate: [AuthGuard]},
  {path:'inhabilitarnumerocuposci/:id', component:  InhabilitarnivelnumerocuposciComponent, canActivate: [AuthGuard]},
  {path:'inhabilitarnumerocuposp', component:  InhabilitarnivelnumerocupospComponent, canActivate: [AuthGuard]},
  {path:'inhabilitarnumerocupospi/:id', component:  InhabilitarnivelnumerocupospiComponent, canActivate: [AuthGuard]},
  {path:'inhabilitarnumerocuposu', component:  InhabilitarnivelnumerocuposuComponent, canActivate: [AuthGuard]},
  {path:'inhabilitarnumerocuposui/:id', component:  InhabilitarnivelnumerocuposuiComponent, canActivate: [AuthGuard]},
  {path:'cargainventario', component:  CargainventarioComponent, canActivate: [AuthGuard]},
  {path:'cargainventarioinicial', component:  CargainventarioinicialComponent, canActivate: [AuthGuard]},
  {path:'reporterecuentoinv', component:  ReporterecuentoinventarioComponent, canActivate: [AuthGuard]},

  {path:'reporteformatoentregab', component:   ReporteformatoentregabComponent, canActivate: [AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
