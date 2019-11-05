export interface Almacen {
    idAlmacenes?: number,
    NumeroExterno : string,
    Nombre: string,
    Responsable : string,
    Capacidad  : number,
    UnidadMedida  : string,
    Estado  : number,
    idCentroDistribucion? : number,
}
