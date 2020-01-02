import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Rol } from './interfaces/rol';
import { Barrio } from './interfaces/barrio';
import { Comuna } from './interfaces/comuna';
import { Municipio } from './interfaces/municipio';
import { Centrozonal } from './interfaces/centrozonal';
import { duplicadosz } from './interfaces/duplicadosz';
import { Regional } from './interfaces/regional';
import { Observable } from 'rxjs';
import { Puntoentrega } from './interfaces/puntoentrega';
import { Usuarios } from './interfaces/usuarios';
import { InUsuarios } from './interfaces/inhabilitarusuarios';
import { Beneficiario, Id } from './interfaces/beneficiario';
import { Beneficiariot } from './interfaces/beneficiariot';
import { InBeneficiario } from './interfaces/inhabilitarBenefiario';
import { Uds } from './interfaces/uds';
import { MaestroBienestarina } from './interfaces/maestrosBienestarina';
import { Acudientes } from './interfaces/acudiente';
import { TipoBienestarina } from './interfaces/tipobienestarina';
import { Lprecios } from './interfaces/listaprecios';
import { Datosvarios } from './interfaces/datosvarios';
import { Listadocursos } from './interfaces/listadocursos';
import { InMaestroBienestarina } from './interfaces/inhabilitarmaestrosBienestarina';
import { InTipoBienestarina } from './interfaces/inhabilitartipobienestarina';
import { InLprecios } from './interfaces/inhabilitarlistaprecio';
import { InListadocursos } from './interfaces/inhabilitarlistadocursos';
import { Centrodistribucion } from './interfaces/centrodistribucion';
import { Almacen } from './interfaces/almacen';
import { Almacent } from './interfaces/almacent';
import { InAlmacen } from './interfaces/inhabilitaralmacen';
import { InCentrodistribucion } from './interfaces/inhabilitarcentrodistribucion';
import { Entrega } from './interfaces/entrega';
import { Permisos } from './interfaces/permisos';
import {  InEntrega } from './interfaces/inhabilitarentrega';
import {  Tipodocumento } from './interfaces/tipodocumento';
import {  Inuds } from './interfaces/inhabilitaruds';
import { Genero } from './interfaces/genero';
import { Recepcion} from './interfaces/recepcion';
import { Invarios} from './interfaces/inhabilitardatosvarios';
import { Inventario} from './interfaces/inventario';
import { Salidacentro} from './interfaces/salidacentro';
import { Salidabeneficiario} from './interfaces/salidabeneficiario';
import { Salidaconsumo} from './interfaces/salidaconsumo';
import { Devoluciones} from './interfaces/devoluciones';
import { Recuentoinventario} from './interfaces/recuentoinventario';
import { Translado} from './interfaces/traslado';
import { Acta} from './interfaces/acta';
import { Biometrico } from './interfaces/biometrico';
import { Centrozonalt } from './interfaces/centrozonalt';
import { Salidabeneficiariot } from './interfaces/salidabeneficiariot';
import { Salidaconsumot } from './interfaces/salidaconsumot';

import { Listadocursost } from './interfaces/listadocursost';
import { AcudientesA } from './interfaces/AcudienteA';

import { Recepciont } from './interfaces/recepciont';
import { Trasladost } from './interfaces/trasladost';
import { Recuentoinventariot } from './interfaces/recuentoinventariot';
import { Puntoentregat } from './interfaces/puntoentregat';
import {Udst } from './interfaces/udst';
import {Consecutivomaestro } from './interfaces/consecutivomaestro';
import {Usuariost } from './interfaces/usuariost';
import {Centrodistribuciont } from './interfaces/centrodistribuciont';
import {Devolucionest } from './interfaces/devolucionest';
import { Salidacentrot } from './interfaces/salidacentrot';



