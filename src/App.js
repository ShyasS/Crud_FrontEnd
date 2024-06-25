import {BrowserRouter, Routes,Route} from 'react-router-dom';
import GetData from './pages/GetData';
import CreateData from './pages/CreateData';
import UpdateData from './pages/UpdateData';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<GetData/>}/>
      <Route path='/create' element={<CreateData/>}/>
      <Route path='/update/:id' element={<UpdateData/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
