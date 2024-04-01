document.addEventListener('DOMContentLoaded', function () {
    let consecutivo = 0;
    let puntos = 0;
    let acertados = 0;
    let desacertados = 0;
    let juegoIniciado = false;
    let multiplicadorPuntos = 1;
    const contenedorPuntos = document.getElementById('contenedorPuntos');
    const contenedorAcertados = document.getElementById('acertados');
    const contenedorDesacertados = document.getElementById('desacertados');
    const contenedorPuntosTotal = document.getElementById('puntos');
    const botonComenzar = document.getElementById('botonComenzar');

    const registroExitoso = document.createElement('p');
    registroExitoso.textContent = 'Registro exitoso: puedes escribir el nombre de un Pokemon';

    const mensajeRegistroExitoso = document.getElementById('modalRegistroExitoso');

    const botonRegistrar = document.getElementById('botonRegistrar');
    botonRegistrar.addEventListener('click', function () {
        const nombre = document.getElementById('nombre').value.trim();
        const edad = document.getElementById('edad').value.trim();

        if (nombre !== '' && edad !== '') {
            // Mostrar modal de registro exitoso
            mensajeRegistroExitoso.style.display = 'block';
        } else {
            alert('Debes completar todos los campos para registrarte');
        }
    });

    const closeBtn = document.querySelector('.close');

    // Evento click en el botón de cierre del modal
    closeBtn.addEventListener('click', function () {
        mensajeRegistroExitoso.style.display = 'none';
    });

    function cambiarColor() {
        if (acertados > desacertados) {
            contenedorPuntos.style.backgroundColor = '#27ae60'; // Cambiar a verde si hay más aciertos
        } else {
            contenedorPuntos.style.backgroundColor = '#e74c3c'; // Cambiar a rojo si hay más desaciertos
        }
    }

    function detenerJuego(mensaje) {
        juegoIniciado = false;
        alert(mensaje);
        location.reload(); // Recargar la página automáticamente
    }

    function verificarResultado() {
        if (acertados >= 20) {
            detenerJuego('¡Ganaste!');
        } else if (desacertados >= 15) {
            detenerJuego('Perdiste');
        }
    }

    function getRandomSpeed() {
        return Math.random() * (4 - 2) + 2; // Velocidad aleatoria entre 2 y 4
    }

    function moverBoton(id, retraso) {
        setTimeout(function () {
            var boton = document.getElementById(id);
            var velocidad = getRandomSpeed();
            var intervalId = setInterval(function () {
                if (juegoIniciado) {
                    var posY = boton.offsetTop + velocidad;
                    if (posY > document.getElementById('contenedor').offsetHeight) {
                        posY = 0;
                        velocidad = getRandomSpeed();
                        multiplicadorPuntos = 1;
                        desacertados++;
                        contenedorDesacertados.textContent = desacertados;
                        cambiarColor();
                        verificarResultado(); // Verificar el resultado después de cada movimiento
                    }
                    boton.style.top = posY + 'px';
                } else {
                    clearInterval(intervalId);
                }
            }, 50);
        }, retraso);
    }
    
    function getRandomOrden() {
        return Math.random() - 0.5;
    }

    function comenzarJuego() {
        if (!juegoIniciado) {
            juegoIniciado = true;
            const botones = ['boton1', 'boton2', 'boton3', 'boton4', 'boton5'];
            botones.sort(getRandomOrden);
            botones.forEach((boton, index) => {
                moverBoton(boton, index * 1000);
            });
        }
    }
    function pausarJuego() {
        if (juegoIniciado) {
            juegoIniciado = false;
            const botones = ['boton1', 'boton2', 'boton3', 'boton4', 'boton5'];
            botones.forEach(boton => {
            botonesEnMovimiento[boton] = detenerMovimiento(boton);;
                    });
                }
            }
    function reanudarJuego() {
                if (!juegoIniciado) {
                    juegoIniciado = true;
                    const botones = ['boton1', 'boton2', 'boton3', 'boton4', 'boton5'];
                    botones.forEach((boton, index) => {
                        moverBoton(boton, index * 1000);
                    });
                }
            }

    botonComenzar.addEventListener('click', comenzarJuego);

    document.addEventListener('keydown', function (event) {
        if (juegoIniciado) {
            let puntoAcumulado = 10 * multiplicadorPuntos;
            if (event.key === 'a') {
                var posY = document.getElementById('boton1').offsetTop + 40;
                if (posY >= document.getElementById('contenedor').offsetHeight) {
                    puntos += puntoAcumulado;
                    acertados++;
                    contenedorPuntosTotal.textContent = puntos;
                    contenedorAcertados.textContent = acertados;
                    if (consecutivo >= 2) multiplicadorPuntos = 2;
                    else multiplicadorPuntos = 1;
                    consecutivo++;
                    cambiarColor();
                    document.getElementById('boton1').style.top = '0';
                    verificarResultado(); // Verificar el resultado después de cada acierto
                }
            }
            if (event.key === 's') {
                var posY = document.getElementById('boton2').offsetTop + 40;
                if (posY >= document.getElementById('contenedor').offsetHeight) {
                    puntos += puntoAcumulado;
                    acertados++;
                    contenedorPuntosTotal.textContent = puntos;
                    contenedorAcertados.textContent = acertados;
                    if (consecutivo >= 2) multiplicadorPuntos = 2;
                    else multiplicadorPuntos = 1;
                    consecutivo++;
                    cambiarColor();
                    document.getElementById('boton2').style.top = '0';
                    verificarResultado(); // Verificar el resultado después de cada acierto
                }
            }
            if (event.key === 'd') {
                var posY = document.getElementById('boton3').offsetTop + 40;
                if (posY >= document.getElementById('contenedor').offsetHeight) {
                    puntos += puntoAcumulado;
                    acertados++;
                    contenedorPuntosTotal.textContent = puntos;
                    contenedorAcertados.textContent = acertados;
                    if (consecutivo >= 2) multiplicadorPuntos = 2;
                    else multiplicadorPuntos = 1;
                    consecutivo++;
                    cambiarColor();
                    document.getElementById('boton3').style.top = '0';
                    verificarResultado(); // Verificar el resultado después de cada acierto
                }
            }
            if (event.key === 'k') {
                var posY = document.getElementById('boton4').offsetTop + 40;
                if (posY >= document.getElementById('contenedor').offsetHeight) {
                    puntos += puntoAcumulado;
                    acertados++;
                    contenedorPuntosTotal.textContent = puntos;
                    contenedorAcertados.textContent = acertados;
                    if (consecutivo >= 2) multiplicadorPuntos = 2;
                    else multiplicadorPuntos = 1;
                    consecutivo++;
                    cambiarColor();
                    document.getElementById('boton4').style.top = '0';
                    verificarResultado(); // Verificar el resultado después de cada acierto
                }
            }
            if (event.key === 'l') {
                var posY = document.getElementById('boton5').offsetTop + 40;
                if (posY >= document.getElementById('contenedor').offsetHeight) {
                    puntos += puntoAcumulado;
                    acertados++;
                    contenedorPuntosTotal.textContent = puntos;
                    contenedorAcertados.textContent = acertados;
                    if (consecutivo >= 2) multiplicadorPuntos = 2;
                    else multiplicadorPuntos = 1;
                    consecutivo++;
                    cambiarColor();
                    document.getElementById('boton5').style.top = '0';
                    verificarResultado(); // Verificar el resultado después de cada acierto
                }
            }
            if (event.key !== 'a' && event.key !== 's' && event.key !== 'd' && event.key !== 'k' && event.key !== 'l') {
                multiplicadorPuntos = 1;
            }
        }
    });

    // Agregar evento de clic a la imagen de la pokeball
    document.querySelector('.pokeball').addEventListener('click', buscarPokemon);

    function buscarPokemon() {
        const inputPokemon = document.getElementById('pokemonName');
        const nombrePokemon = inputPokemon.value.toLowerCase();

        // Construir la URL de la API con el nombre del Pokémon
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}/`;

        // Realizar la solicitud a la API de Pokémon
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo encontrar el Pokémon');
                }
                return response.json();
            })
            .then(data => {
                const resultadoDiv = document.getElementById('resultado');
                resultadoDiv.innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}" class="pokemon-image">`;
                resultadoDiv.innerHTML += '<div id="loadingMessage" style="color: #e8435e;">Cargando información del Pokémon...</div>';

                // Realizar la solicitud a la API Llama2 para obtener la descripción del Pokémon en español
                fetch('http://localhost:11434/api/generate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: "llama2",
                        prompt: "Responde estrictamente en idioma español en maximo 30 palabras: ¿Quién es el Pokémon " + nombrePokemon + "? Y sus principales caracteristicas.",
                        stream: false
                    })
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Error en la solicitud HTTP: ' + response.status);
                        }
                        return response.json();
                    })
                    .then(data => {
                        // Ocultar mensaje de carga
                        const loadingMessage = document.getElementById('loadingMessage');
                        loadingMessage.style.display = 'none';

                        // Mostrar la descripción del Pokémon debajo de la imagen
                        resultadoDiv.innerHTML += `<p>${data.response}</p>`;
                    })
                    .catch(error => console.error('Error en la solicitud:', error));

                // Cargar el JSON de las URLs de videos
                fetch('resources/pokemons.json')
                    .then(response => response.json())
                    .then(pokemons => {
                        // Buscar el Pokémon en el JSON
                        const pokemonInfo = pokemons.pokemons.find(p => p.nombre.toLowerCase() === nombrePokemon);

                        if (pokemonInfo) {
                            // Mostrar el video del Pokémon directamente en el iframe
                            const videoContainer = document.getElementById('videoContainer');
                            videoContainer.innerHTML = pokemonInfo.embedCode;

                            // Reproducir el video automáticamente
                            const video = videoContainer.querySelector('iframe');
                            if (video) {
                                video.src += '&autoplay=1';
                            }
                        } else {
                            // Mostrar un mensaje si no se encuentra el Pokémon en el JSON
                            const videoContainer = document.getElementById('videoContainer');
                            videoContainer.innerHTML = `<p>No se encontró información adicional para ${nombrePokemon}</p>`;
                        }
                    })
                    .catch(error => {
                        // Mostrar un mensaje si hay un error al cargar el JSON
                        const videoContainer = document.getElementById('videoContainer');
                        videoContainer.innerHTML = `<p>Error al cargar la información adicional: ${error.message}</p>`;
                    });
            })
            .catch(error => {
                // Mostrar un mensaje si no se encuentra el Pokémon en la API de Pokémon
                const resultadoDiv = document.getElementById('resultado');
                resultadoDiv.innerHTML = `<p>${error.message}</p>`;
            });
            
    }
    
var artyom = new Artyom();


    document.querySelector("#activar").addEventListener('click', function(){
    artyom.say("sonido activado");
});

    artyom.addCommands({
    indexes: ["yo te elijo","detener", "continuar"],
            action: function(i){
            if(i == 0){
            artyom.say("inicia el juego");
            comenzarJuego();
        }else if(i == 1){
            artyom.say("juego en pausa");
            pausarJuego();
        }
        else if(i == 2) {
            artyom.say("reanudando el juego");
            reanudarJuego();

        }
    }
});

artyom.initialize({
    lang:"es-ES",
    debug:true,
    listen:true,
    continuous: true,
    speed:0.9,
    mode:"normal"
    });

artyom.redirectRecognizedTextOutput(function(recognized,isFinal){
    if(isFinal){
        console.log("Texto final reconocido: " + recognized);
    }else{
        console.log(recognized);
    }
});

    
});



