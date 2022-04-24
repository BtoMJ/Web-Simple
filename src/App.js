import './App.css';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Info from './components/Info/Info';
import Multimedia from './components/Multimedia/Multimedia';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Info />
      <Multimedia />
      <Contacto />
      <Footer />
     
    </div>
  );
}

export default App;
