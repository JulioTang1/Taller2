$(function(){
    agregarUsuario();
    editarUsuario();
    guardarEdicionUsuario();
    eliminar();
});

function agregarUsuario(){
    $("#add").on("click",function(ev){
        ev.preventDefault();
        var socio = $('input[id=socio]');
        var nombres = $('input[id=nombres]');
        var estatura = $('input[id=estatura]');
        var edad = $('input[id=edad]');
        var localidad = $('input[id=localidad]')

        $('#lista').append("<tr>" + 
            "<td>"+socio.val()+"</td>"+
            "<td>"+nombres.val()+"</td>"+
            "<td>"+estatura.val()+"</td>"+
            "<td>"+edad.val()+"</td>"+
            "<td>"+localidad.val()+"</td>"+ 
       
            "<td><a href='#' name='edit' class='editar btn btn-primary'>Editar</a>" +
            "<a href='#' class='eliminar btn btn-danger'>Eliminar</a></td>" +
            "</tr>");

        socio.val('');
        nombres.val('');
        estatura.val('');
        edad.val('');
        localidad.val('');
    });
}

function editarUsuario(){
    $('#lista').on('click','.editar',function(ev){
        ev.preventDefault();
        var tr = $(this).closest('tr');
        var tdSocio = tr.children('td:nth-child(1)');
        var tdNombres = tr.children('td:nth-child(2)');
        var tdEstatura = tr.children('td:nth-child(3)');
        var tdEdad = tr.children('td:nth-child(4)');
        var tdLocalidad = tr.children('td:nth-child(5)');
        var tdEditar = tr.children ('td:nth-child(6)');
       
        
        // tdSocio.html("<input type=text value='"+tdSocio.html()+"'/>");
        tdNombres.html("<input type=text value='"+tdNombres.html()+"'/>");
        tdEstatura.html("<input type=text value='"+tdEstatura.html()+"'/>");
        tdEdad.html("<input type=text value='"+tdEdad.html()+"'/>");
        tdLocalidad.html("<input type=text value='"+tdLocalidad.html()+"'/>");

        tdEditar.html("<a href='#' class='guardar btn btn-primary'>Guardar</a>");
    });
}

function guardarEdicionUsuario() {
    $('#lista').on('click', '.guardar', function(e) {
        e.preventDefault();
        var tr = $(this).closest('tr');
        
        var tdSocio = tr.children("td:nth-child(1)");
        var tdNombres = tr.children("td:nth-child(2)");
        var tdEstatura = tr.children("td:nth-child(3)");
        var tdEdad = tr.children("td:nth-child(4)");
        var tdLocalidad = tr.children("td:nth-child(5)");
        var tdOpciones = tr.children("td:nth-child(6)");

        // nuevoSocio = tdSocio.children("input[type=text]").val();
        // tdSocio.html(nuevoSocio);

        nuevoNombres = tdNombres.children("input[type=text]").val();
        tdNombres.html(nuevoNombres);

        nuevaEstatura = tdEstatura.children("input[type=text]").val();
        tdEstatura.html(nuevaEstatura);

        nuevaEdad = tdEdad.children("input[type=text]").val();
        tdEdad.html(nuevaEdad)

        nuevaLocalidad = tdLocalidad.children("input[type=text]").val();
        tdLocalidad.html(nuevaLocalidad)

        tdOpciones.html("<a href='#' class='editar btn btn-primary'>Editar</a>" +
            "<a href='#' class='eliminar btn btn-danger'>Eliminar</a>");
    });
}


function eliminar() {
    $('#lista').on('click', '.eliminar', function(e) {
        e.preventDefault();
        $(this).closest('tr').remove();
    });
}