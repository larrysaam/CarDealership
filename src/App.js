import './App.css';
import Home from './pages/Home';
import Article from './component/article/article';
import Header from './component/header/header';
import AdminHome from './pages/Admin';
import Edit from './component/adminBoard/edit/edit';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Details } from './pages/Details';
import { HomePage } from './pages/Home/home';


function App() {

  const [edit, setEdit] = useState({})

  return (
    <div className="App">
        {/* <Header /> */}
      <Routes>
        <Route path='/CarDealership' element={<Home/>}/>
        <Route path='Home' element={<HomePage/>}/>
        <Route path='edit' element={<Edit edit={edit} setEdit={setEdit}/>}/>
        <Route path='details' element={<Details/>}/>
        <Route path='Adminforall2024' element={<AdminHome setEdit={setEdit}/>}/>
      </Routes>
    </div>
  );
}

export default App;
