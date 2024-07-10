import logo from './logo.svg';
import './App.css';
import { App1 } from './components/App1';
import { App2 } from './components/App2';
import { App3 } from './components/App3';
import { App4 } from './components/App4';
import { MainRoutingComp } from './components/MainRouting';
function App() {
  return (
    <div className="App">
      {/* <App1/> */}
{/* <App2/> */}
{/* <App3/> */}
{/* <App4/> */}
<MainRoutingComp/>
    </div>
  );
}

export default App;
