import { SignInButton, SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import NavMobile from './NavMobile'


const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex justify-between items-center'>
        <Link href="/" className='w-36'>
          <Image src="./images/logo.svg" width={80} height={38} alt="logo"  />
        </Link>

        <SignedIn>
          <nav className='md:flex-between hidden w-full max-w-xs'>
            <NavItems />
          </nav>
        </SignedIn>


        <div className='flex justify-end gap-5'>
          <SignedIn>
            <UserButton afterSignOutUrl='/'/>
            <NavMobile />
          </SignedIn>
          <SignInButton>
            <Button asChild className='rounded-full' size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignInButton>
    </div>

      </div>
    </header>
  )
}

export default Header