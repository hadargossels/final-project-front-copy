import "./Footer.css";

function Footer() {
  return (
    <div id="footer">
      <footer className="footer">
        <div className="container-fluid footerBody">
          <div className="row">
            <div className="col">
              <h4>Contact Information</h4>
              <span>
                Tel Aviv Head Office – 2, Kaufmann St, Tel Aviv. *We suggest
                making an appointment before showing up, in order to make sure
                we have an available specialist
              </span>
          <div id="iconsAndfooter" >
            <div className="col d-grid text-muted ">
              <div className="d-flex ">
                <div className="iconsFooter"><a className="iconImg"  href="https://twitter.com/">
                  <i className="fab fa-twitter"></i> &emsp;
                </a></div>
                <div className="iconsFooter"><a className="iconImg" href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f"></i> &emsp;
                </a></div>
                <div className="iconsFooter"><a className="iconImg" href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin-in"></i> &emsp;
                </a></div>
               <div className="iconsFooter"><a className="iconImg" href="https://www.instagram.com/">
                  <i className="fab fa-instagram"></i> &emsp;
                </a></div> 
              </div>
                <div className="copyright">
                  Copyright&copy;2019 All rights reserved | This template is
                  made with
                </div>
            </div>
          </div>
            </div>

            <div className="col">
              <form id="formFooter">
                <h4>
                  Send Us Message &nbsp;<i class="fas fa-envelope"></i>
                </h4>
                <div class="mb-3" id="firstLastName">
                  <div id="firstFooter">
                    
                    First name<input type="text" class="form-control"  />
                  </div>

                  <div id="lastFooter">
                    
                    Last name<input type="text" class="form-control"  />
                  </div>
                </div>
                <div className="row">

                <div class="mb-3 emailFooter">
                 
                  Email<input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3 textareaFooter">
                  <label htmlfor="exampleInputPassword1" class="form-label">
                    
                  </label>
                  Message<textarea
                    class="form-control"
                    rows="4"
                    cols="20"
                    id="textarea"
                  />
                </div>
                </div>
                <div className=" btnFooter">
                  <button type="submit" class="btn btn-success">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
