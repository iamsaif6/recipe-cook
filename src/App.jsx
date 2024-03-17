import './App.css';
import Header from './components/header/Header';
import Main from './components/Main';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <ToastContainer />
    </>
  );
}

export default App;
