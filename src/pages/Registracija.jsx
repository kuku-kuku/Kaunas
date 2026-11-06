import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { Container, Reveal } from '../components/ui';
import { TextField, SelectField, CheckboxField, Honeypot } from '../components/form/Field';
import { trialPage as page, trialSection, site } from '../content';
import { getGroupBands } from '../lib/groups';
import { useForm, sendMail, isEmail, isPhone } from '../lib/useForm';

const OTHER = 'kita';

export default function Registracija() {
  const [params] = useSearchParams();
  const bands = useMemo(() => getGroupBands(), []);
  const preselectedBand = bands.find((b) => b.id === params.get('grupe'));
  const successRef = useRef(null);

  const yearOptions = useMemo(
    () => [
      ...bands.flatMap((b) => b.years).sort((a, b) => a - b).map((y) => ({ value: String(y), label: String(y) })),
      { value: OTHER, label: page.form.birthYear.other },
    ],
    [bands],
  );

  const validate = useCallback((v) => {
    const e = {};
    if (v.childName.trim().length < 2) e.childName = page.errors.childName;
    if (!v.birthYear) e.birthYear = page.errors.birthYear;
    if (v.parentName.trim().length < 2) e.parentName = page.errors.parentName;
    if (!isPhone(v.phone)) e.phone = page.errors.phone;
    if (v.email.trim() && !isEmail(v.email)) e.email = page.errors.email;
    if (!v.consent) e.consent = page.errors.consent;
    return e;
  }, []);

  const bandFor = (year) => bands.find((b) => b.years.includes(Number(year)));

  const form = useForm({
    initialValues: {
      childName: '',
      birthYear: '',
      parentName: '',
      phone: '',
      email: '',
      message: '',
      consent: false,
      website: '',
    },
    validate,
    onSubmit: async (v) => {
      if (v.website) return; // honeypot filled: pretend success, send nothing
      const band = bandFor(v.birthYear) ?? preselectedBand;
      try {
        await sendMail({
          type: 'trial',
          childName: v.childName.trim(),
          birthYear: v.birthYear === OTHER ? 'kiti metai' : v.birthYear,
          group: band ? band.label : '',
          parentName: v.parentName.trim(),
          phone: v.phone.trim(),
          email: v.email.trim(),
          message: v.message.trim(),
          consent: v.consent,
        });
      } catch {
        throw new Error(page.errors.send);
      }
    },
  });

  const { values, visibleError, status, field } = form;
  const band = bandFor(values.birthYear);
  const sending = status.state === 'sending';

  // When the "thank you" panel appears, move focus to it so screen readers announce it
  useEffect(() => {
    if (status.state === 'success') {
      successRef.current?.focus();
      successRef.current?.scrollIntoView({ block: 'center' });
    }
  }, [status.state]);

  let yearHint;
  if (band) yearHint = page.form.birthYear.groupHint(band.label);
  else if (values.birthYear === OTHER) yearHint = page.form.birthYear.otherHint;
  else if (preselectedBand) yearHint = page.form.birthYear.groupHint(preselectedBand.label);

  return (
    <main>
      <Seo title={page.seo.title} description={page.seo.description} />

      <section aria-labelledby="page-title" className="pb-section pt-32 md:pt-40">
        <Container className="grid gap-14 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-12">
          {/* Grid items are ordered intro → form → steps so the form comes right after the
              heading on phones; on desktop intro and steps share the left column. */}
          {/* ─── Intro ─── */}
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <p className="section-label mb-5">{page.eyebrow}</p>
            <h1 id="page-title" className="text-display text-display-lg text-fg">{page.title}</h1>
            <p className="mt-6 text-lead text-fg-muted">{page.lead}</p>
          </div>

          {/* ─── Form / success ─── */}
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
            {status.state === 'success' ? (
              <div
                ref={successRef}
                tabIndex={-1}
                role="status"
                className="rounded-2xl border border-line bg-surface-raised p-7 outline-none md:p-10"
              >
                <p className="text-eyebrow font-semibold uppercase text-success">Registracija gauta</p>
                <h2 className="mt-4 text-display text-display-md text-fg">{page.success.title(values.parentName.trim().split(' ')[0])}</h2>
                <p className="mt-4 text-fg-muted">{page.success.lead}</p>
                <ol className="mt-8 space-y-4">
                  {page.success.steps.map((s, i) => (
                    <li key={s} className="flex gap-4">
                      <span className="font-mono text-sm text-accent-bright">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-fg">{s}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link to="/akademija/ugdymo-programa" className="btn-academy">
                    {page.success.programs} <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                  </Link>
                  <button type="button" onClick={form.reset} className="btn-academy">
                    {page.success.another}
                  </button>
                </div>
              </div>
            ) : (
              <form
                ref={form.formRef}
                onSubmit={form.handleSubmit}
                noValidate
                aria-describedby="form-required-note"
                className="relative rounded-2xl border border-line bg-surface-raised p-6 md:p-10"
              >
                <Honeypot value={values.website} onChange={field('website').onChange} />

                <fieldset className="space-y-6">
                  <legend className="section-label mb-6">{page.form.childSection}</legend>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <TextField
                      {...field('childName')}
                      label={page.form.childName.label}
                      autoComplete={page.form.childName.autoComplete}
                      required
                      error={visibleError('childName')}
                    />
                    <SelectField
                      {...field('birthYear')}
                      label={page.form.birthYear.label}
                      placeholder={page.form.birthYear.placeholder}
                      options={yearOptions}
                      required
                      hint={yearHint}
                      error={visibleError('birthYear')}
                    />
                  </div>
                </fieldset>

                <fieldset className="mt-10 space-y-6 border-t border-line pt-10">
                  <legend className="section-label float-left mb-6 w-full">{page.form.parentSection}</legend>
                  <div className="clear-both grid gap-6 sm:grid-cols-2">
                    <TextField
                      {...field('parentName')}
                      label={page.form.parentName.label}
                      autoComplete={page.form.parentName.autoComplete}
                      required
                      error={visibleError('parentName')}
                    />
                    <TextField
                      {...field('phone')}
                      type="tel"
                      inputMode="tel"
                      label={page.form.phone.label}
                      autoComplete={page.form.phone.autoComplete}
                      hint={page.form.phone.hint}
                      required
                      error={visibleError('phone')}
                    />
                  </div>
                  <TextField
                    {...field('email')}
                    type="email"
                    inputMode="email"
                    label={page.form.email.label}
                    autoComplete={page.form.email.autoComplete}
                    error={visibleError('email')}
                  />
                  <TextField
                    {...field('message')}
                    as="textarea"
                    rows={4}
                    label={page.form.message.label}
                    placeholder={page.form.message.placeholder}
                  />
                  <CheckboxField
                    id="f-consent"
                    name="consent"
                    checked={values.consent}
                    onChange={field('consent').onChange}
                    onBlur={field('consent').onBlur}
                    error={visibleError('consent')}
                  >
                    {page.form.consent}{' '}
                    <Link to="/privatumo-politika" className="text-fg underline underline-offset-4 hover:text-accent-bright">
                      {page.form.consentLink}
                    </Link>
                    .
                  </CheckboxField>
                </fieldset>

                {status.state === 'error' && (
                  <p role="alert" className="mt-8 rounded-lg border border-danger/40 bg-danger/10 px-5 py-4 text-sm text-fg">
                    {status.message}{' '}
                    <a href={site.contact.phoneHref} className="underline underline-offset-4">{site.contact.phone}</a>
                  </p>
                )}

                <div className="mt-10 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p id="form-required-note" className="text-sm text-fg-subtle">{page.form.required}</p>
                  <button type="submit" disabled={sending} aria-disabled={sending} className="btn-blue justify-center disabled:cursor-wait disabled:opacity-60">
                    {sending ? page.form.sending : page.form.submit}
                    {!sending && <span className="btn-arrow" aria-hidden="true">&rarr;</span>}
                  </button>
                </div>
              </form>
            )}
          </Reveal>

          {/* ─── What happens next ─── */}
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2">
            <Reveal as="ol" delay={0.1} className="border-t border-line">
              {trialSection.steps.map((step, i) => (
                <li key={step.title} className="flex gap-5 border-b border-line py-5">
                  <span className="font-mono text-sm text-accent-bright">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="font-display text-xl font-extrabold uppercase text-fg">{step.title}</p>
                    <p className="mt-1 text-sm text-fg-muted">{step.text}</p>
                  </div>
                </li>
              ))}
            </Reveal>

            <Reveal delay={0.15} className="mt-10 text-sm text-fg-muted">
              <p>{page.alt}</p>
              <p className="mt-3 flex flex-col gap-1">
                <a href={site.contact.phoneHref} className="inline-flex min-h-[32px] items-center text-fg hover:text-accent-bright">
                  {site.contact.phone}
                </a>
                <a href={site.contact.emailHref} className="inline-flex min-h-[32px] items-center text-fg hover:text-accent-bright">
                  {site.contact.email}
                </a>
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}
