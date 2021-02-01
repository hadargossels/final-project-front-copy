import './Footer.css';

function Footer() {
    return (
        <div id="footer">
        <footer className="footer">
          <div className="container-fluid">
            <div className="d-flex text-muted">
              <div className="col d-flex">
                <div className="icon">
                  <i className="fab fa-twitter"></i> &emsp;

                </div>
                <div className="icon">
                  <i className="fab fa-facebook-f"></i> &emsp;

                </div>
                <div className="icon ">
                  <i className="fab fa-linkedin-in"></i> &emsp;

                </div>
                <div className="icon ">
                  <i className="fab fa-instagram"></i> &emsp;

                </div>
              </div>
              
               <span> Copyright&copy;2019 All rights reserved | This template is made with<i className="fas fa-heart"></i></span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;