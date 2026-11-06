import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { site } from '../../content';

const icons = { facebook: FaFacebookF, instagram: FaInstagram };

// Icon-only social links with accessible names.
export default function SocialLinks({ className = '', linkClassName = '', size = 15 }) {
  return (
    <ul className={`flex items-center ${className}`}>
      {site.social.map(({ id, label, href }) => {
        const Icon = icons[id];
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`FA Kaunas ${label} (atsidaro naujame lange)`}
              className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center transition-colors duration-200 ${linkClassName}`}
            >
              <Icon size={size} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
