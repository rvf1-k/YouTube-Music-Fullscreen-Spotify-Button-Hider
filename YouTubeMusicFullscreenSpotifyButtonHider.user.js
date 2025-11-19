// ==UserScript==
// @name         YouTube Music Fullscreen Spotify Button Hider
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Oculta #spotify-convert-btn solo en fullscreen. Este botón es añadido por la extensión "YouTube Music to Spotify".
// @author       rvf1-k
// @match        https://music.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function hideButton(btn) {
        function checkFullscreen() {
            const isFull = document.fullscreenElement || document.webkitFullscreenElement;
            if (btn) btn.style.display = isFull ? 'none' : 'block';
        }

        document.addEventListener('fullscreenchange', checkFullscreen);
        document.addEventListener('webkitfullscreenchange', checkFullscreen);

        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) {
                        if (node.id === 'spotify-convert-btn' || node.querySelector('#spotify-convert-btn')) {
                            btn = node.id === 'spotify-convert-btn' ? node : node.querySelector('#spotify-convert-btn');
                            checkFullscreen();
                        }
                    }
                });
            });
        });
        observer.observe(document.body, {childList: true, subtree: true});

        checkFullscreen();
    }

    const appObserver = new MutationObserver(() => {
        const app = document.querySelector('ytmusic-app');
        if (app) {
            appObserver.disconnect();
            const btn = document.querySelector('#spotify-convert-btn');
            hideButton(btn);
        }
    });

    appObserver.observe(document.body, {childList: true, subtree: true});
})();
