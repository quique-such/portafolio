function pedido() {
    var contenedor = {
        nombre: document.getElementById("nombre").value,
        direccion: document.getElementById("dir").value,
        email: document.getElementById("email").value,
        ciudad: document.getElementById("ciudad").value,
        provincia: document.getElementById("provincia").value,
        postal: document.getElementById("postal").value,
        titular: document.getElementById("titular").value,
        fecha: document.getElementById("fecha").value,
        edad: document.getElementById("edad").value,
        num: document.getElementById("tarj").value,
        mes: document.getElementById("mes").value,
        anyo: document.getElementById("anyo").value,
        cvv: document.getElementById("cvv").value
    };

    pedidoListo(contenedor);
}

function pedidoListo(x) {
    for (var i in x) {
        if (x[i] === "") {
            window.alert("Faltan campos por rellenar.");
            return;
        }
    }

    if (x.edad < 18) {
        window.alert("El usuario es menor de edad.");
        return false;
    }
}

