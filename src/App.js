import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Stories from './Components/Stories';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import './App.css';
import ChangePassword from './Components/ChangePassword';
import Welcome from './pages/Welcome';



function App() {
  return (
    <div className='appPage'>
    <BrowserRouter>
    
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/create" element={<Stories />} />
      <Route path="/:id" element={<Signin />} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/changepassword" element={<ChangePassword/>}/>
      <Route path="/welcome" element={<Welcome/>}/>
      
    </Routes>
    
  </BrowserRouter>
  
  </div>
  );
}

export default App;
