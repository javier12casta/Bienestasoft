export interface Recepcion {
    
    idBienestarina?: number,
    lote : string,
    FechaVencimiento : number,
    Cantidad  : number,
    Cantidad2?  : number,
    UnidadPrincipal: string,
    FechaRecepcion  : number,
    idTipoBienesterina?: number,
    idInventario?: number,
    idAlmacenes?: number,
    idCentroDistribucion?: number,
}