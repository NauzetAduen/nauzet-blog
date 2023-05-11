const xmlns = "http://www.w3.org/2000/svg";
const fill = "none";
const size = "24";
const viewBox = `0 0 ${size}  ${size}`;
const strokeWidth = "1.5";
const stroke = "currentColor";
const className = "w-6 h-6 inline-block";
const strokeLinecap = "round";
const strokeLinejoin = "round";

export function EmailSvg() {
  return (
    <svg
      xmlns={xmlns}
      fill={fill}
      viewBox={viewBox}
      strokeWidth={strokeWidth}
      stroke={stroke}
      className={className}
    >
      <path
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

export function PhoneSvg() {
  return (
    <svg
      xmlns={xmlns}
      fill={fill}
      viewBox={viewBox}
      strokeWidth={strokeWidth}
      stroke={stroke}
      className={className}
    >
      <path
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
      />
    </svg>
  );
}
export function LinkedinSvg() {
  return (
    <svg
      width={size}
      height={size}
      xmlns={xmlns}
      viewBox={viewBox}
      className={className}
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function ExternalLinkSvg() {
  return (
    <svg
      xmlns={xmlns}
      fill={fill}
      viewBox="0 0 36 36"
      strokeWidth={strokeWidth}
      stroke={stroke}
      className={className}
    >
      <path
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}

export function HearthSvg() {
  return (
    <svg
      xmlns={xmlns}
      fill={fill}
      viewBox={viewBox}
      strokeWidth={strokeWidth}
      stroke="red"
      className={className}
    >
      <path
        stroke-linecap={strokeLinecap}
        stroke-linejoin={strokeLinejoin}
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
}
export function CommentSvg() {
  return (
    <svg
      xmlns={xmlns}
      fill={fill}
      viewBox={viewBox}
      strokeWidth={strokeWidth}
      stroke={stroke}
      className={className}
    >
      <path
        stroke-linecap={strokeLinecap}
        stroke-linejoin={strokeLinejoin}
        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
      />
    </svg>
  );
}
