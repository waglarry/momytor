import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/homepage"
import LoginPage from "./pages/login"
import ParentDashboard from "./pages/parent-dashboard"
import SignupPage from "./pages/signup"
import TeacherDashboard from "./pages/teacher-dashboard"
import StudentPerformanceDashboard from "./pages/student-performance-dashboard"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard-teacher" element={<TeacherDashboard />} />
        <Route path="/dashboard-parent" element={<ParentDashboard />} />
        <Route path="/performance" element={<StudentPerformanceDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
