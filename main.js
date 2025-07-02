const { app, BrowserWindow } = require('electron');
const path = require('path');

// Behalte eine globale Referenz auf das Fenster-Objekt.
// Wenn du das nicht tust, wird das Fenster automatisch geschlossen,
// sobald das Objekt dem JavaScript Garbage Collector übergeben wird.
let mainWindow;

function createWindow() {
  // Erstelle das Browser-Fenster.
  mainWindow = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    icon: path.join(__dirname, 'icon.png') // Falls du ein Icon hast
  });

  // Lade die index.html der App.
  mainWindow.loadFile('index.html');

  // Öffne die DevTools nur während der Entwicklung
  // mainWindow.webContents.openDevTools();

  // Setze den Titel der App
  mainWindow.setTitle('WorldRadio Desktop - Ben Amor');

  // Emittiert, wenn das Fenster geschlossen wird.
  mainWindow.on('closed', function () {
    // Dereferenziere das Fenster-Objekt, normalerweise würdest du Fenster
    // in einem Array speichern, falls deine App mehrere Fenster unterstützt.
    // Das ist der Zeitpunkt, an dem du das zugehörige Element löschen solltest.
    mainWindow = null;
  });
}

// Diese Methode wird aufgerufen, wenn Electron mit der
// Initialisierung fertig ist und Browserfenster erschaffen kann.
// Einige APIs können nur nach dem Auftreten dieses Events genutzt werden.
app.whenReady().then(createWindow);

// Beende die App, wenn alle Fenster geschlossen sind (außer auf macOS).
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  // Unter macOS ist es üblich, die Anwendung und eine neue Fenster-Instanz
  // neu zu erstellen, wenn das Dock-Symbol angeklickt wird und keine anderen
  // Fenster geöffnet sind.
  if (mainWindow === null) createWindow();
});

// In dieser Datei kannst du den Rest des App-spezifischen
// Hauptprozess-Codes einfügen. Du kannst den Code auch
// auf mehrere Dateien aufteilen und diese hier einbinden.
