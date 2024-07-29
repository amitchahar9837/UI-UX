import React, { useState } from 'react'
import {
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Avatar,
  Button,
  IconButton
} from '@mui/material'
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  CalendarToday,
  BookOnline,
  Home as FacilitiesIcon,
  Handyman as ServicesIcon,
  People as CustomersIcon,
  Group as StaffIcon,
  MeetingRoom as RoomsIcon,
  Extension as AddonsIcon
} from '@mui/icons-material'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

// Define fake data
const bookingsData = [
  { name: 'Jan', value: 40 },
  { name: 'Feb', value: 30 },
  { name: 'Mar', value: 20 },
  { name: 'Apr', value: 27 },
  { name: 'May', value: 18 },
  { name: 'Jun', value: 23 }
]

const upcomingBookings = [
  {
    id: 1,
    name: 'Alice',
    petType: 'Dog',
    date: '2024-07-29',
    time: '10:00 AM'
  },
  { id: 2, name: 'Bob', petType: 'Cat', date: '2024-07-29', time: '11:00 AM' },
  {
    id: 3,
    name: 'Charlie',
    petType: 'Bird',
    date: '2024-07-29',
    time: '12:00 PM'
  }
]

const salesData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
  { name: 'Jun', value: 239 }
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className='bg-white p-2 border border-gray-300 rounded'>
        <p className='label'>{`${label} : ${payload[0].value}`}</p>
      </div>
    )
  }
  return null
}

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }
  return (
    <div className='flex h-screen bg-gray-100'>
      <Drawer
        variant='temporary'
        open={sidebarOpen}
        onClose={toggleSidebar}
        classes={{
          paper: 'w-64 bg-white'
        }}
      >
        
        <List>
          {[
            { text: 'Dashboard', icon: <DashboardIcon /> },
            { text: 'Calendar', icon: <CalendarToday /> },
            { text: 'Bookings', icon: <BookOnline /> },
            { text: 'Facilities', icon: <FacilitiesIcon /> },
            { text: 'Services', icon: <ServicesIcon /> },
            { text: 'Customers', icon: <CustomersIcon /> },
            { text: 'Staff', icon: <StaffIcon /> },
            { text: 'Rooms', icon: <RoomsIcon /> },
            { text: 'Add-ons', icon: <AddonsIcon /> }
          ].map((item, index) => (
            <ListItem
              button
              key={item.text}
              className={index === 0 ? 'bg-blue-100' : ''}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className='flex-1 flex flex-col overflow-hidden'>
        <div className='flex justify-between items-center p-4 bg-white'>
          <div className='flex items-center'>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={toggleSidebar}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' className='ml-4'>
              Dashboard
            </Typography>
          </div>
          <div className='flex items-center'>
            <Avatar className='mr-2'>JD</Avatar>
            <Typography>John Doe</Typography>
          </div>
        </div>
        <div className='p-6 flex-1 overflow-auto'>
          {' '}
          <Card className='mb-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white'>
            {' '}
            <CardContent className='flex items-center'>
              {' '}
              <img
                src='/path-to-pet-image.jpg'
                alt='Pets'
                className='mr-4 rounded-full w-16 h-16'
              />{' '}
              <div>
                {' '}
                <Typography variant='h5' className='mb-2'>
                  Welcome Back!
                </Typography>{' '}
                <Typography>
                  Let's take a closer look at your stats and appointments
                </Typography>{' '}
              </div>{' '}
            </CardContent>{' '}
          </Card>{' '}
          <div className='grid grid-cols-3 gap-6'>
            {' '}
            <Card className='col-span-2'>
              {' '}
              <CardContent>
                {' '}
                <div className='flex justify-between items-center mb-4'>
                  {' '}
                  <Typography variant='h6'>Bookings Analysis</Typography>{' '}
                  <Button size='small'>This Month</Button>{' '}
                </div>{' '}
                <ResponsiveContainer width='100%' height={300}>
                  {' '}
                  <LineChart data={bookingsData}>
                    {' '}
                    <CartesianGrid strokeDasharray='3 3' />{' '}
                    <XAxis dataKey='name' /> <YAxis />{' '}
                    <Tooltip content={<CustomTooltip />} />{' '}
                    <Line
                      type='monotone'
                      dataKey='value'
                      stroke='#8884d8'
                      strokeWidth={2}
                    />{' '}
                  </LineChart>{' '}
                </ResponsiveContainer>{' '}
              </CardContent>{' '}
            </Card>{' '}
            <Card className='row-span-2'>
              {' '}
              <CardContent>
                {' '}
                <Typography variant='h6' className='mb-4'>
                  Bookings
                </Typography>{' '}
                <div className='flex justify-between mb-4'>
                  {' '}
                  <Button variant='contained' color='primary'>
                    Pending
                  </Button>{' '}
                  <Typography>Today (16)</Typography>{' '}
                </div>{' '}
                <Typography variant='subtitle2' className='mb-4'>
                  You've 30 pending bookings
                </Typography>{' '}
                {upcomingBookings.map(booking => (
                  <div
                    key={booking.id}
                    className='mb-4 bg-blue-50 p-4 rounded-lg'
                  >
                    {' '}
                    <div className='flex items-center justify-between mb-2'>
                      {' '}
                      <div className='flex items-center'>
                        {' '}
                        <Avatar className='mr-2'>{booking.name[0]}</Avatar>{' '}
                        <Typography variant='subtitle1'>
                          {booking.name}
                        </Typography>{' '}
                      </div>{' '}
                      <Button variant='outlined' color='primary' size='small'>
                        $70.00
                      </Button>{' '}
                    </div>{' '}
                    <div className='flex justify-between'>
                      {' '}
                      <div className='flex items-center'>
                        {' '}
                        <img
                          src='/path-to-pet-icon.png'
                          alt='Pet'
                          className='mr-2 w-4 h-4'
                        />{' '}
                        <Typography variant='body2'>
                          {booking.petType}
                        </Typography>{' '}
                      </div>{' '}
                      <div className='flex items-center'>
                        {' '}
                        <img
                          src='/path-to-calendar-icon.png'
                          alt='Calendar'
                          className='mr-2 w-4 h-4'
                        />{' '}
                        <Typography variant='body2'>{booking.date}</Typography>{' '}
                      </div>{' '}
                      <div className='flex items-center'>
                        {' '}
                        <img
                          src='/path-to-clock-icon.png'
                          alt='Clock'
                          className='mr-2 w-4 h-4'
                        />{' '}
                        <Typography variant='body2'>{booking.time}</Typography>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>
                ))}{' '}
                <Button fullWidth variant='contained' color='primary'>
                  View More
                </Button>{' '}
              </CardContent>{' '}
            </Card>{' '}
            <Card className='col-span-2'>
              {' '}
              <CardContent>
                {' '}
                <div className='flex justify-between items-center mb-4'>
                  {' '}
                  <Typography variant='h6'>Sales Analysis</Typography>{' '}
                  <Button size='small'>This Month</Button>{' '}
                </div>{' '}
                <ResponsiveContainer width='100%' height={300}>
                  {' '}
                  <LineChart data={salesData}>
                    {' '}
                    <CartesianGrid strokeDasharray='3 3' />{' '}
                    <XAxis dataKey='name' /> <YAxis />{' '}
                    <Tooltip content={<CustomTooltip />} />{' '}
                    <Line
                      type='monotone'
                      dataKey='value'
                      stroke='#82ca9d'
                      strokeWidth={2}
                    />{' '}
                  </LineChart>{' '}
                </ResponsiveContainer>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
