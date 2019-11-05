export interface Recepcion {
    
    idBienestarina?: number,
    lote : string,
    FechaVencimiento : number,
    Cantidad  : number,
    UnidadPrincipal: string,
    FechaRecepcion  : number,
    idTipoBienesterina?: number,
    idInventario?: number,
    idAlmacenes?: number,
    idCentroDistribucion?: number,
}