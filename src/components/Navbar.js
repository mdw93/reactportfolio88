import React from 'react';
// import Display from './Display';

function Navbar(props) {
  // TODO: Add a style attribute to `nav`
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#A">MDW Developements</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <button type="button" className="btn btn-primary" id="About" onClick={() => props.setCurrentPage('About')}>About Me</button>
                    <button type="button" className="btn btn-primary" id="Projects" onClick={() => props.setCurrentPage('Projects')}>Projects</button>
                    <button type="button" className="btn btn-primary" id="Resume" onClick={() => props.setCurrentPage('Resume')}>Resume</button>
                    <button type="button" className="btn btn-primary" id="Contact" onClick={() => props.setCurrentPage('Contact')}>Contact</button>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
