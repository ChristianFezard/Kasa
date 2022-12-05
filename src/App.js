
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Rentals from './pages/Rentals';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<Error />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/rentals/:id" element={<Rentals />}/>
      </Routes>
    </div>
  );
}

export default App;
