function myFunction() {

    //let x = document.getElementById("fname");
    //x.value = x.value.toUpperCase();
    let x = document.getElementById("fname");
    let y = x.value;
    alert(y);
    
    /*
    Se tuvo q agregar en el html con un span ya que con innerHTML no se puede mofificar el contenido
    de un Input, para hacerlo hay que usar una en donde la variable que capturo toda la linea
    como en este caso x, se debe modificar eñ valor del input con algo como x.value = al valor q quiera 
    poner.

    x.value = y.toUpperCase();

    Entonces se mostro en el sapn el resultado ahora si usando el innerHTML como se ve a continuación.

    document.getElementById("nombre").innerHTML= y.toUpperCase();

    */

    document.getElementById("nombre").innerHTML= y.toUpperCase();

    //x.value = y.toUpperCase();
    
    
  }