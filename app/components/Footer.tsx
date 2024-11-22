import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='footer w-full px-8 py-10 flex flex-col justify-center items-center text-sm bg-bg-gray border-t border-t-white text-center'>
      <p>Copyright © {new Date().getFullYear()} - All right reserved.</p>
    </div>
  )
}

export default Footer