# 🚀 MOI - Deployment Guide

> Schritt-für-Schritt Anleitung zum Deployen von MOI auf verschiedenen Plattformen

---

## 🎯 Deployment-Optionen

| Platform | Zeit | Schwierigkeit | Kosten | Rating |
|----------|------|---|--------|--------|
| **Vercel** | 30 Sekunden | 🟢 Sehr einfach | Kostenlos | ⭐⭐⭐⭐⭐ |
| **Railway** | 2 Minuten | 🟡 Einfach | $5+/Monat | ⭐⭐⭐⭐ |
| **Docker** | 5 Minuten | 🟡 Mittel | Variabel | ⭐⭐⭐ |
| **Heroku** | 3 Minuten | 🟢 Einfach | €7/Monat | ⭐⭐ (Legacy) |

**Empfehlung:** ➡️ **Vercel** für Anfänger (am einfachsten)

---

## 1️⃣ Vercel Deployment (EMPFOHLEN)

### Schritt 1: Vercel CLI installieren

```bash
npm install -g vercel
```

### Schritt 2: Mit Vercel verbinden

```bash
vercel login
```

Folge dem Browser-Prompt:
1. Gehe zu https://vercel.com/signup
2. Sign up oder Log in
3. Bestätige in deinem Email-Inbox

### Schritt 3: Projekt deployen

```bash
# Erste Deployment
vercel

# Oder direkt zu Production
vercel --prod
```

**Follow the prompts:**
```
? Set up and deploy "~/MOI 10.5.2026"? [Y/n] y
? Which scope do you want to deploy to? [Your Team]
? Link to existing project? [y/N] n
? What's your project's name? moi-bot
? In which directory is your code? [./]
```

### Schritt 4: Environment Variables setzen

**Option A - Via CLI:**
```bash
vercel env add ANTHROPIC_API_KEY
# Paste dein API Key
```

**Option B - Via Dashboard:**
1. Gehe zu https://vercel.com/dashboard
2. Wähle "moi-bot" Projekt
3. Settings → Environment Variables
4. Füge hinzu:
   - `ANTHROPIC_API_KEY` = dein Key
   - `NODE_ENV` = production
   - `PORT` = 3000
   - `CORS_ORIGIN` = https://your-domain.vercel.app

### Schritt 5: Redeploy mit Secrets

```bash
vercel --prod
```

### ✅ Fertig!

Dein Bot läuft auf:
```
https://moi-bot.vercel.app
https://moi-bot-[random].vercel.app
```

**Custom Domain hinzufügen:**
1. Dashboard → Settings → Domains
2. Domain eingeben
3. DNS Records aktualisieren
4. Warten auf Verifikation (~ 24h)

---

## 2️⃣ Railway Deployment

### Schritt 1: Railway CLI installieren

```bash
npm install -g railway
```

### Schritt 2: Mit Railway verbinden

```bash
railway login
```

Folge dem Auth-Prozess

### Schritt 3: Projekt erstellen

```bash
railway init
```

Wähle:
```
? What is your project name? MOI Bot
? Choose a template: Node.js
```

### Schritt 4: Environment Variables

```bash
railway variables set ANTHROPIC_API_KEY=sk-ant-xxxxx
railway variables set NODE_ENV=production
railway variables set PORT=3000
```

### Schritt 5: Deployen

```bash
railway up
```

### ✅ Fertig!

Öffne: https://railway.app/dashboard

---

## 3️⃣ Docker Deployment

### Schritt 1: Dockerfile erstellen

```dockerfile
# Dockerfile
FROM node:24-alpine

WORKDIR /app

# Copy files
COPY package*.json ./
COPY bot.js server.js index.html ./
COPY .env.example .env

# Install dependencies
RUN npm install --production

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start server
CMD ["npm", "start"]
```

### Schritt 2: Docker Image bauen

```bash
docker build -t moi-bot:latest .
```

### Schritt 3: Docker Container starten

```bash
docker run -p 3000:3000 \
  -e ANTHROPIC_API_KEY=sk-ant-xxxxx \
  -e NODE_ENV=production \
  moi-bot:latest
```

### Schritt 4: Mit Docker Compose (optional)

**docker-compose.yml:**
```yaml
version: '3.8'

services:
  moi-bot:
    image: moi-bot:latest
    ports:
      - "3000:3000"
    environment:
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
      - NODE_ENV=production
      - PORT=3000
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 3s
      retries: 3
```

**Starten:**
```bash
docker-compose up -d
```

---

## 4️⃣ Heroku Deployment (LEGACY - nicht empfohlen)

### Schritt 1: Heroku CLI installieren

```bash
curl https://cli-assets.heroku.com/install.sh | sh
```

### Schritt 2: Login

```bash
heroku login
```

### Schritt 3: App erstellen

```bash
heroku create moi-bot
```

### Schritt 4: Environment Variables

