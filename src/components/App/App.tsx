import { Route, Routes } from 'react-router-dom'
import { Main } from '../layout/Main/Main'
import { SignIn } from '../../views/SignIn'

export const App = () => {
  return <div className="flex flex-col w-full min-h-screen bg-gray-900">
    <Main>
      <Routes>
        <Route path='/zaloguj' element={<SignIn />} />
      </Routes>
    </Main>
  </div>
}
