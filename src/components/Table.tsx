import { Parents, Students, Teacher } from '@/lib/Types';
import React from 'react'

const Table = ({
    columns,
    renderRow,
    data
}: {
    columns: { header: string, assessor: string, className?: string }[];
    renderRow:(item: Students | Teacher | Parents)=> React.ReactNode;
    data: Students[] | Teacher[] | Parents[]

}) => {
    return (
        <table className='w-full mt-4'>
            <thead>
                <tr className='text-left text-gray-500 text-sm'>
                    {
                        columns.map((col)=>(
                            <th key={col.assessor} className={col.className}>
                                {col.header}
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item)=>renderRow(item))
                }
            </tbody>
        </table>
    )
}

export default Table
