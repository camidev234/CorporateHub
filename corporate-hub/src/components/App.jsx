import { Route, Routes} from 'react-router-dom';
import { BarNav } from './BarNav';


function App() {

  return (
    <div className="App">
      <div className="navegation">
        <BarNav/>
      </div>
      <Routes>
        <Route path='/'/>
      </Routes>
    </div>
  )
}

export default App
