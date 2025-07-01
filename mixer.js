/**
 * Sound Mixer Funktionalität für die Radio-App
 * Steuert die Lautstärke und visuelle Effekte des Sound-Mixers
 */

// Sound-Mixer initialisieren
function initSoundMixer() {
    const audioPlayer = document.getElementById("audioPlayer");
    const volumeControl = document.getElementById("volumeControl");
    const bassControl = document.getElementById("bassControl");
    const trebleControl = document.getElementById("trebleControl");
    const resetMixer = document.getElementById("resetMixer");
    const equalizerToggle = document.getElementById("equalizerToggle");
    
    // Lautstärke-Regler
    volumeControl.addEventListener('input', () => {
        const value = parseFloat(volumeControl.value);
        audioPlayer.volume = value;
        document.querySelector('#volumeControl + .control-value').textContent = `${Math.round(value * 100)}%`;
    });
    
    // Bass-Regler (visuell, ohne Audio-Effekt)
    bassControl.addEventListener('input', () => {
        const value = parseInt(bassControl.value);
        document.querySelector('#bassControl + .control-value').textContent = value > 0 ? `+${value}` : value;
    });
    
    // Höhen-Regler (visuell, ohne Audio-Effekt)
    trebleControl.addEventListener('input', () => {
        const value = parseInt(trebleControl.value);
        document.querySelector('#trebleControl + .control-value').textContent = value > 0 ? `+${value}` : value;
    });
    
    // Reset-Button
    resetMixer.addEventListener('click', () => {
        volumeControl.value = 0.7;
        bassControl.value = 0;
        trebleControl.value = 0;
        
        audioPlayer.volume = 0.7;
        
        // Werte in der UI aktualisieren
        document.querySelector('#volumeControl + .control-value').textContent = '70%';
        document.querySelector('#bassControl + .control-value').textContent = '0';
        document.querySelector('#trebleControl + .control-value').textContent = '0';
    });
    
    // Equalizer-Toggle (visuell, ohne Audio-Effekt)
    equalizerToggle.addEventListener('click', () => {
        const icon = equalizerToggle.querySelector('i');
        if (icon.classList.contains('fa-toggle-on')) {
            icon.classList.remove('fa-toggle-on');
            icon.classList.add('fa-toggle-off');
            equalizerToggle.style.backgroundColor = '#888';
        } else {
            icon.classList.remove('fa-toggle-off');
            icon.classList.add('fa-toggle-on');
            equalizerToggle.style.backgroundColor = 'var(--secondary-color)';
        }
    });
    
    // Initialisiere die Anzeige der Werte
    document.querySelector('#volumeControl + .control-value').textContent = '70%';
    document.querySelector('#bassControl + .control-value').textContent = '0';
    document.querySelector('#trebleControl + .control-value').textContent = '0';
    
    // Setze die initiale Lautstärke
    audioPlayer.volume = 0.7;
}

// Exportiere die Funktionen
window.SoundMixer = {
    init: initSoundMixer
};
