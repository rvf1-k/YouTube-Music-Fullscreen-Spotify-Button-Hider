# YouTube Music Fullscreen Button Hider

## Descripción

Este UserScript oculta el botón `#spotify-convert-btn` en **YouTube Music** **cuando se entra en pantalla completa**, y lo vuelve a mostrar al salir de fullscreen.

> [!IMPORTANT]
> Este botón **no es parte de YouTube Music original**, sino que proviene de la extensión de Chrome/Edge:

[YouTube Music to Spotify](https://chrome.google.com/webstore/detail/youtube-music-to-spotify/dgghpfgfalnnfablpmagppikkddehnbo)

Esa extensión agrega un botón flotante verde que permite:

* Convertir la canción actual de YouTube Music a un enlace de Spotify.
* Copiar el enlace de Spotify directamente al portapapeles.
* Compartir canciones fácilmente entre YouTube Music y Spotify.

El UserScript **solo oculta este botón en fullscreen**, sin afectar el funcionamiento de la extensión.

---

## Cómo usar

1. Instala [Tampermonkey](https://www.tampermonkey.net/) o [Violentmonkey](https://violentmonkey.github.io/) en tu navegador.
2. Crea un nuevo UserScript y pega el contenido de [`YouTubeMusicFullscreenButtonHider.user.js`](https://github.com/rvf1-k/YouTube-Music-Fullscreen-Spotify-Button-Hider/blob/main/YouTubeMusicFullscreenSpotifyButtonHider.user.js).
3. Guarda el script y recarga [YouTube Music](https://music.youtube.com/).
4. Cuando entres en pantalla completa, el botón verde de Spotify se ocultará automáticamente.

---

## Características

* Detecta automáticamente el botón flotante incluso si se inyecta dinámicamente.
* Funciona con la versión actual de la extensión “YouTube Music to Spotify”.
* Vuelve a mostrar el botón al salir del modo pantalla completa.
* No interfiere con otras funciones de YouTube Music ni de la extensión.
