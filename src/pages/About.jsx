import React, { useRef, useLayoutEffect, useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import BackgroundWrapper from '../components/BackgroundWrapper';

export default function About() {
  return (
    <main className="text-black font-sans">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#0077cc] to-[#00bcd4] text-white py-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Apie mus</h1>
          <p className="text-lg font-light max-w-2xl">
            Sužinokite, kaip gimė mūsų akademija ir kokiomis vertybėmis vadovaujamės kasdien.
          </p>
        </motion.div>
      </section>

      {/* TURINYS */}
      <BackgroundWrapper>
        <section className="px-6 md:px-12 lg:px-24 py-20">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* ISTORIJA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0077cc] mb-6">Istorija</h2>
              <div className="space-y-5 text-lg text-gray-800 leading-relaxed text-justify">
                <p>
                  „FA KAUNAS“ įkurta 2022 m. lapkritį. Akademijos steigėjais tapo buvęs profesionalus
                  futbolininkas <strong>Gabrielius Zagurskas</strong> ir medikas, futbolo entuziastas{' '}
                  <strong>Vytautas Jakubauskas</strong>.
                </p>
                <p>
                  Vedami milžiniško entuziazmo ir svajonės suteikti galimybę jauniesiems futbolininkams
                  tapti profesionalais, steigėjai įkūrė savo futbolo akademiją, kurioje dirbama pagal
                  europinius standartus, siekiant vaikų svajonę paversti realybe.
                </p>
              </div>
            </motion.div>

            {/* VERTYBĖS */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="py-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0077cc] text-center mb-10">
                Vertybės
              </h2>

              {/* Mobile: 100% SVG */}
              <div className="block md:hidden">
                <ValuesMapSVGMobile />
              </div>

              {/* Desktop/Tablet: absoliutus layout + hover aprašymai */}
              <div className="hidden md:block">
                <ValuesMapDesktop />
              </div>
            </motion.section>
          </div>
        </section>
      </BackgroundWrapper>
    </main>
  );
}

/* ================== MOBILE: 100% SVG (skaluojasi) ================== */

function ValuesMapSVGMobile() {
  const rx = 140;
  const ry = 110;

  const CENTER_W = 76;
  const CENTER_H = 32;

  const PADDING_X = 14;
  const APPROX_CHAR_W = 6;
  const MIN_W = 78;
  const PILL_H = 28;

  const GAP = 10;
  const STROKE = 'rgb(14, 165, 233)';
  const STROKE_W = 5;

  const nodes = [
    { id: 'top',    label: 'Bendruomeniškumas', x: 0,    y: -ry, dir: 'up' },
    { id: 'right',  label: 'Aistra',            x:  rx,  y:   0, dir: 'right' },
    { id: 'left',   label: 'Dėkingumas',        x: -rx,  y:   0, dir: 'left' },
    { id: 'bottom', label: 'Supratingumas',     x: 0,    y:  ry, dir: 'down' },
  ];

  const pillWidth = (label) => Math.max(MIN_W, label.length * APPROX_CHAR_W + PADDING_X * 2);

  const segment = (n) => {
    const { x, y, dir, label } = n;
    const len = Math.hypot(x, y) || 1;
    const nx = x / len, ny = y / len;

    const centerHalf = (dir === 'left' || dir === 'right') ? CENTER_W / 2 : CENTER_H / 2;
    const pillHalf   = (dir === 'left' || dir === 'right') ? pillWidth(label) / 2 : PILL_H / 2;

    const rStart = centerHalf + GAP;
    const rEnd   = len - pillHalf - GAP;

    const sx = nx * rStart, sy = ny * rStart;
    const ex = nx * rEnd,   ey = ny * rEnd;

    return { sx, sy, ex, ey };
  };

  return (
    <div className="mx-auto w-full max-w-[560px]">
      <svg
        className="w-full aspect-square"
        viewBox="-200 -200 400 400"
        preserveAspectRatio="xMidYMid meet"
        aria-labelledby="valuesMapMobile"
      >
        <title id="valuesMapMobile">FA Kaunas vertybių žemėlapis (mobilus)</title>

        {/* Linijos */}
        <g opacity="0.95" stroke={STROKE} strokeWidth={STROKE_W} strokeLinecap="round" fill="none">
          {nodes.map(n => {
            const { sx, sy, ex, ey } = segment(n);
            return <line key={`m-${n.id}`} x1={sx} y1={sy} x2={ex} y2={ey} />;
          })}
        </g>

        {/* Centras */}
        <g transform="translate(0,0)">
          <rect x={-CENTER_W/2} y={-CENTER_H/2} width={CENTER_W} height={CENTER_H} rx={CENTER_H/2} ry={CENTER_H/2} fill="#0077cc" />
          <rect x={-CENTER_W/2 - 6} y={-CENTER_H/2 - 6} width={CENTER_W + 12} height={CENTER_H + 12} rx={(CENTER_H+12)/2} ry={(CENTER_H+12)/2} fill="none" stroke="rgba(125, 211, 252, 0.35)" strokeWidth="3" />
          <text x="0" y="5" textAnchor="middle" fontWeight="700" fill="#fff" style={{ fontSize: 12 }}>
            PAGARBA
          </text>
        </g>

        {/* Išoriniai „piliai“ */}
        {nodes.map(n => (
          <NodePill key={`m-pill-${n.id}`} x={n.x} y={n.y} label={n.label} fontSize={10} minWidth={MIN_W} />
        ))}
      </svg>
    </div>
  );
}

/* ================== DESKTOP/TABLET: absoliutus layoutas + tikslios linijos ================== */

function ValuesMapDesktop() {
  const nodes = [
    {
      id: 'top',
      label: 'Bendruomeniškumas',
      desc: 'Kuriame vieningą, palaikančią aplinką vaikams, tėvams ir treneriams.',
      x: 0, y: -220, dir: 'up'
    },
    {
      id: 'right',
      label: 'Aistra',
      desc: 'Žaidžiame su užsidegimu, motyvacija ir noru tobulėti kiekvieną dieną.',
      x: 320, y: 0, dir: 'right'
    },
    {
      id: 'left',
      label: 'Dėkingumas',
      desc: 'Vertiname darbą, pastangas ir galimybes, kurias turime kartu.',
      x: -320, y: 0, dir: 'left'
    },
    {
      id: 'bottom',
      label: 'Supratingumas',
      desc: 'Gerbiame skirtingus tempas ir poreikius, padedame vieni kitiems.',
      x: 0, y: 220, dir: 'down'
    },
  ];

  const GAP = 12;
  const STROKE = 'rgb(14, 165, 233)';
  const STROKE_W = 6;

  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const pillRefs = {
    top: useRef(null),
    right: useRef(null),
    left: useRef(null),
    bottom: useRef(null),
  };

  const [lines, setLines] = useState([]);
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const calc = () => {
      if (!containerRef.current || !centerRef.current) return;

      const crect = containerRef.current.getBoundingClientRect();
      const centerRect = centerRef.current.getBoundingClientRect();

      const cx = crect.width / 2;
      const cy = crect.height / 2;

      setContainerSize({ w: crect.width, h: crect.height });

      const getHalf = (dir, rect) =>
        (dir === 'left' || dir === 'right') ? rect.width / 2 : rect.height / 2;

      const newLines = nodes.map(n => {
        const pillRect = pillRefs[n.id].current?.getBoundingClientRect();
        if (!pillRect) return null;

        const centerHalf = getHalf(n.dir, centerRect);
        const pillHalf = getHalf(n.dir, pillRect);

        const dx = n.x;
        const dy = n.y;
        const len = Math.hypot(dx, dy) || 1;

        const rStart = centerHalf + GAP;
        const rEnd   = len - pillHalf - GAP;

        const x1 = cx + dx * (rStart / len);
        const y1 = cy + dy * (rStart / len);
        const x2 = cx + dx * (rEnd   / len);
        const y2 = cy + dy * (rEnd   / len);

        return { id: n.id, x1, y1, x2, y2 };
      }).filter(Boolean);

      setLines(newLines);
    };

    const rAF = requestAnimationFrame(calc);
    window.addEventListener('resize', calc);
    return () => {
      cancelAnimationFrame(rAF);
      window.removeEventListener('resize', calc);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative mx-auto max-w-6xl min-h-[520px]">
      {/* SVG linijos */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox={`0 0 ${Math.max(containerSize.w,1)} ${Math.max(containerSize.h,1)}`}
        preserveAspectRatio="none"
        aria-hidden
      >
        <g stroke={STROKE} strokeWidth={STROKE_W} strokeLinecap="round" fill="none" opacity="0.95">
          {lines.map(l => (
            <line key={`d-${l.id}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
          ))}
        </g>
      </svg>

      {/* Centras */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20">
        <div
          ref={centerRef}
          className="px-10 py-6 rounded-full bg-[#0077cc] text-white shadow-lg ring-4 ring-sky-100"
        >
          <p className="text-lg md:text-xl font-extrabold tracking-wide">PAGARBA</p>
        </div>
      </div>

      {/* Išoriniai mazgai su hover aprašymu */}
      {nodes.map(n => (
        <HoverPill
          key={n.id}
          ref={pillRefs[n.id]}
          x={n.x}
          y={n.y}
          label={n.label}
          desc={n.desc}
        />
      ))}
    </div>
  );
}

/* ================== Bendros „pilio“/tekstų dalys ================== */

function NodePill({ x, y, label, fontSize = 10.5, minWidth = 80 }) {
  const paddingX = 14;
  const approxCharW = 6;
  const w = Math.max(minWidth, label.length * approxCharW + paddingX * 2);
  const h = 28;
  const rx = h / 2;

  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        x={-w/2}
        y={-h/2}
        width={w}
        height={h}
        rx={rx}
        ry={rx}
        fill="#ffffff"
        stroke="rgba(125, 211, 252, 0.65)"
        strokeWidth="2"
      />
      <text
        x="0"
        y="4"
        textAnchor="middle"
        fontWeight="600"
        fill="#111827"
        style={{ fontSize: fontSize }}
      >
        {label}
      </text>
    </g>
  );
}

const HoverPill = forwardRef(function HoverPill(
  { x, y, label, desc },
  ref
) {
  return (
    <div
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
    >
      <motion.div
        ref={ref}
        whileHover={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 240, damping: 16 }}
        className="group relative"
      >
        {/* Pagrindinis burbulas */}
        <div className="px-6 py-3 rounded-full bg-white shadow-md border border-sky-100 transition-all duration-200 group-hover:shadow-xl group-hover:ring-2 group-hover:ring-sky-200">
          {/* Etiketė (matoma default) */}
          <p className="font-semibold text-gray-900 transition-opacity duration-150 group-hover:opacity-0 whitespace-nowrap">
            {label}
          </p>

          {/* Aprašymas (rodomas hover) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 w-[16rem] -translate-x-1/2 -translate-y-1/2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200">
            <div className="px-4 py-3 rounded-2xl bg-white/95 shadow-lg border border-sky-100">
              <p className="text-sm text-gray-700 text-center leading-snug">
                {desc}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});
