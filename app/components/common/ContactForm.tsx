"use client";

import React from "react";
import { ContactCard } from "../common/styles";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <ContactCard className="flex flex-col px-4 py-3">
      <div className="w-full text-center">
        <h4>Contact Form</h4>
      </div>
      <form className="flex flex-col py-4 gap-2">
        <input
          type="text"
          placeholder="Name"
          className="border-b border-gray-300 mb-4 bg-bg-gray focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-b border-gray-300 mb-4 bg-bg-gray focus:outline-none"
        />
        <textarea
          placeholder="Message"
          className="border-b border-gray-300 mb-4 bg-bg-gray focus:outline-none"
          rows={2}
        />
        <button
          type="submit"
          className="py-2 px-4 border-2 border-orange m-auto rounded-lg flex justify-center items-center animate-bounce mt-3 hover:text-orange"
        >
          Send
        </button>
      </form>
    </ContactCard>
  );
};

export default ContactForm;
