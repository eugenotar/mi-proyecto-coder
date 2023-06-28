alert("esta bien likeado el archivo");

/*PAGINA DE CONTACTO 
HACEMOS UNA FUNCION PARA FORMULARUIO CONTACTO*/

function enviarConsulta() {
    var nombre = prompt("Ingrese su nombre:");
    var email = prompt("Ingrese su email:");
    var mensaje = prompt("Ingrese el mensaje:");

    if (nombre === null || nombre.trim() === '' || email === null || email.trim() === '' || mensaje === null || mensaje.trim() === '') {
        alert('Debes completar todos los campos');
    } else {
        alert('Tu consulta se ha enviado satisfactoriamente. En breve nos pondremos en contacto.');
    }
}


/*VALIDAR SI PUEDO REALIZAR UNA COMPRA MAYORISTA EN PAGINA DE PRODUCTOS*/

//validar si puede realizar una compra mayorista
let tieneMatricula = parseInt(prompt("Ingrese matricula vetertinaria"));

//validamos si ingreso un numero
if (isNaN(tieneMatricula)) {

    alert("No ingresaste un numero");

} else {


    let puedeComprar = confirm("Tienes veterinaria?");

    if (puedeComprar = true && tieneMatricula) {

        alert("Puedes realizar la compra");

    } else {

        alert("Para realizar una compra, debes tener matricula autorizada por el colegio de Veterinarios");

    }
}


/* CARRITO DE COMPRAS EN EL SECTOR DE PRODUCTOS*/
<section class="compras"></section>

let cant_articulos = parseInt(prompt("Ingrese cantidad de productos a comprar"));

if (isNaN(cant_articulos)) {

    alert("No ingresarte ningun producto");

    //chequeo si el numero es mayor a 0
} else if (cant_articulos <= 0) {


    alert("Tiene que ingresar mas de un articulo");

} else {

    let total_compra = 0;
    let lista_articulos = "";


    for (let i = 0; i < cant_articulos; i++) {

        //se solicita al usuario el codigo del articulo
        let articulo = parseInt(prompt("Ingrese el codigo del articulo"));

        // chequeo el cosido y sumalizo
        if (articulo == 1) {

            lista_articulos += "Ivermectina - $4000" + "<br>";
            total_compra += 4000;


        } else if (articulo == 2) {

            lista_articulos += "Pipeta frontline perros - $1000" + "<br>";
            total_compra += 1000;


        } else if (articulo == 3) {
            lista_articulos += "Pipeta frontline gatos - $1000" + "<br>";
            total_compra += 1000;

        } else if (articulo == 4) {
            lista_articulos += "Jeringa descartable - $500" + "<br>";
            total_compra += 500;


        } else {
            //ingreso un codigo erroneo
            alert("articulo no encontrado");
        }


    }

    //visualizo articulos comprados
    document.write("Lista de articulos comprados : <br>" + lista_articulos + "<br>");
    document.write("El total de la compra es: $" + total_compra);
}



