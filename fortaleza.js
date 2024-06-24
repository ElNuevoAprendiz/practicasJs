function calcularFortaleza(){

    
    let contrasenia=document.getElementById("pass").value
   

    cantCaracteres=contrasenia.length

    

    if (cantCaracteres>=0 & cantCaracteres<=4) {
        fort="Baja";
        
    } else if (cantCaracteres>=5 & cantCaracteres<=8) {
        fort="Media";
    } else {
        fort="Alta";
    }

    document.getElementById("fort").innerHTML = fort
}