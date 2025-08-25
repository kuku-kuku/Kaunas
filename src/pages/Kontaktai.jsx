import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import BackgroundWrapper from "../components/BackgroundWrapper";

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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          // honeypot į serverį nesiunčiam
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Nepavyko išsiųsti");

      setStatus({ loading: false, ok: true, msg: "Žinutė išsiųsta! Atsakysime kuo greičiau." });
      setForm({ name: "", email: "", message: "", website: "" });
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: err.message || "Klaida siunčiant žinutę" });
    }
  };

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
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md">Kontaktai</h1>
          <p className="mt-4 text-lg font-light">Susisiekite su mumis – atsakysime į visus klausimus!</p>
        </motion.div>
      </section>

      {/* TURINYS */}
      <BackgroundWrapper>
        <section className="min-h-screen px-6 py-24 text-black select-none">
          <div className="max-w-7xl mx-auto space-y-16">
            <motion.div
              className="grid md:grid-cols-2 gap-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Forma */}
              <div className="bg-[#f8fdff] p-8 rounded-xl shadow-md space-y-6">
                <h2 className="text-2xl font-semibold text-[#007bb5]">Parašykite mums</h2>

                {status.ok === true && (
                  <div className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-green-700">
                    {status.msg}
                  </div>
                )}
                {status.ok === false && (
                  <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-700">
                    {status.msg || "Įvyko klaida. Bandykite dar kartą."}
                  </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    tabIndex="-1"
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Vardas"
                      value={form.name}
                      onChange={handleChange}
                      className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 
                        ${errors.name ? "border-red-300 focus:ring-red-300" : "border-gray-300 focus:ring-[#007bb5]"}`}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="El. paštas"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 
                        ${errors.email ? "border-red-300 focus:ring-red-300" : "border-gray-300 focus:ring-[#007bb5]"}`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Jūsų žinutė..."
                      rows="4"
                      value={form.message}
                      onChange={handleChange}
                      className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 
                        ${errors.message ? "border-red-300 focus:ring-red-300" : "border-gray-300 focus:ring-[#007bb5]"}`}
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid || status.loading}
                    className={`w-full text-white font-semibold px-6 py-2 rounded-md transition 
                      ${!isFormValid || status.loading
                        ? "bg-[#007bb5]/60 cursor-not-allowed"
                        : "bg-[#007bb5] hover:bg-[#00689f]"}`}
                  >
                    {status.loading ? "Siunčiama..." : "Siųsti žinutę"}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Siųsdami sutinkate su duomenų tvarkymu pagal FA Kaunas privatumo politiką.
                  </p>

                  {/* Atsarginis variantas jei API neveiktų */}
                  <p className="text-center text-sm text-gray-500">
                    Arba parašykite tiesiogiai:{" "}
                    <a
                      className="text-[#007bb5] underline"
                      href={`mailto:administracija@fakaunas.lt?subject=Kontaktas%20iš%20svetainės&body=Vardas:%20${encodeURIComponent(
                        form.name || ""
                      )}%0AEl.%20paštas:%20${encodeURIComponent(
                        form.email || ""
                      )}%0A%0AŽinutė:%0A${encodeURIComponent(form.message || "")}`}
                    >
                      administracija@fakaunas.lt
                    </a>
                  </p>
                </form>
              </div>

              {/* Google Maps */}
              <div className="w-full h-[400px]">
                <iframe
                  title="FA Kaunas lokacija"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2295.5365087714223!2d23.915254976763413!3d54.938988372840025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e722a202feec5d%3A0x9e8f7c28479d5d76!2s%C5%BDeimenos%20g.%20165%2C%2049332%20Kaunas!5e0!3m2!1slt!2slt!4v1721208852185!5m2!1slt!2slt"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl shadow-md"
                ></iframe>
              </div>
            </motion.div>

            {/* Kontaktinė info */}
            <motion.div
              className="text-lg space-y-3 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p>
                <strong>Telefonas:</strong>{" "}
                <a href="tel:+37066527501" className="text-[#007bb5] hover:underline">
                  +37066527501
                </a>
              </p>
              <p>
                <strong>El. paštas:</strong>{" "}
                <a href="mailto:administracija@fakaunas.lt" className="text-[#007bb5] hover:underline">
                  administracija@fakaunas.lt
                </a>
              </p>
              <p>
                <strong>Adresas:</strong> Žeimenos g. 165, 49332 Kaunas
              </p>
            </motion.div>
          </div>
        </section>
      </BackgroundWrapper>
    </main>
  );
}
