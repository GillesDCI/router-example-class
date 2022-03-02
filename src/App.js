import logo from './logo.svg';
import './App.css';
//deconstructing functionality from the react-router-dom.
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './routes/Homepage/Homepage';
import Aboutpage from './routes/Aboutpage/Aboutpage';
import NavigationBar from './components/navigation/NavigationBar/NavigationBar';
import Listpage from './routes/Listpage/Listpage';
import Detailpage from './routes/Detailpage/Detailpage';

function App() {
  return (
     <>
      <BrowserRouter>
        <NavigationBar />
         <Routes>
           <Route path="/" element={<Homepage />} />
           <Route path="/about" element={<Aboutpage />} />
           <Route path="/list" element={<Listpage />} />
           {/* :id means this is a parameter, could be anyting (e.g. 1,2,3 or Gilles400 or Mark200)*/}
           <Route path="/list/:id" element={<Detailpage />} />

           {/* This is a wildcard route */}
           <Route path="*" element={<h1>404 Page not found</h1>} />
         </Routes>
      </BrowserRouter>
     </>
  );
}

export default App;
