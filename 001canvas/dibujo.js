var dibu = document.getElementById("idDibujo"); 
    //a esta variable le vamos a asignar el canvas

var lienzo = dibu.getContext("2d"); 
// permite obtener el lienzo en 2d (porque tambien existe en 3d)

var anchoCanvas = dibu.width;


// hacemos lo mismo para el boton y la caja de texto
var textBox1 = document.getElementById("textBox"); //var texto del video
var button1 = document.getElementById("button"); //var boton 

button1.addEventListener("click", dibujoPorClick );


function dibujoPorClick() 
{ //esta funcion se ejecutara cuando se haga click al boton
    var lineas1 = textBox1.value; 
    lineas1 = parseInt(lineas1);

    {//algoritmo dibujo lineas
        var lineas = lineas1;
        var espacio = anchoCanvas / lineas;
            console.log("el ancho canvas es " + anchoCanvas);
            console.log("se tienen "+ lineas+ " lineas");
            console.log("el espacio es " + espacio);
        var xInicial;
        var yInicial;
        var xFinal; 
        var yFinal;
        var colorX = "blue";
        
        //lineas*=10;
        
        xInicial=0, yInicial=0, xFinal=10, yFinal=300;
        
        for (let i = 0; i <= lineas; i++) {
           
            dibujarLinea(colorX, xInicial, yInicial, xFinal, yFinal)
            yInicial=espacio*i; xFinal=espacio*(i+1);
        }
        
        xInicial=0, yInicial=0, xFinal=300, yFinal=10;
        
        for (let i = 0; i <= lineas; i++) {
           
            dibujarLinea(colorX, xInicial, yInicial, xFinal, yFinal)
            xInicial=espacio*i; yFinal=espacio*(i+1);
        }
        
        
        
        dibujarLinea(colorX, 0, 0, 300,0);
        dibujarLinea(colorX, 0, 0, 0, 300);
        dibujarLinea(colorX, 300, 300, 0, 300);
        dibujarLinea(colorX, 300, 300, 300, 0);
    }

}

function dibujarLinea(colorParametro, xInicialParametro, 
    yInicialParametro, xFinalParametro, yFinalParametro)
{
    lienzo.beginPath(); //inicia dibujo
    lienzo.strokeStyle = colorParametro;
    lienzo.moveTo(xInicialParametro,yInicialParametro);
    //             x   y
    lienzo.lineTo(xFinalParametro,yFinalParametro);
    lienzo.stroke(); //dibuja instrucciones
    lienzo.closePath();
}
















/*


//ignorar este codigo, no quedo bien

var lineasPorCurva = 30; 
var tamaño = espacio;
lineasPorCurva = lineasPorCurva * tamaño;
var c;
for (a = 0; a <= lineasPorCurva-tamaño; a+=tamaño) {
    //                 x1 y1   x2    y2
    dibujarLinea("red", 0, a, a+tamaño, lineasPorCurva);
    dibujarLinea("red", a, 0, lineasPorCurva, a+tamaño);
    console.log("iteracion " + ((a/tamaño)+1));
    c = (a/tamaño)+2;

}

var a = 0;
for (b = lineasPorCurva; b > 0; b-=tamaño) {
    //                 x1 y1   x2    y2
    dibujarLinea("blue", a, lineasPorCurva, lineasPorCurva, b-tamaño);
    dibujarLinea("blue", b, 0, 0, a+tamaño);
    console.log("iteracion (v2) "+ ( c + ( -b + ( lineasPorCurva ) ) / tamaño ) )
    a+=tamaño;
}

*/


/*
dibujarLinea("cyan", espacio0, espacio0, 0, 300);
dibujarLinea("black", 0, 300, 220, 220);



{

lienzo.beginPath(); //inicia dibujo
lienzo.strokeStyle = "red";
lienzo.moveTo(espacio0,espacio0);
//             x   y
lienzo.lineTo(200,200);
lienzo.lineTo(25,200);
lienzo.lineTo(espacio,20);
lienzo.moveTo(espacio0,espacio0);
lienzo.lineTo(150,150);
lienzo.lineTo(300,200);
lienzo.lineTo(300,300);
lienzo.stroke(); //dibuja instrucciones
lienzo.closePath(); //finaliza dibujo

lienzo.beginPath(); //inicia dibujo
lienzo.strokeStyle = "blue";
lienzo.moveTo(200,200);
//             x   y
lienzo.lineTo(espacio0,175);
lienzo.lineTo(28,28);
lienzo.lineTo(0,250);
lienzo.moveTo(144,69);
lienzo.lineTo(250,190);
lienzo.lineTo(0,150);
lienzo.lineTo(300,300);
lienzo.stroke(); //dibuja instrucciones
lienzo.closePath(); //finaliza dibujo

} */