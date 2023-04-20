import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
    return (
        <header className='h-[300px] p-[20px] bg-gradient-to-l from-indigo-300 flex flex-col justify-between '>
            <div className='flex items-center justify-between ' >
                <Image src={'/images/logo_black.png'} alt='logo' width={50} height={50} />
                <nav>
                    <ul className='flex gap-[15px] font-semibold'>
                        <li className=''>
                            <Link href='/' passHref>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href='/events' passHref>
                                Events
                            </Link>
                        </li>

                        <li>
                            <Link href='/about-us' passHref>
                                About Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <h1 className='w-[60%] text-[40px] uppercase'>Next.js React Framework Course</h1>
        </header>
    )
}

export default Header