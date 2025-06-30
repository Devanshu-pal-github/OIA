'use client';
import Image from 'next/image';

// Thin infinite-scrolling strip of partner-university logos.
// Logos must live under /public/university-logos/   (e.g. /public/university-logos/oxford.png)
// Just drop new logo files in that folder and add the filename below – no further code changes required.

const logos = [
  'woosong.png',
  'inti.png',
  'tarumt.png',
  'cityu.png',
  'dpu.png',
  'smu.png',
  'aivancity.png',
  'ligmr.png',
  'ntut.png',
  'asia.png',
  'lunghwa.png',
  'chengshiu.png',
];

const LogoMarquee = () => {
  // Duplicate list so the animation loops seamlessly
  const items = [...logos, ...logos];

  return (
    <div className="overflow-hidden py-6 bg-gray-50 border-t border-b border-gray-200">
      <div
        className="flex w-max animate-marquee whitespace-nowrap"
        style={{ animation: 'marquee 40s linear infinite' }}
      >
        {items.map((logo, idx) => (
          <div key={idx} className="mx-8 flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity">
            <Image
              src={`/university-logos/${logo}`}
              alt={logo.replace(/\..+$/, '')}
              width={120}
              height={60}
              className="object-contain h-12 w-auto"
            />
          </div>
        ))}
      </div>
      {/* local style tag for keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;
