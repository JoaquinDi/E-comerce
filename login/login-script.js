

function login(){
    var user = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    if(user == "one@gmail.com" && pass == "testOne"){
        return window.location = "../pagina_modificacion_de_productos/modificacion_de_catalogo.html";

    }
    else{
        alert("Usuario o cotraseña incorrecta");
    }

}
