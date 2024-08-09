import "../src/App.scss"
import React, { useRef } from 'react';
import Navbar from "./Components/Navbar/navbar.jsx";
import Hero from "./Components/Hero/hero.jsx"
import Sidebar from "./Components/Sidebar/sidebar.jsx";
import Parallax from "./Components/Parallax/parallax.jsx";
import Services from "./Components/Services/services.jsx";
import Portfolio from "./Components/Portfolio/portfolio.jsx";
import Contacts from "./Components/Contacts/contacts.jsx";
import Cursor from "./Components/Cursor/cursor.jsx";
import About from "./Components/About/about.jsx"

const App = () => {

  const refs = {
    Homepage: React.createRef(),
    Services: React.createRef(),
    ServicesContent: React.createRef(),
    Portfolio: React.createRef(),
    Contact: React.createRef(),
    About: React.createRef(),
  };
  return (
    
   <div>
    
     <Cursor/>

    <section id="Homepage" ref={refs.Homepage}>
      <Sidebar/>
      <Navbar/>
      <Hero/>
    </section>

    <section id="About" ref={refs.About}>
      <About/>
    </section>

    <section id="Services" ref={refs.Services}>
      <Parallax type="services"/>
    </section>

    <section ref={refs.ServicesContent}>
      <Services/>
    </section>

    <section id="Portfolio" ref={refs.Portfolio}>
      <Parallax type="protfilo"/>
    </section>

    <Portfolio/>

    <section id="Contact" ref={refs.Contact}>
      <Contacts/>
    </section>
  
  </div>
  );
};

export default App;