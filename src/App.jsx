import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QandA from './components/QandA/QandA';


function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <hr className='w-11/12 mx-auto border-2'/>
      <Body></Body>
      <ToastContainer></ToastContainer>
      <QandA></QandA>
    </div>
  )
}

export default App
