"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { PortfolioCard } from "../common/styles";

type Props = {
  blogPosts: {
    image: string;
    title: string;
    description: string;
    author: string;
    datePosted: string;
  }[]
};

const BlogCard = ({blogPosts}: Props) => {
  return (
    <>
      {blogPosts.length > 0 &&
        blogPosts.map(
          ({ image, title, description, author, datePosted }, index) => (
            <PortfolioCard
              className="w-full tablet:w-[360px] flex flex-col gap-3"
              key={index}
            >
              <Image
                src={image}
                width={400}
                height={300}
                alt="Blog image"
                className="rounded-t-lg "
              />
              <div className="bg-bg-gray">
                <div className="px-2 py-3 flex flex-col gap-3">
                  <Link href="/" className="font-bold text-sm">
                    {title}
                  </Link>
                  <p className="text-xs">{description}</p>
                </div>
                <div className="px-2 py-3 flex gap-2 items-center">
                  <FaUserCircle size={40} />
                  <div>
                    <p className="font-bold text-xs">{author}</p>
                    <p className="text-xs">{datePosted}</p>
                  </div>
                </div>
              </div>
            </PortfolioCard>
          )
        )}
    </>
  );
};

export default BlogCard;
