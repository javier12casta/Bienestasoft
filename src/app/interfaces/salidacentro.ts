export interface Salidacentro {
    identregacentrodistribucion?: number,
    lote:string,
    fechavencimiento : Date,
    cantidad  : number,
    cantidad2 ?  : number,
    unidad : string,
    fecharegistro : Date,
    idCentroDistribucionOrigen:number,
    idCentroDistribucionDestino : number,
    idAlmacen  : number,
    idAlmacenesDestino: number,
    idTipoBienesterina : number,
}
    