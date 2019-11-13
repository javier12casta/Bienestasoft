export interface Almacen {
    idAlmacenes?: number,
    NumeroExterno : string,
    Nombre: string,
    Responsable : string,
    Capacidad  : number,
    Capacidad2  : number,
    UnidadMedida  : string,
    Estado  : number,
    idCentroDistribucion? : number,
}
