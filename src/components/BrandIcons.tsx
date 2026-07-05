import { useId } from 'react';

/**
 * Real platform brand marks in their official colors (not monochrome line icons).
 * Each accepts `className` for sizing only — colors are baked in.
 */
type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  const id = useId();
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Instagram">
      <defs>
        <radialGradient id={id} cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="24" height="24" rx="6" fill={`url(#${id})`} />
      <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="#fff" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.5" fill="none" stroke="#fff" strokeWidth="2" />
      <circle cx="16.5" cy="7.5" r="1.1" fill="#fff" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Facebook">
      <path
        fill="#1877F2"
        d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.48 0-1.95.92-1.95 1.87v2.25h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"
      />
      <path
        fill="#fff"
        d="M16.67 15.56l.53-3.49h-3.32V9.82c0-.95.47-1.87 1.95-1.87h1.5V4.98s-1.37-.24-2.68-.24c-2.74 0-4.53 1.67-4.53 4.69v2.66H7.08v3.49h3.05V24a12.1 12.1 0 003.75 0v-8.44h2.79z"
      />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="YouTube">
      <path
        fill="#FF0000"
        d="M23.5 6.2a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3.02 3.02 0 002.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 002.12-2.14A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8z"
      />
      <path fill="#fff" d="M9.6 15.6l6.27-3.6L9.6 8.4z" />
    </svg>
  );
}

export function GoogleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Google">
      <path
        fill="#4285F4"
        d="M23.06 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h6.19a5.3 5.3 0 01-2.29 3.48v2.89h3.71c2.17-2 3.45-4.94 3.45-8.38z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.11 0 5.72-1.03 7.62-2.79l-3.71-2.89c-1.03.69-2.35 1.1-3.91 1.1-3 0-5.55-2.03-6.46-4.75H1.7v2.98A11.5 11.5 0 0012 24z"
      />
      <path fill="#FBBC05" d="M5.54 14.67a6.9 6.9 0 010-4.42V7.27H1.7a11.5 11.5 0 000 10.38l3.84-2.98z" />
      <path
        fill="#EA4335"
        d="M12 4.75c1.69 0 3.21.58 4.4 1.72l3.29-3.29C17.71 1.19 15.11 0 12 0A11.5 11.5 0 001.7 6.62l3.84 2.98C6.45 6.87 9 4.75 12 4.75z"
      />
    </svg>
  );
}

/** Map a service `icon` identifier from data to its brand logo. */
export function BrandLogo({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case 'Instagram':
      return <InstagramIcon className={className} />;
    case 'Facebook':
      return <FacebookIcon className={className} />;
    case 'Youtube':
      return <YoutubeIcon className={className} />;
    case 'Search': // Local & Website SEO → Google
      return <GoogleIcon className={className} />;
    default:
      return <GoogleIcon className={className} />;
  }
}
