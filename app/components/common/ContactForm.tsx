"use client";

import { ContactCard } from "../common/styles";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (messageSent) {
      timer = setTimeout(() => setMessageSent(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [messageSent]);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("❌ Form reference is null");
      setError("Form not found. Please refresh the page.");
      return;
    }

    console.log("📤 Sending form data...", new FormData(form.current));

    // ✅ Correct way to access environment variable
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!publicKey) {
      console.error("❌ Missing EMAILJS Public Key");
      setError("EmailJS Public Key is missing. Check your .env.local file.");
      return;
    }

    try {
      const response = await emailjs.sendForm(
        "service_bujvq2i",
        "template_v5zaquj",
        form.current!,
        publicKey // ✅ Correct way to pass publicKey
      );

      console.log("✅ Email sent successfully:", response);
      setMessageSent(true);
      setError("");
      form.current.reset();
    } catch (err: any) {
      console.error("❌ Email sending failed:", err);
      setError(`Failed to send message. ${err.text || err.message}`);
    }
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
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="from_email"
          className="border-b border-gray-300 mb-4 bg-bg-gray focus:outline-none"
          required
        />
        <textarea
          placeholder="Message"
          name="message"
          className="border-b border-gray-300 mb-4 bg-bg-gray focus:outline-none"
          rows={2}
          required
        />
        <input
          type="submit"
          value="Send"
          className="py-2 px-4 border-2 border-orange m-auto rounded-lg flex justify-center items-center mt-3 text-orange hover:text-white cursor-pointer"
        />
      </form>
      {messageSent && (
        <p className="text-green-600 text-center mt-2">
          Message sent successfully!
        </p>
      )}
      {error && <p className="text-red-600 text-center mt-2">{error}</p>}
    </ContactCard>
  );
};

export default ContactForm;
