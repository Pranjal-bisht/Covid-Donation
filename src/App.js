import './App.css';
import Showcase from './components/Showcase'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import Info from './components/Info'
import Handwash from './components/Handwash'
import Map from './components/Map'
import Vaccine from './components/Vaccine';
function App() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Stats />
      <Info />
      <Handwash />
      <Vaccine/>
      <Map />
      <footer className="p-4 bg-success text-center text-light position-relative">
        <div className="container">
          <p className="lead">Copyright &copy; 2021 Pranjal Bisht</p>
          <a href="#" className="position-absolute bottom-0 end-0 p-sm-4">
            <i className="fas fa-arrow-circle-up h1 d-none d-sm-block"></i>
          </a>
        </div>
      </footer>
    </>
  )
}

export default App;
