import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Rol } from './interfaces/rol';
import { Barrio } from './interfaces/barrio';
import { Comuna } from './interfaces/comuna';
import { Municipio } from './interfaces/municipio';
import { Centrozonal } from './interfaces/centrozonal';
import { Regional } from './interfaces/regional';
import { Observable } from 'rxjs';
import { Puntoentrega } from './interfaces/puntoentrega';
import { Usuarios } from './interfaces/usuarios';
import { InUsuarios } from './interfaces/inhabilitarusuarios';
import { Beneficiario } from './interfaces/beneficiario';
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
import { InAlmacen } from './interfaces/inhabilitaralmacen';
import { InCentrodistribucion } from './interfaces/inhabilitarcentrodistribucion';
import { Entrega } from './interfaces/entrega';
import { Permisos } from './interfaces/permisos';
import {  InEntrega } from './interfaces/inhabilitarentrega';
import {  Tipodocumento } from './interfaces/tipodocumento';
import {  Inuds } from './interfaces/inhabilitaruds';
import { Genero } from './interfaces/genero';
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

    getPermisosid(per: Permisos) {
      return this.http.get(`${this.api}/permisos/${per.idPermiso}`);
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
  //---Metodo traer por id
  getPuntoid(id: string) {
    return this.http.get(`${this.api}/punto/${id}`);
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

}
