import React, { useRef, useLayoutEffect, useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

              {/* Mobile: 100% SVG + centrinė kortelė apačioje */}
              <div className="block md:hidden">
                <ValuesMapSVGMobile />
              </div>

              {/* Desktop/Tablet: burbulas plečiasi ir content’as keičiasi viduje */}
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

/* ================== MOBILE: SVG kaip buvo + aprašymas CENTRE apačioje ================== */

function ValuesMapSVGMobile() {
  const [active, setActive] = useState(null);

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
    { id: 'center', label: 'PAGARBA', x: 0, y: 0, dir: 'center',
      desc: 'Gerbti vieni kitus, komandos draugus, varžovus, aplinką kurioje esame.' },
    { id: 'top',    label: 'Bendruomeniškumas', x: 0,    y: -ry, dir: 'up',
      desc: 'Tik dirbdami drauge su partneriais, tėveliais ir visais futbolo entuziastais galime pasiekti savo tikslus.' },
    { id: 'right',  label: 'Disciplina',        x:  rx,  y:   0, dir: 'right',
      desc: 'Nuoseklus, kryptingas darbas su didele aistra ir motyvacija kiekvieną dieną.' },
    { id: 'left',   label: 'Dėkingumas',        x: -rx,  y:   0, dir: 'left',
      desc: 'Palaikyti vieni kitus kiekviename žingsnyje, atsidėkoti už suteiktas galimybes, pagalbą, paprastus, kasdienius dalykus.' },
    { id: 'bottom', label: 'Supratingumas',     x: 0,    y:  ry, dir: 'down',
      desc: 'Kantrybė vieni kitų atžvilgiu.' },
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

  const onPillClick = (id) => setActive((prev) => (prev === id ? null : id));

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
          {nodes.filter(n => n.id !== 'center').map(n => {
            const { sx, sy, ex, ey } = segment(n);
            return <line key={`m-line-${n.id}`} x1={sx} y1={sy} x2={ex} y2={ey} />;
          })}
        </g>

        {/* Centras (clickable) */}
        <g transform="translate(0,0)" onClick={() => onPillClick('center')} style={{ cursor: 'pointer' }}>
          <rect x={-CENTER_W/2} y={-CENTER_H/2} width={CENTER_W} height={CENTER_H} rx={CENTER_H/2} ry={CENTER_H/2} fill="#0077cc" />
          <rect x={-CENTER_W/2 - 6} y={-CENTER_H/2 - 6} width={CENTER_W + 12} height={CENTER_H + 12} rx={(CENTER_H+12)/2} ry={(CENTER_H+12)/2} fill="none" stroke="rgba(125, 211, 252, 0.35)" strokeWidth="3" />
          <text x="0" y="5" textAnchor="middle" fontWeight="700" fill="#fff" style={{ fontSize: 12 }}>
            PAGARBA
          </text>
        </g>

        {/* Išoriniai „piliai“ (clickable) */}
        {nodes.filter(n => n.id !== 'center').map(n => (
          <ClickableNodePill key={`m-pill-${n.id}`} x={n.x} y={n.y} label={n.label} onClick={() => onPillClick(n.id)} />
        ))}
      </svg>

      {/* CENTRINĖ kortelė apačioje — visada centre, su smooth animacija */}
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="mt-4 px-4"
          >
            <div className="mx-auto max-w-[560px] rounded-2xl border border-sky-100 bg-white px-4 py-3 text-center text-sm text-gray-700 leading-snug shadow-md">
              {nodes.find(n => n.id === active)?.desc}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ================== DESKTOP/TABLET: burbulas plečiasi tiek, kiek reikia (label ↔ desc viduje) ================== */

function ValuesMapDesktop() {
  const nodes = [
    {
      id: 'top',
      label: 'Bendruomeniškumas',
      desc: 'Tik dirbdami drauge su partneriais, tėveliais ir visais futbolo entuziastais galime pasiekti savo tikslus.',
      x: 0, y: -220, dir: 'up'
    },
    {
      id: 'right',
      label: 'Disciplina',
      desc: 'Nuoseklus, kryptingas darbas su didele aistra ir motyvacija kiekvieną dieną.',
      x: 320, y: 0, dir: 'right'
    },
    {
      id: 'left',
      label: 'Dėkingumas',
      desc: 'Palaikyti vieni kitus kiekviename žingsnyje, atsidėkoti už suteiktas galimybes, pagalbą, paprastus, kasdienius dalykus.',
      x: -320, y: 0, dir: 'left'
    },
    {
      id: 'bottom',
      label: 'Supratingumas',
      desc: 'Kantrybė vieni kitų atžvilgiu.',
      x: 0, y: 220, dir: 'down'
    }
  ];

  const center = {
    label: 'PAGARBA',
    desc: 'Gerbti vieni kitus, komandos draugus, varžovus, aplinką kurioje esame.',
  };

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
      {/* Linijos */}
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
      <InlineHoverPill
        center
        ref={centerRef}
        x={0}
        y={0}
        label={center.label}
        desc={center.desc}
        bg="blue"
      />

      {/* Išoriniai mazgai */}
      {nodes.map(n => (
        <InlineHoverPill
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

/* ================== Burbulas, kuris tikrai prasiplečia ir sutalpina tekstą ================== */

const InlineHoverPill = forwardRef(function InlineHoverPill(
  { x, y, label, desc, center = false, bg = 'white' },
  ref
) {
  const baseClasses =
    bg === 'blue'
      ? 'bg-[#0077cc] text-white ring-4 ring-sky-100'
      : 'bg-white text-gray-900 border border-sky-100';

  return (
    <div
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
    >
      <motion.div
        ref={ref}
        layout
        whileHover={{ scale: center ? 1.08 : 1.12 }}
        transition={{ type: 'spring', stiffness: 220, damping: 20, mass: 0.8 }}
        className={`group inline-flex items-center justify-center rounded-full shadow-md ${baseClasses}`}
      >
        {/* Vidaus dėžė plečiasi su turiniu */}
        <div className={`${center ? 'px-8 py-4' : 'px-6 py-3'} max-w-[32rem]`}>
          {/* Pavadinimas (default) */}
          <div className="group-hover:hidden transition-opacity duration-250 ease-out">
            <p className={`${center ? 'text-lg md:text-xl font-extrabold tracking-wide' : 'font-semibold'} text-center whitespace-nowrap`}>
              {label}
            </p>
          </div>

          {/* Aprašymas (hover) – NE absolute, kad konteineris išsiplėstų */}
          <div className="hidden group-hover:block">
            <p className={`text-sm md:text-base ${bg === 'blue' ? 'text-white' : 'text-gray-700'} text-center leading-snug whitespace-normal`}>
              {desc}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

/* ================== SVG „piliai“ (mobile) ================== */

function ClickableNodePill({ x, y, label, onClick, fontSize = 10.5, minWidth = 80 }) {
  const paddingX = 14;
  const approxCharW = 6;
  const w = Math.max(minWidth, label.length * approxCharW + paddingX * 2);
  const h = 28;
  const rx = h / 2;

  return (
    <g transform={`translate(${x}, ${y})`} onClick={onClick} style={{ cursor: 'pointer' }}>
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
