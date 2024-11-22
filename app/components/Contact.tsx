import React from 'react'
import ContactForm from './common/ContactForm';

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
          <p className='pr-2 laptop:pr-32'>
            Feel free to contact me any time. I will get back to you as soon as I can!
          </p>
          <div className="flex flex-col gap-2">
            <h3>Address</h3>
            <p>Nairobi, Kenya</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3>E-mail</h3>
            <p>catherinev.codes@gmail.com</p>
          </div>
        </div>
        <div className="w-full laptop:w-1/2 mt-3 laptop:mt-o">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact