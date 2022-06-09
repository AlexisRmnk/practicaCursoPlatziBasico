var caja = []; //aca guardamos los billetes que tenemos en la caja
caja.push(new Billete (50,2,"a50USD.jpg")); // valor, cantidad, url_imagen
caja.push(new Billete (20,2,"a20USD.jpg"));
caja.push(new Billete (10,3,"a10USD.jpg"));
var dinero = 0, div = 0, papeles = 0, acumuladorAux = 0, iAux = 0;
var entregado = []; //dinero que se va entregando
var result = document.getElementById("resultado"); //aca vamos a escribir el resultado en html
document.getElementById("boton1").addEventListener("click", entregarDinero); //ESTE BOTON SE LLAMA "extraer" en el curso
result.innerHTML = result.innerHTML + "Dinero ATM actual: <br/>";
    for (var b of caja) 
    {
        result.innerHTML = result.innerHTML + b.cantidad + " billetes de $"+b.valor+"<br/>";
    }
    result.innerHTML = result.innerHTML + "<hr/>";
function entregarDinero()
{
    var t  = document.getElementById("dinero"); //creamos una variable de la caja de texto
        dinero = parseInt(t.value); //extraemos el texto de la caja de texto con id "dinero" y convertimos dicho valor a numero
        acumuladorAux=0;
        entregado = [];
    if (dinero>0)
    {
        for (var b of caja) 
        {            
            div = Math.floor(dinero/b.valor); //la parte entera de div es la cant de billetes de un valor preciso que se necesitan
            if (div>b.cantidad) //¿es la cantidad que necesito mayor a la que tengo?
            {
                papeles = b.cantidad; //damos TODO lo que tenemos
            }
            else 
            {
                papeles = div; //damos solo lo necesario
            }
            entregado.push(new Billete (b.valor, papeles, b.imagenB.src)); //cargamos la pila de billetes entregada
            b.cantidad = b.cantidad - papeles; //nueva condicion! hecha para ir descreciendo el dinero del cajero
            dinero = dinero - (papeles * b.valor); //le restamos al dinero solicitado lo entregado!
            acumuladorAux = acumuladorAux + (papeles*b.valor);
        }   
        if (dinero>0) //si el dinero es mayor que 0 es porque nos quedamos sin dinero
        {
            result.innerHTML = result.innerHTML + "nos quedamos cortos de cambio. Entregado: $"+ acumuladorAux + ". Faltante: $" + 
            dinero + "<br/>";
            for (var e of entregado) //ciclo que descarga la pila
            {
                if (e.cantidad>=2)
                { //optimizacion: si el numero de billetes es 0 que no muestre. Si es 1 que aparezca billtete en singular y si es 2 o mas que aparezca billetes en plural
                    result.innerHTML = result.innerHTML + e.cantidad + " billetes de $"+e.valor+"<br/>";
                    for (let i = e.cantidad; i > 0; i--) 
                    {
                        result.innerHTML = result.innerHTML + e.extraerSourceImagen();
                    }
                } else
                if(e.cantidad==1)
                {
                    result.innerHTML = result.innerHTML + e.cantidad + " billete de $"+e.valor+"<br/>";
                    result.innerHTML = result.innerHTML + e.extraerSourceImagen();
                }
            }
        } else
        if (dinero==0)  //operacion exitosa! 
        { // aqui vamos a recorrer el array "entregado" para imprimir en pantalla
            for (var e of entregado) //ciclo que descarga la pila
            {
                if (e.cantidad>=2)
                {//optimizacion: si el numero de billetes es 0 que no muestre. Si es 1 que aparezca billtete en singular y si es 2 o mas que aparezca billetes en plural
                    //document.write(e.cantidad + " billetes de $"+e.valor+"<br/>";)
                    result.innerHTML = result.innerHTML + e.cantidad + " billetes de $"+e.valor+"<br/>";
                    for (let i = e.cantidad; i > 0; i--) 
                    {
                        result.innerHTML = result.innerHTML + e.extraerSourceImagen();
                    }
                } else
                if(e.cantidad==1)
                {
                    result.innerHTML = result.innerHTML + e.cantidad + " billete de $"+e.valor+"<br/>";
                    result.innerHTML = result.innerHTML + e.extraerSourceImagen();
                }
            }
        } 
    }
    else
    {
        result.innerHTML = result.innerHTML + "Ingresar un monto positivo de dinero! <br/>";
    }
    result.innerHTML = result.innerHTML + "Dinero ATM actual: <br/>";
    for (var b of caja) 
    {
        result.innerHTML = result.innerHTML + b.cantidad + " billetes de $"+b.valor+"<br/>";
    }
    result.innerHTML = result.innerHTML + "<br/>";
    result.innerHTML = result.innerHTML + "<hr/>";
}


