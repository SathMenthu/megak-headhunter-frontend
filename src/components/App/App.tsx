import { Route, Routes } from 'react-router-dom';
import { SignIn } from '../../views/SignIn';
import { AdminDashboard } from '../AdminDashboard/AdminDashboard';
import { HrDashboard } from '../HrDashboard/HrDashboard';
import { StudentDashboard } from '../StudentDashboard/StudentDashboard';
import { Main } from '../layout/Main/Main';

export function App() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-900">
      <Main>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/hr-dashboard" element={<HrDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Routes>
      </Main>
    </div>
  );
}
