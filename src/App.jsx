import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedResearch from "./components/FeaturedResearch";
import Publications from "./components/Publications";
import Newsletter from "./components/Newsletter";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedResearch />
        <Publications />
        <Services />
        <Team />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
