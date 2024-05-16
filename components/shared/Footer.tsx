import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-top'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href="/">
          <Image src="./images/logo.svg" alt='logo' width={80} height={38} />
        </Link>

        <p>Bhala na. all right reservation.</p>
      </div>
    </footer>
  )
}

export default Footer