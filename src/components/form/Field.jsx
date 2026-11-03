import React from 'react';
import { AlertCircle } from 'lucide-react';

// Accessible form controls: visible label tied to the input, required marker,
// optional hint, and an error that is announced and linked via aria-describedby.

const inputBase =
  'mt-2 block w-full rounded-lg border bg-surface px-4 py-3 text-base text-fg placeholder:text-fg-subtle transition-colors focus:border-accent-bright';

function describedBy(id, hint, error) {
  return [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined;
}

function FieldShell({ id, label, required, hint, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-fg">
        {label}
        {required ? (
          <span className="text-accent-bright" aria-hidden="true"> *</span>
        ) : (
          <span className="ml-1 text-fg-subtle">(neprivaloma)</span>
        )}
      </label>
      {hint && <p id={`${id}-hint`} className="mt-1 text-sm text-fg-subtle">{hint}</p>}
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-start gap-2 text-sm text-danger">
          <AlertCircle size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

export function TextField({ label, required, hint, error, as = 'input', className = '', ...props }) {
  const Tag = as;
  return (
    <FieldShell id={props.id} label={label} required={required} hint={hint} error={error}>
      <Tag
        {...props}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(props.id, hint, error)}
        className={`${inputBase} ${error ? 'border-danger' : 'border-line-strong hover:border-white/30'} ${as === 'textarea' ? 'min-h-[7rem] resize-y' : 'min-h-[48px]'} ${className}`}
      />
    </FieldShell>
  );
}

export function SelectField({ label, required, hint, error, options, placeholder, ...props }) {
  return (
    <FieldShell id={props.id} label={label} required={required} hint={hint} error={error}>
      <select
        {...props}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(props.id, hint, error)}
        className={`${inputBase} min-h-[48px] appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10 ${
          error ? 'border-danger' : 'border-line-strong hover:border-white/30'
        }`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath fill='none' stroke='%23b3b3b3' stroke-width='1.5' d='M1 1l5 5 5-5'/%3E%3C/svg%3E\")",
        }}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </FieldShell>
  );
}

export function CheckboxField({ id, name, checked, onChange, onBlur, error, children }) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          required
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-line-strong bg-surface accent-[#1a5cff]"
        />
        <label htmlFor={id} className="cursor-pointer text-sm leading-relaxed text-fg-muted">
          {children}
        </label>
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-start gap-2 text-sm text-danger">
          <AlertCircle size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

// Honeypot: hidden from people, bots fill it in and the request is dropped
export function Honeypot({ value, onChange }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label htmlFor="f-website">Svetainė</label>
      <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={value} onChange={onChange} />
    </div>
  );
}
