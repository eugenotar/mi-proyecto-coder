/*PRIMER PASO PARA COMPRAR ES SER VETERINARIO*/

/*
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

// SI SE VALIDO, RECIEN PUEDO ACCEDER A LA OPCION DE COMPRA
class CarritoCompras {
    constructor(id, descripcion, precio) {
        this.id = id;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    mostrar_descripcion_completa() {
        return "#" + this.id + " - " + this.descripcion + " $ " + this.precio;
    }
}
*/
/*
let arreglo_productos = [];
arreglo_productos.push(new CarritoCompras(1, "Ivermectina", 4000));
arreglo_productos.push(new CarritoCompras(2, "Pipeta Frontline Perros", 1000));
arreglo_productos.push(new CarritoCompras(3, "Pipeta Frontline Gatos", 1000));
arreglo_productos.push(new CarritoCompras(4, "Jeringa Descartable", 500));

let respuesta;

while (respuesta !== "4") {
    respuesta = mostrarMenu();
}

// Mostrar el menú al usuario y realizar las acciones correspondientes
function mostrarMenu() {
    let respuesta = prompt("Qué acción desea realizar?\n1) Ver los productos\n2) Comprar productos\n3) Buscar productos\n4)Mostrar carrito \n5) Salir");

    if (respuesta === "1") {
        alert("Productos disponibles:\n" + mostrarStock());
    } else if (respuesta === "2") {
        realizarCompra();
    } else if (respuesta === "3") {
        buscarProducto();
    } else if (respuesta == "4"){
        mostrarCarrito()
    
    } else if (respuesta === "4") {
        alert("Hasta Pronto!");
    } else {
        alert("Opción inválida");
    }

    return respuesta;
}

// Buscar un producto por su ID
function buscarProducto() {
    let id = parseInt(prompt("Ingrese el ID del producto a buscar:"));
    let productoEncontrado = arreglo_productos.find(producto => producto.id === id);

    if (productoEncontrado) {
        alert("Producto encontrado:\n" + productoEncontrado.mostrar_descripcion_completa());
    } else {
        alert("Producto no encontrado");
    }
}

// Mostrar el stock de productos disponibles
function mostrarStock() {
    let stock = "";
    arreglo_productos.forEach(producto => {
        stock += producto.mostrar_descripcion_completa() + "\n";
    });
    return stock;
}

// Realizar una compra de productos
function realizarCompra() {
    let cantArticulos = parseInt(prompt("Ingrese cantidad de productos a comprar"));

    if (isNaN(cantArticulos)) {
        alert("No ingresaste ningún producto");
    } else if (cantArticulos <= 0) {
        alert("Tienes que ingresar más de un artículo");
    } else {
        const articulosComprados = [];

        for (let i = 0; i < cantArticulos; i++) {
            let codigoArticulo = parseInt(prompt("Ingrese el código del artículo"));

            const producto = arreglo_productos.find(producto => producto.id === codigoArticulo);

            if (producto) {
                articulosComprados.push(producto);
            } else {
                alert("Artículo no encontrado");
            }
        }

        mostrarCarrito(articulosComprados);
    }
}

// Mostrar el carrito de compras
function mostrarCarrito(articulos) {
    let totalCompra = 0;

    alert("Artículos comprados:");
    articulos.forEach(articulo => {
        console.log(articulo.mostrar_descripcion_completa());
        totalCompra += articulo.precio;
    });

    alert("Total de la compra: $" + totalCompra);
}
*/