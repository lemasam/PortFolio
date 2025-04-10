import React from 'react'
import ContactForm from './common/ContactForm';
import { FaArrowDown } from "react-icons/fa";
import Link from 'next/link';

type Props = {}

const Contact = (props: Props) => {
  return (
    <div
      className="bg-bg-gray py-10 tablet:py-28 px-5 tablet:px-16 flex flex-col gap-4"
      id="contact"
    >
      <div className="flex flex-col gap-4 w-full">
        <h6>Contact</h6>
      </div>
      <div className="w-full flex flex-col laptop:flex-row gap-5 justify-between">
        <div className="w-full laptop:w-1/2 flex flex-col gap-8">
          <h1 className="capitalize">Get in Touch!</h1>
          <p className="pr-2 laptop:pr-32">
            Feel free to contact me any time. I will get back to you as soon as
            I can!
          </p>
          <div className="flex flex-col gap-2">
            <h3>Address</h3>
            <p>Nairobi, Kenya</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3>E-mail</h3>
            <p>lemasam10@gmail.com</p>
          </div>
        </div>
        <div className="w-full laptop:w-1/2 mt-3 laptop:mt-o">
          <ContactForm />
        </div>
      </div>
      <Link
        href="/"
        className="h-20 w-10 border-2 border-white mt-20 m-auto rounded-full flex justify-center items-center animate-bounce"
      >
        <FaArrowDown className="text-orange rotate-180" />
      </Link>
    </div>
  );
}

export default Contact