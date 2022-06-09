alert("Advertencia: este progama utiliza mucho el procesador al mover el mouse sobre la pantalla");

var teclas = {
    UP_LEFT: 103, UP: 104, UP_RIGHT: 105, LEFT: 100, RIGHT: 102, DOWN_LEFT: 97,
    DOWN: 98, DOWN_RIGHT: 99
};
// aqui creamos una "variable con variables por dentro"
// son basicamente OBJETOS que tienen ATRIBUTOS
// esto es basicamente JASON


document.addEventListener("keydown", dibujarTeclado) //pendiente poner nombre funcion invocada
var cuadro = document.getElementById("areaDeDibujo");
var papel = cuadro.getContext("2d");

var x = 100; var y = 100;
var anchoPuntoInicial = 6;
var anchoLineaGeneral = 2;
dibujarLinea("red", anchoPuntoInicial, x-2, y-2, x+2, y+2, papel);

function dibujarLinea(colorParametro, anchoLinea, xInicialParametro, 
    yInicialParametro, xFinalParametro, yFinalParametro , lienzo)
{
    lienzo.beginPath(); //inicia dibujo
    lienzo.strokeStyle = colorParametro;
    lienzo.lineWidth = anchoLinea;
    lienzo.moveTo(xInicialParametro,yInicialParametro);
    //             x   y
    lienzo.lineTo(xFinalParametro,yFinalParametro);
    lienzo.stroke(); //dibuja instrucciones
    lienzo.closePath();
}

function dibujarTeclado(informacionTecla)
{
   // console.log(informacionTecla);
    console.log("el codigo de la tecla '" + informacionTecla.key +
     "' presionada es " + informacionTecla.keyCode);
    
    /*
    tecla   codigo  
    7       103     UP LEFT
    8       104     UP
    9       105     UP RIGHT
    4       100     LEFT
    5       101     (Boton sin uso)
    6       102     RIGHT
    1       97      DOWN LEFT
    2       98      DOWN
    3       99      DOWN RIGHT
    */
    var colorLineaGeneral = "blue";
    var movimiento = 3;

    switch (informacionTecla.keyCode) {
        case teclas.UP_LEFT:
            dibujarLinea(colorLineaGeneral, anchoLineaGeneral, x, y, x - movimiento, y - movimiento, papel);
            x=x-movimiento; 
            y=y-movimiento;
            break;

        case teclas.UP:
            dibujarLinea(colorLineaGeneral, anchoLineaGeneral, x, y, x, y - movimiento, papel);
            y=y-movimiento;
            break;

         case teclas.UP_RIGHT:
            dibujarLinea(colorLineaGeneral, anchoLineaGeneral, x, y, x + movimiento, y - movimiento, papel);
            x=x+movimiento;
            y=y-movimiento;
            break;

        case teclas.LEFT:
            dibujarLinea(colorLineaGeneral, anchoLineaGeneral, x, y, x - movimiento, y, papel);
            x=x-movimiento;
            break;

        case teclas.RIGHT:
            dibujarLinea(colorLineaGeneral, anchoLineaGeneral, x, y, x + movimiento, y, papel);
            x=x+movimiento;
            break;

        case teclas.DOWN_LEFT:
            dibujarLinea(colorLineaGeneral, anchoLineaGeneral, x, y, x - movimiento, y + movimiento, papel);
            x=x-movimiento;
            y=y+movimiento;
            break;

        case teclas.DOWN:
            dibujarLinea(colorLineaGeneral, anchoLineaGeneral, x, y, x, y + movimiento, papel);
            y=y+movimiento;
            break;

        case teclas.DOWN_RIGHT:
            dibujarLinea(colorLineaGeneral, anchoLineaGeneral, x, y, x + movimiento, y + movimiento, papel);
            x=x+movimiento;
            y=y+movimiento;
            break;


        default:
            console.log("TECLA INVALIDA");
            break;
    }

}

 //segunda parte del ejercicio, tarea

//document.addEventListener("mousedown", dibujarMouse);
document.addEventListener("mousemove", dibujarMouse);
//window.addEventListener("mouseover", dibujarMouse);
//window.addEventListener("mousemove", dibujarMouse);

var i = 0;
function dibujarMouse(informacionMouse)
{
   //console.log(informacionMouse);
    var colorLineaGeneral = "brown";
    // anchoLineaGeneral
    x2 = informacionMouse.offsetX;
    y2 = informacionMouse.offsetY;
    console.log("Ejecucion "+ i + " : Coordenadas finales: x2 es " + x2 + ", y2 es "+ y2);
    i++;
    dibujarLinea(colorLineaGeneral, anchoLineaGeneral, x, y, x2, y2, papel);
    x = x2;
    y = y2;
}

// (colorLineaGeneral, anchoLineaGeneral, x, y, x2, y2, papel);
dibujarLinea("black", 1, 1, 1, 1, 299, papel);
dibujarLinea("black", 1, 1, 299, 299, 299, papel);
dibujarLinea("black", 1, 299, 299, 299, 1, papel);
dibujarLinea("black", 1, 299, 1, 1, 1, papel);