import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './AppLayout.css';

const parentLinks = [
  { to: '/parent', label: 'Dashboard', end: true },
  { to: '/parent/teachers', label: 'Find Teachers' },
  { to: '/parent/book', label: 'Book Appointment' },
  { to: '/parent/appointments', label: 'My Appointments' },
  { to: '/parent/profile', label: 'Profile' },
  { to: '/parent/notifications', label: 'Notifications' },
];

function AppLayout() {
  return (
    <div className="app-layout">
      <Sidebar links={parentLinks} title="Parent Portal" />
      <main className="app-content">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;