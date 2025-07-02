/**
 * Audio-Visualizer für die Radio-App
 * Steuert die Animation der Balken im Audio-Player
 */

// Visualizer-Objekt
const AudioVisualizer = {
    // Referenzen zu DOM-Elementen
    audioPlayer: null,
    visualizer: null,
    
    // Initialisierung
    init: function() {
        this.audioPlayer = document.getElementById("audioPlayer");
        this.visualizer = document.getElementById("audioVisualizer");
        
        if (!this.audioPlayer || !this.visualizer) {
            console.error("Audio-Player oder Visualizer nicht gefunden");
            return;
        }
        
        // Event-Listener für Audio-Player
        this.audioPlayer.addEventListener('play', () => this.activate());
        this.audioPlayer.addEventListener('pause', () => this.deactivate());
        this.audioPlayer.addEventListener('ended', () => this.deactivate());
        
        // Initialen Status prüfen
        this.updateState();
    },
    
    // Aktiviere die Animation
    activate: function() {
        if (this.visualizer) {
            this.visualizer.classList.add('active');
        }
    },
    
    // Deaktiviere die Animation
    deactivate: function() {
        if (this.visualizer) {
            this.visualizer.classList.remove('active');
        }
    },
    
    // Aktualisiere den Status basierend auf dem Audio-Player
    updateState: function() {
        if (this.audioPlayer && this.visualizer) {
            if (!this.audioPlayer.paused && !this.audioPlayer.ended) {
                this.activate();
            } else {
                this.deactivate();
            }
        }
    }
};

// Initialisiere den Visualizer, wenn das DOM geladen ist
document.addEventListener('DOMContentLoaded', () => {
    AudioVisualizer.init();
});

// Exportiere das Visualizer-Objekt
window.AudioVisualizer = AudioVisualizer;
