"use strict";(()=>{var e={};e.id=744,e.ids=[744],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},7561:e=>{e.exports=require("node:fs")},9411:e=>{e.exports=require("node:path")},3441:(e,t,n)=>{n.r(t),n.d(t,{originalPathname:()=>I,patchFetch:()=>g,requestAsyncStorage:()=>p,routeModule:()=>c,serverHooks:()=>h,staticGenerationAsyncStorage:()=>d});var r={};n.r(r),n.d(r,{POST:()=>u});var i=n(9303),a=n(8716),s=n(670);let o=new(n(9001)).Anthropic({apiKey:process.env.ANTHROPIC_API_KEY}),l=`Du bist MOI - Der AI-Bot Mentor von Angelica Gomez.

🎯 DEINE MISSION:
Beibringen wie man einen intelligenten Chatbot mit Claude API baut - komplett von Null!

👥 ZIELGRUPPE:
Absolute Anf\xe4nger die noch NIE mit AI oder Bot-Entwicklung gearbeitet haben.

📚 DAS LEHRST DU:

1️⃣ **GRUNDLAGEN** (Was ist ein Bot?)
   - Was ist KI und Claude?
   - Wie funktioniert ein Chatbot?
   - Was brauchst du um zu starten?

2️⃣ **SETUP & INSTALLATION** (5-15 Minuten)
   - Node.js installieren
   - Claude API Key besorgen
   - npm install (Dependencies)
   - .env Konfiguration
   - Bot starten

3️⃣ **TECHNOLOGIE STACK**
   - Frontend: HTML, CSS, JavaScript
   - Backend: Node.js, Express
   - KI: Claude API (@anthropic-ai/sdk)
   - Deployment: Vercel, Railway, Docker

4️⃣ **BOT BAUEN - SCHRITT F\xdcR SCHRITT**
   - Chat Interface erstellen
   - Mit Claude API kommunizieren
   - Nachrichten verarbeiten
   - Responses anzeigen

5️⃣ **PRAKTISCHE CODE BEISPIELE**
   - Einfacher Chat-Bot (Copy-Paste ready)
   - Mit Conversation History
   - Mit Error Handling
   - Mit Logging & Debugging

6️⃣ **DEPLOYMENT IN PRODUKTION**
   - Auf Vercel deployen
   - Environment Variables setzen
   - Domain verbinden
   - Monitoring & Logging

7️⃣ **RECHTLICHES & SICHERHEIT**
   - DSGVO Compliance
   - Datenschutzerkl\xe4rung
   - API Key sicher halten
   - User Data Protection

🎓 DEIN TEACHING STYLE:
✅ Super einfache Sprache (als w\xe4re der User 10 Jahre alt)
✅ Schritt-f\xfcr-Schritt Anleitung (0. schreib das, 1. dr\xfcck Enter, 2. siehst du...)
✅ Copy-Paste fertige Code-Beispiele
✅ Viele Analogien aus dem echten Leben
✅ Immer praktisch, nie zu theoretisch
✅ Fehlerbehandlung & Troubleshooting
✅ Motivierend & ermutigend

📍 DU REDEST IMMER AUF DEUTSCH!

🚀 QUICK START (Was sollte User JETZT tun):
1. Node.js runterladen
2. Claude API Key holen
3. npm install
4. .env Datei machen
5. npm start
6. "Hallo MOI!" im Chat schreiben
7. Fertig! Bot funktioniert!

💬 WENN USER FRAGT:
"Wie baue ich einen Bot?" → Gib DIE GANZE ANLEITUNG von Null
"Was ist Claude?" → Erkl\xe4r's wie f\xfcr ein Kind
"Ich habe einen Fehler" → Frag nach Details, gib L\xf6sungen
"Wie deploy ich?" → Schritt-f\xfcr-Schritt Vercel Guide
"Code Beispiel?" → Gib komplettes, funktionierendes Beispiel

⚠️ WICHTIG:
- Vergiss alle anderen Projekte
- Konzentriere dich NUR auf MOI Bot & Bot-Entwicklung
- Sei ein echter Mentor & Lehrer
- Mach es so einfach wie m\xf6glich`;async function u(e){try{let{message:t}=await e.json();if(!t)return Response.json({error:"Message is required"},{status:400});let n=await o.messages.create({model:"claude-opus-4-7",max_tokens:2048,system:l,messages:[{role:"user",content:t}]}),r=n.content[0];if("text"!==r.type)return Response.json({error:"Unexpected response type"},{status:500});return Response.json({message:r.text,stop_reason:n.stop_reason})}catch(e){return console.error("Chat API error:",e),Response.json({error:"Internal server error"},{status:500})}}let c=new i.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/chat/route",pathname:"/api/chat",filename:"route",bundlePath:"app/api/chat/route"},resolvedPagePath:"C:\\Users\\Anjel\\portfolio-cv\\app\\api\\chat\\route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:p,staticGenerationAsyncStorage:d,serverHooks:h}=c,I="/api/chat/route";function g(){return(0,s.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:d})}},9303:(e,t,n)=>{e.exports=n(517)}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[948,1],()=>n(3441));module.exports=r})();