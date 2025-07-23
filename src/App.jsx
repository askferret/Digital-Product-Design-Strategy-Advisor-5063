import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout'
import Dashboard from './components/pages/Dashboard'
import Chat from './components/pages/Chat'
import DataSources from './components/pages/DataSources'
import AIStrategy from './components/pages/AIStrategy'
import Analytics from './components/pages/Analytics'
import Profile from './components/pages/Profile'
import GetStarted from './components/pages/GetStarted'
import Users from './components/pages/Users'

// Strategic Compass Wizard Pages
import Layout from './components/Layout'
import Welcome from './pages/Welcome'
import SetGoal from './pages/SetGoal'
import AddContext from './pages/AddContext'
import StrategicPaths from './pages/StrategicPaths'
import PathDetail from './pages/PathDetail'
import Summary from './pages/Summary'

function App() {
  return (
    <Routes>
      {/* Dashboard routes with dashboard layout */}
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="get-started" element={<GetStarted />} />
        <Route path="chat" element={<Chat />} />
        <Route path="ai-strategy" element={<AIStrategy />} />
        <Route path="data-sources" element={<DataSources />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="users" element={<Users />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Strategic Compass Wizard routes with wizard layout */}
      <Route path="/compass" element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path="set-goal" element={<SetGoal />} />
        <Route path="add-context" element={<AddContext />} />
        <Route path="strategic-paths" element={<StrategicPaths />} />
        <Route path="path-detail/:pathId" element={<PathDetail />} />
        <Route path="summary" element={<Summary />} />
      </Route>
    </Routes>
  )
}

export default App