import { useNavigate } from 'react-router-dom'
import StatCard from '../../components/StatCard'
import AppointmentTable from '../../components/AppointmentTable'
import Button from '../../components/Button'
import './ParentDashboard.css'

const appointments = [
  { id: 1, teacher: 'Ali Ahmed', date: '20 Nov 2026', time: '10:00 AM', status: 'Approved' },
  { id: 2, teacher: 'Usman Khan', date: '21 Nov 2026', time: '11:30 AM', status: 'Pending' },
  { id: 3, teacher: 'Ahmed Hassan', date: '22 Nov 2026', time: '02:00 PM', status: 'Completed' },
  { id: 4, teacher: 'Sara Malik', date: '23 Nov 2026', time: '09:00 AM', status: 'Cancelled' },
]

function ParentDashboard() {
  const navigate = useNavigate()

  const upcoming = appointments.filter((a) => a.status === 'Approved').length
  const pending = appointments.filter((a) => a.status === 'Pending').length
  const completed = appointments.filter((a) => a.status === 'Completed').length

  return (
    <>
      <h1>Welcome, Parent</h1>

      <div className="stats-grid">
        <StatCard label="Upcoming" value={upcoming} />
        <StatCard label="Pending approval" value={pending} />
        <StatCard label="Completed" value={completed} />
      </div>

      <div className="student-card">
        <strong>Student:</strong> Student Name · Roll No · BS Computer Science
      </div>

      <h2>Next appointments</h2>
      <AppointmentTable appointments={appointments.slice(0, 5)} />

      <div>
        <Button onClick={() => navigate('/parent/book')}>Book New Appointment</Button>
      </div>
    </>
  )
}

export default ParentDashboard