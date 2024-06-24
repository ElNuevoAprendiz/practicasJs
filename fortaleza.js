function calcularFortaleza(){

    let contrasenia=document.getElementById("pass").value
    alert(contrasenia)

    cantCaracteres=contrasenia.length

    alert(contrasenia)

    if (cantCaracteres>=0 & cantCaracteres=<4) {
        fort="Baja"
        
    } else if (cantCaracteres>=5 & cantCaracteres=<8) {
        fort="Media"
    } else {
        fort="Alta"
    }
    document.getElementsById("fort").innerHTML = fort
}