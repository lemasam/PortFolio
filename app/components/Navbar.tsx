import Link from 'next/link'
import React from 'react'

type Props = {}

const menus = [
    {
        title: 'Home',
        link: '#'
    },
    {
        title: 'Services',
        link: '#'
    },
    {
        title: 'Portfolio',
        link: '#'
    },
    {
        title: 'Resume',
        link: '#'
    },
    // {
    //     title: 'Testimonials',
    //     link: '#'
    // },
    // {
    //     title: 'Clients',
    //     link: '#'
    // },
    {
        title: 'Blog',
        link: '#'
    },
    {
        title: 'Contact',
        link: '#'
    },
]

const Navbar = (props: Props) => {
  return (
    <div className='flex flex-row w-full items-center justify-between px-8 py-6'>
        <div>
            <h2>Catherine.</h2>
        </div>
        <div className='flex flex-row gap-5'>
            {menus.map((menu, index) => (
                <Link href={menu.link} key={index} className='hover:text-[#ff772d]'>
                    {menu.title}
                </Link>
            ))}
        </div>
        <div>menu icon</div>
    </div>
  )
}

export default Navbar