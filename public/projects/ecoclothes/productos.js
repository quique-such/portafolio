$(document).ready(
    function mostrarDetalles(){
        $("#descripcion").click(deslizar)
            
        function deslizar(){
        $("#datosDescripcion").slideToggle(500);
        };
    }
);

$(document).ready(
    function mostrarDetalles(){
        $("#tallas").click(deslizar)
            
        function deslizar(){
        $("#datosTallas").slideToggle(500);
        };
    }
);

$(document).ready(
    function mostrarDetalles(){
        $("#envio").click(deslizar)
            
        function deslizar(){
        $("#datosEnvio").slideToggle(500);
        };
    }
);
