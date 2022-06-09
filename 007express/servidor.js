var express1 = require("express"); /* funcion especial que no existe en los navegadores (en el 
JS que corremos en el front-end pero si en el JS que corremos en el backend usando node.js -
el comando busca las librerias instaladas en tu proyecto/pc usando npm-install,
trae eso y guarda en una variable (de nombre EXPRESS en este caso)  MIN  11.35
https://platzi.com/clases/1050-programacion-basica/5129-primer-servidor-web-con-express/ */

var aplicacion = express1();
/* creamos una app y una INSTANCIA de la libreria 'express' se invoca usando la funcion global express1() 
es importante entender que el REQUIRE trae toda la libreria express y lo meto en la variable express1
como una funcion entera! luego ejecutamos dicha funcion que lo agregamos en una variable nuestra (aplicacion)

es similar a cuando tenemos un addEventListener, es decir es necesario ejecutar la funcion poniendo
express1() y guardar su resultado en 'aplicacion' para poder utilizarla */

aplicacion.get("/", inicio); //caso del inicio o home
aplicacion.get("/cursos", cursos);
/*  MIN 15.53
'get' es similar al AddEventListener solo que en vez de un evento (click, pulsar tecla, etc) se coloca
la URL que se va a abrir. Se coloca a partir de un slash (/) que indica el HOME.
INICIO es la funcion */

function inicio(peticion, resultado) //request, response
{
  resultado.send("Este es el <strong>HOME</strong>"); //se puede mandar HTML 
}
/* peticion: lo que el navegador le esta pidiendo al servidor
resultado: es lo que el servidor le quiere mandar al navegador
la funcion inicio devuelve como resultado un string  (usando 'resultado.send') */

function cursos(peticion, resultado) //request, response
{
  resultado.send("Estos son los cursos"); //se puede mandar HTML 
}

aplicacion.listen(8989);
/* con esto ultimo ponemos a correr el servidor en un puerto especifico
puede ser por ejemplo puerto 8989 

para abrir este arhcivo no hay que usar el navegador, hay que usar NODE JS
para eso vamos al cmd de Node JS (buscar en windows "node.js command prompt" 

para ello vamos a la URL donde esta el archivo
 (D:\CURSOS\cursos platzi\001 curso basico de progamacion pruebas\007express)
 y ahi hacemos una instalacion LOCAL de express usando "npm install express"  
 
 el server se corre usando 'node servidor.js' (el nombre de este archivo)
 
 para ver el resultado, luego de poner ese comando ('node servidor.js') ir al navegador chrome
 y poner en la url http://127.0.0.1:8989/
 
Para acceder a mi server desde cualquier otro dispositivo en mi propia red wifi, 
revisar mi IP con cmd (ipconfig) y acceder desde el navegador desde ese otro dispositivo a la
URL 192.168.100.10:8989 (en este caso mi IP es 192.168.100.10)

 el server se cierra con CONTROL+C
 */






/*
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000) */