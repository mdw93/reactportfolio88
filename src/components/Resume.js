import React from 'react';

function Resume() {

  return (
    <div>
      <div className="container shadow-lg p-3 mb-5 bg-white rounded rounded mt-5 ">

      <div class="row">
            <div class="col-lg-7 offset-lg-1 col-md-7 offset-md-1 col-sm-8 offset-sm-1 mt-5">
                <h2 class="font-weight-bold">Matthew Williams</h2>
                <div>Full Stack Developer experienced in building scalable web applications
                    and tools that improve efficiency and customer engagement.
                    Experienced in both entrepreneurial
                    and corporate environments, Matthew is a proud team player focused on
                    achieving project goals accurately and efficiently.</div>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-1 mt-5 .d-none .d-lg-block .d-xl-none">
            <h2 class="font-weight-bold">Contact</h2>
                <div>2044 Breckenridge Dr NE</div>
                <div>Atlanta, GA 30345</div>
                <div>404-229-9793</div>
                <div>mdwmdw9393@gmail.com</div>
                <div>Github - mdw93</div>
            </div>
        </div>

        <div className="row font-weight-bold">
          <div className=" col-lg-7 offset-lg-1 col-md-7 offset-md-1 col-sm-8 offset-sm-1 mt-5">
            <h4 className='cyan'>Experience</h4>
          </div>
          <div className=" col-lg-3 col-md-3 col-sm-1 mt-5">
            <h4 className='cyan'>Technologies</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7 offset-lg-1 col-md-7 offset-md-1 col-sm-8 offset-sm-1">

            <h5>
              <span className="font-weight-bold">Georgia Institute of Technology</span>
              <span className="font-italic">— Full-stack Developer</span>
            </h5>
            <div>04/2021 - PRESENT </div>
            <ol className="bullets mt-2">
              <li>Developed an e-commerce site based on Materialize CSS,
                Handlebars and Node.js expanding revenue streams and customer engagement (deployed on Heroku)</li>
              <li>Organized weekly meetings to review any ongoing team issues and get updates on development progression.</li>
              <li>Learned new emerging technologies and took initiative to offer technical direction and creative solutions.</li>
              <li>Built, tested and deployed a variety of web applications using the MERN stack.</li>
            </ol>

            <h5>
              <span className="font-weight-bold">Ally Financial Inc.</span>
              <span className="font-italic">— Credit Admin - Retail On-boarding</span>
            </h5>
            <div>02/2021- PRESENT</div>
            <ol className="bullets mt-2">
              <li>Oversees the onboarding of retail dealerships from creation of documents to post close</li>
              <li>Creates the required onboarding documentation based on dealer type (franchise, used,
                affiliate...)</li>
              <li>Manages a pipeline of 8-12 ongoing retail onboards daily</li>
            </ol>

            <h5>
              <span className="font-weight-bold">Ally Financial Inc.</span>
              <span className="font-italic"> — Credit Admin - Wholesale</span>
            </h5>
            <div>04/2019 - 02/2021</div>
            <ol className="bullets mt-2">
              <li>Member of the team handling all accounting related tasks in the Southeast business center</li>
              <li>Resolved all wholesale dealership issues in the Florida region - incoming/outgoing wires, check processing, dealership etc.</li>
              <li>Processed daily regional transactions between five million to 50 million plus</li>
            </ol>


          </div>
          <div className=" col-lg-3 col-lg-3 col-lg-1 ">
            <div>HTML, CSS, JavaScript, Git, APIs, NPM, Jest, Node.js, Express, Sequelize,
              MySQL, Handlebars, OOP, ORM, MVC, MongoDB, and React</div>

            <h4 className="mt-5 cyan">Skills</h4>
            <div>Leadership, Relationship Building, Communication, Teamwork, Time Management, Client Relations,
              Coaching/Teaching, Multitasking,
              Prioritization, Process Review, Strategic Planning, Research, Business Process</div>

          </div>

        </div>

        <div className="row   offset-lg-1  offset-md-1  offset-sm-1 mt-4">
          <div className="font-weight-bold">
            <h4 className="cyan">Education</h4>
          </div>
        </div>

        <div className="row offset-lg-1  offset-md-1  offset-sm-1 mb-5">
          <h5 className="font-weight-bold">Georgia Institute of Technology,</h5>
          <div>04/ 2021 - 10/2021</div>
          <div>Full Stack Development Program (MERN Stack)</div>

          <h5 className="font-weight-bold">University of Georgia,</h5>
          <div>08/2012 - 05/2016</div>
          <div>Bachelor's Business Administration (BBA)</div>
        </div>
      </div>
    </div>
      );
  }

      export default Resume;
