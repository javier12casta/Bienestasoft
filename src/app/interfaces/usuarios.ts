export interface Usuarios {
    idUsuarios?: number,
    Nombres : string,
    Apellidos : string,
    Estado: number,
    NumeroDocumento : number,
    FechaIngreso : number,
    NombreUsuarioSistema : string,
    Direccion : string,
    TelefonoFijo : number,
    TelefonoFijo2?: number,
    TelefonoMovil: number,
    TelefonoMovil2?: number ,
    Email : string,
    idRolPersona ?: number,
    idPersonalICBF ?: number,
    idUDS ?: number,
    idTipoDocumento ?: number,
    idPermiso? : number,
  }
