"use client"
import Image from 'next/image';
import React from 'react'

import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 100,
        fill: 'white',
    },
    {
        name: 'girls',
        count: 53,
        fill: '#FAE27C',
    },
    {
        name: 'boys',
        count: 53,
        fill: '#C3EBFA',
    },
];



const CountChart = () => {
    return (
        <div className='w-full h-full bg-white p-4'>
            {/* title  */}
            <div className='flex justify-between items-center '>
                <h1 className='text-lg font-semibold'>Students</h1>
                <Image src={"/moredark.png"} alt='' width={20} height={20} />
            </div>
            {/* chart  */}
            <div className='w-full h-[75%] relative'>
                <ResponsiveContainer >
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                        <RadialBar
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image  src={"/maleFemale.png"} alt='' width={50} height={50}  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
            </div>
            {/* bottom */}
            <div className='flex justify-center gap-16'>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-lamaSky rounded-full' />
                    <h1 className='font-bold'>1234</h1>
                    <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-lamaYellow rounded-full' />
                    <h1 className='font-bold'>1234</h1>
                    <h2 className='text-xs text-gray-300'>Girls (35%)</h2>
                </div>
            </div>
        </div>
    )
}

export default CountChart