```bash
heroku config:set ANTHROPIC_API_KEY=sk-ant-xxxxx
heroku config:set NODE_ENV=production
```

### Schritt 5: Procfile erstellen

**Procfile:**
```
web: npm start
```

### Schritt 6: Deployen

```bash
git push heroku main
```

⚠️ **Hinweis:** Heroku wird kostenpflichtig (ab 2023). Verwende stattdessen Vercel/Railway.

---

## 🔐 Sicherheits-Checklist

Vor jedem Deployment überprüfen:

- [ ] `.env` ist **NICHT** in Git
- [ ] `ANTHROPIC_API_KEY` ist in Environment Variables (nicht in Code)
- [ ] CORS Origin ist korrekt gesetzt (https://...)
- [ ] Rate Limiting ist aktiviert
- [ ] HTTPS erzwungen
- [ ] Security Headers konfiguriert
- [ ] Logs werden gelöscht (nicht speichern)
- [ ] Database gehärtet (falls verwendet)
- [ ] API Keys sind geheim
- [ ] HTTPS in Produktion

---

## 📊 Performance Optimierungen

### 1. Compression aktivieren

In server.js:
```javascript
import compression from 'compression';
app.use(compression());
```

### 2. Caching

**vercel.json:**
```json
"headers": [
  {
    "source": "/public/(.*)",
    "headers": [
      { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
    ]
  }
]
```

### 3. CDN aktivieren

Vercel nutzt automatisch ein CDN.

### 4. Database Connection Pooling

Falls mit Database:
```javascript
// Reuse connections
const pool = new Database('bot.db', { 
  max: 10, 
  idleTimeoutMillis: 30000 
});
```

---

## 🆘 Troubleshooting

### Problem: "API Key not found"

**Lösung:**
```bash
# Vercel
vercel env add ANTHROPIC_API_KEY

# Railway
railway variables set ANTHROPIC_API_KEY=sk-ant-xxxxx

# Docker
docker run -e ANTHROPIC_API_KEY=sk-ant-xxxxx moi-bot
```

### Problem: "Port 3000 already in use"

```bash
# Lokal
lsof -i :3000
kill -9 <PID>

# Docker
docker ps
docker stop <CONTAINER_ID>
```

### Problem: "CORS Error"

**Lösung in .env:**
```
CORS_ORIGIN=https://your-domain.com
```

### Problem: "Build failed on Vercel"

Check logs:
```bash
vercel logs
```

Solution:
```bash
npm install
npm run build
vercel --prod
```

### Problem: "Memory exceeded"

Vercel limits: 1 GB RAM
Railway limits: depends on plan

Solutions:
- Stream responses (große Anfragen)
- Cache Results
- Upgrade Plan

---

## 📈 Monitoring nach Deployment

### Health Check

```bash
curl https://your-domain.com/health
# Should return: {"status":"ok","bot":"MOI v10.5.2026",...}
```

### Logs ansehen

**Vercel:**
```bash
vercel logs
```

**Railway:**
```bash
railway logs
```

**Docker:**
```bash
docker logs <CONTAINER_ID>
```

### Error Tracking

Sentry (optional):
```javascript
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV
});
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions (optional)

**.github/workflows/deploy.yml:**
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '24'
      
      - run: npm install
      - run: npm test
      
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## 📊 Cost Comparison

| Platform | Free Tier | Paid | Notes |
|----------|-----------|------|-------|
| Vercel | ✅ Kostenlos | $10+/mo | Beste Option |
| Railway | ✅ Kostenlos (7 Tage) | $5+/mo | Gut für Anfänger |
| Docker (Self-hosted) | ❌ | Variabel | Vollständige Kontrolle |
| Heroku | ❌ | €7+/mo | Legacy - nicht empfohlen |

---

## 🎯 Production Checklist

Vor Go-Live überprüfen:

- [ ] API Key konfiguriert & getestet
- [ ] CORS korrekt gesetzt
- [ ] Logs in Produktion konfiguriert
- [ ] Rate Limiting aktiv
- [ ] Backups konfiguriert (falls DB)
- [ ] Monitoring aktiv (Health Checks)
- [ ] Error Tracking (Sentry oder ähnlich)
- [ ] DNS / Custom Domain
- [ ] SSL Certificate (automatisch auf Vercel/Railway)
- [ ] Load Testing durchgeführt
- [ ] Security Scan durchgeführt
- [ ] Datenschutzerklärung live
- [ ] Monitoring Dashboard
- [ ] On-Call Policy
- [ ] Rollback Plan

---

## 📞 Support

**Probleme beim Deployen?**

1. Logs ansehen: `vercel logs` oder `railway logs`
2. Dokumentation: Siehe README.md
3. Support: contact@unwritten.studio
4. GitHub Issues: [Link zu Repo]

---

**Happy Deploying! 🚀**

*MOI v10.5.2026 - Deployment Guide*
