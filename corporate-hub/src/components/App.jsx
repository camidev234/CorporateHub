import { Route, Routes} from 'react-router-dom';
import { BarNav } from './BarNav';
import { LandingPage } from '../pages/LandingPage';

function App() {

  return (
    <div className="App">
      <div className="navegation border-b border-solid border-gray-600 h-[13vh]">
        <BarNav/>
      </div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </div>
  )
}

export default App
