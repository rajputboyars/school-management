"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: "Lorem ipsum dolor",
        time: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        time: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        time: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
]

const EventCalender = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className='bg-white rounded-md'>
            <Calendar onChange={onChange} value={value} />
            <div className='flex items-center justify-between px-4'>
                <h1 className='text-xl font-semibold my-4'>Events</h1>
                <Image src={"/moreDark.png"} alt='' width={20} height={20}/>
            </div>
            <div>
                {
                    events.map((event)=>(
                        <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple' key={event.id}>
                            <div className='flex items-center justify-between'>
                                <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                                <span className='text-gray-300 text-sm'>{event.time}</span>
                            </div>
                            <p className='text-gray-400 text-sm mt-2'>{event.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default EventCalender
