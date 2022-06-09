class Pakiman 
{
    constructor(nombre, vida, ataque) // sirve para instanciar objetos
    {
        this.imagen = new Image();
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        //this.tipo = "tierra";
        
        this.imagen.src = imagenes[this.nombre]; //this.nombre nos da el string necesario para
        // traer el Source para el objeto imagen que es atributo del objeto pakiman
    }
    
    //FUNCIONES de la clase
    hablar() 
    {
        alert(this.nombre);
    }

    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write("<p>")
        document.write("<strong>" + this.nombre + "<strong/> <br/>");
        document.write("Vida: " + this.vida + ". ");
        document.write("Ataque: " + this.ataque + ". ");
        document.write("<hr/>" + "<p>")
    }
}