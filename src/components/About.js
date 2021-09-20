import React from 'react';
import Resume from './public/assets/download/resume.pdf'

function About() {

  return (
    <div>
      <header className="py-5">
        <div className="container px-lg-5">
          <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
            <div className="m-4 m-lg-5">
              <h1 className="display-5 fw-bold" id="about">About Matt!</h1>
              <p className="fs-4">A seasoned business professional with experience in entrepreneurial and large cap
                company
                enviroments, Matt has been putting all his energy into transitioning to a full stack role. He is
                excited about the prospect of
                a more creative and varied work enviroment!</p>
              <a className="btn btn-primary btn-lg mt-1" href={Resume} download={Resume}>Download Resume</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default About;
