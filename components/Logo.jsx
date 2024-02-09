import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const poppins = Montserrat({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
});

const Logo = () => {
  return (
    <Link href='/'>
      {/* write a text logo with all classes purple */}
      <h1
        className={`h2 text-primary font-bold text-3xl dark:text-white cursor-pointer tracking-tight xl:tracking-wider
       ${poppins.className}`}
      >
        South Kitchen
        <span
          className='
          text-sp_orange
          font-black
          text-4xl
          dark:text-primary
          transform
          rotate-12
          transition-all
          duration-300
          ease-in-out
          hover:rotate-0
        '
        >
          .
        </span>
      </h1>
    </Link>
  );
};

export default Logo;
