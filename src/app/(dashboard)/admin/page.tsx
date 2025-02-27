import Announcements from '@/components/Announcements'
import AttendanceChart from '@/components/AttendanceChart'
import CountChart from '@/components/CountChart'
import EventCalender from '@/components/EventCalender'
import FinanceChart from '@/components/FinanceChart'
import UserCard from '@/components/UserCard'
import React from 'react'

const Adminpage = () => {
  return (
    <div className='flex p-4 gap-4 flex-col md:flex-row'>
      {/* left section  */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        {/* user cards  */}
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type='student' />
          <UserCard type='teacher' />
          <UserCard type='parent' />
          <UserCard type='staff' />
        </div>
        {/* middle chart  */}
        <div className='flex gap-4 flex-col md:flex-row'>
          {/* Count Chart */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart />
          </div>
          {/* Attendence Chart */}
          <div className='w-full lg:w-2/3 h-[450px]'>
            <AttendanceChart />
          </div>
        </div>
        {/* bottom chart  */}
        <div className='w-full h-[500px]'>
          <FinanceChart />
        </div>
      </div>
      {/* right section  */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
        <EventCalender />
        <Announcements/>
      </div>
    </div>
  )
}

export default Adminpage
