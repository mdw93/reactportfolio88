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
              <p className="fs-4">Full Stack Developer experienced in building scalable web applications and tools that improve efficiency and customer engagement. Experienced in both entrepreneurial and corporate environments, Matthew is a proud team player focused on achieving the project goals accurately and efficiently. Trained in the MERN stack, Matthew is experienced on both the front and backend development. He is focused on creating optimized and reusable solutions.
              </p>
              <a className="btn btn-primary btn-lg mt-1" href={Resume} download={Resume}>Download Resume</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default About;
