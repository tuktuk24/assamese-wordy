import { ToastContainer, toast } from 'react-toastify';
import WordCookies from './WordCookies'
import Playground from './Playground'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
      <WordCookies />
      <ToastContainer position="bottom-left" theme="dark" />
    </>
  )
}

export default App
