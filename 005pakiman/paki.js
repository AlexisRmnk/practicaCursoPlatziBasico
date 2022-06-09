var imagenes = [];
imagenes ["Cauchin"] = "vaca.png"; // se lee "imagenes SUB Cauchin"
imagenes ["Pokacho"] = "pollo.png"; // el SUB indica posicion
imagenes ["Tocinauro"] = "cerdo.png";



var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);

/* cauchin.mostrar();
pokacho.mostrar();
tocinauro.mostrar(); */

var coleccion = [];
coleccion.push(cauchin);
coleccion.push(pokacho);
coleccion.push(tocinauro);

// console.log(coleccion);

for (var elementoo of coleccion) //va de 0 a n siendo n el ultimo elemnto de coleccion[n]
{
  //  console.log(elementoo);
    elementoo.mostrar();
}
