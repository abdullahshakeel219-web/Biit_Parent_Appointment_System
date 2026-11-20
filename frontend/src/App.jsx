import { Routes, Route, Navigate } from 'react-router-dom'

import AppLayout from './layouts/AppLayout'
import ParentDashboard from './pages/parent/ParentDashboard'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/parent" replace />} />

      <Route path="/parent" element={<AppLayout />}>
        <Route index element={<ParentDashboard />} />
      </Route>
    </Routes>
  )
}

export default App