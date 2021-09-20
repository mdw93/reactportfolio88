import React from 'react';

function Contact() {

    return (

        <div>

            <form action="contact">

                <div className="container shadow-lg p-3 mb-5 bg-white rounded rounded mt-5 ">

                    <div class="row mt-5">
                        <div class="col-md-2 offset-lg-3 offset-md-3 offset-sm-3">
                            <div class="form-group">
                                <label for="form_name">Firstname</label>
                                <input id="form_name" type="text" name="name" class="form-control" placeholder="Firstname" required="required" data-error="Firstname is required."></input>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label for="form_lastname">Lastname</label>
                                <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Lastname" required="required" data-error="Lastname is required."></input>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div class="form-group">
                                <label for="form_email">Email</label>
                                <input id="form_email" type="email" name="email" class="form-control" placeholder="Email" required="required" data-error="Valid email is required."></input>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 offset-lg-3 offset-md-3 offset-sm-3 mt-2">
                            <div class="form-group">
                                <label for="form_message">Message *</label>
                                <textarea id="form_message" name="message" class="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                        <div class="col-md-12 offset-md-3 mt-2 mb-5">
                            <input type="submit" class="btn btn-primary" value="Send message"></input>
                        </div>
                    </div>
                </div>

            </form>

        </div>

    );
}

export default Contact;