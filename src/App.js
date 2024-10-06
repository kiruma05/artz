import React, { useRef } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashbord";
import Projects from "./pages/Projects";
import AboutUs from "./pages/AboutUs";
import Event from "./pages/Event";
import Team from "./pages/Team";
import Footer from "./components/Footer";

function App() {
  const dashboardRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutUsRef = useRef(null);
  const newsRef = useRef(null);
  const eventRef = useRef(null);
  const teamRef = useRef(null);
  const registerRef = useRef(null);
  const loginRef = useRef(null);

  const scrollToSection = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">
      <Sidebar
        scrollToSection={scrollToSection}
        refs={{
          dashboardRef,
          contactRef,
          projectsRef,
          aboutUsRef,
          newsRef,
          eventRef,
          teamRef,
          registerRef,
          loginRef,
        }}
      />

      <main className="content">
        <section ref={dashboardRef}>
          <Dashboard />
        </section>

        <section ref={projectsRef}>
          <Projects />
        </section>

        <section ref={eventRef}>
          <Event />
        </section>

        <section ref={teamRef}>
          <Team />
        </section>

        <section ref={aboutUsRef}>
          <AboutUs />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
