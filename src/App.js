import logo from './logo.svg';
import './App.css';
import Quiz from './components/Quiz';
import Start from './components/Start';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/quiz" element={<Quiz/>} />
      </Routes>
    </BrowserRouter>
          
    </>


  );
}

export default App;
