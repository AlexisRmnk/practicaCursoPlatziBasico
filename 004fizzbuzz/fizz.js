var numeros = 100;

for (let i = 0; i < 100; i++) 
{

    if (esDivisible(i,3)) 
    {
        document.write("fizz")
    }
    
    if (esDivisible(i,5)) {
        document.write("buzz")
    } 
    
    if (!esDivisible(i,3) && !esDivisible(i,5)) {
        document.write(i)
    }
    
    document.write("<br/>")
    }

    function esDivisible(dividendo,divisor)
    {
    
    if (dividendo%divisor==0) 
    {
        var esDivisible = true;
        return esDivisible;
    } else {
        var esDivisible = false;
        return esDivisible;
    }

        
    }