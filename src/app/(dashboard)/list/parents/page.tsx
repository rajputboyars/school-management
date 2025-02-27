import FormModal from '@/components/FormModal'
import Pagonation from '@/components/Pagonation'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { parentsData, role } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Parents = {
    id: number;
    name: string;
    email?: string;
    students: string[];
    phone: string;
    address: string;
}

const columns = [
    {
        header: "Info", assessor: "info"
    },
    {
        header: "Email", assessor: "email", className: "hidden md:table-cell"
    },
    {
        header: "Student Names", assessor: "studentNames", className: "hidden md:table-cell"
    },
    {
        header: "Phone", assessor: "phone", className: "hidden md:table-cell"
    },
    {
        header: "Address", assessor: "address", className: "hidden lg:table-cell"
    },
    {
        header: "Actions", assessor: "actions"
    },

]


const ParentsListPage = () => {

    const renderRow = (item: Parents) => {
        return (
            <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
                <td className='flex items-center gap-4 p-4'>
                    
                    <div className='flex flex-col'>
                        <h3 className='font-semibold'>{item.name}</h3>
                        {/* <p className='text-xs text-gray-500'>{item?.email}</p> */}
                    </div>
                </td>
                <td className='hidden md:table-cell'>{item.email}</td>
                <td className='hidden md:table-cell'>{item.students.join(",")}</td>
                <td className='hidden md:table-cell'>{item.phone}</td>
                <td className='hidden lg:table-cell'>{item.address}</td>
                <td>
                    <div className=' flex items-center gap-2'>
                        <Link href={`/list/teachers/${item.id}`}>
                            <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky'>
                                <Image src={'/edit.png'} alt='' width={16} height={16} />
                            </button>
                        </Link>
                        {
                            role == "admin" && (
                                <FormModal type='delete' table='parent' id={item.id}  />

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
                <h1 className=' hidden md:block text-lg font-semibold'>Parents</h1>
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
                                <FormModal type='create' table='parent'  />
                            )
                        }
                    </div>
                </div>
            </div>
            {/* list  */}
            <Table columns={columns} renderRow={renderRow} data={parentsData} />
            {/* pagination */}
            <Pagonation />
        </div>
    )
}

export default ParentsListPage
