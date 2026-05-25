import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Oasis Studio — Web things, crafted with care.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#FAFAF7',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 100px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative blobs */}
        <div
          style={{
            position: 'absolute',
            right: '-60px',
            top: '-60px',
            width: '340px',
            height: '340px',
            borderRadius: '50%',
            background: '#FF6B35',
            opacity: 0.12,
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '-40px',
            bottom: '-80px',
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            background: '#FF6B35',
            opacity: 0.1,
          }}
        />

        {/* Orange dot logo */}
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#FF6B35',
            marginBottom: '48px',
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 400,
            color: '#1A1A18',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '24px',
          }}
        >
          Oasis Studio
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '28px',
            color: '#8A8880',
            fontWeight: 400,
            letterSpacing: '-0.01em',
          }}
        >
          Web things, crafted with care.
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '56px',
            right: '100px',
            fontSize: '18px',
            color: '#B0ADA6',
          }}
        >
          oasis-theta-eight.vercel.app
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
