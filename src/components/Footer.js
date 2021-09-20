import React from 'react';

function Footer() {

    return (
        <div>
            <ul className="nav justify-content-center" id="contact">
                <li className="nav-item">
                    <a className="nav-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/matthew-williams-264990105/">Linkdin</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" target="_blank" rel="noreferrer" href="https://github.com/mdw93">Github</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="mailto:mdwmdw9393@gmail.com">Email</a>
                </li>
            </ul>
             <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
            crossorigin="anonymous"></script>
        </div>
        
    );
}

export default Footer;