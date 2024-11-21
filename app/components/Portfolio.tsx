"use client";

import React from "react";
import { PortfolioCard } from "./common/styles";
import { MdWeb, MdArrowForward } from "react-icons/md";
import Link from "next/link";
import {projects} from "../lib/portfolio-data"

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <div
      className="bg-bg-gray py-10 tablet:py-28 px-5 tablet:px-16 flex flex-col gap-12"
      id="portfolio"
    >
      <div className="flex flex-col gap-4 w-full">
        <h6>Portfolio</h6>
        <h1 className="capitalize">My Work</h1>
      </div>
      <div className="w-full grid grid-cols-1 tablet:grid-cols-2 gap-4">
        {projects.map(({ image, title, technologies }, index) => (
          <Link href="/" key={index}>
            <PortfolioCard className="w-full flex flex-col">
              <img src={image} className="rounded-t-lg" />
              <div className="p-3">
                <div className="flex gap-2 items-center">
                  <MdWeb />
                  <p>{title}</p>
                </div>
                <div className="py-2 flex flex-wrap gap-2">
                  {technologies.map((technology, index) => (
                    <span className="bg-bg-dark px-2 py-1 rounded-full text-xs" key={index}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </PortfolioCard>
          </Link>
        ))}
      </div>
      <div className="hidden py-2 px-4 border-2 border-white m-auto rounded-full flex justify-center items-center animate-bounce">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-sm">View All</span>
          <MdArrowForward className="text-orange" />
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
