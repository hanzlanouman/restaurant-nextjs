import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { AlignJustify } from 'lucide-react';
import Nav from './Nav';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
const MobileNav = () => {
  const path = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className={`cursor-pointer `} size={30} />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-8 justify-center'>
            <Logo />

            <Nav
              containerStyles='flex flex-col items-center gap-y-6'
              linkStyles='
            text-2xl'
            />
            <Button
              className='
            bg-sp_orange text-white min-w-[166px] py-3  rounded-full
            hover:bg-primary transition-all duration-300 text-lg
            '
            >
              Menu
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
