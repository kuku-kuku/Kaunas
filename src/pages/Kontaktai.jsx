import React, { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { Container, Reveal, MapEmbed } from "../components/ui";
import { TextField, Honeypot } from "../components/form/Field";
import { site, trialCta, facilities } from "../content";
import { useForm, sendMail, isEmail, isPhone } from "../lib/useForm";

const errorsText = {
  name: "Įrašykite savo vardą.",
  email: "Patikrinkite el. pašto adresą.",
  phone: "Patikrinkite telefono numerį.",
  message: "Parašykite bent kelis žodžius (min. 10 simbolių).",
  send: "Nepavyko išsiųsti žinutės. Bandykite dar kartą arba parašykite tiesiogiai",
};

export default function Kontaktai() {
  const successRef = useRef(null);

  const validate = useCallback((v) => {
    const e = {};
    if (v.name.trim().length < 2) e.name = errorsText.name;
    if (!isEmail(v.email)) e.email = errorsText.email;
    if (v.phone.trim() && !isPhone(v.phone)) e.phone = errorsText.phone;
    if (v.message.trim().length < 10) e.message = errorsText.message;
    return e;
  }, []);

  const form = useForm({
    initialValues: { name: "", email: "", phone: "", message: "", website: "" },
    validate,
    onSubmit: async (v) => {
      if (v.website) return; // honeypot
      try {
        await sendMail({ name: v.name.trim(), email: v.email.trim(), phone: v.phone.trim(), message: v.message.trim() });
      } catch {
        throw new Error(errorsText.send);
      }
    },
  });
  const { values, visibleError, status, field } = form;
  const sending = status.state === "sending";

  useEffect(() => {
    if (status.state === "success") successRef.current?.focus();
  }, [status.state]);

  const contactItems = [
    { label: "Telefonas", value: site.contact.phone, href: site.contact.phoneHref },
    { label: "El. paštas", value: site.contact.email, href: site.contact.emailHref },
    { label: "Adresas", value: site.address.full, href: null },
  ];

  return (
    <main>
      <Seo
        title="Kontaktai"
        description={`Susisiekite su FA Kaunas: ${site.contact.phone}, ${site.contact.email}, ${site.address.full}.`}
      />

      <section aria-labelledby="page-title" className="pb-section pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <p className="section-label mb-5">Kontaktai</p>
            <h1 id="page-title" className="text-display text-display-xl text-fg">Susisiekite</h1>
            <p className="mt-6 text-lead text-fg-muted">Atsakysime į visus klausimus apie treniruotes, grupes ir akademiją.</p>
            <p className="mt-4 text-fg-muted">
              Norite atvesti vaiką į treniruotę?{" "}
              <Link to={trialCta.to} className="text-accent-bright underline underline-offset-4 hover:text-white">
                {trialCta.longLabel}
              </Link>
            </p>
          </div>

          <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
            {/* ─── Form ─── */}
            <Reveal delay={0.1} className="lg:col-span-7">
              {status.state === "success" ? (
                <div ref={successRef} tabIndex={-1} role="status" className="rounded-2xl border border-line bg-surface-raised p-7 outline-none md:p-10">
                  <p className="text-eyebrow font-semibold uppercase text-success">Žinutė išsiųsta</p>
                  <h2 className="mt-4 text-display text-display-md text-fg">Ačiū!</h2>
                  <p className="mt-4 text-fg-muted">Atsakysime kuo greičiau.</p>
                  <button type="button" onClick={form.reset} className="btn-academy mt-8">
                    Rašyti naują žinutę
                  </button>
                </div>
              ) : (
                <form
                  ref={form.formRef}
                  onSubmit={form.handleSubmit}
                  noValidate
                  aria-labelledby="form-title"
                  className="relative space-y-6 rounded-2xl border border-line bg-surface-raised p-6 md:p-10"
                >
                  <h2 id="form-title" className="font-display text-2xl font-extrabold uppercase text-fg">Parašykite mums</h2>
                  <Honeypot value={values.website} onChange={field("website").onChange} />

                  <div className="grid gap-6 sm:grid-cols-2">
                    <TextField {...field("name")} label="Vardas" autoComplete="name" required error={visibleError("name")} />
                    <TextField {...field("email")} type="email" inputMode="email" label="El. paštas" autoComplete="email" required error={visibleError("email")} />
                  </div>
                  <TextField {...field("phone")} type="tel" inputMode="tel" label="Telefonas" autoComplete="tel" error={visibleError("phone")} />
                  <TextField {...field("message")} as="textarea" rows={5} label="Žinutė" required error={visibleError("message")} />

                  {status.state === "error" && (
                    <p role="alert" className="rounded-lg border border-danger/40 bg-danger/10 px-5 py-4 text-sm text-fg">
                      {status.message}{" "}
                      <a href={site.contact.emailHref} className="underline underline-offset-4">{site.contact.email}</a>.
                    </p>
                  )}

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-fg-subtle">
                      Siųsdami sutinkate su duomenų tvarkymu pagal{" "}
                      <Link to="/privatumo-politika" className="underline underline-offset-4 hover:text-white">privatumo politiką</Link>.
                    </p>
                    <button type="submit" disabled={sending} className="btn-blue shrink-0 justify-center disabled:cursor-wait disabled:opacity-60">
                      {sending ? "Siunčiama…" : "Siųsti žinutę"}
                      {!sending && <span className="btn-arrow" aria-hidden="true">&rarr;</span>}
                    </button>
                  </div>
                </form>
              )}
            </Reveal>

            {/* ─── Details + map ─── */}
            <Reveal delay={0.15} className="space-y-6 lg:col-span-5">
              <dl className="divide-y divide-line rounded-2xl border border-line">
                {contactItems.map((item) => (
                  <div key={item.label} className="p-6">
                    <dt className="text-eyebrow uppercase text-fg-subtle">{item.label}</dt>
                    <dd className="mt-2 text-lg text-fg">
                      {item.href ? (
                        <a href={item.href} className="hover:text-accent-bright">{item.value}</a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <MapEmbed
                src={site.address.mapEmbed}
                title="FA Kaunas žemėlapyje"
                address={site.address.full}
                mapsLink={facilities.mapsLink}
                className="aspect-[4/3]"
              />
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}
