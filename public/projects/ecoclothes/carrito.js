var carrito = [];
var totalPrecio = 0;
var totalCantidad = 0;

var carritoIcono = document.getElementById("iconoCarrito");
var carritoLista = document.getElementById("carritoLista");
var carritoTotal = document.getElementById("carritoTotal");
var carritoVentana = document.getElementById("carritoVentana");
var cerrarVentana = document.getElementById("cerrarCarrito");


function actualizarCarrito() {
  carritoLista.innerHTML = "";
  totalPrecio = 0;
  totalCantidad = 0;

  for (var i = 0; i < carrito.length; i++) {
    var producto = carrito[i];
    var li = document.createElement("li");
    var imagen = document.createElement("img");
    imagen.src = producto.imagen
    imagen.width = "149"
    imagen.height = "181"
    imagen.style.marginRight = "20px";
    imagen.style.marginBottom = "40px";

    li.appendChild(imagen);

    li.innerHTML += producto.nombre + "<br>" + producto.precio + "€<br><br>" + producto.talla.toUpperCase() + "<br><br><br>" + "<br><br>" + "<p style='cursor: pointer; margin-top:150px;' onclick='eliminarCarrito(" + i + ")'>Eliminar</p>"
    li.style.display = "flex"
    li.style.flexDirection = "row"
    li.style.textAlign = "left"

    cantidadRopa = "<span><p style='cursor: pointer;' onclick=restarProducto(" + i + ")>-</p>" + producto.cantidad +"<p style='cursor: pointer;' onclick=sumarProducto(" + i + ")>+</p></span>"
    li.innerHTML += cantidadRopa;
    

    carritoLista.appendChild(li);

    totalPrecio += producto.cantidad * producto.precio;
    totalCantidad += producto.cantidad
  }


  carritoTotal.innerHTML = "<p style='font-size: 18px;'>Total: <b>" + totalPrecio + " €</b></p>";

  document.getElementById('contadorCarrito').innerHTML = totalCantidad;

}


function restarProducto(index) {
  if (carrito[index].cantidad > 1) {
    carrito[index].cantidad--;
  } else {
    eliminarCarrito(index);
  }
  actualizarCarrito();
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function sumarProducto(index) {
  carrito[index].cantidad++;
  actualizarCarrito();
  localStorage.setItem('carrito', JSON.stringify(carrito));
}


window.onload = cargarCarrito

function cargarCarrito(){
  var carritoGuardado = localStorage.getItem('carrito');

  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    actualizarCarrito();
    cerrarCarrito();
  }
}


function carritoVisible() {
  if (carritoVentana.style.display === 'block') {
    cerrarCarrito();
  } else {
    mostrarCarrito();
  }
}


cerrarCarrito()

function mostrarCarrito() {
  var ventana = $('#carritoVentana');
  ventana.css('right', '-400px').show().animate({right: '0px'}, 500);
}

function cerrarCarrito(){
  var ventana = $('#carritoVentana');
  ventana.animate({right: '-400px'}, 500, ocultarVentana);

  function ocultarVentana(){
    ventana.hide();
  }
}

function vaciarCarrito(){
  for (var i = 0; i < carrito.length; i++){
    carrito = [];
    actualizarCarrito();
  }
  localStorage.setItem('carrito', JSON.stringify(carrito));
}



function anadirCarrito(x){
  var producto = {nombre: x.getElementsByTagName("h2")[0].innerHTML}
  producto.precio = Number(x.getElementsByTagName("span")[0].innerHTML)

  producto.talla = x.getElementsByTagName("select")[0].value
  producto.imagen = x.parentNode.getElementsByTagName("img")[0].src
  producto.cantidad = Number(x.getElementsByTagName("input")[0].value)
  

  carrito.push(producto);

  actualizarCarrito();
  mostrarCarrito();

  localStorage.setItem('carrito', JSON.stringify(carrito));
}


function eliminarCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function pagar(){
  if (carrito.length==0){
    window.alert("No hay productos en tu carrito.")
  } else {
      var enlace = document.createElement('a');
      enlace.href = "pagar.html"
      enlace.click();
  }
}

function pagar2(){
  if (carrito.length==0){
    window.alert("No hay productos en tu carrito.")
  } else {
      var enlace = document.createElement('a');
      enlace.href = "../pagar.html"
      enlace.click();
  }
}
