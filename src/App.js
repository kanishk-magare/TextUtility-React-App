// App.js
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  
const removeBodyClasess =() => {

document.querySelector('textarea').classList.remove('bg-secondary','text-light')
document.querySelector('textarea').classList.remove('bg-light','text-black')
}
  const toggleMode = () => {
    removeBodyClasess();
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled');

       document.querySelector('textarea').classList.add('bg-secondary','text-light')

      toast.success(' Dark Mode ON', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      document.title = 'TextUtils - Dark Mode';
     let d = document.getElementById('modetext').innerHTML="Disable Dark mode"
     

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled');
      document.title = 'TextUtils - Light Mode';
      let d = document.getElementById('modetext').innerHTML="Enable Dark mode"
      document.querySelector('textarea').classList.add('bg-light','text-black') 
      

      toast.error(' Dark Mode OFF', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };

  return (
    <BrowserRouter>
      <Navbar titles="Textutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} mode= {mode}/>
      <ToastContainer/>
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze:" mode={mode} />} />
          <Route path="/about" element={<About />} mode={mode} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
