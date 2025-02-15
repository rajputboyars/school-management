import Pagonation from '@/components/Pagonation'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { assignmentsData, classesData, examsData, lessonsData, parentsData, resultsData, role, subjectsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Results = {
    id: number;
    subject: string;
    class: number;
    teacher:string;
    student:string;
    type:"exam" | "assignment";
    date:string;
    score:string;
}

const columns = [

    {
        header: "Subject", assessor: "subjects"
    },
    {
        header: "Class", assessor: "class",className: "hidden md:table-cell"
    },
    {
        header: "Teacher", assessor: "teacher", className: "hidden md:table-cell"
    },
    {
        header: "Student", assessor: "student", className: "hidden md:table-cell"
    },
    {
        header: "Type", assessor: "type", className: "hidden md:table-cell"
    },
    {
        header: "Date", assessor: "date", className: "hidden md:table-cell"
    },
    {
        header: "Score", assessor: "score", className: "hidden md:table-cell"
    },
    {
        header: "Actions", assessor: "actions"
    },

]


const ResultsListPage = () => {

    const renderRow = (item: Results) => {
        return (
            <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
                <td className='flex items-center gap-4 p-4'>
                    {item.subject}
                </td>
                <td className='hidden md:table-cell'>
                    {item.class}
                </td>
                <td className='hidden md:table-cell'>
                    {item.teacher}
                </td>
                <td className='hidden md:table-cell'>
                    {item.student}
                </td>
                <td className='hidden md:table-cell'>
                    {item.type}
                </td>
                <td className='hidden md:table-cell'>
                    {item.date}
                </td>
                <td className='hidden md:table-cell'>
                    {item.score}
                </td>
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
                <h1 className=' hidden md:block text-lg font-semibold'>All Results</h1>
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
            <Table columns={columns} renderRow={renderRow} data={resultsData} />
            {/* pagination */}
            <Pagonation />
        </div>
    )
}

export default ResultsListPage
