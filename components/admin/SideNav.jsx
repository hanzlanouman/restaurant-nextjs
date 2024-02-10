import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '../ui/button';
import { SignOutButton, currentUser } from '@clerk/nextjs';
import AdminCardSidebar from './AdminCardSidebar';

const poppins = Montserrat({
  subsets: ['latin'],
  weight: ['400', '300', '200', '600'],
  display: 'swap',
});

const SideNav = ({ children }) => {
  return (
    <div className={`flex ${poppins.className}`}>
      <div className='w-[320px] h-[91.259vh] bg-zinc-900 text-white px-4 py-[1rem] gap-y-10  flex-col hidden xl:flex'>
        {/* Nav Title */}
        <div className='flex flex-col gap-y-8'>
          {/* Avatar and username */}
          <AdminCardSidebar />
        </div>
        {/* Nav Items & links */}
        <div className='flex flex-col gap-y-4'>
          <h1 className='text-lg font-semibold text-muted-foreground border-b border-muted-foreground '>
            Main
          </h1>
          <div className='flex flex-col  '>
            <Link
              href='/dashboard'
              className='text-base font-semibold hover:text-sp_orange transition-all duration-300 p-4 py-3 hover:bg-zinc-800 rounded-lg'
            >
              Home
            </Link>
            <Link
              href='/setmenu'
              className='text-base font-semibold hover:text-sp_orange transition-all duration-300 p-4 py-3 hover:bg-zinc-800 rounded-lg '
            >
              Menu
            </Link>
            <Link
              href='/deals'
              className='text-base font-semibold hover:text-sp_orange transition-all duration-300 p-4 py-3 hover:bg-zinc-800 rounded-lg '
            >
              Deals
            </Link>
            <Link
              href='/orders'
              className='text-base font-semibold hover:text-sp_orange transition-all duration-300 p-4 py-3 hover:bg-zinc-800 rounded-lg '
            >
              Orders & History
            </Link>
          </div>
          <h1 className='text-lg font-semibold text-muted-foreground border-b border-muted-foreground '>
            Settings
          </h1>
          <div className='flex flex-col '>
            <Link
              href='/admin/dashboard'
              className='text-base font-semibold hover:text-sp_orange transition-all duration-300 p-4 py-3 hover:bg-zinc-800 rounded-lg '
            >
              Profile
            </Link>
            <Link
              href='/admin/dashboard'
              className='text-base font-semibold hover:text-sp_orange transition-all duration-300 p-4 py-3 hover:bg-zinc-800 rounded-lg '
            >
              Other Settings
            </Link>
          </div>
        </div>
        <Link href='/' className='absolute bottom-4'>
          Go to Store Front{' '}
          <span className='text-sp_orange'>
            {/* Long arrow */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 inline-block'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </span>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default SideNav;
