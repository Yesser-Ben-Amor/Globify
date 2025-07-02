# Globify Desktop App - Mac Installationsanleitung

Diese Anleitung hilft dir dabei, die Globify Desktop App auf deinem Mac-Computer zu installieren und auszuführen.

## Voraussetzungen

- macOS 10.13 (High Sierra) oder neuer
- Internetverbindung für das Streaming der Radiosender

## Installation

### Schritt 1: Öffne die DMG-Datei

Nachdem du die `Globify-1.0.0.dmg` heruntergeladen hast:

1. Doppelklick auf die DMG-Datei, um sie zu öffnen
2. Ein Fenster erscheint mit dem Globify-Icon und einem Ordner-Symbol für den Programme-Ordner
3. Ziehe das Globify-Icon auf das Programme-Ordner-Symbol

### Schritt 2: App-Sicherheitseinstellungen

Da die App nicht aus dem Mac App Store stammt und nicht von einem verifizierten Entwickler signiert ist, wird macOS die App standardmäßig blockieren. So kannst du die App trotzdem öffnen:

1. **Wenn du die Fehlermeldung "Du kannst das Programm 'Globify' nicht öffnen, da es möglicherweise beschädigt oder unvollständig ist" siehst:**
   - Schließe die Fehlermeldung
   - Rechtsklick (oder Ctrl+Klick) auf die Globify.app
   - Wähle "Öffnen" aus dem Kontextmenü
   - Klicke im erscheinenden Dialog auf "Öffnen"

2. **Wenn das nicht funktioniert:**
   - Öffne die Systemeinstellungen
   - Gehe zu "Sicherheit & Datenschutz" > Reiter "Allgemein"
   - Klicke auf das Schloss-Symbol unten links und gib dein Passwort ein
   - Unter "App-Downloads erlauben von:" wähle "Beliebige Quelle" (oder klicke auf "Öffnen dennoch erlauben" für Globify, falls angezeigt)
   - Versuche erneut, die App zu öffnen

3. **Als letzte Möglichkeit:**
   - Öffne das Terminal (in Programme > Dienstprogramme)
   - Führe folgenden Befehl aus (ersetze den Pfad entsprechend):
     ```
     xattr -cr /Pfad/zu/Globify.app
     ```
   - Versuche erneut, die App zu öffnen

### Schritt 3: App in den Programme-Ordner verschieben (optional)

Für eine sauberere Installation:

1. Öffne den Finder
2. Ziehe die Globify-App in den Programme-Ordner
3. Du kannst jetzt die App aus dem Launchpad oder dem Programme-Ordner starten

## Fehlerbehebung

Falls Probleme auftreten:

1. **App öffnet sich nicht:**
   - Stelle sicher, dass du die Sicherheitseinstellungen wie oben beschrieben angepasst hast
   - Versuche, die App mit Rechtsklick -> Öffnen zu starten

2. **Keine Audioausgabe:**
   - Überprüfe deine Lautstärkeeinstellungen
   - Stelle sicher, dass dein Internetanschluss funktioniert
   - Versuche einen anderen Radiosender

## Support

Bei Fragen oder Problemen erstelle bitte ein Issue im [GitHub-Repository](https://github.com/Yesser-Ben-Amor/Globify).
