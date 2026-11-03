import { useCallback, useMemo, useRef, useState } from 'react';

// Small form-state hook shared by the trial and contact forms.
//
// - Errors come from a pure `validate(values)` function.
// - A field only shows its error after the visitor leaves it (blur) or tries to submit,
//   so nobody is scolded before they have typed anything.
// - On a failed submit, focus moves to the first invalid field.
export function useForm({ initialValues, validate, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' }); // idle | sending | success | error
  const formRef = useRef(null);

  const errors = useMemo(() => validate(values), [values, validate]);
  const visibleError = (name) => (touched[name] ? errors[name] : undefined);

  const handleChange = useCallback((e) => {
    const { name, type, value, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }));
  }, []);

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched((t) => (t[name] ? t : { ...t, [name]: true }));
  }, []);

  const setValue = useCallback((name, value) => setValues((v) => ({ ...v, [name]: value })), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const invalid = Object.keys(errors);
    if (invalid.length > 0) {
      setTouched(Object.fromEntries(Object.keys(values).map((k) => [k, true])));
      formRef.current?.querySelector(`[name="${invalid[0]}"]`)?.focus();
      return;
    }
    setStatus({ state: 'sending', message: '' });
    try {
      await onSubmit(values);
      setStatus({ state: 'success', message: '' });
    } catch (err) {
      setStatus({ state: 'error', message: err.message || '' });
    }
  };

  const reset = () => {
    setValues(initialValues);
    setTouched({});
    setStatus({ state: 'idle', message: '' });
  };

  // Spread onto inputs: <input {...field('email')} />
  const field = (name) => ({
    name,
    id: `f-${name}`,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
  });

  return { values, errors, visibleError, status, formRef, field, setValue, handleSubmit, reset };
}

// POST JSON to the Vercel mail function; throws with a readable message on failure.
export async function sendMail(payload) {
  const res = await fetch('/api/mail', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  let data = null;
  try {
    data = await res.json();
  } catch {
    data = null;
  }
  if (!res.ok || !data?.ok) {
    throw new Error(data?.error || 'Nepavyko išsiųsti');
  }
  return data;
}

export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
// Lithuanian and international numbers: at least 8 digits, optional +, spaces, dashes
export const isPhone = (v) => /^\+?[\d\s()-]+$/.test(v.trim()) && v.replace(/\D/g, '').length >= 8;
