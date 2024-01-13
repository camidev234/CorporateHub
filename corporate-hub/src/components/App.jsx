import { Route, Routes} from 'react-router-dom';
import { BarNav } from './BarNav';
import { LandingPage } from '../pages/LandingPage';
import { SignInPage } from '../pages/SignInPage';
import { Error500 } from './Error500';
import { LoginPage } from '../pages/LoginPage';
import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";
import { BarNavAuth } from './BarNavAuth';

function App() {

  const { token, isAuth } = useContext(GeneralContext);

  return (
    <div className="App">
      <div className="navegation border-b border-solid border-gray-600 h-[13vh] top-0 bg-[#161616] sticky z-50">
        {
          token !== "" && isAuth ? (
            <BarNavAuth/>
          ) : (
            <BarNav/>
          )
        }
      </div>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/register-company' element={<SignInPage />}/>
        <Route path='/error500' element={<Error500/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default App
