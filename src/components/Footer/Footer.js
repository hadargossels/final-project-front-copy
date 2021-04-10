import "./Footer.css";

function Footer() {
  return (
    <div id="footer">
      <footer className="footer">
        <div className="container-fluid footerBody">
          <div className="row">
            <div className="col-4">
              {/* <h4>Contact Information</h4>
              <span>
                Tel Aviv Head Office – 2, Kaufmann St, Tel Aviv. *We suggest
                making an appointment before showing up, in order to make sure
                we have an available specialist
              </span> */}
            </div>

            <div className="col-8 ">
              {/* <form id="formFooter" style={{ marginLeft: "6rem" }}>
                <h4>
                  Send Us Message &nbsp;<i className="fas fa-envelope"></i>
                </h4>
                <div className="row">
                  <div className="col-6 d-grid" >
                    <div>
                      First name
                      <input type="text" className="form-control" />
                    </div>

                    <div>
                      Last name
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3 emailFooter">
                      Email
                      <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3 textareaFooter">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      ></label>
                      Message
                      <textarea
                        className="form-control"
                        rows="4"
                        cols="20"
                        id="textarea"
                      />
                    </div>

                    <div className=" btnFooter">
                      <button type="submit" className="btn btn-success">
                        Send Message
                      </button>
                    </div> */}
              {/* </div>
                </div>
              </form> */}
            </div>
          </div>
        </div>
        <div id="iconsAndfooter">
          <div className="col d-grid text-muted ">
            <div className="d-flex " style={{ marginLeft: "21rem" }}>
              <div className="iconsFooter">
                <a className="iconImg" href="https://twitter.com/">
                  <i className="fab fa-twitter"></i> &emsp;
                </a>
              </div>
              <div className="iconsFooter">
                <a className="iconImg" href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f"></i> &emsp;
                </a>
              </div>
              <div className="iconsFooter">
                <a className="iconImg" href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin-in"></i> &emsp;
                </a>
              </div>
              <div className="iconsFooter">
                <a className="iconImg" href="https://www.instagram.com/">
                  <i className="fab fa-instagram"></i> &emsp;
                </a>
              </div>
            </div>
            <div className="copyright">
              Copyright&copy;2019 All rights reserved | This template is made
              with
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
