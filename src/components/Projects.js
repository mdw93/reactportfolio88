import React from 'react';
import Project from './public/assets/images/Project-1.jpg'
import Planner from './public/assets/images/planner-1.jpg'
import Password from './public/assets/images/password-1.jpg'

function Projects() {

    return (
      <div>
              <h1 class="display-5 fw-bold centeredText" id="projects">Projects</h1>
    <div class="d-flex justify-content-center w-80 p-3">
        <div class="p-2 bd-highlight">
            <div class="card">
                <img src={Project}
                    class="card-img-top" alt="API based recipe website for food and drink"></img>
                <div class="card-body">
                    <h5 class="card-title">API based recipe website</h5>
                    <p class="card-text">Website to help an individual find a food or drink recipe based on a selection criteria.</p>
                    <a target="_blank" rel="noreferrer" href="https://fjunior1.github.io/test-prj1/" class="btn btn-primary">Deployed Site</a>
                </div>
            </div>

        </div>
    </div>

    <div class="d-flex justify-content-center w-30 p-3">
        <div class="p-2 bd-highlight">
            <div class="card">
                <img src={Planner}
                    class="card-img-top" alt="Workday planner based on local storage"></img>
                <div class="card-body">
                    <h5 class="card-title">Local storage based Daily Planner</h5>
                    <p class="card-text">Daily planner based around workhours, stores events in local storage.</p>
                    <a target="_blank" rel="noreferrer" href="https://mdw93.github.io/dailyPlanner/" class="btn btn-primary">Deployed Site</a>
                </div>
            </div>
        </div>
        <div class="p-2 bd-highlight w-30 p-3">
            <div class="card">
                <img src={Password}
                    class="card-img-top" alt="Password Generator"></img>
                <div class="card-body">
                    <h5 class="card-title">Password Generator</h5>
                    <p class="card-text">Generates a complex password based on a user selection of parameters.</p>
                    <a target="_blank" rel="noreferrer" href="https://mdw93.github.io/randompassword/" class="btn btn-primary">Deployed Site</a>
                </div>
            </div>
        </div>
    </div>
      </div>
    );
  }

export default Projects;