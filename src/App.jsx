import { Route, Routes} from 'react-router-dom'
import { Welcome } from './Welcome'

export function App() {
  return (
    <div>
       <Routes>
          <Route path='/' element={<Welcome name='Rossella' age={30}/>} />
       </Routes>
    </div>
  );
}
