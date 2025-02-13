"use client"
import Image from 'next/image';
import React from 'react'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'mon',
        present: 40,
        absent: 24,
    },
    {
        name: 'tue',
        present: 30,
        absent: 13,
    },
    {
        name: 'wed',
        present: 20,
        absent: 98,
    },
    {
        name: 'thu',
        present: 27,
        absent: 39,
    },
    {
        name: 'fri',
        present: 18,
        absent: 48,
    },
    {
        name: 'sat',
        present: 23,
        absent: 38,
    },
];


const AttendanceChart = () => {
    return (
        <div className=' w-full h-full bg-white rounded-lg p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src={"/moreDark.png"} alt='' width={20} height={20} />
            </div>
            <ResponsiveContainer width={"100%"} height={"90%"}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                    
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                    <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
                    <YAxis  axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                    <Tooltip contentStyle={{borderRadius:"10px" ,borderColor:"lightgray"}} />
                    <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}}/>
                    <Bar dataKey="present" fill="#FAE27C" legendType='circle' radius={[10 ,10,0,0]} />
                    <Bar dataKey="absent" fill="#C3EBFA" legendType='circle' radius={[10 ,10,0,0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart
