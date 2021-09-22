import React from 'react';
import FOS from './public/assets/images/FOS.png'
import NOTETAKER from './public/assets/images/NOTETAKER.png'
import REACTPORTFOLIO from './public/assets/images/REACTPORTFOLIO.png'

function Projects() {

    return (
        <>
        <div className="row mt-5">
                <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-8 offset-sm-2">
                    <div className="card ">
                        <img className="card-img-top" src={FOS} alt="An online coffee shop - branded FOS"></img>
                        <div className="card-body">
                          <h5 className="card-title">Online Coffee Shop</h5>
                          <p className="card-text">Online ordering platform for the fictional FOS Coffee Shop. The project has a few key features, including a member rewards program, the ability to order products and pay online or in the store, and fully-editable customer profiles.</p>
                          <a href="https://fos-coffee-shop.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-primary">Deployed site</a>
                        </div>
                      </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-8 offset-sm-2">
                        <div className="card ">
                            <img className="card-img-top" src={NOTETAKER} alt="Homepage for a express notetaker app"></img>
                            <div className="card-body">
                              <h5 className="card-title">Notetaking application</h5>
                              <p className="card-text">Express based application, giving users the ability to create and store notes</p>
                              <a href="https://notetakergt88.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-primary">Deployed site</a>
                            </div>
                          </div>
                        </div>
                    </div>

                    <div className="row mt-5 mb-5">
                        <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-8 offset-sm-2">
                            <div className="card ">
                                <img className="card-img-top" src={REACTPORTFOLIO} alt="Homepage for a react portfolio site"></img>
                                <div className="card-body">
                                  <h5 className="card-title">React Portfolio</h5>
                                  <p className="card-text">Portfolio webpage built using react</p>
                                  <a href="https://reactportfolio888.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-primary">Deployed site</a>
                                </div>
                              </div>
                            </div>
                        </div>
                        </>
    );
}

export default Projects;