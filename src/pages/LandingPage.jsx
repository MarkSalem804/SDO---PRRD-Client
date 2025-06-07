import Header from "../landing page/Header";
import Hero from "../landing page/Hero";
import FeaturedResearch from "../landing page/FeaturedResearch";
import Publications from "../landing page/Publications";
import Newsletter from "../landing page/Newsletter";
import Team from "../landing page/Team";
import Footer from "../landing page/Footer";
import Services from "../landing page/Services";

function LandingPage() {
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

export default LandingPage;
