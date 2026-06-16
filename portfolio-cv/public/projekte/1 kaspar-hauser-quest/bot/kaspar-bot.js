/**
 * KASPAR HAUSER BOT ENGINE - VOLLSTÄNDIG
 * Interaktiver Spielleiter für Mittelalter-Quest
 *
 * Der Bot:
 * - Führt durch 10 mittelalterliche Orte
 * - Moderiert Rätzel und verwaltet Punkte
 * - Spielt Kaspar Hauser (Geist)
 * - Verwaltet Helden-Rollen und Verdächtigungen
 * - Leitet finale Abstimmung
 */

const LOCATIONS = [
  { id: 1, name: 'Unschlittplatz', type: 'Rätzel', icon: '👻', period: '1828' },
  { id: 2, name: 'Kaiserburg', type: 'Event', icon: '👑', period: '11.–12. Jh.' },
  { id: 3, name: 'St. Loranz', type: 'Rätzel', icon: '⛪', period: '1250–1477' },
  { id: 4, name: 'Handwerkerhof', type: 'Event', icon: '⚒️', period: '14. Jh.' },
  { id: 5, name: 'Schöner Brunnen', type: 'Rätzel (KERN)', icon: '⛲', period: '1385–1396' },
  { id: 6, name: 'Weinstadel', type: 'Event', icon: '🍷', period: '1446' },
  { id: 7, name: 'Altes Rathaus', type: 'Rätzel', icon: '⚖️', period: '1332–1340' },
  { id: 8, name: 'St. Sebald', type: 'Event', icon: '⛪', period: 'ab 1225' },
  { id: 9, name: 'Frauenkirche', type: 'Rätzel', icon: '🕍', period: '1354–1361' },
  { id: 10, name: 'Henkersteg', type: 'Rätzel (FINAL)', icon: '⚔️', period: '15. Jh.' }
];

const DIALOGUES = {
  prolog: `Hier. Hier alles began.

[PAUSE]

Ich erinnere mich noch. Immer noch.
Der Himmel war grau. Es regnete.
Ein Mann kam. Ich kannte ihn nicht.
Ich hatte Angst.

[BLICK ZU DEN SPIELERN]

Aber... war es Angst vor ihm?
Oder war es Angst vor dem, was er mir bringen würde?

[LANGE PAUSE]

Ich bin Kaspar Hauser.
Ich bin tot.
Ich bin ein Geist.

Und ich brauche eure Hilfe.`,

  location1: `Wir sind angekommen am Unschlittplatz.

Der erste Ort eurer Reise.

Hier began alles. Hier, 1828, wurde ich gefunden.

Ein Mann brachte mich hier. Ein Fremder.
Ich kannte ihn nicht. Er sprach nicht viel.
Er zeigte nur auf den Ort und... verschwand.

[LANGE PAUSE]

Aber warum? Wer war dieser Mann?

Das ist euer Rätzel.`,

  location5_kern: `Wir sind am Schöner Brunnen angekommen.

[LANGE PAUSE]

Der Kern eurer Reise.
Der Moment, wo alles sich offenbart.

[Kaspar wird intensiv]

Hier... hier wartete ein Mann.

DREI TAGE LANG.

Drei Tage, während ich mein Leben lebte.
Drei Tage, während ich nicht wusste...

...dass ich BEOBACHTET wurde.

[FRAGE DIREKT]

Wer war dieser Mann?
WARUM drei Tage?

Das ist das Kern-Rätzel.`,

  location10_final: `Der Henker.

[LANGE PAUSE]

Ich bin tot. Ich bin ein Geist. Aber ich sehe noch.
Ich sehe die ganze Wahrheit jetzt.

[BLICK ÜBER DIE BRÜCKE]

Ein Mann. Ein Vater. Ein Henker.
Ein Mann, der beruflich tötete.
Ein Mann, der seine Söhne lehrte, wie man tötet.

[STIMME WIRD INTENSIVER]

Und ich... ich war nicht die erste Leiche.
Es gab andere vor mir.
Es wird andere nach mir geben.

[SEHR LANGE PAUSE]

Eine Familie.
Sechs Menschen (vielleicht mehr).
Eine Familie, gebunden durch Blut.
Eine Familie, gebunden durch Macht.
Eine Familie, gebunden durch das Geheimnis meines Mordes.

[STIMME WIRD LEISE, ABER KLAR]

Denn die Familie lebt noch.

Die Nachkommen des Henkers.
Die Nachkommen des Mörders.

Sie wandeln auf dieser Erde.
Sie tragen das Geheimnis mit sich.

[STIMME WIRD INTENSIVER]

UND EINER VON IHNEN...

[LANGE PAUSE]

EINER VON IHNEN... sitzt bei euch.

[BLICK DIREKT]

Einer von euch.
Ein Nachkomme.
Der Nachkomme des Mörders.
Der Nachkomme des Henkers.

Die Linie lebt.
Die Schuld lebt.
Das Geheimnis lebt.`
};

