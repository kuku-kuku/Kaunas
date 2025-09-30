// src/pages/About.jsx
import React, { useRef, useLayoutEffect, useState, forwardRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundWrapper from '../components/BackgroundWrapper'; // pakoreguok kelią jei reikia

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
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0077cc] mb-6">Istorija</h2>
              <div className="space-y-5 text-lg text-gray-800 leading-relaxed text-justify">
                <p>
                  „FA KAUNAS" įkurta 2022 m. lapkritį. Akademijos steigėjais tapo buvęs profesionalus
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
            <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="py-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0077cc] text-center mb-10">Vertybės</h2>

              {/* Mobile */}
              <div className="block md:hidden">
                <ValuesMapSVGMobile />
              </div>

              {/* Desktop/Tablet */}
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

/* ================== MOBILE ================== */
function ValuesMapSVGMobile() {
  const [active, setActive] = useState(null);

  const RADIUS = 140;
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
    { id: 'top',    label: 'Bendruomeniškumas', x: 0, y: -RADIUS, dir: 'up',
      desc: 'Tik dirbdami drauge su partneriais, tėveliais ir visais futbolo entuziastais galime pasiekti savo tikslus.' },
    { id: 'right',  label: 'Disciplina', x:  RADIUS, y: 0, dir: 'right',
      desc: 'Nuoseklus, kryptingas darbas su didele aistra ir motyvacija kiekvieną dieną.' },
    { id: 'bottom', label: 'Supratingumas', x: 0, y:  RADIUS, dir: 'down',
      desc: 'Kantrybė vieni kitų atžvilgiu.' },
    { id: 'left',   label: 'Dėkingumas', x: -RADIUS, y: 0, dir: 'left',
      desc: 'Palaikyti vieni kitus kiekviename žingsnyje, atsidėkoti už suteiktas galimybes, pagalbą, paprastus, kasdienius dalykus.' },
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
      <svg className="w-full aspect-square" viewBox="-200 -200 400 400" preserveAspectRatio="xMidYMid meet" aria-labelledby="valuesMapMobile">
        <title id="valuesMapMobile">FA Kaunas vertybių žemėlapis (mobilus)</title>

        {/* Linijos */}
        <g opacity="0.95" stroke={STROKE} strokeWidth={STROKE_W} strokeLinecap="round" fill="none">
          {nodes.filter(n => n.id !== 'center').map(n => {
            const { sx, sy, ex, ey } = segment(n);
            return <line key={`m-line-${n.id}`} x1={sx} y1={sy} x2={ex} y2={ey} />;
          })}
        </g>

        {/* Centras */}
        <g transform="translate(0,0)" onClick={() => onPillClick('center')} style={{ cursor: 'pointer' }}>
          <rect x={-CENTER_W/2} y={-CENTER_H/2} width={CENTER_W} height={CENTER_H} rx={CENTER_H/2} ry={CENTER_H/2} fill="#0077cc" />
          <rect x={-CENTER_W/2 - 6} y={-CENTER_H/2 - 6} width={CENTER_W + 12} height={CENTER_H + 12} rx={(CENTER_H+12)/2} ry={(CENTER_H+12)/2} fill="none" stroke="rgba(125, 211, 252, 0.35)" strokeWidth="3" />
          <text x="0" y="5" textAnchor="middle" fontWeight="700" fill="#fff" style={{ fontSize: 12 }}>PAGARBA</text>
        </g>

        {nodes.filter(n => n.id !== 'center').map(n => (
          <ClickableNodePill key={`m-pill-${n.id}`} x={n.x} y={n.y} label={n.label} onClick={() => onPillClick(n.id)} />
        ))}
      </svg>

      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="mt-6 px-4"
          >
            <div className="mx-auto max-w-[560px] min-h-[80px] rounded-2xl border border-sky-100 bg-white px-5 py-4 text-center text-sm text-gray-700 leading-relaxed shadow-md flex items-center justify-center">
              {nodes.find(n => n.id === active)?.desc}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ================== DESKTOP/TABLET ================== */
function ValuesMapDesktop() {
  const RADIUS_V = 280;

  const nodesBase = [
    { id: 'top',    label: 'Bendruomeniškumas', desc: 'Tik dirbdami drauge su partneriais, tėveliais ir visais futbolo entuziastais galime pasiekti savo tikslus.', dir: 'up' },
    { id: 'right',  label: 'Disciplina',        desc: 'Nuoseklus, kryptingas darbas su didele aistra ir motyvacija kiekvieną dieną.', dir: 'right' },
    { id: 'bottom', label: 'Supratingumas',     desc: 'Kantrybė vieni kitų atžvilgiu.', dir: 'down' },
    { id: 'left',   label: 'Dėkingumas',        desc: 'Palaikyti vieni kitus kiekviename žingsnyje, atsidėkoti už suteiktas galimybes, pagalbą, paprastus, kasdienius dalykus.', dir: 'left' },
  ];

  const center = { label: 'PAGARBA', desc: 'Gerbti vieni kitus, komandos draugus, varžovus, aplinką kurioje esame.' };

  const GAP = 12;
  const STROKE = 'rgb(14, 165, 233)';
  const STROKE_W = 6;

  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const pillRefs = { top: useRef(null), right: useRef(null), bottom: useRef(null), left: useRef(null) };

  const [positions, setPositions] = useState({
    top: { x: 0, y: -RADIUS_V },
    bottom: { x: 0, y: RADIUS_V },
    left: { x: -360, y: 0 },
    right: { x: 360, y: 0 },
  });

  const [lines, setLines] = useState([]);
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });

  const recalc = () => {
    if (!containerRef.current || !centerRef.current) return;

    const crect = containerRef.current.getBoundingClientRect();
    const cRect = centerRef.current.getBoundingClientRect();

    const cx = crect.width / 2;
    const cy = crect.height / 2;
    setContainerSize({ w: crect.width, h: crect.height });

    // Naudojame WRAPPER (fiksuotas dydis) rect'us — jie nepriklauso nuo hover transformų
    const topRect = pillRefs.top.current?.getBoundingClientRect();
    const bottomRect = pillRefs.bottom.current?.getBoundingClientRect();
    const leftRect = pillRefs.left.current?.getBoundingClientRect();
    const rightRect = pillRefs.right.current?.getBoundingClientRect();

    const centerHalfV = cRect.height / 2;
    const topHalfV = (topRect?.height || 70) / 2;
    const bottomHalfV = (bottomRect?.height || 70) / 2;

    const visibleVTop = RADIUS_V - (centerHalfV + topHalfV);
    const visibleVBottom = RADIUS_V - (centerHalfV + bottomHalfV);
    const VISIBLE_LEN = Math.max(0, Math.round((visibleVTop + visibleVBottom) / 2));

    const centerHalfH = cRect.width / 2;
    const leftHalfH = (leftRect?.width || 340) / 2;
    const rightHalfH = (rightRect?.width || 340) / 2;

    const xLeft = -(centerHalfH + VISIBLE_LEN + leftHalfH);
    const xRight = (centerHalfH + VISIBLE_LEN + rightHalfH);

    const newPositions = {
      top: { x: 0, y: -RADIUS_V },
      bottom: { x: 0, y: RADIUS_V },
      left: { x: xLeft, y: 0 },
      right: { x: xRight, y: 0 },
    };
    setPositions(newPositions);

    const all = [
      { id: 'top', dir: 'up', dx: newPositions.top.x, dy: newPositions.top.y, pill: topRect },
      { id: 'bottom', dir: 'down', dx: newPositions.bottom.x, dy: newPositions.bottom.y, pill: bottomRect },
      { id: 'left', dir: 'left', dx: newPositions.left.x, dy: newPositions.left.y, pill: leftRect },
      { id: 'right', dir: 'right', dx: newPositions.right.x, dy: newPositions.right.y, pill: rightRect },
    ];

    const newLines = all.map(n => {
      const len = Math.hypot(n.dx, n.dy) || 1;
      const ux = n.dx / len;
      const uy = n.dy / len;

      const centerHalf = (n.dir === 'left' || n.dir === 'right') ? (cRect.width / 2) : (cRect.height / 2);
      const pillHalf = (n.dir === 'left' || n.dir === 'right') ? ((n.pill?.width || 340) / 2) : ((n.pill?.height || 70) / 2);

      const rStart = centerHalf + GAP;
      const rEnd = len - pillHalf - GAP;

      const x1 = cx + ux * rStart;
      const y1 = cy + uy * rStart;
      const x2 = cx + ux * rEnd;
      const y2 = cy + uy * rEnd;

      return { id: n.id, x1, y1, x2, y2 };
    });

    setLines(newLines);
  };

  useLayoutEffect(() => {
    recalc();
    const onResize = () => recalc();
    window.addEventListener('resize', onResize);

    // Stebim tik konteinerį ir centrą (išoriniai piliai neskaičiuojami on-hover)
    const ro = new ResizeObserver(() => recalc());
    if (containerRef.current) ro.observe(containerRef.current);
    if (centerRef.current) ro.observe(centerRef.current);

    const t = setTimeout(recalc, 80);
    return () => { window.removeEventListener('resize', onResize); ro.disconnect(); clearTimeout(t); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const t = setTimeout(recalc, 200);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <div ref={containerRef} className="relative mx-auto max-w-6xl min-h-[720px]">
      {/* Linijos */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox={`0 0 ${Math.max(containerSize.w,1)} ${Math.max(containerSize.h,1)}`} preserveAspectRatio="none" aria-hidden>
        <g stroke={STROKE} strokeWidth={STROKE_W} strokeLinecap="round" fill="none" opacity="0.95">
          {lines.map(l => (<line key={`d-${l.id}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />))}
        </g>
      </svg>

      {/* Centras */}
      <InlineHoverPill center ref={centerRef} x={0} y={0} label={center.label} desc={center.desc} bg="blue" />

      {/* Išorinės kapsulės */}
      <InlineHoverPill ref={pillRefs.top}    x={positions.top.x}    y={positions.top.y}    label={nodesBase[0].label} desc={nodesBase[0].desc} />
      <InlineHoverPill ref={pillRefs.right}  x={positions.right.x}  y={positions.right.y} label={nodesBase[1].label} desc={nodesBase[1].desc} />
      <InlineHoverPill ref={pillRefs.bottom} x={positions.bottom.x} y={positions.bottom.y} label={nodesBase[2].label} desc={nodesBase[2].desc} />
      <InlineHoverPill ref={pillRefs.left}   x={positions.left.x}   y={positions.left.y}  label={nodesBase[3].label} desc={nodesBase[3].desc} />
    </div>
  );
}

/* ================== „Pill“ komponentas: fiksuotas wrapper + animuojamas vidus ================== */
const InlineHoverPill = forwardRef(function InlineHoverPill(
  { x, y, label, desc, center = false, bg = 'white' },
  ref
) {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = bg === 'blue'
    ? 'bg-[#2f6fd1] text-white ring-4 ring-sky-100'
    : 'bg-white text-gray-900 border border-sky-100';

  // Fiksuoti responsive dydžiai (matuojamas tik WRAPPER!)
  const widthClasses  = center ? 'w-[300px] md:w-[360px] lg:w-[380px]' : 'w-[280px] md:w-[320px] lg:w-[340px]';
  const heightClasses = center ? 'h-[86px] md:h-[88px]  lg:h-[92px]'  : 'h-[64px]  md:h-[68px]  lg:h-[72px]';

  return (
    <div
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* WRAPPER — fiksuotas, be transformų (matuojamas per ref) */}
      <div ref={ref} className={`relative ${widthClasses} ${heightClasses}`}>
        {/* Vidinis animuojamas turinys — transformuojasi, bet nematuojamas */}
        <motion.div
          className={`absolute inset-0 rounded-full shadow-lg overflow-hidden flex items-center justify-center ${baseClasses}`}
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? (center ? 1.05 : 1.08) : 1 }}
          transition={{ type: 'spring', stiffness: 180, damping: 22, mass: 0.9 }}
          style={{ willChange: 'transform' }}
        >
          {/* Label */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center px-6"
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <p className={`${center ? 'text-base md:text-lg font-extrabold tracking-wide' : 'font-semibold text-sm md:text-base'} text-center`}>
              {label}
            </p>
          </motion.div>

          {/* Description */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.25, delay: isHovered ? 0.05 : 0 }}
          >
            <p className={`text-xs md:text-sm ${bg === 'blue' ? 'text-white' : 'text-gray-700'} text-center leading-relaxed`}>
              {desc}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
});

/* ================== SVG pill (mobile) ================== */
function ClickableNodePill({ x, y, label, onClick, fontSize = 10.5, minWidth = 80 }) {
  const paddingX = 14;
  const approxCharW = 6;
  const w = Math.max(minWidth, label.length * approxCharW + paddingX * 2);
  const h = 28;
  const rx = h / 2;

  return (
    <g transform={`translate(${x}, ${y})`} onClick={onClick} style={{ cursor: 'pointer' }}>
      <rect x={-w/2} y={-h/2} width={w} height={h} rx={rx} ry={rx} fill="#ffffff" stroke="rgba(125, 211, 252, 0.65)" strokeWidth="2" />
      <text x="0" y="4" textAnchor="middle" fontWeight="600" fill="#111827" style={{ fontSize: fontSize }}>
        {label}
      </text>
    </g>
  );
}
