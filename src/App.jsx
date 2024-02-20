import './App.css'

import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
//////////////////////////////////////////////////////


import Blog from './components/HOME/blog/Blog';
import Contact from './components/Contact/contacts/contacts';
import Layout from './components/Layout/Layout';
import Home from './components/HOME/Home';
import Gallery from './components/Gallery/Gallery';
import AboutUS from './components/AboutUS/About US';
import MyAcooModation from './components/AcooModation/myAcooModation';


function App() {

  return (
    <>

      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUS/>} />
          <Route path="/accomodation" element={<MyAcooModation/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Elements" element={<elements />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>

      </Routes>
    </>
  )
}

export default App

