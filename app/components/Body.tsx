import React from 'react';
import { BlogCard } from './BlogCard';

export const Body = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};
