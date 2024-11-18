"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { PortfolioCard } from "../common/styles";

type Props = {};

const BlogCard = (props: Props) => {
  return (
    <PortfolioCard className="w-full flex flex-col gap-2 bg-bg-gray">
      <Image
        src="/article1.jpg"
        width={400}
        height={300}
        alt="Blog image"
        className="rounded-t-lg"
      />
      <div className="px-2 py-3 flex flex-col gap-3">
        <Link href="/" className="font-bold text-sm">
          How learning Javascript changed my career
        </Link>
        <p className="text-xs">Lorem ipsum dolor sit amet consectetur...</p>
      </div>
      <div className="px-2 py-3 flex gap-2 items-center">
        <FaUserCircle size={40} />
        <div>
          <p className="font-bold text-xs">Catherine Vuthi</p>
          <p className="text-xs">1w ago</p>
        </div>
      </div>
    </PortfolioCard>
  );
};

export default BlogCard;
