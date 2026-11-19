
import { useState } from 'react';

import Button from './components/Button';
import Input from './components/Input';
import FormCard from './components/FormCard';
import StatusBadge from './components/StatusBadge';
import StatCard from './components/StatCard';
import Sidebar from './components/Sidebar';
import AppointmentTable from './components/AppointmentTable';

const parentLinks = [
  { to: '/parent', label: 'Dashboard', end: true },
  { to: '/parent/teachers', label: 'Find Teachers' },
  { to: '/parent/book', label: 'Book Appointment' },
  { to: '/parent/appointments', label: 'My Appointments' },
  { to: '/parent/profile', label: 'Profile' },
  { to: '/parent/notifications', label: 'Notifications' },
];

function App() {
  const [email, setEmail] = useState('');

  function handleSave() {
    console.log('Saved Successfully');
  }

  function handleCancel() {
    console.log('Cancelled');
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>

      <Sidebar links={parentLinks} title="Parent Portal" />

      <main style={{ flex: 1, padding: '24px' }}>

        <h1>BIIT Parent Appointment System</h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          padding: '32px 0'
        }}>
          <StatCard label="Upcoming" value={2} />
          <StatCard label="Pending approval" value={1} />
          <StatCard label="Completed" value={5} />
        </div>

        <AppointmentTable />

        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>

        <Button variant="outline" onClick={handleCancel}>
          Cancel
        </Button>

        <FormCard title="Email Form" subtitle="Email">
          <Input
            label="Email"
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <StatusBadge status="Approved" />
        </FormCard>

      </main>
    </div>
  );
}

export default App;