@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  api = 'http://localhost:3000';
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(public http: HttpClient) {
    console.log("hello service");
  }

   ObtenerEntrega() {
    const path = `${this.api}/entrega`;
    return this.http.get<Entrega []>(path);
  }



  getentregaid(id: string) {
    return this.http.get(`${this.api}/entrega/${id}`);
  }

  postEntrega(entrega: Entrega) {
    const path = `${this.api}/entrega`;
    return this.http.post<Entrega>(path, entrega);
  }

  putentrega(id: string | number, ent: Entrega) {
    return this.http.put<Entrega>(`${this.api}/entrega/${id}`,ent);
  }

  putentregaInhabilitar(id: string | number, Nombre: InEntrega) {
    return this.http.put<InEntrega>(`${this.api}/entrega/${id}`, Nombre);
  }
 


   //------rol Persona--------
// metodo get de roles
  ObtenerRoles() {
    const path = `${this.api}/rol`;
    return this.http.get<Rol[]>(path);
  }
  // metodo get de rol
  getRolid(id: string | number) {
    return this.http.get(`${this.api}/rol/${id}`);
  }

  getRolName(name: string) {
    return this.http.get<Rol>(`${this.api}/rol/rolnom/${name}`);
  }

  //metodo post de rolPersona
  insertarRol(rol: Rol) {
    const path = `${this.api}/rol`;
    return this.http.post<Rol>(path, rol);
  }
  //metodo put de rolPersona
  /*ActualizarRol(rol: Rol) {
    const path = `${this.api}/rol/${rol.idRolPersona}`;
    return this.http.put<Rol>(path, rol);
    }*/
  ActualizarRol(id: string | number, rol: Rol) {
    const path = `${this.api}/rol/${rol.idRolPersona}`;
    return this.http.put<Rol>(`${this.api}/rol/${id}`, rol);
  }
    //------------------Permisos--------------------------------
    getPermisos() {
      const path = `${this.api}/permisos`;
      return this.http.get<Permisos[]>(path);
    }

    getPermisosid(id: string | number) {
      return this.http.get(`${this.api}/permisos/${id}`);
    }

    postPermisos(per: Permisos) {
      const path = `${this.api}/permisos`;
      return this.http.post<Almacen>(path, per);
  
    }
    putPermisos(id: string | number, per: Permisos) {
      const path = `${this.api}/permisos/${per.idPermiso}`;
      return this.http.put<Rol>(`${this.api}/permisos/${id}`, per);
    }
  //-----Barrio Vereda------
  getBarrio() {
    const path = `${this.api}/barrio`;
    return this.http.get<Barrio[]>(path);
  }

  //---Metodo traer por id
  getBarrioid(id: string) {
    //const path = `${this.api}/regional/${id}`;
    return this.http.get(`${this.api}/barrio/${id}`);
  }


  postBarrio(bv: Barrio) {
    const path = `${this.api}/barrio`;
    return this.http.post<Barrio>(path, bv);
  }
  //Metodo Actualizar Regionales
  putBarrio(id: string | number, barr: Barrio) {
    return this.http.put<Barrio>(`${this.api}/barrio/${id}`, barr);
  }
  //-----comunas------
  getComuna() {
    const path = `${this.api}/comuna`;
    return this.http.get<[Comuna]>(path);
  }

  //---Metodo traer por id
  getComunaid(id: string) {
    return this.http.get(`${this.api}/comuna/${id}`);
  }

  postComuna(comu: Comuna) {
    const path = `${this.api}/comuna`;
    return this.http.post<Comuna>(path, comu);
  }
  putComuna(id: string | number, comu: Comuna) {
    const path = `${this.api}/comuna/${comu.idComunas}`;
    return this.http.put<Comuna>(`${this.api}/comuna/${id}`, comu);
  }
  //------Municipio---------
  getMunicipio() {
    const path = `${this.api}/municipio`;
    return this.http.get<[Municipio]>(path);
  }
  //---Metodo traer por id
  getMunicipioid(id: string) {
    return this.http.get(`${this.api}/municipio/${id}`);
  }
  postMunicipio(muni: Municipio) {
    const path = `${this.api}/municipio`;
    return this.http.post<Municipio>(path, muni);
  }
  putMunicipio(id: string | number, muni: Municipio) {
    const path = `${this.api}/municipio/${id}`;
    return this.http.put<Municipio>(path, muni);
  }
  //---- Centro Zonal ------
  getCentro() {
    const path = `${this.api}/centrosZ`;
    return this.http.get<[Centrozonal]>(path);
  }

  getCentroEStado() {
    const path = `${this.api}/centrosZ/lista`;
    return this.http.get<[Centrozonal]>(path);
  }



  getduplicadoz() {
    const path = `${this.api}/centrosZ/duplicadosz`;
    return this.http.get<[duplicadosz]>(path);
  }

  
  //tabla 
  getCentroTabla() {
    const path = `${this.api}/centrosZ/tabla`;
    return this.http.get<[Centrozonalt]>(path);
  }
  getCentroid(id: string) {
    return this.http.get(`${this.api}/centrosZ/${id}`);
  }


  postCentro(cen: Centrozonal) {
    const path = `${this.api}/centrosZ`;
    return this.http.post<Centrozonal>(path, cen);
  }
  putCentro(id: string | number, cen: Centrozonal) {
    const path = `${this.api}/centrosZ/${id}`;
    return this.http.put<Centrozonal>(path, cen);
  }
  //---- Regional Metodos funcionando--------------------------------------------------------------
  getRegional() {
    const path = `${this.api}/regional`;
    return this.http.get<[Regional]>(path);
  }
  //---Metodo traer por id
  getRegionalid(id: string) {
    return this.http.get(`${this.api}/regional/${id}`);
  }
  //----Metodo Crear Regionales
  postRegional(regi: Regional) {
    const path = `${this.api}/regional`;
    return this.http.post<Regional>(path, regi);
  }
  //Metodo Actualizar Regionales
  putRegional(id: string | number, regi: Regional) {
    return this.http.put<Regional>(`${this.api}/regional/${id}`, regi);
  }
  //--------------------------------
  getPunto() {
    const path = `${this.api}/punto`;
    return this.http.get<[Puntoentrega]>(path);
  }
  getPuntoEstado() {
    const path = `${this.api}/punto/lista`;
    return this.http.get<[Puntoentrega]>(path);
  }
  //---Metodo traer por id
  getPuntoid(id: string) {
    return this.http.get(`${this.api}/punto/${id}`);
  }

  getPuntoTabla() {
    const path = `${this.api}/punto/tablap`;
    return this.http.get<[Puntoentregat]>(path);
  }

  //----Metodo Crear
  postPunto(punto: Puntoentrega) {
    //const path = ;
    return this.http.post<Puntoentrega>(`${this.api}/punto `, punto);
  }
  //Metodo Actualizar
  putPunto(id: string | number, punto: Puntoentrega) {
    return this.http.put<Puntoentrega>(`${this.api}/punto/${id}`, punto);
  }
  //--------------------------------------------
  postUsuarios(usu: Usuarios) {

    const path = `${this.api}/usuario`;
    return this.http.post<Usuarios>(path, usu);

  }

  getUsuarios() {
    const path = `${this.api}/usuario`;
    return this.http.get<[Usuarios]>(path);
  }

  getUsuariosc() {
    const path = `${this.api}/usuario/tablausuariosc`;
    return this.http.get<[Usuariost]>(path);
  }

  getUsuariosp() {
    const path = `${this.api}/usuario/tablausuariosp`;
    return this.http.get<[Usuariost]>(path);
  }

  getUsuariosu() {
    const path = `${this.api}/usuario/tablausuariosu`;
    return this.http.get<[Usuariost]>(path);
  }

  getUsuariosr() {
    const path = `${this.api}/usuario/tablausuariosr`;
    return this.http.get<[Usuariost]>(path);
  }

  

  getUsuariosid(id: string) {
    return this.http.get(`${this.api}/usuario/${id}`);
  }

  putUsuarios(id: string | number, Nombre: Usuarios) {
    return this.http.put<Usuarios>(`${this.api}/usuario/${id}`, Nombre);
  }

  putUsuariosInhabilitar(id: string | number, Nombre: InUsuarios) {
    return this.http.put<InUsuarios>(`${this.api}/usuario/${id}`, Nombre);
  }


 


  postMaestrosBienestrina(usu: MaestroBienestarina) {

    const path = `${this.api}/listaM`;
    return this.http.post<MaestroBienestarina>(path, usu);

  }

  getMaestrosBienestrina() {
    const path = `${this.api}/listaM`;
    return this.http.get<[MaestroBienestarina]>(path);
  }
  getMaestrosBienestrinaid(id: string) {
    return this.http.get(`${this.api}/listaM/${id}`);
  }


  putMaestrosBienestrina(id: string | number, Nombre: MaestroBienestarina) {
    return this.http.put<MaestroBienestarina>(`${this.api}/listaM/${id}`, Nombre);
  }

  putMaestrosBienestrinaInhabilitar(id: string | number, Nombre: InMaestroBienestarina) {
    return this.http.put<InMaestroBienestarina>(`${this.api}/listaM/${id}`, Nombre);
  }


  postBeneficiarios(usu: Beneficiario) {

    const path = `${this.api}/beneficiario`;
    return this.http.post<Beneficiario>(path, usu);

  }

  getBeneficiarios() {
    const path = `${this.api}/beneficiario`;
    return this.http.get<[Beneficiario]>(path);
  }

  getBeneficiariosMaxId() {
    const path = `${this.api}/beneficiario/id`;
    return this.http.get<[Id]>(path);
  }

  getBeneficiariosu() {
    const path = `${this.api}/beneficiario/beneficiariosu`;
    return this.http.get<[Beneficiariot]>(path);
  }

  getBeneficiariosc() {
    const path = `${this.api}/beneficiario/beneficiariosc`;
    return this.http.get<[Beneficiariot]>(path);
  }

  getBeneficiariosp() {
    const path = `${this.api}/beneficiario/beneficiariosp`;
    return this.http.get<[Beneficiariot]>(path);
  }

  getBeneficiariosr() {
    const path = `${this.api}/beneficiario/beneficiariosr`;
    return this.http.get<[Beneficiariot]>(path);
  }

  getBeneficiariosid(id: string) {
    return this.http.get(`${this.api}/beneficiario/${id}`);
  }

  getBeneficiariosid1(id: number) {
    return this.http.get(`${this.api}/beneficiario/${id}`);
  }

  putBeneficiarios(id: string | number, Nombre: Beneficiario) {
    return this.http.put<Beneficiario>(`${this.api}/beneficiario/${id}`, Nombre);
  }

  putBeneficiariosInhabilitar(id: string | number, Nombre: InBeneficiario) {
    return this.http.put<InBeneficiario>(`${this.api}/beneficiario/${id}`, Nombre);
  }

  postAcudientes(usu: Acudientes) {

    const path = `${this.api}/acudiente`;
    return this.http.post<Acudientes>(path, usu);

  }

  getAcudientes() {
    const path = `${this.api}/acudiente`;
    return this.http.get<[Acudientes]>(path);
  }

  getAcudientesid(id: string) {
    return this.http.get(`${this.api}/acudiente/${id}`);
  }

  getAcudientesA() {
    const path = `${this.api}/acudiente/tablaA`;
    return this.http.get<[AcudientesA]>(path);
  }

  putAcudientes(id: string | number, Nombre: Acudientes) {
    return this.http.put<Acudientes>(`${this.api}/acudiente/${id}`, Nombre);
  }


  postTipobienestarina(usu: TipoBienestarina) {

    const path = `${this.api}/tbienestarina`;
    return this.http.post<TipoBienestarina>(path, usu);

  }

  getTipobienestarina() {
    const path = `${this.api}/tbienestarina`;
    return this.http.get<[TipoBienestarina]>(path);
  }

  getTipobienestarinaid(id: string) {
    return this.http.get(`${this.api}/tbienestarina/${id}`);
  }

  putTipobienestarina(id: string | number, Nombre: TipoBienestarina) {
    return this.http.put<TipoBienestarina>(`${this.api}/tbienestarina/${id}`, Nombre);
  }

  putTipobienestarinaInhabilitar(id: string | number, Nombre: InTipoBienestarina) {
    return this.http.put<InTipoBienestarina>(`${this.api}/tbienestarina/${id}`, Nombre);
  }


  postListaprecios(usu: Lprecios) {

    const path = `${this.api}/listaP`;
    return this.http.post<Lprecios>(path, usu);

  }

  getListaprecios() {
    const path = `${this.api}/listaP`;
    return this.http.get<[Lprecios]>(path);
  }

  getListapreciosid(id: string) {
    return this.http.get(`${this.api}/listaP/${id}`);
  }


  putListaprecios(id: string | number, Nombre: Lprecios) {
    return this.http.put<Lprecios>(`${this.api}/listaP/${id}`, Nombre);
  }

  putListapreciosInhabilitar(id: string | number, Nombre: InLprecios) {
    return this.http.put<InLprecios>(`${this.api}/listaP/${id}`, Nombre);
  }


  postdatosvarios(usu: Datosvarios) {

    const path = `${this.api}/datos`;
    return this.http.post<Datosvarios>(path, usu);

  }

  getdatosvarios() {
    const path = `${this.api}/datos`;
    return this.http.get<[Datosvarios]>(path);
  }

  getdatosvariosc() {
    const path = `${this.api}/datos/tablac`;
    return this.http.get<[Datosvarios]>(path);
  }

  getdatosvariosp() {
    const path = `${this.api}/datos/tablap`;
    return this.http.get<[Datosvarios]>(path);
  }


  getdatosvariosu() {
    const path = `${this.api}/datos/tablau`;
    return this.http.get<[Datosvarios]>(path);
  }

  getdatosvariosid(id: string) {
    return this.http.get(`${this.api}/datos/${id}`);
  }

  putdatosvarioss(id: string | number, Nombre: Datosvarios) {
    return this.http.put<Datosvarios>(`${this.api}/datos/${id}`, Nombre);
  }

  postlistadocursos(usu: Listadocursos) {

    const path = `${this.api}/listaC`;
    return this.http.post<Listadocursos>(path, usu);

  }

  getlistadocursos() {
    const path = `${this.api}/listaC`;
    return this.http.get<[Listadocursos]>(path);
  }

  getlistadocursostabla() {
    const path = `${this.api}/listaC/tablac`;
    return this.http.get<[Listadocursost]>(path);
  }

  getlistadocursostablap() {
    const path = `${this.api}/listaC/tablap`;
    return this.http.get<[Listadocursost]>(path);
  }

  getlistadocursostablau() {
    const path = `${this.api}/listaC/tablau`;
    return this.http.get<[Listadocursost]>(path);
  }

  getlistadocursossid(id: string) {
    return this.http.get(`${this.api}/listaC/${id}`);
  }

  putlistadocursos(id: string | number, Nombre: Listadocursos) {
    return this.http.put<Listadocursos>(`${this.api}/listaC/${id}`, Nombre);
  }

  putlistadocursosInhabilitar(id: string | number, Nombre: InListadocursos) {
    return this.http.put<InListadocursos>(`${this.api}/listaC/${id}`, Nombre);
  }




  //----UDS-----------------
  postUds(uds: Uds) {

    const path = `${this.api}/uds`;
    return this.http.post<Uds>(path, uds);

  }
  getUdsid(id: string) {
    return this.http.get(`${this.api}/uds/${id}`);
  }

  getUdsTabla() {
    const path = `${this.api}/uds/tablau`;
    return this.http.get<[Udst]>(path);
  }

  getUds() {
    const path = `${this.api}/uds`;
    return this.http.get<[Uds]>(path);
  }

  putUds(id: string | number, uds: Uds) {
    return this.http.put<Uds>(`${this.api}/uds/${id}`, uds);
  }

  putUdsInhabilitar(id: string | number, Nombre: Inuds) {
    return this.http.put<Inuds>(`${this.api}/uds/${id}`, Nombre);
  }

  //-------------------------------------------
  getcentrodistribucionid(id: string) {
    return this.http.get(`${this.api}/centrosD/${id}`);
  }

  getcentrodistribucion() {
    const path = `${this.api}/centrosD`;
    return this.http.get<[Centrodistribucion]>(path);
  }


  getCentrodistribucionc() {
    const path = `${this.api}/centrosD/centrodistribucionc`;
    return this.http.get<[Centrodistribuciont]>(path);
  }

  getCentrodistribucionp() {
    const path = `${this.api}/centrosD/centrodistribucionp`;
    return this.http.get<[Centrodistribuciont]>(path);
  }

  getCentrodistribucionu() {
    const path = `${this.api}/centrosD/centrodistribucionu`;
    return this.http.get<[Centrodistribuciont]>(path);
  }

 



  putcentrodistribucion(id: string | number, cent: Centrodistribucion) {
    return this.http.put<Centrodistribucion>(`${this.api}/centrosD/${id}`, cent);
  }

  postcentrodistribucion(cent: Centrodistribucion) {

    const path = `${this.api}/centrosD`;
    return this.http.post<Centrodistribucion>(path, cent);

  }

  putcentrodistribucionInhabilitar(id: string | number, Nombre: InCentrodistribucion) {
    return this.http.put<InCentrodistribucion>(`${this.api}/centrosD/${id}`, Nombre);
  }
  //--------------------------------------------------

  getalmacenid(id: string) {
    return this.http.get(`${this.api}/almacen/${id}`);
  }

  getalmacen() {
    const path = `${this.api}/almacen`;
    return this.http.get<[Almacen]>(path);
  }

  getAlmacenc() {
    const path = `${this.api}/almacen/almacenesc`;
    return this.http.get<[Almacent]>(path);
  }

  getAlmacenp() {
    const path = `${this.api}/almacen/almacenesp`;
    return this.http.get<[Almacent]>(path);
  }

  getAlmacenu() {
    const path = `${this.api}/almacen/almacenesu`;
    return this.http.get<[Almacent]>(path);
  }

  getAlmacenr() {
    const path = `${this.api}/almacen/almacenesr`;
    return this.http.get<[Almacent]>(path);
  }


  putalmacen(id: string | number, cent: Almacen) {
    return this.http.put<Almacen>(`${this.api}/almacen/${id}`, cent);
  }

  postalmacen(almac: Almacen) {

    const path = `${this.api}/almacen`;
    return this.http.post<Almacen>(path, almac);

  }

  putalmacenInhabilitar(id: string | number, Nombre: InAlmacen) {
    return this.http.put<InAlmacen>(`${this.api}/almacen/${id}`, Nombre);
  }

  gettipodocumento() {
    const path = `${this.api}/tdocumento`;
    return this.http.get<[Tipodocumento]>(path);
  }

  getgenero() {
    const path = `${this.api}/genero`;
    return this.http.get<[Genero]>(path);
  }

  getrecepcion() {
    const path = `${this.api}/bienestarina`;
    return this.http.get<[Recepcion]>(path);
  }

  getrecepciontabla() {
    const path = `${this.api}/bienestarina/tabla`;
    return this.http.get<[Recepciont]>(path);
  }

  postrecepcion(recep: Recepcion) {

    const path = `${this.api}/bienestarina`;
    return this.http.post<Recepcion>(path, recep);

  }

  putdatosvariosInhabilitar(id: string | number, Nombre: Invarios) {
    return this.http.put<Invarios>(`${this.api}/datos/${id}`, Nombre);
  }


  getinventario() {
    const path = `${this.api}/inventario`;
    return this.http.get<[Inventario]>(path);
  }

  getinventarioid(id: string) {
    return this.http.get(`${this.api}/inventario/${id}`);
  }

  

  postinventario(recep: Inventario) {

    const path = `${this.api}/inventario`;
    return this.http.post<Inventario>(path, recep);

  }

  putinventario(id: string | number, Nombre: Inventario) {
    return this.http.put<Inventario>(`${this.api}/inventario/${id}`, Nombre);
  }

  getsalidacentro() {
    const path = `${this.api}/entregacentrod`;
    return this.http.get<[Salidacentro]>(path);
  }

  getsalidacentroTabla() {
    const path = `${this.api}/entregacentrod/tabla`;
    return this.http.get<[Salidacentrot]>(path);
  }
  postsalidacentro(recep: Salidacentro) {

    const path = `${this.api}/entregacentrod`;
    return this.http.post<Salidacentro>(path, recep);

  }


  getsalidabeneficiario(){
    const path = `${this.api}/entregabeneficiario`;
    return this.http.get<[Salidabeneficiario]>(path);
  }

  //tabla
  getsalidabeneficiarioTabla(){
    const path = `${this.api}/entregabeneficiario/tabla`;
    return this.http.get<[Salidabeneficiariot]>(path);
  }

  postsalidabeneficiario(recep: Salidabeneficiario) {

    const path = `${this.api}/entregabeneficiario`;
    return this.http.post<Salidabeneficiario>(path, recep);

  }

  getsalidaconsumo(){
    const path = `${this.api}/entregaconsumo`;
    return this.http.get<[Salidaconsumo]>(path);
  }
  //tabla
  getsalidaconsumoTabla(){
    const path = `${this.api}/entregaconsumo/tabla`;
    return this.http.get<[Salidaconsumot]>(path);
  }

  postsalidaconsumo(recep: Salidaconsumo) {

    const path = `${this.api}/entregaconsumo`;
    return this.http.post<Salidaconsumo>(path, recep);

  }

  getdevoluciones(){

    const path = `${this.api}/devoluciones`;
    return this.http.get<[Devoluciones]>(path);

  }

  getdevolucionestabla(){

    const path = `${this.api}/devoluciones/tabla`;
    return this.http.get<[Devolucionest]>(path);

  }

  postdevoluciones(recep: Devoluciones) {

    const path = `${this.api}/devoluciones`;
    return this.http.post<Devoluciones>(path, recep);

  }



  getrecuento(){
    const path = `${this.api}/recuento`;
    return this.http.get<[Recuentoinventario]>(path);
  }

  getrecuentotabla(){
    const path = `${this.api}/recuento/tabla`;
    return this.http.get<[Recuentoinventariot]>(path);
  }

  postrecuento(recep: Recuentoinventario) {

    const path = `${this.api}/recuento`;
    return this.http.post<Recuentoinventario>(path, recep);

  }

  getraslados(){
    const path = `${this.api}/traslados`;
    return this.http.get<[Translado]>(path);
  }

  getrasladostabla(){
    const path = `${this.api}/traslados/tabla`;
    return this.http.get<[Trasladost]>(path);
  }

  postraslados(recep: Translado) {

    const path = `${this.api}/traslados`;
    return this.http.post<Translado>(path, recep);

  }

  getActa(){

    const path = `${this.api}/Acta`;
    return this.http.get<[Acta]>(path);

  }

  postacta(recep: Acta) {

    const path = `${this.api}/Acta`;
    return this.http.post<Acta>(path, recep);

  }

  //biometrico
  gethuella(){
    const path = `${this.api}/biometrico`;
    return this.http.get<[Biometrico]>(path);
  }

  getconsecutivomaestro(){
    const path = `${this.api}/consecutivoM`;
    return this.http.get<[Consecutivomaestro]>(path);
  }

  Obtenerconsecutivosm() {
    const path = `${this.api}/consecutivoM/tabla`;
    return this.http.get<[Consecutivomaestro]>(path);
  }
 

}
