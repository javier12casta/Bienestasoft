export interface Almacen {
    idAlmacenes?: number,
    NumeroExterno : string,
    NombreCentroDistribucion: string,
    Responsable : string,
    Capacidad  : number,
    UnidadMedida  : string,
    Estado  : number,
    idCentroDistribucion? : number,
}
