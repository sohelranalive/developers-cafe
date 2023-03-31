import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <hr className='w-11/12 mx-auto border-2'/>
      <Body></Body>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
