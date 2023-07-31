class GestionarProductos {

    iniciar() {

        productos = [

            {
                "id": 1,
                "nombre": "Ivermectina",
                "descripcion": "Ivermectina inyectable",
                "precio": 1500,
                "stock": 100,
                "img": "./imagens/iverfort.png",
                "destacado": 1
            },
            {
                "id": 2,
                "nombre": "Guantes de Latex",
                "descripcion": "Guantes de latex",
                "precio": 3000,
                "stock": 50,
                "img": "guanteslatex.png",
                "destacado": 1
            },

            {
                "id": 3,
                "nombre": "Entero relax duo",
                "descripcion": "Gotas para diarrea canina",
                "precio": 3500,
                "stock": 100,
                "img": "enterorelax.png",
                "destacado": 1
            },
            
        ]


        let productosDestacados = productos.filter(prod => prod.destacado == 1);

        this.cargarProductos(productosDestacados);
    }

    cargarProductos(productos) {

        //const divProductos = document.getElementById("productos");
        const divProductos = document.querySelector("#productos");
        divProductos.innerHTML = "";

        if (productos.length == 0) {

            this.mostrarHeader("No se han encontrado productos");
            return false;
        } else {

            productos.forEach((producto) => {
                /*let id = producto.id;
                let nombre = producto.nombre;
                let img = producto.img;
                let descripcion = producto.descripcion;
                let precio = producto.precio;*/

                const { id, nombre, precio, img, cantidad, descripcion } = producto

                let prod = document.createElement("div");

                prod.classList.add('col-12', 'h200', 'border', 'bg-white', 'rounded', 'mt-3', 'd-flex', 'align-items-center', 'p-3', 'flex-row', 'producto');
                prod.id = "row_" + id;
                prod.innerHTML = `<div class="w-20">
                                        <img src="./imagens${img}" alt="" width="150" height="150" >
                                </div>

                                <div class="p-3 d-flex flex-column w-60 h-150">
                                <h4>${nombre}</h4>                                            
                                <p>${descripcion.substring(0, 120)}</p>
                                </div>

                                <div class="d-flex align-items-center justify-content-center flex-column w-20 h-150">
                                <p class="precio">$${precio}</p>
                                <a href="javascript:addCarrito(${id})" class="btn btn-primary">Agregar al carrito</a>
                                </div>
                                `;


                divProductos.appendChild(prod);
            });
        }
    }


    mostrarHeader(msg) {

        const headerProductos = document.querySelector("#headerProductos");
        headerProductos.innerHTML = msg;
    }


    buscar(valor) {

        let resultado = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(valor.toLowerCase()) ||
            producto.descripcion.toLowerCase().includes(valor.toLowerCase()));
        this.cargarProductos(resultado);


    }

    addCart(item) {
        const existe = carrito.some(producto => producto.id === item.id);
        if (existe) {


            //mapeo el producto con el id pasado por parametro con su cantidad actualizada
            const articulo = carrito.map(producto => {
                if (producto.id === item.id) {
                    producto.cantidad++;
                    return producto;
                } else {
                    return producto;
                }
            })

            Toastify({
                text: "Se actualizo la cantidad del producto",
                duration: 2000,
                gravity: "bottom"

            }).showToast();


        } else {
            carrito.push(item);
            Toastify({
                text: "Producto agregado con exito",
                duration: 2000,
                gravity: "bottom"

            }).showToast();
        }
        this.actualizarCarrito();
    }


    /**
     * Actualiza contado de carrito, muestra el estado correcto del carrito y guarda en local storage
     */
    actualizarCarrito() {

        this.actualizarContador();
        this.mostrarCarrito();
        this.guardarCarrito();
    }

    guardarCarrito() {

        //desarrollar

    }


    mostrarCarrito() {
        let detalleCarrito = document.querySelector("#idCarrito");
        detalleCarrito.innerHTML = "";
        let total = 0;

        carrito.forEach((producto) => {


            const { id, nombre, precio, img, cantidad } = producto;

            const row = document.createElement("div");
            row.classList.add("row");
            total += parseInt(precio) * cantidad;

            row.innerHTML = `
                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            <img src="${img}" width="80"/>
                        </div>

                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            ${nombre}
                        </div>

                        <div class="col-3 d-flex align-items-center justify-content-end p-2 border-bottom">
                            $ ${precio}
                        </div>  
                        
                        <div class="col-1 d-flex align-items-center justify-content-end p-2 border-bottom">
                            ${cantidad}
                        </div>

                        <div class="col-2 d-flex align-items-center justify-content-center p-2 border-bottom">
                        <a href="javascript:eliminar(${id})">
                            <i class="fa-solid fa-square-minus fa-2x"></i>
                        </a>
                    </div>            
                        `;



            detalleCarrito.append(row);

        })

        let row = document.createElement("div");
        row.classList.add("row");

        row.innerHTML = `
                    <div class="col-4 d-flex align-items-center justify-content-start p-2 border-bottom">
                        Total a pagar:
                    </div>
                    <div class="col-8 d-flex align-items-center justify-content-end p-2 border-bottom">
                        <b> $ ${total}</b>
                    </div>
                    
                    `;


        detalleCarrito.appendChild(row);
    }
    actualizarContador() {

        let totalCarrito = this.contarProductos();
        let countCarrito = document.querySelector("#badgeCarrito");
        countCarrito.innerHTML = totalCarrito;

    }

    contarProductos() {

        let contarProductos = 0;

        carrito.forEach((producto) => {

            contarProductos = contarProductos + parseInt(producto.cantidad);
        })

        return contarProductos;
    }


    eliminarProducto(id) {


        //si confima proceso a eliminar
        Swal.fire({

            title: "Esta seguro de eliminar el producto ?",
            showCancelButton: true,
            cancelButtonColor: '#d33',
            confirmButtonText: "Si, eliminarlo",
            cancelButtonText: "Cancelar",

        }).then((result) => {


            if (result.isConfirmed) {

                carrito = carrito.filter(articulo => articulo.id != id);
                this.actualizarCarrito();

                //notifico de la eliminacion
                Toastify({

                    text: "Producto eliminado con exito",
                    duration: 2000,
                    gravity: "bottom"

                }).showToast();
            }
        })
    }
}

    