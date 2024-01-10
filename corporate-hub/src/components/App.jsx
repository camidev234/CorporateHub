import { Route, Routes} from 'react-router-dom';
import { BarNav } from './BarNav';
import { LandingPage } from '../pages/LandingPage';
import { SignInPage } from '../pages/SignInPage';

function App() {

  return (
    <div className="App">
      <div className="navegation border-b border-solid border-gray-600 h-[13vh] sticky top-0 bg-[#161616]">
        <BarNav/>
      </div>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/register-company' element={<SignInPage />}/>
      </Routes>
    </div>
  )
}

export default App
