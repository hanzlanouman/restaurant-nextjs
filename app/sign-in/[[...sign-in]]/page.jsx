import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <div className='flex items-center justify-center bg-zinc-800 h-[100vh]'>
      <div
        className='
       
    '
      >
        <Image
          src='/images/about-1.avif'
          alt='Hero Image'
          width={4000}
          height={4000}
          className=' object-cover object-bottom  brightness-[0.4]
          filter blur-[4px] absolute top-[0px] left-0 w-full h-[100vh] z-[0]'
          priority
        />
      </div>
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: 'bg-primary hover:bg-primary/80',
            headerTitle: 'text-sp_orange',
            headerSubtitle: 'text-primary',
            card: 'bg-zinc-900 shadow-',
            socialButtonsBlockButton:
              'text-white border-primary hover:bg-primary/30 text-white',
            formFieldLabel: 'text-white',
            selectButton: 'bg-primary hover:bg-primary text-white',
            formFieldInput:
              'bg-zinc-800 text-white border-primary focus:border-none',
            formFieldInfoText: 'text-primary',
            formFieldHintText: 'text-primary',
            formFieldErrorText: 'text-sp_orange',
            formFieldInputPlaceholder: 'text-sp_orange',
            selectButton__countryCode: 'text-white',
            formFieldInputShowPasswordIcon: 'text-zinc-500',
            dividerLine: 'bg-zinc-400',
            formFieldSuccessText: 'text-primary',
            dividerText: 'text-zinc-400',
            footerActionText: 'text-primary',
            footerActionLink:
              'text-sp_orange hover:text-white transition-all duration-1000 ease-in-out ',
          },
        }}
      />
    </div>
  );
}
