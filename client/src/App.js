import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/add-detail' element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
