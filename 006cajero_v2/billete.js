class Billete
{
    constructor (valor, cantidad, direccionImagen)
    {
        this.valor=valor;
        this.cantidad=cantidad;
        this.imagenB =  new Image();
        this.imagenB.src = direccionImagen;
    }
    extraerSourceImagen()
    {
        console.log(this.imagenB.src);
        return("<img src='"+this.imagenB.src+"'/> <br/> ");
    }
}