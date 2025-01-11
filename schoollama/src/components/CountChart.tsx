"use client";
// import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
  {
    name: 'Total',
    count:110 ,
    fill: 'White',
  },
  {
    name: 'Girls',
    count:53 ,
    fill: '#FAE27C',
  },
  {
    name: 'Boys',
    count:50,
    fill: '#C3EBFA',
  },
];

// const style = {
//   top: '50%',
//   right: 0,
//   transform: 'translate(0, -50%)',
//   lineHeight: '24px',
// };

const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* TITLE */}
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Students</h1>
            <Image src="/moreDark.png" alt='more' width={20} height={20}/>
        </div>
        {/* CHART */}
        <div className='relative w-full h-[75%]'>
        <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            // minAngle={15}
            background
            // clockWise
            dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src="/malefemale.png" alt='malefemale' width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
      </div>
        {/* BOTTOM */}
        <div className='flex justify-center gap-16'>
          <div className='flex flex-col gap-1'>
            <div className='w-5 h-5 rounded-xl bg-lamaSky'></div>
            <h1 className='font-bold'>1,234</h1>
            <h2 className='text-xs text-gray-300'>Boys 55%</h2>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='w-5 h-5 rounded-xl bg-lamaYellow'></div>
            <h1 className='font-bold'>1,234</h1>
            <h2 className='text-xs text-gray-300'>Girls 45%</h2>
          </div>
        </div>
    </div>
  )
}

export default CountChart