
import './App.scss';
import Home from './pages/Hero';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
     <Home/> 
   <ToastContainer/>
    </>
  );
}

export default App;
