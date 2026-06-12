# ⚖️ MOI - Rechtliche Vorlagen & Compliance

> DSGVO, AGB, Disclaimer, Cookie-Banner & mehr - Alles bereit zum Einsatz

---

## 📋 Inhaltsverzeichnis

1. [Datenschutzerklärung (DSGVO)](#datenschutzerklärung)
2. [Allgemeine Geschäftsbedingungen (AGB)](#agb)
3. [Cookie-Banner & Consent](#cookie-banner)
4. [Disclaimer KI-Nutzung](#disclaimer)
5. [User Agreement](#user-agreement)
6. [Haftungsausschluss](#haftungsausschluss)
7. [Implementierungs-Checkliste](#checkliste)

---

## Datenschutzerklärung

### Vollständige DSGVO Datenschutzerklärung

```markdown
# Datenschutzerklärung MOI Bot
## Unwritten Studio

**Stand: [Aktuelles Datum]**

### 1. Verantwortlicher

**Unwritten Studio**
Straße: [Adresse]
Stadt: [Stadt]
Land: Deutschland

E-Mail: contact@unwritten.studio
Telefon: [Telefon]

### 2. Datenschutzbeauftragter

[Falls erforderlich]
E-Mail: datenschutz@unwritten.studio

### 3. Rechtsgrundlagen (DSGVO)

Wir verarbeiten personenbezogene Daten auf folgenden Rechtsgrundlagen:

- **Art. 6 Abs. 1 lit. b DSGVO** - Erfüllung eines Vertrags
- **Art. 6 Abs. 1 lit. f DSGVO** - Berechtigte Interessen
- **Art. 6 Abs. 1 lit. a DSGVO** - Einwilligung (mit Cookie-Banner)

### 4. Datenverarbeitung bei MOI Bot

#### 4.1 Chat-Nachrichten
**Was wird verarbeitet:**
- Ihre Nachrichten an MOI Bot
- Ihre User-ID (eindeutige Kennung)
- Zeitstempel der Nachrichten
- IP-Adresse (gekürzt)

**Zweck:**
- Bereitstellung des Bot-Services
- Verbesserung der Bot-Antworten
- Fehlerdiagnose und Logging

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. b DSGVO (Vertrag)

**Speicherdauer:**
- Chat-Verlauf: 30 Tage (danach automatisch gelöscht)
- Logs: 7 Tage
- User-ID: Solange der Account aktiv ist

#### 4.2 Cookies
**Welche Cookies?**
- Session Cookie: Identifikation während des Chats
- Analytics Cookie: Anonyme Nutzungsstatistiken (nur mit Einwilligung)

**Speicherdauer:**
- Session-Cookies: Browseression (gelöscht beim Schließen)
- Analytics: 30 Tage

**Ihre Rechte:**
- Cookies ablehnen: Checkbox im Banner
- Cookies löschen: Browser-Einstellungen
- Jederzeit Einwilligung widerrufen

### 5. Externe Services & Datenübertragungen

#### Claude API (Anthropic Inc.)
**Daten, die übertragen werden:**
- Ihre Chat-Nachrichten
- Kürzeste User-ID

**Ort:** USA (mit EU-US Data Privacy Framework)

**Datenschutzrichtlinie:** https://www.anthropic.com/privacy

**Ihre Rechte:**
- Daten nicht an Claude API senden: Offline-Modus nutzen
- Anfragen löschen: contact@unwritten.studio

#### Vercel (Deployment)
**Daten:**
- Server Logs (IP-Adressen, gekürzt)
- Performance Metriken

**Ort:** USA

**Datenschutzrichtlinie:** https://vercel.com/privacy

### 6. Ihre Rechte nach DSGVO

Sie haben folgende Rechte:

- **Recht auf Auskunft** (Art. 15): Erfahren was über Sie gespeichert ist
- **Recht auf Berichtigung** (Art. 16): Falsche Daten korrigieren
- **Recht auf Löschung** (Art. 17): "Recht auf Vergessenwerden"
- **Recht auf Einschränkung** (Art. 18): Verarbeitung begrenzen
- **Recht auf Datenportabilität** (Art. 20): Daten in strukturierter Form
- **Recht auf Widerspruch** (Art. 21): Verarbeitung widersprechen
- **Recht auf Beschwerde** (Art. 77): Bei der Datenschutzbehörde

**Anfragen senden an:** contact@unwritten.studio

### 7. Sicherheit

**Maßnahmen zum Schutz:**
- ✅ Verschlüsselte Datenübertragung (HTTPS/TLS)
- ✅ Rate Limiting gegen DoS-Attacken
- ✅ API Key Management (Umgebungsvariablen)
- ✅ Eingabe-Validierung gegen XSS/Injection
- ✅ Regelmäßige Sicherheits-Updates
- ✅ Access Logging & Monitoring

**Keine Haftung** für Schäden durch:
- Benutzer-Fehler
- Dritte-Parteien-Sicherheitslücken
- Höhere Gewalt

### 8. Datenlöschung

**Automatisch gelöschte Daten:**
- Chat-Verlauf: Nach 30 Tagen
- Server Logs: Nach 7 Tagen
- Session Cookies: Nach Browseression

**Manuell löschen:**
1. POST zu /api/clear/:userId
2. Cookies im Browser löschen
3. Kontakt: contact@unwritten.studio für vollständige Löschung

### 9. Änderungen dieser Datenschutzerklärung

Wir können diese Erklärung jederzeit aktualisieren.
Die aktuelle Version ist immer auf der Website verfügbar.

**Letzte Änderung:** [Datum]

---
```

---

## AGB

### Allgemeine Geschäftsbedingungen für MOI Bot

```markdown
# Allgemeine Geschäftsbedingungen (AGB)
## MOI Bot - Unwritten Studio

**Stand: [Aktuelles Datum]**

### 1. Geltungsbereich

Diese AGB gelten für alle Nutzungen von MOI Bot durch Endbenutzer.

### 2. Leistungsbeschreibung

MOI Bot ist ein KI-basiertes Onboarding-System mit folgenden Features:
- Chat-Interface mit Claude AI
- Code-Beispiele für Bot-Entwicklung
- Rechtliche Templates
- Deployment-Guides

### 3. Nutzungsbedingungen

Sie dürfen MOI Bot nur verwenden für:
- ✅ Persönliche Lernzwecke
- ✅ Berufliche Bot-Entwicklung
- ✅ Innerbetriebliche Schulung

Sie dürfen MOI Bot nicht verwenden für:
- ❌ Automatische Massennutzung/Scraping
- ❌ Reverse Engineering
- ❌ Erzeugung von Malware/Schadsoftware
- ❌ Illegale oder betrügerische Aktivitäten
- ❌ Verletzung von Dritte-Parteien-Rechten

### 4. Verfügbarkeit & Haftung

**Verfügbarkeit:**
- Zielwert: 99% Uptime
- Geplante Wartung: Mittwochs 02:00-06:00 UTC
- Keine Garantie für ständige Verfügbarkeit

**Haftungsausschluss:**
- ❌ Keine Haftung für Datenverlust
- ❌ Keine Haftung für Fehler in Code-Beispielen
- ❌ Keine Haftung für externe Services (Claude API, Vercel)
- ❌ Keine Haftung für Schäden durch Dritte

**Haftung begrenzt auf:**
- Kostenlos: Keine Haftung
- Kostenpflichtig: Gebühr der letzten 30 Tage

### 5. API Rate Limiting

**Kostenlos:**
- 100 Anfragen/Minute
- 1000 Tokens pro Anfrage

**Bei Überschreitung:**
- Automatische Blockierung (15 min)
- HTTP 429 (Too Many Requests)

### 6. Datenschutz & DSGVO

Siehe separate Datenschutzerklärung.

Kurz:
- Ihre Daten gehören Ihnen
- Wir speichern Chats 30 Tage
- Sie können alles jederzeit löschen

### 7. Geistiges Eigentum

**Was gehört uns:**
- MOI Bot Software & Design
- Claude API Integration
- Homepage & UI

**Was gehört Ihnen:**
- Ihre Chat-Nachrichten
- Code den Sie schreiben
- Ihre Daten

### 8. Kostenpflichtige Services

Wenn wir kostenpflichtige Services anbieten:

- Abrechnung monatlich (im Voraus)
- Automatische Verlängerung (monatlich)
- Kündigung: 7 Tage vor Monatsende
- Keine Rückerstattung für Teil-Monate

### 9. Änderungen der AGB

Wir können AGB jederzeit ändern.
Wichtige Änderungen: 30 Tage Ankündigung

### 10. Sonstiges

- **Anwendbares Recht:** Deutsches Recht
- **Gerichtsstand:** Deutschland
- **Sprache:** Deutsch (englische Versionen unverbindlich)

---
```

---

## Cookie Banner

### HTML/CSS Cookie Consent Banner

```html
<style>
  #cookieBanner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(15, 20, 25, 0.95);
    border-top: 1px solid rgba(255, 165, 0, 0.3);
    padding: 20px;
    z-index: 1000;
    display: none;
  }

  .banner-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .banner-text {
    flex: 1;
    min-width: 250px;
    color: #e0e0e0;
    font-size: 0.95rem;
  }

  .banner-text a {
    color: #3987b8;
    text-decoration: none;
  }

  .banner-text a:hover {
    text-decoration: underline;
  }

  .banner-buttons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .btn-accept,
  .btn-decline {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .btn-accept {
    background: #3987b8;
    color: white;
  }

  .btn-accept:hover {
    background: #5ba3d0;
  }

  .btn-decline {
    background: transparent;
    border: 1px solid #3987b8;
    color: #3987b8;
  }

  .btn-decline:hover {
    background: rgba(57, 135, 184, 0.1);
  }

  @media (max-width: 768px) {
    .banner-content {
      flex-direction: column;
    }

    .btn-accept,
    .btn-decline {
      width: 100%;
    }
  }
</style>

<div id="cookieBanner">
  <div class="banner-content">
    <div class="banner-text">
      <strong>🍪 Cookies & Datenschutz</strong>
      <br />
      Wir verwenden Cookies für Session-Verwaltung und Analytics. Lesen Sie
      unsere
      <a href="/LEGAL.md" target="_blank">Datenschutzerklärung</a>. Sie können
      Cookies ablehnen, aber einige Features könnten nicht funktionieren.
    </div>
    <div class="banner-buttons">
      <button class="btn-accept" onclick="acceptCookies()">
        Akzeptieren
      </button>
      <button class="btn-decline" onclick="declineCookies()">
        Ablehnen
      </button>
    </div>
  </div>
</div>

<script>
  // Check if user already made a choice
  function initCookieBanner() {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      document.getElementById("cookieBanner").style.display = "block";
    } else if (consent === "accept") {
      enableAnalytics();
    }
  }

  function acceptCookies() {
    localStorage.setItem("cookieConsent", "accept");
    document.getElementById("cookieBanner").style.display = "none";
    enableAnalytics();
  }

  function declineCookies() {
    localStorage.setItem("cookieConsent", "decline");
    document.getElementById("cookieBanner").style.display = "none";
    disableAnalytics();
  }

  function enableAnalytics() {
    // Load analytics script only if accepted
    // Example: Google Analytics, Vercel Analytics, etc.
    console.log("✅ Analytics enabled");
  }

  function disableAnalytics() {
    // Disable analytics tracking
    console.log("❌ Analytics disabled");
  }

  // Initialize on page load
  document.addEventListener("DOMContentLoaded", initCookieBanner);
</script>
```

---

## Disclaimer

### KI-Disclaimer für MOI Bot

```markdown
# Disclaimer - Wichtig zu lesen!

## KI-generierte Inhalte

MOI Bot nutzt die Claude API von Anthropic für KI-generierte Antworten.

### ⚠️ Was Sie wissen sollten:

1. **Nicht 100% Genau**
   - KI-Antworten können Fehler enthalten
   - Immer mit offiziellen Docs abgleichen
   - Nicht als rechtliche Beratung verwenden

2. **Keine Garantie**
   - Wir garantieren nicht die Richtigkeit
   - Wir garantieren nicht die Vollständigkeit
   - Sie nutzen auf eigenes Risiko

3. **Keine Rechtliche Beratung**
   - LEGAL.md ist eine Vorlage, kein Rechtsrat
   - Konsultieren Sie einen Anwalt für wichtige Fragen
   - Wir haften nicht für rechtliche Fehler

4. **Keine Medizinische/Psychologische Beratung**
   - Für solche Fragen: Kontaktieren Sie Profis
   - Dies ist ein technischer Bot

### ✅ Was Sie tun sollten:

- 🔍 **Überprüfen** Sie Antworten in offiziellen Quellen
- 📚 **Lesen** Sie die Original-Dokumentation
- ⚖️ **Konsultieren** Sie Experten für wichtige Entscheidungen
- 🐛 **Testen** Sie Code vor Production-Einsatz
- 📝 **Dokumentieren** Sie Ihre Tests & Validierung

### 💡 Beispiel:

```
❌ FALSCH:
MOI: "Hier ist dein Deployment-Code"
→ Direkt in Produktion deployen

✅ RICHTIG:
MOI: "Hier ist ein Code-Beispiel"
→ Code überprüfen
→ Tests schreiben
→ In Staging testen
→ Security-Review
→ Dann in Produktion deployen
```

---
```

---

## User Agreement

### Verbindliche User Agreement

```markdown
# User Agreement - MOI Bot

Durch die Nutzung von MOI Bot stimmen Sie zu:

1. **Die Nutzungsbedingungen zu akzeptieren**
   - Siehe AGB oben
   - Alle Einschränkungen beachten

2. **Ihre Daten zu verstehen**
   - 30 Tage Speicherung
   - Claude API Übertragung
   - Cookie-Nutzung
   - Siehe Datenschutzerklärung

3. **Rechtliche Verantwortung zu übernehmen**
   - Code selbst testen
   - Nicht blind verwenden
   - Für Fehler in Produktivumgebung selbst verantwortlich

4. **Keine automatisierte Nutzung**
   - Kein Bot-Scraping
   - Kein API-Missbrauch
   - Kein Reverse Engineering

5. **Nicht-Kommerzieller Einsatz** (kostenlos)
   - Nur persönlich/intern
   - Nicht zum Weiterverkauf

---
```

---

## Haftungsausschluss

### Vollständiger Haftungsausschluss

```markdown
# HAFTUNGSAUSSCHLUSS - BITTE LESEN

## ❌ Was wir NICHT garantieren:

- ❌ Verfügbarkeit (besser als 99% ist unser Ziel, nicht garantiert)
- ❌ Korrektheit der Antworten (KI kann irren)
- ❌ Sicherheit Ihrer Daten gegen Hacking
- ❌ Vollständigkeit der Informationen
- ❌ Eignung für einen bestimmten Zweck
- ❌ Keine Verletzung von Dritte-Parteien-Rechten
- ❌ Keine Bugs oder Fehler im Code

## 🚫 Haftungsausschlüsse:

### 1. Produkthaftung

MOI Bot wird "AS IS" (wie vorhanden) bereitgestellt ohne jegliche Garantien.

### 2. Datenhaftung

NICHT HAFTBAR für:
- Datenverlust
- Datenkompromittierung
- Unbefugter Datenzugriff
- Fehler bei Datenspeicherung

### 3. Code-Beispiel Haftung

Code-Beispiele sind zum Lernen - NICHT für Production ohne:
- Code Review
- Security Audit
- Unit Tests
- Performance Testing
- Staging Deployment

### 4. Externe Services

NICHT HAFTBAR für:
- Claude API Fehler/Ausfälle
- Vercel Hosting Fehler
- Dritte-Parteien Services

### 5. Indirekte Schäden

NICHT HAFTBAR für:
- Gewinnverluste
- Datenverluste
- Geschäftsunterbrechung
- Reputationsschäden

## ✅ Maximum Haftung (falls zutreffend):

Gesamthaftung begrenzt auf:
- Kostenlos: EUR 0
- Kostenpflichtig: Letzte 30 Tage Gebühr

## 💼 Versicherung empfohlen:

Für produktiven Einsatz bitte:
- Cyber-Versicherung abschließen
- Liability-Versicherung überprüfen
- SLA mit Cloud-Provider vereinbaren

---
```

---

## Implementierungs-Checkliste

```markdown
# 📋 Rechtliche Implementierungs-Checkliste

## Auf Website implementieren:

- [ ] **Datenschutzerklärung**
  - [ ] Link im Footer
  - [ ] DSGVO-konform
  - [ ] Kontakt: contact@unwritten.studio

- [ ] **AGB**
  - [ ] Link im Footer
  - [ ] Nutzer müssen akzeptieren (Modal beim ersten Besuch)
  - [ ] Version & Datum dokumentiert

- [ ] **Cookie-Banner**
  - [ ] Erscheint beim ersten Besuch
  - [ ] "Akzeptieren" & "Ablehnen" Buttons
  - [ ] LocalStorage für Wahl
  - [ ] Keine Analytics vor Consent

- [ ] **Disclaimer**
  - [ ] Sichtbar für KI-Inhalte
  - [ ] Deutlich markiert
  - [ ] Link zu vollständigem Disclaimer

## Im Code implementieren:

- [ ] **.env nicht pushen**
  - [ ] .gitignore hat .env
  - [ ] API Keys geschützt

- [ ] **CORS konfigurieren**
  - [ ] Nur zugelassene Domains
  - [ ] Credentials=true für Auth

- [ ] **Input Validation**
  - [ ] Längen-Limits (max 10000 chars)
  - [ ] Malware-Scanning (optional)
  - [ ] XSS-Prevention

- [ ] **Rate Limiting**
  - [ ] Max 100 req/min pro User
  - [ ] IP-basiertes Blocking
  - [ ] Error Messages informativ

- [ ] **Logging**
  - [ ] Kein PII in Logs
  - [ ] Log Rotation (7 Tage)
  - [ ] Nur für Fehlerdiagnose

- [ ] **HTTPS nur**
  - [ ] Deployment: nur HTTPS
  - [ ] HTTP → HTTPS Redirect
  - [ ] HSTS Header

## Sonstiges:

- [ ] **Kontakt-Information**
  - [ ] E-Mail: contact@unwritten.studio
  - [ ] Telefon: [Falls verfügbar]
  - [ ] Adresse: [Studio Adresse]

- [ ] **Datenschutzbeauftragter** (falls erforderlich)
  - [ ] Name & Kontakt

- [ ] **Datenschutz-Impact-Assessment**
  - [ ] Durchgeführt für Claude API
  - [ ] Dokumentiert

- [ ] **Datenlöschungs-Prozess**
  - [ ] /api/clear/:userId implementiert
  - [ ] 30-Tage Auto-Löschung
  - [ ] Manual Deletion auf Anfrage

---
```

---

## 📞 Support & Fragen

**Datenschutz-Fragen:**
```
E-Mail: datenschutz@unwritten.studio
Telefon: [Nummer]
```

**Rechtliche Fragen:**
```
Konsultieren Sie einen Anwalt in Ihrer Jurisdiction
```

**Bug-Meldungen:**
```
E-Mail: contact@unwritten.studio
Issue Tracker: [GitHub Issues]
```

---

**⚠️ WICHTIG:** Diese Vorlagen sind Beispiele. Konsultieren Sie einen Anwalt für Ihre spezifische Situation!

*Zuletzt aktualisiert: [Datum]*

*MOI v10.5.2026 - Für Unwritten Studio*
