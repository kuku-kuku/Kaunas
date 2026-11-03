import React from 'react';
import { Link } from 'react-router-dom';

const variants = {
  primary: 'btn-blue',
  ghost: 'btn-academy',
};

// One button style for links, external links and form buttons.
//   <Button to="/registracija">   → react-router Link
//   <Button href="https://…">     → <a>, external ones open in a new tab
//   <Button type="submit">        → <button>
export default function Button({
  to,
  href,
  variant = 'primary',
  arrow = true,
  block = false,
  className = '',
  children,
  ...rest
}) {
  const classes = `${variants[variant]} ${block ? 'w-full justify-center' : ''} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <span className="btn-arrow" aria-hidden="true">&rarr;</span>}
    </>
  );

  if (to) {
    return <Link to={to} className={classes} {...rest}>{content}</Link>;
  }

  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return <button type="button" className={classes} {...rest}>{content}</button>;
}
