import { Route, Routes} from 'react-router-dom'
import { Welcome } from './Welcome'
import Counter from './State-2_Refs/Counter'
import { ShowGithubUser } from './React-router3/ShowGithubUser';

export function App() {
  return (
    <div>
       <Routes>
          <Route path='/' element={<Welcome name='Rossella' age={30}/>} />
          <Route path='/counter' element={<Counter />} />
          <Route path='users/:username' element={<ShowGithubUser/>}/>
       </Routes>
    </div>
  );
}
