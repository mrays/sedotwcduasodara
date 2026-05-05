import Image from 'next/image';

const Logo = () => {
  const logoSrc = '/logo.png';

  return (
    <div className="flex items-center gap-3 leading-0">
      <div className="relative flex-shrink-0 overflow-hidden rounded-2xl bg-[#fff6cc] px-2 py-1.5 shadow-sm ring-1 ring-amber-200/70">
        <Image
          src={logoSrc}
          alt="Dua Sodara Sedot WC Logo"
          width={132}
          height={42}
          className="h-8 w-auto object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default Logo;

