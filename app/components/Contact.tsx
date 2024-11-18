import React from 'react'
import ContactForm from './common/ContactForm';

type Props = {}

const Contact = (props: Props) => {
  return (
    <div
      className="bg-bg-gray py-10 tablet:py-28 px-5 tablet:px-16 flex flex-col gap-12"
      id="contact"
    >
      <div className="flex flex-col gap-4 w-full">
        <h6>Contact</h6>
        <h1 className="capitalize">Get in Touch!</h1>
      </div>
      <div className="w-full flex gap-5 justify-between">
        <div className="w-1/2 flex flex-col gap-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            eveniet fugiat maxime saepe quia unde?
          </p>
          <div className="flex flex-col gap-2">
            <h3>Address</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3>E-mail</h3>
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
        <div className="w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact