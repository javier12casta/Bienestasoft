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
    tipo ?: string,
    idPuntoEntrega ?: number,
    idCentrosZonales ?: number,
    idUDS ?: number,
    idTipoDocumento : number,
    TipoUsuario : string,
    password?: string,
  }
