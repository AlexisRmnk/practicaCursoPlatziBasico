var vp = document.getElementById("villaPlatziCanvas");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = { // "objeto literal"
    url: "vaca.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};



fondo.imagen = new Image(); //las clases llevan por primer letra una MAYUSCULA 
//arriba instanciamos un objeto de la clase
fondo.imagen.src = fondo.url; //el source de nuestra imagen de fondo es tile.png
//una vez ejecutada esa linea de codigo, se dispara el evento LOAD
//tenemos que hacer que nuestro objeto IMAGEN "escuche" dicho evento para confirmar su carga
// y recien ahi agregarla al canvas
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);





function dibujar()
{
    console.log("Funcion dibujar")
    if (fondo.cargaOK) 
    {
        papel.drawImage(fondo.imagen, 0, 0);
        console.log("dibujando fondo");
    }
    
   
    if(vaca.cargaOK)
    {
        for (let i = 0; i < aleatorio(1,5); i++) 
        {
            let valorX = aleatorio(0,5);
            let valorY = aleatorio(0,5);
            valorX = valorX * 80;
            valorY = valorY * 80;
            papel.drawImage(vaca.imagen, valorX, valorY); 
            
        }
        
        console.log("dibujando vaca");
    } 
    if(cerdo.cargaOK)
    {
        for (let i = 0; i < aleatorio(1,5); i++) 
        {   
            let valorX = aleatorio(0,5);
            let valorY = aleatorio(0,5);
            valorX = valorX * 80;
            valorY = valorY * 80;
            papel.drawImage(cerdo.imagen, valorX, valorY);
        }
        console.log("dibujando cerdo");
    }
    if(pollo.cargaOK)
    {
        for (let i = 0; i < aleatorio(1,5); i++) 
        {   
            let valorX = aleatorio(0,5);
            let valorY = aleatorio(0,5);
            valorX = valorX * 80;
            valorY = valorY * 80;
            papel.drawImage(pollo.imagen, valorX, valorY);
        }
        console.log("dibujando pollo ");
    }




}

function cargarFondo()
{
    console.log("FUNCION CARGAR FONDO");
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    console.log("FUNCION CARGAR VACAS");
    vaca.cargaOK = true;
    dibujar();
}

function cargarPollos()
{
    console.log("FUNCION CARGAR POLLOS");
    pollo.cargaOK = true;
    dibujar();
}

function cargarCerdos()
{
    console.log("FUNCION CARGAR CERDOS");
    cerdo.cargaOK = true;
    dibujar();
}



function aleatorio(min, max) 
{
    /*
    var numeroRandom = Math.random() ;
    var operacionRedondeada = Math.floor(numeroRandom*(max-min+1));
    var resultado = operacionRedondeada + min;  */


    var resultado =  Math.floor( Math.random() * (max-min+1) ) + min;
    return resultado;
}














/*
console.log("debugging");
var contador_numeros = 0;

function aleatorio(min, max) 
{
    var numeroRandom = Math.random() ;
   

    var operacionRedondeada = Math.floor(numeroRandom*(max-min+1));
    var resultado = operacionRedondeada + min; 

    console.log("min es "+min+" *** MAX es "+max+" *** math.random vale "+numeroRandom+" *** max-min vale " +
    (max-min) + " *** y eso +1 es " + (max-min+1) + " *** lo cual multiplicado por math.random es " + numeroRandom*(max-min+1) + " *** y redondeado para abajo es " + operacionRedondeada +
    " *** a lo cual si le sumamos el minimo queda como resultado: " + resultado );
    
    if (resultado == 10) {
        contador_numeros++;
    }


    
    return resultado;
}


for (let i = 0; i < 1000; i++) {
    var maxim=0;
    var minim=10;

    if (maxim<minim) 
    {
        var temporal = maxim;
        var temporal2 = minim;
        maxim = temporal2;
        minim = temporal;
    }

    document.write("iteracion " + i + " : " + aleatorio(minim, maxim) + " *** contador: " + contador_numeros + "<br>");
    

}
*/