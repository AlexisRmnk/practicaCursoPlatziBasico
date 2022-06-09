var caja = []; //aca guardamos los billetes que tenemos en la caja

//                    valor, cantidad, url_imagen
//caja.push(new Billete (100,5));
caja.push(new Billete (50,2,"a50USD.jpg"));
caja.push(new Billete (20,2,"a20USD.jpg"));
caja.push(new Billete (10,3,"a10USD.jpg"));
//caja.push(new Billete (5,5));


//var dinero = document.getElementById("dinero").nodeValue;
var dinero = 0;

var entregado = []; //dinero que se va entregando
var div = 0;
var papeles = 0;
var acumuladorAux = 0;
var iAux = 0;
//var imagenBilleteResultado; SACAR SI NO ROMPE NADA

var result = document.getElementById("resultado"); //aca vamos a escribir el resultado en html
var boton1 = document.getElementById("boton1"); //ESTE BOTON SE LLAMA "extraer" en el curso
boton1.addEventListener("click", entregarDinero);

result.innerHTML = result.innerHTML + "Dinero ATM actual: <br/>";
    for (var b of caja) 
    {
        result.innerHTML = result.innerHTML + b.cantidad + " billetes de $"+b.valor+"<br/>";
    }
    result.innerHTML = result.innerHTML + "<hr/>";

function entregarDinero()
{
    
    var t  = document.getElementById("dinero"); //creamos una variable de la caja de texto
        dinero = parseInt(t.value); //extraemos el texto de la caja de texto
        // con id "dinero" y convertimos dicho valor a numero
        console.log("DINERO VALE "+dinero);

        acumuladorAux=0;
        entregado = [];

    if (dinero>0)
    {
        
        for (var b of caja) 
        {
            console.log("Iteracion "+ iAux+": b vale");
            console.log(b);
            
            div = Math.floor(dinero/b.valor); //la parte entera de div 
            //es la cant de billetes de un valor preciso que se necesitan

            console.log("DIV vale " + div );
            if (div>b.cantidad) //¿es la cantidad que necesito mayor a la que tengo?
            {
                papeles = b.cantidad; //damos TODO lo que tenemos
                console.log("ejecuta IF, papeles vale la cantidad de b.cantidad que es "+papeles);
            }
            else 
            {
                papeles = div; //damos solo lo necesario
                console.log("ejecuta ELSE, papeles vale la cantidad DIV que es "+papeles);
            }

            console.log("se hace un PUSH con el valor b.valor="+b.valor+" y papeles="+papeles);
            entregado.push(new Billete (b.valor, papeles, b.imagenB.src)); //cargamos la pila de billetes entregada
            b.cantidad = b.cantidad - papeles; //nueva condicion! hecha para ir descreciendo el dinero del cajero

            dinero = dinero - (papeles * b.valor); 
            //le restamos al dinero solicitado lo entregado!
            console.log("Dinero tras descuento de lo entregado: "+dinero);

            acumuladorAux = acumuladorAux + (papeles*b.valor);
            
        }   

        if (dinero>0) //si el dinero es mayor que 0 es porque nos quedamos sin dinero
        {
            console.log("nos quedamos cortos de cambio. Entregado: $"+ acumuladorAux + ". Faltante: $" + dinero);
            result.innerHTML = result.innerHTML + "nos quedamos cortos de cambio. Entregado: $"+ acumuladorAux + ". Faltante: $" + 
            dinero + "<br/>";

            for (var e of entregado) //ciclo que descarga la pila
            {
                //result.innerHTML = result.innerHTML + e.cantidad + " billetes de $"+e.valor+"<br/>";
                console.log("ENTRA CICLO var E of ENTREGADO donde e.cantidad="+e.cantidad);
                //optimizacion: si el numero de billetes es 0 que no muestre. Si es 1 que aparezca
                //billtete en singular y si es 2 o mas que aparezca billetes en plural
                if (e.cantidad>=2)
                {
                    //document.write(e.cantidad + " billetes de $"+e.valor+"<br/>";)
                    result.innerHTML = result.innerHTML + e.cantidad + " billetes de $"+e.valor+"<br/>";
                    for (let i = e.cantidad; i > 0; i--) 
                    {
                        result.innerHTML = result.innerHTML + e.extraerSourceImagen();
                    // result.innerHTML = result.innerHTML + "<img src='"+e.extraerSourceImagen()+"'/> <br/> ";
                    }

                } else
                if(e.cantidad==1)
                {
                    console.log("e.imagenB.src vale :");
                    console.log(e.imagenB.src);
                    console.log("e.extraerSourceImagen devuelve: ");
                    console.log(e.extraerSourceImagen());
                    result.innerHTML = result.innerHTML + e.cantidad + " billete de $"+e.valor+"<br/>";
                    result.innerHTML = result.innerHTML + e.extraerSourceImagen();
                }
            }
        } else

        if (dinero==0)  //operacion exitosa! 
        { // aqui vamos a recorrer el array "entregado" para imprimir en pantalla
            console.log("entra condicion IF DINERO == 0");
            for (var e of entregado) //ciclo que descarga la pila
            {
                //result.innerHTML = result.innerHTML + e.cantidad + " billetes de $"+e.valor+"<br/>";
                console.log("ENTRA CICLO var E of ENTREGADO donde e.cantidad="+e.cantidad);
                //optimizacion: si el numero de billetes es 0 que no muestre. Si es 1 que aparezca
                //billtete en singular y si es 2 o mas que aparezca billetes en plural
                if (e.cantidad>=2)
                {
                    //document.write(e.cantidad + " billetes de $"+e.valor+"<br/>";)
                    result.innerHTML = result.innerHTML + e.cantidad + " billetes de $"+e.valor+"<br/>";
                    for (let i = e.cantidad; i > 0; i--) 
                    {
                        result.innerHTML = result.innerHTML + e.extraerSourceImagen();
                    // result.innerHTML = result.innerHTML + "<img src='"+e.extraerSourceImagen()+"'/> <br/> ";
                    }

                } else
                if(e.cantidad==1)
                {
                    console.log("e.imagenB.src vale :");
                    console.log(e.imagenB.src);
                    console.log("e.extraerSourceImagen devuelve: ");
                    console.log(e.extraerSourceImagen());
                    result.innerHTML = result.innerHTML + e.cantidad + " billete de $"+e.valor+"<br/>";
                    result.innerHTML = result.innerHTML + e.extraerSourceImagen();
                }
            }
        } 
        
            
        console.log("************ Vector ENTREGADO VALE");
        console.log(entregado);

        
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


