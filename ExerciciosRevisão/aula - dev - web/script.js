function somar() {
    var campoValor1 = document.getElementById("valor1");
    var campoValor2 = document.getElementById("valor2");
    if (campoValor1.value != "" && campoValor2.value != "") {
        var valor1 = parseFloat(campoValor1.value);
        var valor2 = parseFloat(campoValor2.value);
        var resultado = valor1 + valor2;
        campoValor1.value="";
        campoValor2.value="";
        document.getElementById("resultado").innerHTML="resultado"+resultado;
        //alert(resultado)
    } else {
        alert("prencher todos os campos");
    }
}

function limpar(){
    document.getElementById("valor1").value="";
    document.getElementById("valor2").value="";
    document.getElementById("resultado").innerHTML = "";
}
function esconderMostrar(){
    var divCalculadora=document.getElementById("divCalculadora").style.display;
    if(divCalculadora=="none"){
        document.getElementById("divCalculadora").style.display="block";
    }
    else{
        document.getElementById("divCalculadora").style.display = "none";
    }
}
    