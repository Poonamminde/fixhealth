import Navigation from "./navigation";
import HeroSection from "./hero-section";
import Form from "./form";
import Testimonials from "./testimonials";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <Form />
      <Testimonials />
    </div>
  );
}

export default App;
