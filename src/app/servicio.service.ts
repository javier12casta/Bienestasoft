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
 
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  api = 'http://localhost:3000';
  headers = new HttpHeaders({'Content-Type': 'application/json' });
  constructor(public http: HttpClient) {
    console.log("hello service");
   }

   //------rol Persona--------
// metodo get de roles
  Obtenerdatos() {
    const path = `${this.api}/rol`;
    return this.http.get<Rol[]>(path);
  }
// metodo get de rol
  getRol(rol: Rol) {
    return this.http.get(`${this.api}/rol/${rol.idRolPersona}`);
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
//-----Barrio Vereda------
getBarrio(){
  const path = `${this.api}/barrio`;
  return this.http.get<Barrio[]>(path);
}

//---Metodo traer por id
getBarrioid(id: string) {
  //const path = `${this.api}/regional/${id}`;
  return this.http.get(`${this.api}/barrio/${id}`);
}


postBarrio(bv: Barrio){
  const path = `${this.api}/barrio`;
  return this.http.post<Barrio>(path, bv);
}
//Metodo Actualizar Regionales
putBarrio(id: string|number, barr: Barrio ){
  return this.http.put<Barrio>(`${this.api}/barrio/${id}`, barr);
}
//-----comunas------
getComuna(){
  const path = `${this.api}/comuna`;
  return this.http.get<[Comuna]>(path);
}

//---Metodo traer por id
getComunaid(id: string) {
  return this.http.get(`${this.api}/comuna/${id}`);
}

postComuna(comu: Comuna){
  const path = `${this.api}/comuna`;
  return this.http.post<Comuna>(path, comu);
}
putComuna(id: string|number, comu: Comuna ) {
  const path = `${this.api}/comuna/${comu.idComunas}`;
  return this.http.put<Comuna>(`${this.api}/comuna/${id}`, comu);
}
//------Municipio---------
getMunicipio(){
  const path = `${this.api}/municipio`;
  return this.http.get<[Municipio]>(path);
}
//---Metodo traer por id
getMunicipioid(id: string) {
  return this.http.get(`${this.api}/municipio/${id}`);
}
postMunicipio(muni: Municipio){
  const path = `${this.api}/municipio`;
  return this.http.post<Municipio>(path, muni);
}
putMunicipio(id: string|number, muni: Municipio) {
  const path = `${this.api}/municipio/${id}`;
  return this.http.put<Municipio>(path, muni);
}
//---- Centro Zonal ------
getCentro(){
  const path = `${this.api}/centrosZ`;
  return this.http.get<[Centrozonal]>(path);
}
getCentroid(id: string) {
  return this.http.get(`${this.api}/centrosZ/${id}`);
}
postCentro(cen: Centrozonal){
  const path = `${this.api}/centrosZ`;
  return this.http.post<Centrozonal>(path, cen);
}
putCentro(id: string|number, cen: Centrozonal) {
  const path = `${this.api}/centrosZ/${id}`;
  return this.http.put<Centrozonal>(path, cen);
}
//---- Regional Metodos funcionando--------------------------------------------------------------
getRegional(){
  const path = `${this.api}/regional`;
  return this.http.get<[Regional]>(path);
}
//---Metodo traer por id
getRegionalid(id: string) {
  return this.http.get(`${this.api}/regional/${id}`);
}
//----Metodo Crear Regionales
postRegional(regi: Regional){
  const path = `${this.api}/regional`;
  return this.http.post<Regional>(path, regi);
}
//Metodo Actualizar Regionales
putRegional(id: string|number, regi: Regional ){
  return this.http.put<Regional>(`${this.api}/regional/${id}`, regi);
}
//--------------------------------
getPunto(){
  const path = `${this.api}/punto`;
  return this.http.get<[Puntoentrega]>(path);
}
//---Metodo traer por id
getPuntoid(id: string) {
  return this.http.get(`${this.api}/punto/${id}`);
}
//----Metodo Crear
postPunto(punto: Puntoentrega){
  //const path = ;
  return this.http.post<Puntoentrega>(`${this.api}/punto`, punto);
}
//Metodo Actualizar
putPunto(id: string|number, punto: Puntoentrega ){
  return this.http.put<Puntoentrega>(`${this.api}/punto/${id}`, punto);
}
//--------------------------------------------
postUsuarios(usu : Usuarios){

const path = `${this.api}/usuario`;
return this.http.post<Usuarios>(path, usu);

}

getUsuarios(){
  const path = `${this.api}/usuario`;
  return this.http.get<[Usuarios]>(path);
}

putUsuarios(id: string|number, Nombre: Usuarios ){
  return this.http.put<Usuarios>(`${this.api}/usuario/${id}`, Nombre);
}



}
