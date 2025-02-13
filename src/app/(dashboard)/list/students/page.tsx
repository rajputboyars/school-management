import Pagonation from '@/components/Pagonation'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, studentsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Students = {
    id: number;
    studentId: string;
    name: string;
    email?: string;
    photo: string;
    phone?: string;
    grade: number;
    class: string;
    address: string;
}

const columns = [
    {
        header: "Info", assessor: "info"
    },
    {
        header: "Student Id", assessor: "studentId", className: "hidden md:table-cell"
    },
    {
        header: "Name", assessor: "Name", className: "hidden md:table-cell"
    },
    {
        header: "Email", assessor: "email", className: "hidden md:table-cell"
    },
    {
        header: "Phone", assessor: "phone", className: "hidden md:table-cell"
    },
    {
        header: "Grade", assessor: "grade", className: "hidden md:table-cell"
    },
    {
        header: "Class", assessor: "class", className: "hidden lg:table-cell"
    },
    {
        header: "Address", assessor: "address", className: "hidden lg:table-cell"
    },
    {
        header: "Actions", assessor: "actions"
    },

]


const StudentsListPage = () => {

    const renderRow = (item: Students) => {
        return (
            <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
                <td className='flex items-center gap-4 p-4'>
                    
                    <Image src={item.photo}
                        alt=''
                        height={40}
                        width={40}
                        className='md:hidden xl:block w-10 h-10 rounded-full object-cover'
                    />
                    <div className='flex flex-col'>
                        <h3 className='font-semibold'>{item.name}</h3>
                        <p className='text-xs text-gray-500'>{item?.email}</p>
                    </div>
                </td>
                <td className='hidden md:table-cell'>{item.studentId}</td>
                <td className='hidden md:table-cell'>{item.name}</td>
                <td className='hidden md:table-cell'>{item.email}</td>
                <td className='hidden md:table-cell'>{item.phone}</td>
                <td className='hidden md:table-cell'>{item.grade}</td>
                <td className='hidden lg:table-cell'>{item.class}</td>
                <td className='hidden lg:table-cell'>{item.address}</td>
                <td>
                    <div className=' flex items-center gap-2'>
                        <Link href={`/list/teachers/${item.id}`}>
                            <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky'>
                                <Image src={'/view.png'} alt='' width={16} height={16} />
                            </button>
                        </Link>
                        {
                            role == "admin" && (
                                <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple'>
                                    <Image src={'/delete.png'} alt='' width={16} height={16} />
                                </button>

                            )
                        }
                    </div>
                </td>
            </tr>
        )
    }

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            {/* top  */}
            <div className='flex items-center justify-between'>
                <h1 className=' hidden md:block text-lg font-semibold'>All Students</h1>
                <div className='flex flex-col md:flex-row items-center gap-4  w-full md:w-auto'>
                    <TableSearch />
                    <div className=' flex items-center gap-4 self-end'>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellowLight'>
                            <Image src={"/filter.png"} alt='' width={14} height={14} />
                        </button>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellowLight'>
                            <Image src={"/sort.png"} alt='' width={14} height={14} />
                        </button>
                        {
                            role == "admin" && (

                                <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellowLight'>
                                    <Image src={"/plus.png"} alt='' width={14} height={14} />
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
            {/* list  */}
            <Table columns={columns} renderRow={renderRow} data={studentsData} />
            {/* pagination */}
            <Pagonation />
        </div>
    )
}

export default StudentsListPage
