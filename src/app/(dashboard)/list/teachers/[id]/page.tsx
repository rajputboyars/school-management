import Announcements from '@/components/Announcements'
import BigCalender from '@/components/BigCalender'
import Performance from '@/components/Performance'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleTeacherPage = () => {
    return (
        <div className='flex flex-col xl:flex-row gap-4 p-4 flex-1'>
            {/* left  */}
            <div className='w-full xl:w-2/3'>
                {/* top  */}
                <div className='flex flex-col lg:flex-row gap-4'>
                    {/* user info card */}
                    <div className='py-6 px-4 bg-lamaSky rounded-md flex-1 flex gap-4'>
                        <div className='w-1/3'>
                            <Image
                                src={"https://images.pexels.com/photos/2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"}
                                alt=''
                                width={144}
                                height={144}
                                className='w-36 h-36 rounded-full object-cover' />
                        </div>
                        <div className='w-2/3 flex flex-col justify-between gap-4'>
                            <h1>Abhishek Rajput</h1>
                            <p className='text-sm text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                            <div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>
                                <div className='w-full lg:w-full 2xl:w-1/3 md:w-1/3 flex items-center gap-2'>
                                    <Image src={"/blood.png"} alt='' width={14} height={14} />
                                    <span>A+</span>
                                </div>
                                <div className='w-full lg:w-full 2xl:w-1/3 md:w-1/3 flex items-center gap-2'>
                                    <Image src={"/date.png"} alt='' width={14} height={14} />
                                    <span>January 2025</span>
                                </div>
                                <div className='w-full lg:w-full 2xl:w-1/3 md:w-1/3 flex items-center gap-2'>
                                    <Image src={"/mail.png"} alt='' width={14} height={14} />
                                    <span>user@gmail.com</span>
                                </div>
                                <div className='w-full lg:w-full 2xl:w-1/3 md:w-1/3 flex items-center gap-2'>
                                    <Image src={"/phone.png"} alt='' width={14} height={14} />
                                    <span>+1 222 222</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* small cards */}
                    <div className='flex-1 flex gap-4 justify-between flex-wrap'>
                        {/* cards  */}
                        <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%] xl:w-[45%] 2xl:w-[47%]'>
                            <Image
                                src={"/singleAttendance.png"}
                                alt=''
                                width={24}
                                height={24}
                                className='w-6 h-6'
                            />
                            <div>
                                <h1 className='text-xl font-semibold'>90%</h1>
                                <span className='text-sm text-gray-400'>Attendance</span>
                            </div>
                        </div>
                        {/* cards  */}
                        <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%] xl:w-[45%] 2xl:w-[47%]'>
                            <Image
                                src={"/singleBranche.png"}
                                alt=''
                                width={24}
                                height={24}
                                className='w-6 h-6'
                            />
                            <div>
                                <h1 className='text-xl font-semibold'>2</h1>
                                <span className='text-sm text-gray-400'>Branches</span>
                            </div>
                        </div>
                        {/* cards  */}
                        <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%] xl:w-[45%] 2xl:w-[47%]'>
                            <Image
                                src={"/singleClass.png"}
                                alt=''
                                width={24}
                                height={24}
                                className='w-6 h-6'
                            />
                            <div>
                                <h1 className='text-xl font-semibold'>6</h1>
                                <span className='text-sm text-gray-400'>Lessons</span>
                            </div>
                        </div>
                        {/* cards  */}
                        <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%] xl:w-[45%] 2xl:w-[47%]'>
                            <Image
                                src={"/singleAttendance.png"}
                                alt=''
                                width={24}
                                height={24}
                                className='w-6 h-6'
                            />
                            <div>
                                <h1 className='text-xl font-semibold'>6</h1>
                                <span className='text-sm text-gray-400'>Classes</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* bottom  */}
                <div className='bg-white rounded-md p-4 h-[800px]'>
                    <h1>Teacher&apos;s Schedule</h1>
                    <BigCalender />
                </div>
            </div>
            {/* right  */}
            <div className='w-full xl:w-1/3 flex flex-col gap-4'>
                <div className='bg-white p-4 rounded-md'>
                    <h1 className='text-xl font-semibold'>Shortcuts</h1>
                    <div className='mt-4 flex gap-4 flex-wrap text-xs text-gray-500'>
                        <Link className='p-3 rounded-md bg-lamaSkyLight' href={"/"}> Teacher&apos;s Classes</Link>
                        <Link className='p-3 rounded-md bg-lamaPurpleLight' href={"/"}> Teacher&apos;s Classes</Link>
                        <Link className='p-3 rounded-md bg-lamaYellowLight' href={"/"}> Teacher&apos;s Classes</Link>
                        <Link className='p-3 rounded-md bg-pink-50' href={"/"}> Teacher&apos;s Classes</Link>
                        <Link className='p-3 rounded-md bg-lamaSkyLight' href={"/"}> Teacher&apos;s Classes</Link>
                    </div>
                </div>
                <Performance/>
                <Announcements/>
            </div>
        </div>
    )
}

export default SingleTeacherPage
