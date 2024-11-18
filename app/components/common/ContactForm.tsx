"use client";

import React from "react";
import { PortfolioCard } from "../common/styles";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <PortfolioCard>
      <div className="w-full text-center">
        <h4>Contact Form</h4>
      </div>
      <form></form>
    </PortfolioCard>
  );
};

export default ContactForm;
