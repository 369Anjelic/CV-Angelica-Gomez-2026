# Portfolio Homepage - Aktueller Stand
**Datum:** 2026-05-10  
**Status:** ✅ Struktur + Styling FERTIG

---

## 🎨 WIE DIE SEITE AKTUELL AUSSIEHT

### HEADER (Oben - Fixed)
```
┌──────────────────────────────────────────────────┐
│ 🎨 Angelica Gomez                   Full Stack   │
│    Full Stack Developer              Developer    │
│                                                   │
│ Style: Weiß mit Blue Border (#3987b8)           │
│ Font: Plus Jakarta Sans, 70px height            │
└──────────────────────────────────────────────────┘
```

**Eigenschaften:**
- Position: Fixed (Top)
- Background: Weiß (#ffffff)
- Border-Bottom: 2px Blue (#3987b8)
- Shadow: Leicht
- Responsive: Logo-Text verschwindet auf Mobile

---

### HERO SECTION
```
┌────────────────────────────────────────────────────┐
│                                                     │
│         CV Von Angelica Gomez                      │
│         (Blau, 48px, Bold)                         │
│                                                     │
│    Innovation • Kreativität • Technische Exzellenz │
│    (Dunkelgrau, 18px)                              │
│                                                     │
│  Full Stack Developer mit Fokus auf Next.js...    │
│  (Sekundär Text, 16px)                             │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────┐ │
│  │    8+    │  │    3+    │  │   100%   │  │ 10+│ │
│  │Projekte  │  │Jahre Exp │  │Styleguide│  │Tech│ │
│  └──────────┘  └──────────┘  └──────────┘  └────┘ │
│                                                     │
│  (Stat Cards: Blue Border, Weiß BG, Hover Effect) │
└────────────────────────────────────────────────────┘
```

**Eigenschaften:**
- Background: Weiß mit Blue Gradient (5%)
- Border: 2px Blue (#3987b8)
- Padding: 60px 40px
- Stats Grid: 4 Spalten (auto-fit)
- Hover: Leichte Elevation + Farbwechsel

---

### FILTER TABS
```
[📂 Alle] [🟢 Aktiv] [🟡 In Progress] [🔵 Planung]
```

**Eigenschaften:**
- Default: Weiß BG, Blue Border (#3987b8)
- Hover/Active: Blue BG, Weiß Text
- Transition: 0.3s smooth
- Responsive: Flex-wrap, scroll auf Mobile

---

### PROJECT CARDS GRID
```
┌─────────────────────────────┐   ┌─────────────────────────────┐
│ █ (4px Blue Top Bar)        │   │ █ (4px Blue Top Bar)        │
│                              │   │                              │
│ 🎮  ✅ Aktiv                │   │ 🏠  ✅ Aktiv                │
│                              │   │                              │
│ Flight Game                 │   │ Kaspar Hauser Homepage      │
│ Interaktives 3D Flight...   │   │ Elegante Homepage mit...    │
│                              │   │                              │
│ [JavaScript][Three.js][3D]  │   │ [HTML][CSS][JavaScript]    │
│                              │   │                              │
│    🚀 Öffnen                │   │    🚀 Öffnen                │
│                              │   │                              │
└─────────────────────────────┘   └─────────────────────────────┘
```

**Eigenschaften:**
- Grid: 3 Spalten (auto-fill, minmax 300px)
- Background: Weiß
- Border: 2px Blue (#3987b8)
- Top Bar: 4px Solid Blue
- Hover: 
  - Light Blue Background
  - Dunkelgrau Border
  - Elevation (translateY -8px)
  - Shadow: rgba(57, 135, 184, 0.15)
- Tech Tags: Blue Background (10%), Blue Border
- Button: 100% Width, Blue BG, Weiß Text, Hover wird Dunkelgrau

---

### FOOTER
```
┌──────────────────────────────────────────────┐
│ © 2026 Angelica Gomez | Unwritten Studio    │ Dunkelgrau BG
│ Email: angelica.gomez@unwritten.studio      │ Weiß Text
│ ✨ Built with Next.js + Claude AI           │
└──────────────────────────────────────────────┘
```

**Eigenschaften:**
- Background: Dunkelgrau (#3e4447)
- Text: Weiß
- Font-Size: 13px
- Text-Align: Center
- Padding: 40px

---

## 🎯 FARBEN (Unwritten Styleguide)

| Name | Hex | RGB | Verwendung |
|------|-----|-----|-----------|
| **Primary Blue** | #3987b8 | 57, 135, 184 | Header, Buttons, Accents |
| **Secondary Black** | #3e4447 | 62, 68, 71 | Text, Footer, Headings |
| **Light Gray** | #f4f5f5 | 245, 245, 246 | Backgrounds, Borders |
| **Text Secondary** | #cbd5e1 | - | Secondary Text |
| **Text Muted** | #94a3b8 | - | Muted Text |

---

## 📱 RESPONSIVE DESIGN

**Desktop (1400px+):**
- Header: 40px Padding
- Grid: 3 Spalten
- Font Sizes: Full

**Tablet (768px - 1400px):**
- Header: 20px Padding
- Grid: 2 Spalten
- Logo Text: Sichtbar

**Mobile (< 768px):**
- Header: 20px Padding
- Logo Text: **Versteckt**
- Grid: 1 Spalte
- Padding: 20px
- Filter Tabs: Scroll horizontal

---

## ✅ FERTIGGESTELLTE FEATURES

- ✅ Header mit Logo + Navigation
- ✅ Hero Section mit Stats
- ✅ Filter Tabs (4 Filter)
- ✅ Project Card Grid (Responsiv)
- ✅ Footer
- ✅ Unwritten Styleguide Colors
- ✅ Plus Jakarta Sans Typography
- ✅ Hover Effects & Transitions
- ✅ Mobile Responsive
- ✅ CSS Grid Styling

---

## ⏳ NOCH ZU TUN

- ⏳ GitHub API Integration (Projekte laden)
- ⏳ Dynamische Project Cards
- ⏳ Dark Mode (Optional)
- ⏳ Contact Form (Optional)
- ⏳ Blog Section (Optional)
- ⏳ Deploy auf Vercel

---

## 🔧 TECH STACK

- **Framework:** Next.js 14.2.35
- **UI Library:** React 18
- **Styling:** Tailwind CSS + Custom CSS
- **Font:** Plus Jakarta Sans (Google Fonts)
- **State:** React Hooks
- **API:** Octokit (GitHub)
- **Deployment:** Vercel

---

## 🚀 NÄCHSTE STEPS

1. **GitHub Integration:** Projects dynamisch laden
2. **Content:** CV Infos einfügen
3. **Deploy:** Auf Vercel pushen
4. **Domain:** Custom Domain (Optional)

---

**Server läuft auf:** `http://localhost:3000`  
**Live wird bei:** Vercel nach GitHub Push
