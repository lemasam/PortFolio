"use client";

import React from "react";
import { Card } from "./common/styles";
import { services } from "../lib/service-data";

type Props = {};

const Services = (props: Props) => {
  return (
    <div
      className="bg-bg-gray py-10 tablet:py-28 px-5 tablet:px-16 flex flex-col gap-12"
      id="services"
    >
      <div className="flex flex-col gap-4 w-full">
        <h6>Services</h6>
        <h1 className="capitalize">What I do</h1>
      </div>
      <div className="flex flex-wrap w-full gap-10">
        {services.map((service, index) => (
          <Card
            className="w-full tablet:w-72 laptop:w-96 py-5 px-8 flex flex-col gap-5 text-center"
            key={index}
          >
            {service.icon}
            <div className="flex flex-col gap-3">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
