// PWA-Funktionalität für Globify Radio

// Service Worker registrieren
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker erfolgreich registriert:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker Registrierung fehlgeschlagen:', error);
      });
  });
}

// Installationshinweis für PWA
let deferredPrompt;
const installButton = document.createElement('button');
installButton.style.display = 'none';
installButton.classList.add('install-button');
installButton.textContent = 'Globify installieren';

// Event-Listener für "beforeinstallprompt" Event
window.addEventListener('beforeinstallprompt', (e) => {
  // Standardinstallationsaufforderung verhindern
  e.preventDefault();
  // Installation für später speichern
  deferredPrompt = e;
  
  // Installationsbutton anzeigen
  const header = document.querySelector('header');
  if (header) {
    installButton.style.display = 'block';
    header.appendChild(installButton);
  }
  
  // Event-Listener für Installationsbutton
  installButton.addEventListener('click', async () => {
    if (deferredPrompt) {
      // Installationsaufforderung anzeigen
      deferredPrompt.prompt();
      // Warten auf Benutzerentscheidung
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`Benutzerentscheidung: ${outcome}`);
      // deferredPrompt zurücksetzen
      deferredPrompt = null;
      // Button ausblenden
      installButton.style.display = 'none';
    }
  });
});
