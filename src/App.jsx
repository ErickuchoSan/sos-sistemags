import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import WhyUs from './components/WhyUs/WhyUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BottomNav from './components/BottomNav/BottomNav';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}

export default App;
