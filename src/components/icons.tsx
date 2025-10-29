import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function StarIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 2.5 9.26 8.59 2.7 9.34l4.93 4.52-1.23 6.64L12 17.9l5.6 2.6-1.23-6.64 4.93-4.52-6.56-.75z" />
    </svg>
  );
}

export function CheckIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function PhoneIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 3h2.25a1 1 0 0 1 1 .84l.74 4.43a1 1 0 0 1-.59 1.07l-1.73.73a11.05 11.05 0 0 0 5.3 5.3l.73-1.73a1 1 0 0 1 1.07-.59l4.43.74a1 1 0 0 1 .84 1V20a1 1 0 0 1-1 1h-2a15 15 0 0 1-15-15V4a1 1 0 0 1 1-1Z"
      />
    </svg>
  );
}
