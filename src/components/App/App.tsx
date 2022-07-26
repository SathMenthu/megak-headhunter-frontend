import { Route, Routes } from 'react-router-dom';
import { SignIn } from '../../views/SignIn';
import { Main } from '../layout/Main/Main';

export function App() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-900">
      <Main>
        <Routes>
          <Route path="/zaloguj" element={<SignIn />} />
        </Routes>
      </Main>
    </div>
  );
}
