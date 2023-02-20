
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Emplisting from './Emplist';
import EmpCreate from './EmpCreate';
import EmpEdit from './EmpEdit';
import EmpDetail from './EmpDetail';

function App() {
  return (
    <div className="App">
       
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Emplisting/>}></Route>
    <Route path='/employee/create' element={<EmpCreate/>}></Route>
    <Route path='/employee/edit/:empid' element={<EmpEdit/>}></Route>
    <Route path='/employee/detail/:empid' element={<EmpDetail/>}></Route>
    </Routes>
  </BrowserRouter>
    </div>
  );

}

export default App;
