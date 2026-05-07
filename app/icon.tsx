import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          borderRadius: 6,
        }}
      >
        <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
          <defs>
            <linearGradient id="roof" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6B3FA0" />
              <stop offset="100%" stopColor="#4A6CB5" />
            </linearGradient>
          </defs>
          {/* Roof */}
          <polygon points="50,10 95,50 5,50" fill="url(#roof)" />
          {/* House body */}
          <rect x="18" y="50" width="64" height="42" rx="3" fill="#FDF8F3" />
          {/* Orange book */}
          <rect x="28" y="56" width="14" height="30" rx="2" fill="#F4831F" />
          {/* Purple book */}
          <rect x="44" y="60" width="14" height="26" rx="2" fill="#6B3FA0" />
          {/* Green book */}
          <rect x="60" y="58" width="14" height="28" rx="2" fill="#4CAF50" />
          {/* Window squares */}
          <rect x="43" y="20" width="7" height="7" rx="1" fill="#E8297A" />
          <rect x="52" y="20" width="7" height="7" rx="1" fill="#E8297A" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
