"use client";

import { ContactCard } from "../common/styles";
import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

type Props = {};

const ContactForm = (props: Props) => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ky36wxk", "template_lv220qw", form.current!, {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <ContactCard className="flex flex-col px-4 py-3">
      <div className="w-full text-center">
        <h4>Contact me!</h4>
      </div>
      <form
        ref={form}
        className="flex flex-col py-4 gap-2"
        onSubmit={sendEmail}
      >
        <input
          type="text"
          placeholder="Name"
          name="from_name"
          className="border-b border-gray-300 mb-4 bg-bg-gray focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          name="from_email"
          className="border-b border-gray-300 mb-4 bg-bg-gray focus:outline-none"
        />
        <textarea
          placeholder="Message"
          name="message"
          className="border-b border-gray-300 mb-4 bg-bg-gray focus:outline-none"
          rows={2}
        />
        <input
          type="submit"
          value="Send"
          className="py-2 px-4 border-2 border-orange m-auto rounded-lg flex justify-center items-center mt-3 text-orange hover:text-white cursor-pointer"
        />
      </form>
    </ContactCard>
  );
};

export default ContactForm;
