// import React from 'react';
import About from "./About"
import Projects from "./Projects"
import Resume from "./Resume"
import Contact from "./Contact"

const Display = (props) => {

  if (props.currentPage === 'Projects') {
    return <Projects />
  } else if (props.currentPage === 'Resume') {
    return <Resume />
  } else if (props.currentPage === 'Contact') {
    return <Contact />
  } else {
    return <About />
  }
}

export default Display;
