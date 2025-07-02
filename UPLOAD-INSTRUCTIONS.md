# Anleitung zum Hochladen der Globify Desktop App

Diese Anleitung erklärt, wie du die Globify Desktop App auf Google Drive hochladen und den Download-Link in der Webseite aktualisieren kannst.

## Schritt 1: Hochladen der ZIP-Dateien auf Google Drive

1. Melde dich bei deinem Google Drive-Konto an: [drive.google.com](https://drive.google.com)
2. Klicke auf "Neu" > "Datei hochladen"
3. Wähle die folgenden Dateien aus und lade sie nacheinander hoch:
   - Windows-Version: `/Users/Cutvert/Desktop/radio-desktop/dist/Globify-Windows.zip`
   - Mac-Version: `/Users/Cutvert/Desktop/radio/Globify-Mac.zip`
4. Warte, bis die Uploads abgeschlossen sind

## Schritt 2: Freigabelink erstellen

1. Rechtsklick auf die hochgeladene Datei in Google Drive
2. Wähle "Link freigeben"
3. Stelle sicher, dass die Zugriffseinstellung auf "Jeder mit dem Link kann anzeigen" gesetzt ist
4. Kopiere den Link

## Schritt 3: Links in der Webseite aktualisieren

1. Öffne die Datei `/Users/Cutvert/Desktop/radio/download-page.html`
2. Suche nach den Platzhalter-Links:
   - Für Windows: `https://drive.google.com/file/d/PLACEHOLDER_WINDOWS_LINK/view?usp=sharing`
   - Für Mac: `https://drive.google.com/file/d/PLACEHOLDER_MAC_LINK/view?usp=sharing`
3. Ersetze diese durch die kopierten Links
4. Speichere die Datei

## Schritt 4: Änderungen committen und pushen

```bash
git -C /Users/Cutvert/Desktop/radio add download-page.html
git -C /Users/Cutvert/Desktop/radio commit -m "Download-Link für Windows-Version aktualisiert"
git -C /Users/Cutvert/Desktop/radio push origin master
```

## Alternative: Andere Hosting-Dienste

Falls Google Drive nicht geeignet ist, kannst du auch andere Dienste verwenden:

- Dropbox
- Microsoft OneDrive
- GitHub Releases (für Dateien unter 100 MB)
- AWS S3 (erfordert ein AWS-Konto)

Wähle den Dienst, der für dich am besten geeignet ist, und aktualisiere den Link entsprechend.
