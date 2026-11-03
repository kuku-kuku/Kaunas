import React from 'react';

// Max-width content column with the fluid page gutter (see .container-academy in index.css).
export default function Container({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`container-academy ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
