const items = ['web design', 'full-stack development', 'landing pages', 'mvp builds'];
const track = Array(12).fill(items).flat();

export default function MarqueeStrip() {
  return (
    <div className="relative h-[50px] w-full overflow-hidden bg-oasis-accent text-[13px] tracking-[0.06em] text-white lg:h-[58px] lg:text-[14px]">
      <div className="animate-marquee absolute inset-y-0 left-0 flex items-center whitespace-nowrap">
        {track.map((item, i) => (
          <span key={i} className="px-8 lg:px-12">✦ {item}</span>
        ))}
      </div>
    </div>
  );
}
