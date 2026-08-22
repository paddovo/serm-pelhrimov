# Škola historického šermu Pelhřimov (www.sermpelhrimov.cz)

Samostatný webový projekt pro **Školu historického šermu Pelhřimov**.

- **Doména:** `www.sermpelhrimov.cz`
- **Technologie:** Next.js 14, TypeScript, Tailwind CSS, Lucide React
- **Hosting:** Vercel

---

## 🚀 Lokální spuštění

1. **Instalace závislostí:**
   ```bash
   npm install
   ```

2. **Spuštění vývojového serveru:**
   ```bash
   npm run dev
   ```
   Aplikace poběží na `http://localhost:3000`.

3. **Spuštění testů:**
   ```bash
   npm run test
   ```

4. **Kompilace (Build):**
   ```bash
   npm run build
   ```

---

## ⚙️ Konfigurace údajů (Ceny, Časy, Kontakty)

Veškeré měnitelné údaje o škole jsou odděleny od kódu v souboru:
`src/config/site.ts`

Upravit zde můžete:
- Název školy a popis
- Kontaktní e-mail, telefon a adresu
- Ceník semestrálního kurzovného
- Rozvrh tréninků (Úterý, Pátek, zbraně, kapacity)
- Odkazy na sociální sítě (Facebook, Instagram, YouTube)
- Odkaz na Aurinko Félag

---

## 🔐 Administrace a heslo

- **Administrační rozhraní:** `/admin`
- **Přístupové heslo:** Nastavte v prostředí Vercel jako `ADMIN_PASSWORD`. Výchozí hodnota je `serm2025`.

---

## 🌐 Deployment na Vercel a WEDOS DNS

### Vercel:
1. Vytvořte nový projekt ve Vercelu napojený na GitHub repozitář `paddovo/serm-pelhrimov`.
2. Přidejte doménu `www.sermpelhrimov.cz` i apex `sermpelhrimov.cz`.
3. V nastavení Environment Variables zadejte:
   - `ADMIN_PASSWORD`: Vaše bezpečné heslo pro správu.

### WEDOS DNS Nastavení:
U registrátora WEDOS v DNS správě domény `sermpelhrimov.cz` nastavte:
- **CNAME:** `www` -> `cname.vercel-dns.com`
- **A:** `@` -> `76.76.21.21`
