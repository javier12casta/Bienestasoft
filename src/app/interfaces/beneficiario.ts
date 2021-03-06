export interface Id {
  id:number
}
export interface Beneficiario {

    idBeneficiarios?: number,
    NumeroDocumento : number,
    FechaIngreso : number ,
    FechaNacimiento: number ,
    PrimerNombre : string,
    PrimerApellido: string,
    SegundoNombre : string,
    Direccion : string,
    Pais : string,
    Departamento : string,
    Municipio : string,
    TelefonoFijo : number ,
    TelefonoFijo2 : number ,
    TelefonoMovil : string ,
    TelefonoMovil2 : string ,
    Email : string,
    Estado : number,
    idGenero: number,
    idTipoDocumento: number,
    SegundoApellido?: string,
    ServicioOmodalidad : string,
    idUDS?: number,
    idPuntoEntrega?: number,
    idCentrosZonales?: number,

  }
