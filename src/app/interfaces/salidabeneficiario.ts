export interface Salidabeneficiario {
    
    idEntregaBeneficiario?: number,
    lote :string,
    fechavencimiento : number,
    cantidad  : number,
    unidad : string,
    idAcudientes : number,
    idBeneficiarios:number,
    idCentroDistribucion : number,
    idAlmacenes  : number,
    idTipoBienesterina : number,
    Cantidad2?: number,
    idTipoDocumento ?: number,
    NumeroDocumento ?: number,
    Cantidadsuma?:number,
    fechasalida: string,
}