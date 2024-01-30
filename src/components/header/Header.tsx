'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header
      data-testid="header"
      className="w-full bg-slate-300 flex justify-center mb-24 "
    >
      <div className="w-4/5 flex justify-between align-middle ">
        <div>
          <Image
            src="/logo4.jpg"
            width="100"
            height="100"
            alt="Logo Investor Center"
          />
        </div>

        <div className="mr-8 flex items-center justify-center gap-6 text-lg font-semibold">
          <Link className={pathname === '/' ? 'text-gray-800' : ''} href="/">
            Calculator
          </Link>

          <Link
            className={pathname === '/charts' ? 'text-gray-800' : ''}
            href="/charts"
          >
            Charts
          </Link>
        </div>
      </div>
    </header>
  );
};