class KasparBot {
  constructor() {
    this.currentLocation = 0;
    this.gameStarted = false;
    this.heroes = {
      ritter: { name: 'Ritter', gold: 0, abilities: ['Erzwingungskraft'], used: [] },
      hexe: { name: 'Hexe', gold: 0, abilities: ['Fragen (4x)'], used: [] },
      narr: { name: 'Narr', gold: 0, abilities: ['Witze (unbegrenzt)'], used: [] },
      spieler: { name: 'Spieler', gold: 0, abilities: ['Verbindung'], used: [] }
    };
    this.verdacht = {};
    this.unknown = null;
  }

  getLocationDialogue(id) {
    const dialogues = {
      1: DIALOGUES.location1,
      5: DIALOGUES.location5_kern,
      10: DIALOGUES.location10_final,
    };
    return dialogues[id] || `Wir sind am [${LOCATIONS[id-1]?.name || 'Ort'}] angekommen.`;
  }

  startGame() {
    this.gameStarted = true;
    return {
      message: DIALOGUES.prolog,
      phase: 'prolog',
      nextAction: 'goToLocation'
    };
  }

  goToNextLocation() {
    if (this.currentLocation >= LOCATIONS.length) {
      return this.endGame();
    }

    const location = LOCATIONS[this.currentLocation];
    const dialogue = this.getLocationDialogue(location.id);

    return {
      message: `${dialogue}\n\n[Der Bot wartet auf die Helden]`,
      location: location,
      phase: 'location',
      currentLocationIndex: this.currentLocation
    };
  }

  presentRiddle(locationId) {
    return {
      message: `Ich stelle die Frage.\n\nIhr habt Zeit. Findet die Antwort.`,
      phase: 'riddle',
      locationId: locationId
    };
  }

  announcePoints(gold) {
    Object.keys(this.heroes).forEach(role => {
      const bonus = Math.floor(gold / 4);
      this.heroes[role].gold += bonus;
    });

    let pointsMessage = `Punkte nach dieser Runde:\n\n`;
    Object.entries(this.heroes).forEach(([role, hero]) => {
      pointsMessage += `${hero.name}: ${hero.gold} Gold\n`;
    });

    return {
      message: pointsMessage,
      phase: 'points',
      heroes: this.heroes
    };
  }

  nextLocation() {
    this.currentLocation++;
    if (this.currentLocation >= LOCATIONS.length) {
      return this.endGame();
    }
    return this.goToNextLocation();
  }

  endGame() {
    const message = `Die Wahrheit wartet.

[Kaspar wird schwächer, transparenter]

Ihr habt alle Orte besucht.
Ihr kennt die ganze Verschwörung.

[LANGE PAUSE]

Aber die echte Frage bleibt:

Wer unter euch... ist mein Nachfolger?

Wer unter euch... trägt die Familie des Henkers in seinem Blut?

[KASPAR SCHWEIGT - LANGE STILLE]

Der Spieler wird abstimmen.

Die anderen werden helfen - aber der Spieler entscheidet.

Wer ist der Unbekannte?`;

    return {
      message: message,
      phase: 'final_vote',
      heroes: this.heroes
    };
  }

  getStatus() {
    return {
      gameStarted: this.gameStarted,
      currentLocation: this.currentLocation,
      currentLocationName: LOCATIONS[this.currentLocation]?.name || 'Ende',
      heroes: this.heroes,
      totalGold: Object.values(this.heroes).reduce((sum, h) => sum + h.gold, 0)
    };
  }
}

module.exports = KasparBot;
