import logo from './logo.svg';
import './App.css';
import Navbar from './app/components/common/Navbar';
import { Outlet } from 'react-router';

function App({children}) {
  return (
    <div className="App">
      <Navbar/>
      <div className="main-container"><Outlet/></div>
    </div>
  );
}

export default App;
