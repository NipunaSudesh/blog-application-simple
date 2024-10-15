import React from 'react';
import Image from "next/image";
import { phone } from '../assets/index';

export const BlogCard = () => {
  return (
    <div className='w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-red-200 p-1 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <div className='flex flex-col gap-4 bg-slate-300 rounded-lg transition-transform duration-500 group-hover:scale-105'>
        <div className='flex justify-center'>
          <Image src={phone} alt="iPhone 13 Pro Max" width={400} height={400} className='object-cover rounded-t-lg' />
        </div>
        <div className='flex flex-col gap-2 p-4'>
          <h1 className='font-bold text-center text-xl lg:text-2xl'>iPhone 13 Pro Max</h1>
          <p className='text-center text-gray-700 text-sm lg:text-base'>
            The iPhone 13 Pro Max offers an impressive blend of performance, design, and innovation. Powered by the A15 Bionic chip, it delivers unmatched speed and efficiency. The 6.7-inch Super Retina XDR display provides stunning clarity and ProMotion technology for smoother scrolling. With a new advanced camera system, including a triple-lens setup, it excels in low-light photography, capturing vivid and detailed images. The battery life is also improved, lasting up to 28 hours of video playback. Available in various storage options and premium finishes, the iPhone 13 Pro Max combines power, elegance, and reliability.
          </p>
        </div>
      </div>
    </div>
  );
};
