import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/homepage"
import LoginPage from "./pages/login"
import ParentDashboard from "./pages/parent-dashboard"
import SignupPage from "./pages/signup"
import TeacherDashboard from "./pages/teacher-dashboard"
import StudentPerformanceDashboard from "./pages/student-performance-dashboard"
import AuthProvider from "./auth/authProvider"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard-teacher" element={
          <AuthProvider>
            <TeacherDashboard />
          </AuthProvider>
        } />
        <Route path="/dashboard-parent" element={
          <AuthProvider>
            <ParentDashboard />
          </AuthProvider>
        } />
        <Route path="/performance" element={
          <AuthProvider>
            <StudentPerformanceDashboard />
          </AuthProvider>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
