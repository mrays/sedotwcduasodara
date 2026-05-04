import Image from 'next/image';

const Logo = () => {
  const logoSrc = '/logobebasmampet.png';

  return (
    <div className="flex items-center gap-3 leading-0">
      <div className="w-8 h-8 relative flex-shrink-0 overflow-hidden rounded-full">
        <Image
          src={logoSrc}
          alt="Bebas Mampet Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <span className="text-sm font-bold leading-none text-foreground">Bebas Mampet</span>
        <span className="text-xs text-muted-foreground leading-none">Sedot WC</span>
      </div>
    </div>
  );
};

export default Logo;

