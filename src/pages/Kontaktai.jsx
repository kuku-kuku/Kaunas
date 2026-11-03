import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { site } from "../content";

export default function Kontaktai() {
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  const isValidEmail = (v) => /\S+@\S+\.\S{2,}/.test(v.trim());
  const errors = useMemo(() => {
    const e = {};
    if (form.name.trim().length < 3) e.name = "Vardas per trumpas (min. 3 simboliai)";
    if (!isValidEmail(form.email)) e.email = "Neteisingas el. pašto formatas";
    if (form.message.trim().length < 10) e.message = "Žinutė per trumpa (min. 10 simbolių)";
    if (form.website?.length > 0) e.spam = "Spam įtartina";
    return e;
  }, [form]);

  const isFormValid = Object.keys(errors).length === 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setStatus({ loading: true, ok: null, msg: "" });
    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      let data = null;
      try { data = await res.json(); } catch { data = null; }
      if (!res.ok || !data?.ok) {
        const details = typeof data?.details === "object" ? JSON.stringify(data.details) : (data?.details || "");
        throw new Error(details || data?.error || "Nepavyko išsiųsti");
      }
      setStatus({ loading: false, ok: true, msg: "Žinutė išsiųsta! Atsakysime kuo greičiau." });
      setForm({ name: "", email: "", message: "", website: "" });
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: err.message || "Klaida siunčiant žinutę" });
    }
  };

  return (
    <main className="bg-academy-black min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="pt-28 md:pt-36 pb-16 px-6 md:px-12 lg:px-24 border-b border-academy-line">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4">05 / Kontaktai</p>
            <h1 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4">
              Kontaktai
            </h1>
            <p className="text-lg text-fg-subtle font-light max-w-xl">
              Susisiekite su mumis – atsakysime į visus klausimus!
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ CONTENT ═══ */}
      <section className="px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Form */}
            <div>
              <p className="section-number mb-3">01</p>
              <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight mb-8">
                Parašykite mums
              </h2>

              {status.ok === true && (
                <div className="border border-green-500/30 bg-green-500/10 px-5 py-3 text-green-400 text-sm mb-6">
                  {status.msg}
                </div>
              )}
              {status.ok === false && (
                <div className="border border-red-500/30 bg-red-500/10 px-5 py-3 text-red-400 text-sm mb-6 break-words">
                  {status.msg || "Įvyko klaida. Bandykite dar kartą."}
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <input type="text" name="website" value={form.website} onChange={handleChange}
                  tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />

                <div>
                  <label htmlFor="contact-name" className="block text-[11px] uppercase tracking-[0.15em] text-fg-subtle mb-2">Vardas</label>
                  <input id="contact-name" type="text" name="name" value={form.name} onChange={handleChange}
                    className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500/50' : 'border-academy-line'} px-0 py-3 text-white focus:border-academy-blue transition-colors`}
                  />
                  {errors.name && <p className="mt-1 text-[11px] text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-[11px] uppercase tracking-[0.15em] text-fg-subtle mb-2">El. paštas</label>
                  <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange}
                    className={`w-full bg-transparent border-b ${errors.email ? 'border-red-500/50' : 'border-academy-line'} px-0 py-3 text-white focus:border-academy-blue transition-colors`}
                  />
                  {errors.email && <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[11px] uppercase tracking-[0.15em] text-fg-subtle mb-2">Jūsų žinutė</label>
                  <textarea id="contact-message" name="message" rows="4" value={form.message} onChange={handleChange}
                    className={`w-full bg-transparent border-b ${errors.message ? 'border-red-500/50' : 'border-academy-line'} px-0 py-3 text-white focus:border-academy-blue transition-colors resize-none`}
                  />
                  {errors.message && <p className="mt-1 text-[11px] text-red-400">{errors.message}</p>}
                </div>

                <button type="submit" disabled={!isFormValid || status.loading}
                  className={`btn-blue w-full justify-center ${(!isFormValid || status.loading) ? 'opacity-40 cursor-not-allowed' : ''}`}>
                  {status.loading ? "Siunčiama..." : "Siųsti žinutę"}
                </button>

                <p className="text-[11px] text-fg-subtle text-center">
                  Siųsdami sutinkate su duomenų tvarkymu pagal FA Kaunas privatumo politiką.
                </p>

                <p className="text-center text-[12px] text-fg-subtle">
                  Arba parašykite tiesiogiai:{" "}
                  <a className="text-accent-bright hover:underline"
                    href={`mailto:administracija@fakaunas.lt?subject=Kontaktas%20iš%20svetainės&body=Vardas:%20${encodeURIComponent(form.name || "")}%0AEl.%20paštas:%20${encodeURIComponent(form.email || "")}%0A%0AŽinutė:%0A${encodeURIComponent(form.message || "")}`}>
                    administracija@fakaunas.lt
                  </a>
                </p>
              </form>
            </div>

            {/* Map + Contact info */}
            <div className="space-y-10">
              <div>
                <p className="section-number mb-3">02</p>
                <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight mb-8">
                  Lokacija
                </h2>
                <div className="aspect-[4/3] w-full overflow-hidden border border-academy-line">
                  <iframe
                    title="FA Kaunas lokacija"
                    src={site.address.mapEmbed}
                    width="100%" height="100%" style={{ border: 0 }}
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-academy-line">
                {[
                  { label: 'Telefonas', value: site.contact.phone, href: site.contact.phoneHref },
                  { label: 'El. paštas', value: site.contact.email, href: site.contact.emailHref },
                  { label: 'Adresas', value: site.address.full, href: null },
                ].map((item, i) => (
                  <div key={i} className="bg-academy-black p-6">
                    <p className="text-[11px] uppercase tracking-[0.15em] text-fg-subtle mb-2">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white hover:text-accent-bright transition-colors text-sm break-all">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
