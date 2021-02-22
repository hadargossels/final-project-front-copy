import React from "react";

import "./blog-preview.styles.scss";

const BlogPreviewPage = () => (
  <div className="blog-preview">
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css"
        integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc="
        crossOrigin="anonymous"
      />
      <div className="container mt-100 mt-60">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title mb-4 pb-2">
              <h4 className="title mb-4">Latest Blog &amp; News</h4>
              <p className="text-muted para-desc mx-auto mb-0">
                Build responsive, mobile-first projects on the web with the
                world's most popular front-end component library.
              </p>
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
        <div className="row">
          <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="blog-post rounded border">
              <div className="blog-img d-block overflow-hidden position-relative">
                <img
                  src="https://via.placeholder.com/350x280/FF7F50/000000"
                  className="img-fluid rounded-top"
                  alt
                />
                <div className="overlay rounded-top bg-dark" />
                <div className="post-meta">
                  <a
                    href="javascript:void(0)"
                    className="text-light d-block text-right like"
                  >
                    <i className="mdi mdi-heart" /> 33
                  </a>
                  <a href="javascript:void(0)" className="text-light read-more">
                    Read More <i className="mdi mdi-chevron-right" />
                  </a>
                </div>
              </div>
              <div className="content p-3">
                <small className="text-muted p float-right">19th Oct, 19</small>
                <small>
                  <a href="javascript:void(0)" className="text-primary">
                    Marketing
                  </a>
                </small>
                <h4 className="mt-2">
                  <a href="javascript:void(0)" className="text-dark title">
                    Quick guide on business with friends.
                  </a>
                </h4>
                <p className="text-muted mt-2">
                  There is now an abundance of readable dummy texts. These are
                  usually used when a text is required purely to fill a space.
                </p>
                <div className="pt-3 mt-3 border-top d-flex">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    className="img-fluid avatar avatar-ex-sm rounded-pill mr-3 shadow"
                    alt
                  />
                  <div className="author mt-2">
                    <h6 className="mb-0">
                      <a href="javascript:void(0)" className="text-dark name">
                        Lisa Marvel
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            {/*end blog post*/}
          </div>
          {/*end col*/}
          {/* <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="blog-post rounded border">
              <div className="blog-img d-block overflow-hidden position-relative">
                <img
                  src="https://via.placeholder.com/350x280/6495ED/000000"
                  className="img-fluid rounded-top"
                  alt
                />
                <div className="overlay rounded-top bg-dark" />
                <div className="post-meta">
                  <a
                    href="javascript:void(0)"
                    className="text-light d-block text-right like"
                  >
                    <i className="mdi mdi-heart" /> 33
                  </a>
                  <a href="javascript:void(0)" className="text-light read-more">
                    Read More <i className="mdi mdi-chevron-right" />
                  </a>
                </div>
              </div>
              <div className="content p-3">
                <small className="text-muted p float-right">19th Oct, 19</small>
                <small>
                  <a href="javascript:void(0)" className="text-primary">
                    Event
                  </a>
                </small>
                <h4 className="mt-2">
                  <a href="javascript:void(0)" className="text-dark title">
                    Become more money-minded
                  </a>
                </h4>
                <p className="text-muted mt-2">
                  There is now an abundance of readable dummy texts. These are
                  usually used when a text is required purely to fill a space.
                </p>
                <div className="pt-3 mt-3 border-top d-flex">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    className="img-fluid avatar avatar-ex-sm rounded-pill mr-3 shadow"
                    alt
                  />
                  <div className="author mt-2">
                    <h6 className="mb-0">
                      <a href="javascript:void(0)" className="text-dark name">
                        Joya Aafri
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div> */}
          {/*end blog post*/}
          {/* </div> */}
          {/*end col*/}
          {/* <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="blog-post rounded border">
              <div className="blog-img d-block overflow-hidden position-relative">
                <img
                  src="https://via.placeholder.com/350x280/FF1493/000000"
                  className="img-fluid rounded-top"
                  alt
                />
                <div className="overlay rounded-top bg-dark" />
                <div className="post-meta">
                  <a
                    href="javascript:void(0)"
                    className="text-light d-block text-right like"
                  >
                    <i className="mdi mdi-heart" /> 33
                  </a>
                  <a href="javascript:void(0)" className="text-light read-more">
                    Read More <i className="mdi mdi-chevron-right" />
                  </a>
                </div>
              </div>
              <div className="content p-3">
                <small className="text-muted p float-right">19th Oct, 19</small>
                <small>
                  <a href="javascript:void(0)" className="text-primary">
                    Software
                  </a>
                </small>
                <h4 className="mt-2">
                  <a href="javascript:void(0)" className="text-dark title">
                    Quick guide on business with friends.
                  </a>
                </h4>
                <p className="text-muted mt-2">
                  There is now an abundance of readable dummy texts. These are
                  usually used when a text is required purely to fill a space.
                </p>
                <div className="pt-3 mt-3 border-top d-flex">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    className="img-fluid avatar avatar-ex-sm rounded-pill mr-3 shadow"
                    alt
                  />
                  <div className="author mt-2">
                    <h6 className="mb-0">
                      <a href="javascript:void(0)" className="text-dark name">
                        Martin Sobhe
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div> */}
          {/*end blog post*/}
          {/* </div>
          end col */}
        </div>
        {/*end row*/}
      </div>
    </div>
  </div>
);

export default BlogPreviewPage;
