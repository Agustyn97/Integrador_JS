
window.onload = function() {

    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    header.innerHTML = `  
    <div class="header-logo">
        <img class="logonav" src="../Images/Logos/logo_nav.png" alt="logo_nav" href="./Home.html" onclick=""/>
        <div class="search">
            <input class="barrasearch" type="text" name="search" id="search" placeholder="Buscar productos..."/>
            <button class="botonsearch"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div class="loguitos">
            <a href="./Login.html"><i class="fa-solid fa-user "></i></a>
            <i class="fa-solid fa-cart-shopping "></i>
        </div>
    </div>
    <div style="height: 4rem;"></div>
    <nav>
        <ul class="menunav">
            <li class="itemnav"><a href="./Home.html">Inicio</a></li>
            <li class="itemnav border-left"><a class="btn-productos">Productos</a></li>
            <li class="itemnav border-left"><a href="./Contact.html">Contactanos</a></li>
         </ul>
    </nav>`

    footer.innerHTML = `
    <div class="containerf">
        <div class="ubicaciones">
            <h4 class="h4footer"> <i class="fa-solid fa-location-dot"></i>Av. San Martin 1281 Ciudad - Mendoza</h4>
            <h4 class="h4footer"> <i class="fa-solid fa-location-dot"></i>Cafayate 3336 Godoy Cruz - Mendoza</h4>
        </div>
        <div class="redes">
            <i class="fa-brands fa-instagram-square"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-square"></i>
        </div>
    </div>
    <div class="div-pfooter">
        <p class="pfooter"> Derechos Reservados ©️ Agustín Zarandón</p>
    </div>`



    const auriculares = JSON.parse( localStorage.getItem("auriculares") ); 
    const cargadores = JSON.parse( localStorage.getItem("cargadores") ); 
    const conectores = JSON.parse( localStorage.getItem("conectores") ); 

    const todosLosProductos = auriculares.concat(cargadores,conectores);

    console.log(todosLosProductos);
    /* NODOS */
    const btnProductos = document.querySelector(".btn-productos");

    const logoHeader = document.querySelector(".logonav");
    const inputSearch = document.querySelector(".barrasearch");
    const botonSearch = document.querySelector(".botonsearch");

    const cardAuriculares = document.querySelector(".cardAuriculares");
    const cardCargadores = document.querySelector(".cardCargadores");
    const cardConectores = document.querySelector(".cardConectores");


    const containerCardsProduct = document.querySelector(".cardsLayout--cards")

    /* FUNCIONES */


    /* redireccion product */    
    logoHeader.addEventListener("click", () => {
        window.location.assign("../Views/Home.html")
    })

    btnProductos.addEventListener("click", () => {
        mapearProductos(todosLosProductos);
    })

    /* auriculares */
    
    cardAuriculares.addEventListener("click", () => {
        mapearProductos(auriculares);
    })

    /* cargadores */

    cardCargadores.addEventListener("click", () => {
        mapearProductos(cargadores);
    })

    /* conectores */

    cardConectores.addEventListener("click", () => {
        mapearProductos(conectores);
    })

    /* header */

    botonSearch.addEventListener("click", () => {
        const pructoFiltrado = buscarProducto(inputSearch.value);
        mapearProductos(pructoFiltrado);
    })

    function buscarProducto(valor) {
        const productoBuscado =  todosLosProductos.filter(producto => {
            const regex = new RegExp(valor, 'gi');
            return producto.nombre.match(regex)
        })
        return productoBuscado;
    }

    function mapearProductos(pructoFiltrado) {
        containerCardsProduct.innerHTML = ""

        pructoFiltrado.map((producto)=>{
            containerCardsProduct.innerHTML += ` 
            <div class="cardProduct">
                <div >
                    <img class="cards--img" src="${producto.img}" alt="">
                </div>
                <div class="cardsContainer--cards-info">
                    <div class="cardinfo-description">
                        <p class="titulo">${producto.nombre}</p>
                        <p class="descripcion">${producto.descripcion}</p>
                    </div>
                    <div class="cardinfo-precio">
                        <p class="colores"> Disponible en color: ${producto.color} </p>
                        <p class="precio">$ ${producto.precio}</p>
                    </div>
                </div>
            </div>`;
        })
    }
}
