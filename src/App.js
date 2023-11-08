
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
