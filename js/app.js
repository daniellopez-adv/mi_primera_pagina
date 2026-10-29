const numeroFav = document.getElementById("numeroFavorito");
const mensajeSalida = document.getElementById("salida");

numeroFav.addEventListener("input", function(){
    let numero = Number(numeroFav.value);

    if (numero === 7) {
        mensajeSalida.textContent = "Correcto✅! Mi número favorito es el 7";
    }
    else if (numero >= 8) {
        mensajeSalida.textContent = "Casi😢! Mi número favorito es más bajo!";
    }
    else if (numero <= 6){
        mensajeSalida.textContent = "Casi😢! Mi número favorito es más alto!";
    }
})

const opcion = document.getElementById("opcion");
const imagenSeleccionada = document.querySelector("img");
const salida2 = document.getElementById("salida2")

opcion.addEventListener("change", function () {
    const Seleccionada = opcion.value;

    if (Seleccionada === "futbol") {
        imagenSeleccionada.src = "https://img.freepik.com/fotos-premium/fondo-futbol-hd-8k-papel-tapiz-imagen-fotografica-stock_890746-42965.jpg";
        salida2.textContent = "Me gusta jugar futbol, no soy muy fanatico de los equipos pero a nivel nacional, el atletico nacional me llama la atención; y ya a nivel mundial el Bayern de Múnich";
    } else if (Seleccionada === "videoJuegos") {
        imagenSeleccionada.src = "https://mundoestrategia.com/wp-content/uploads/0-ad-captura.jpg";
        salida2.textContent = "Esta imagen pertenece al juego age of mythology, el cual es mi juego favorito, lo suelo jugar con constancia pero ya lo he dejado de jugar bastante.";
    } else if (Seleccionada === "musica") {
        imagenSeleccionada.src = "https://tse3.mm.bing.net/th/id/OIP.wSFChyvEORAM3QmC_PBy7AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
        salida2.textContent = "Uno de mis cantantes favoritos es participe en esta canción, se llama young fatty";
    } else {
        imagenSeleccionada.src = "https://tse2.mm.bing.net/th/id/OIP.s1uPBf_RBRHCyTHubJugeQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
    }
});
const boton = document.getElementById("boton");
boton.addEventListener("click", function(){
    alert("Eclesiastés 3:1; “Todo tiene su tiempo, y todo lo que se quiere debajo del cielo tiene su hora.” profe Aunque las cosas se pongan difíciles, hay que tener resiliencia y no dejarse llevar por los problemas. Posdata - profe quiteme las llegadas tarde 😢")
})