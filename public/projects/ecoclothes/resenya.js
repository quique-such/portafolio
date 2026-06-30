let resenyas = [];

function mostrarResenyas() {
  const contenedorResenyas = document.getElementById("mostrarResenyas");
  contenedorResenyas.innerHTML = "";

  resenyas.forEach((r) => {
    const divResenya = document.createElement("div");
    divResenya.innerHTML = '<p>' + r.resenya + ' - ' + r.nombre + '.' + '</p>';
    contenedorResenyas.appendChild(divResenya);
  });
}

function enviarResenya() {
  const nombre = document.getElementById("nombre").value;
  const resenya = document.getElementById("resenya").value;

  if (nombre && resenya) {
    const nuevaResenya = { nombre, resenya };
    resenyas.push(nuevaResenya);
    mostrarResenyas();
    limpiarFormulario();
  }
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("resenya").value = "";
}