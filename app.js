// Radiosender-Stream-URLs und Namen
const radioStations = {
    // Tunesien
    tunisia1: {
        url: "https://expressfm.ice.infomaniak.ch/expressfm-64.mp3",
        name: "Express FM"
    },
    tunisia2: {
        url: "https://radio.mosaiquefm.net/mosalive",
        name: "Mosaique FM"
    },
    tunisia3: {
        url: "https://streaming2.toutech.net/jawharafm",
        name: "Jawhara FM"
    },
    tunisia4: {
        url: "https://radio.mosaiquefm.net/mosagold",
        name: "Mosaique Gold"
    },

    // Deutschland
    germany1: {
        url: "https://st01.sslstream.dlf.de/dlf/01/128/mp3/stream.mp3?aggregator=web",
        name: "Deutschlandfunk"
    },
    germany2: {
        url: "https://streams.radiobob.de/bob-national/mp3-128/streams.radiobob.de/",
        name: "Radio Bob"
    },
    germany3: {
        url: "https://radiogong-channel01.cast.addradio.de/radiogong/channel01/mp3/high",
        name: "Radio Gong Würzburg"
    },
    germany4: {
        url: "https://dispatcher.rndfnk.com/br/br24/live/mp3/mid",
        name: "B5 aktuell (BR24)"
    },

    // Frankreich
    france1: {
        url: "https://icecast.radiofrance.fr/fip-midfi.mp3",
        name: "FIP Radio"
    },
    france2: {
        url: "https://stream.radiofrance.fr/franceinter/franceinter.m3u8",
        name: "France Inter"
    },
    france3: {
        url: "https://stream.rfm.fr/rfm.mp3",
        name: "RFM"
    },
    france4: {
        url: "https://stream.rcs.revma.com/ypqt40u0x1zuv",
        name: "NRJ France"
    },
    
    // Italien
    italy1: {
        url: "https://icecast.unitedradio.it/Radio105.mp3",
        name: "Radio 105"
    },
    italy2: {
        url: "https://icstream.rds.radio/rds",
        name: "RDS - Radio Dimensione Suono"
    },
    italy3: {
        url: "https://stream.srg-ssr.ch/m/rsc_it/mp3_128",
        name: "RSI Radio"
    },
    italy4: {
        url: "https://icecast.unitedradio.it/Virgin.mp3",
        name: "Virgin Radio Italia"
    },
    
    // Latino
    latino1: {
        url: "https://strm112.1.fm/reggaeton_mobile_mp3",
        name: "1.FM Reggaeton"
    },
    latino2: {
        url: "https://strm112.1.fm/salsa_mobile_mp3",
        name: "1.FM Salsa"
    },
    latino3: {
        url: "https://strm112.1.fm/latina_mobile_mp3",
        name: "1.FM Latina"
    },
    latino4: {
        url: "https://strm112.1.fm/bossanova_mobile_mp3",
        name: "1.FM Bossa Nova"
    }
};

// Aktuelle Auswahl speichern
let currentStationKey = null;

// Funktion zum Abspielen eines Radiosenders
function playRadio(stationKey) {
    const audioPlayer = document.getElementById("audioPlayer");
    const nowPlaying = document.getElementById("nowPlaying");
    const currentStation = document.getElementById("currentStation");
    
    resetAllButtons();
    currentStationKey = stationKey;
    
    if (radioStations[stationKey]) {
        const buttons = document.querySelectorAll('.radio-button');
        buttons.forEach(button => {
            if (button.getAttribute('onclick').includes(`'${stationKey}'`)) {
                button.classList.add('active');
                const icon = button.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-play');
                    icon.classList.add('fa-pause');
                }
            }
        });
        
        audioPlayer.src = radioStations[stationKey].url;
        audioPlayer.play()
            .then(() => {
                currentStation.textContent = radioStations[stationKey].name;
                nowPlaying.style.display = "flex";
                
                // Aktiviere den Audio-Visualizer
                if (window.AudioVisualizer && typeof window.AudioVisualizer.updateState === 'function') {
                    window.AudioVisualizer.updateState();
                }
            })
            .catch(error => {
                console.error("Fehler beim Abspielen:", error);
                alert("Es gab ein Problem beim Abspielen des Radiosenders. Bitte versuchen Sie es später erneut.");
            });
    } else {
        console.error("Radio nicht gefunden!");
    }
}

// Funktion zum Zurücksetzen aller Buttons
function resetAllButtons() {
    const buttons = document.querySelectorAll('.radio-button');
    buttons.forEach(button => {
        button.classList.remove('active');
        const icon = button.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }
    });
}

// Karussell-Funktionalität wurde in carousel.js ausgelagert

// Event-Listener für den Audio-Player
document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById("audioPlayer");
    
    // Wenn die Wiedergabe stoppt
    audioPlayer.addEventListener('pause', () => {
        resetAllButtons();
    });
    
    // Wenn die Wiedergabe endet
    audioPlayer.addEventListener('ended', () => {
        resetAllButtons();
        document.getElementById("nowPlaying").style.display = "none";
    });
    
    // Sound-Mixer initialisieren
    if (window.SoundMixer && typeof window.SoundMixer.init === 'function') {
        window.SoundMixer.init();
    }
});