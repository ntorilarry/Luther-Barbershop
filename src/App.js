import './App.css';
import Footer from './components/footer';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Services from './components/services';
import Testimonials from './components/testimonials';
import Appointment from './components/appointment';
import Cta from './components/cta';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Hero />
   <Services/>
   <Testimonials/>
   <Cta/>
   <Appointment/>
   <Footer />
    </div>
  );
}

export default App;
