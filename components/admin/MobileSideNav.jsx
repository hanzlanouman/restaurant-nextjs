import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SideNav from './SideNav';
import AdminCardSidebar from './AdminCardSidebar';
import Link from 'next/link';

const MobileSideNav = ({ displayStyle }) => {
  return (
    <div className={displayStyle}>
      <Sheet>
        <SheetTrigger asChild>
          <AlignJustify className={`cursor-pointer `} size={30} />
        </SheetTrigger>
        <SheetContent side='left' className='bg-zinc-900 px-3 '>
          <div className='flex flex-col justify-between h-full px-0 '>
            <div className='flex flex-col items-center gap-y-2 justify-center'>
              {/* Nav and Logo */}
              <div className=' py-4 bg-zinc-900  text-center items-center'>
                <h1
                  className={`h2 text-primary  font-semibold  text-3xl dark:text-white cursor-pointer tracking-tight xl:tracking-wider text-center`}
                >
                  dashboard
                  <span
                    className='text-sp_orange font-black text-4xl dark:text-primary transform rotate-12 transition-all duration-300 ease-in-out hover:text-primary hover:rotate-0
    '
                  >
                    .
                  </span>
                </h1>
              </div>
              {/* Navigations */}
              <div className='w-full h-[91.259vh] bg-zinc-900 text-white py-[1rem] gap-y-10  flex-col'>
                {/* Nav Title */}
                <div className='flex flex-col gap-y-8'>
                  {/* Avatar and username */}
                  <AdminCardSidebar displayStyle='w-auto' />
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
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSideNav;
