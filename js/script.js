// alert("Hola")

function sumar(){
    a=document.getElementById("a").value
    b=document.getElementById("b").value

    resultado=parseInt(a)+parseInt(b)

    alert(resultado)

    document.getElementById("result").innerHTML=resultado
}
