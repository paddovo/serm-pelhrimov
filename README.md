# Škola historického šermu Pelhřimov (www.sermpelhrimov.cz)

Klasický statický HTML web pro **Školu historického šermu Pelhřimov**.

- **Doména:** `www.sermpelhrimov.cz`
- **Architektura:** Samostatné HTML soubory, CSS (`css/style.css`), JavaScript (`js/`), Vercel (`vercel.json`)

---

## 📁 Struktura souborů

```
/
├── index.html            # Úvodní hlavní stránka
├── o-nas.html            # O škole
├── kurzy.html            # Tréninky a rozvrh
├── treninky.html         # Přesměrování na kurzy.html
├── galerie.html          # Fotogalerie s Lightboxem
├── kalendar-akci.html    # Kalendář akcí
├── kalendar.html         # Přesměrování na kalendar-akci.html
├── kontakt.html          # Kontakt a mapa haly
├── pro-zacatecniky.html  # První trénink & FAQ
├── discipliny.html       # Zbraně a disciplíny
├── ochrana-osobnich-udaju.html # GDPR
├── cookies.html          # Zásady cookies
├── admin/
│   └── index.html        # Neveřejná administrace
├── css/
│   └── style.css         # Hlavní CSS styl
├── js/
│   ├── main.js           # Menu a formulářový skript
│   ├── galerie.js        # Lightbox modal skript
│   ├── kalendar.js       # Načítání akcí z data/events.json
│   └── admin.js          # Skript pro administraci
└── data/
    └── events.json       # Datový soubor s akcemi
```

---

## ✏️ Jak ručně upravit stránku na GitHubu

1. Otevřete repozitář `paddovo/serm-pelhrimov` na GitHubu.
2. Klikněte na soubor, který chcete upravit (např. `o-nas.html`).
3. Klikněte na ikonu tužky **Edit**.
4. Upravte text a klikněte na **Commit changes**.
5. Vercel automaticky nasadí změnu na produkční doménu `www.sermpelhrimov.cz`.
