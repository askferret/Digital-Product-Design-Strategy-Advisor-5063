import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Welcome from './pages/Welcome'
import SetGoal from './pages/SetGoal'
import AddContext from './pages/AddContext'
import StrategicPaths from './pages/StrategicPaths'
import PathDetail from './pages/PathDetail'
import Summary from './pages/Summary'

// App dashboard components
import Dashboard from './components/pages/Dashboard'
import Chat from './components/pages/Chat'
import DataSources from './components/pages/DataSources'
import Insights from './components/pages/Insights'
import Profile from './components/pages/Profile'

// Dashboard layout
import DashboardLayout from './components/layout/DashboardLayout'

function App() {
  return (
    <Routes>
      {/* Main wizard flow with standard layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path="set-goal" element={<SetGoal />} />
        <Route path="add-context" element={<AddContext />} />
        <Route path="strategic-paths" element={<StrategicPaths />} />
        <Route path="path-detail/:pathId" element={<PathDetail />} />
        <Route path="summary" element={<Summary />} />
      </Route>
      
      {/* Dashboard routes with dashboard layout */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="chat" element={<Chat />} />
        <Route path="data-sources" element={<DataSources />} />
        <Route path="insights" element={<Insights />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App