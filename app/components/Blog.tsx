import React from 'react'

type Props = {}

const Blog = (props: Props) => {
  return (
    <div
      className="bg-bg-dark py-10 tablet:py-28 px-5 tablet:px-16 flex flex-col gap-4"
      id="blog"
    >
      <div className="flex flex-col gap-4 w-full">
        <h6>Blog</h6>
        <h1 className="capitalize">My Latest Blog Posts</h1>
      </div>
    </div>
  );
}

export default Blog