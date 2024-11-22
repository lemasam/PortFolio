import React from 'react'
import BlogCard from './common/BlogCard';
import {blogPosts} from '../lib/blog-data'

const Blog = () => {
  return (
    <div
      className="bg-bg-dark py-10 tablet:py-28 px-5 tablet:px-16 flex flex-col w-full gap-12"
      id="blog"
    >
      <div className="flex flex-col gap-4 w-full">
        <h6>Blog</h6>
        <h1 className="capitalize">My Blog Posts</h1>
      </div>
      <div className="w-full flex flex-col laptop:flex-row justify-between gap-3">
        <BlogCard blogPosts={blogPosts} />
      </div>
    </div>
  );
}

export default Blog