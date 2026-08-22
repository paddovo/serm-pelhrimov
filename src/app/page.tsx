import React from 'react';
import Link from 'next/link';
import { Shield, Swords, Calendar, Users, CheckCircle2, ArrowRight, ChevronRight, Zap, Target, BookOpen, Lock } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-slate-950 overflow-hidden pt-16 pb-20 border-b border-amber-900/30">
        {/* Dark radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/30 via-slate-950/95 to-slate-950 z-10" />

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold tracking-widest uppercase">
            <Shield className="w-4 h-4" /> Škola historického šermu Pelhřimov
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif text-slate-100 uppercase leading-tight">
            NAUČ SE BOJOVAT MEČEM.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              POZNÁVEJ HISTORII.
            </span><br />
            VYZKOUŠEJ SI TO NA VLASTNÍ KŮŽI.
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 font-light leading-relaxed">
            Historický šerm podle dochovaných evropských pramenů. Trénujeme techniku, pohyb, taktiku i bojové myšlení. Nemusíš mít žádné předchozí zkušenosti.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pro-zacatecniky"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-8 py-4 rounded uppercase tracking-wider text-base shadow-xl shadow-amber-500/20 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              CHCI SI ŠERM VYZKOUŠET <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/treninky"
              className="w-full sm:w-auto border border-slate-700 hover:border-amber-500/50 bg-slate-900/80 hover:bg-slate-900 text-slate-200 font-bold px-8 py-4 rounded uppercase tracking-wider text-base transition-all flex items-center justify-center gap-2"
            >
              PROHLÉDNOUT TRÉNINKY
            </Link>
          </div>

          {/* Quick Info Strip */}
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left border-t border-slate-800/80 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <Swords className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
              <div>
                <h2 className="font-bold text-slate-200 text-sm uppercase">Dlouhý meč & Tesák</h2>
                <p className="text-xs text-slate-400">Trénink jednoručních i obouručních zbraní</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
              <div>
                <h2 className="font-bold text-slate-200 text-sm uppercase">Pro začátečníky</h2>
                <p className="text-xs text-slate-400">Vše vysvětlíme krok za krokem</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
              <div>
                <h2 className="font-bold text-slate-200 text-sm uppercase">Úterý & Pátek</h2>
                <p className="text-xs text-slate-400">Pelhřimovská sportovní hala</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT IS HEMA (DISTINCTION FROM FILM SHOWN) */}
      <section className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">
              Reálné bojové umění
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-100 uppercase tracking-tight">
              Co je historický šerm?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Vyučujeme evropské historické bojové umění (HEMA). Náš šerm vychází z dochovaných rukopisů a bojových manuálů středověkých a renesančních mistrů.
            </p>
          </div>

          {/* Distinction Banner */}
          <div className="bg-slate-950 border border-amber-900/40 rounded-xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-block bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase px-3 py-1 rounded">
                Historický šerm ≠ Šerm pro film
              </div>
              <h3 className="text-2xl font-bold font-serif text-slate-100 uppercase">
                Nehrajeme divadlo. Učíme vás bojovat.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Při filmovém nebo scénickém šermu je cíl mečem se minout nebo vytvořit naučený efekt pro diváka. V našem šermu se učíte skutečnou mechaniku úderu, obranu, kryty v vazbě, odstup a časování tak, jak se reálně bojovalo.
              </p>
            </div>

            <div className="space-y-3">
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-200 text-xs uppercase">Historické prameny</h4>
                  <p className="text-xs text-slate-400">Studium manuálů (Fechtbuchů) Liechtenauera, Lecküchnera a dalších mistrů.</p>
                </div>
              </div>

              <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 flex items-start gap-3">
                <Target className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-200 text-xs uppercase">Skutečná biomechanika</h4>
                  <p className="text-xs text-slate-400">Efektivní přenos síly, rovnováha, časování (Tempus) a odstup (Mensur).</p>
                </div>
              </div>

              <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 flex items-start gap-3">
                <Lock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-200 text-xs uppercase">Bezpečnost na prvním místě</h4>
                  <p className="text-xs text-slate-400">Certifikované trenažéry, masky, prošívanice a speciální chrániče.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHY TRAIN WITH US (6 PILLARS) */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">
              Výhody tréninku
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-100 uppercase tracking-tight">
              Proč trénovat u nás
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-amber-500/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold font-serif text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-100 uppercase">Historické prameny</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Techniky vycházejí přímo z dochovaných evropských šermířských traktátů a historických manufaktury.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-amber-500/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold font-serif text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-100 uppercase">Skutečný trénink</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Nejde jen o pózování. Trénujeme pohyb, dynamiku, reakce, soustředění a reálný boj zblízka.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-amber-500/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold font-serif text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-100 uppercase">Pro začátečníky</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Nemusíš mít žádné předchozí zkušenosti ani vlastní vybavení. Vše tě naučíme od základu.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-amber-500/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold font-serif text-lg">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-100 uppercase">Skvělá parta</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Trénujeme společně, podporujeme se a v tělocvičně panuje přátelská a motivující atmosféra.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-amber-500/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold font-serif text-lg">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-100 uppercase">Bezpečnost</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Používáme certifikované trenažéry a výuku přizpůsobujeme možnostem a tempu každého jednotlivce.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-amber-500/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold font-serif text-lg">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-100 uppercase">Historie v praxi</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Historii si nečteme jen z knih. Zkoušíme ji aktivně pochopit reálným pohybem a zbraní v ruce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE SECTION */}
      <section className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">
              Tréninkový rozvrh
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif uppercase tracking-tight text-slate-100">
              Tréninky v Pelhřimově
            </h2>
            <p className="text-slate-400 text-sm">
              Trénujeme v tělocvičně Pelhřimovské sportovní haly. První trénink si můžeš přijít vyzkoušet zdarma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.schedules.map((schedule) => (
              <div
                key={schedule.id}
                className="bg-slate-950 rounded-lg p-6 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-amber-500/20 text-amber-400 font-bold px-3 py-1 rounded text-xs uppercase tracking-wider">
                      {schedule.day}
                    </span>
                    <span className="text-xs text-slate-300 font-mono">
                      {schedule.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-serif text-slate-100">
                    {schedule.title}
                  </h3>
                  <p className="text-xs text-amber-400 font-medium">
                    Zbraň: {schedule.weapon} | {schedule.level}
                  </p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {schedule.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">Místo: {schedule.location}</span>
                  <Link
                    href={`/rezervace?schedule=${schedule.id}`}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded text-xs uppercase tracking-wider"
                  >
                    Rezervovat
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="py-20 bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-slate-950 border-b border-amber-900/30">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-100 uppercase tracking-tight">
            Přijď na svůj první trénink
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            První trénink je zdarma a nezávazný. Nemusíš mít vlastní meč ani zbroj. Stačí ti běžné sportovní oblečení a chuť to zkusit.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/pro-zacatecniky"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-8 py-4 rounded uppercase tracking-wider text-sm shadow-xl shadow-amber-500/20 hover:scale-105 transition-all"
            >
              CHCI SI ŠERM VYZKOUŠET
            </Link>
            <Link
              href="/prihlaska"
              className="border border-slate-700 hover:border-amber-500 text-slate-200 font-bold px-8 py-4 rounded uppercase tracking-wider text-sm transition-all"
            >
              PŘIHLÁŠKA DO ŠKOLY
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
