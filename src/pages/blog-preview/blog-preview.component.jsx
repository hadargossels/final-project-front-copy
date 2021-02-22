import React, { Component } from "react";
import axios from "axios";
import "./blog-preview.styles.scss";

import faker from "faker";

class BlogPreviewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/postPreview`).then((res) => {
      const dataPosts = res.data;
      this.setState({ posts: dataPosts });
    });
  }

  render() {
    return (
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
                    {faker.lorem.sentence(30)}
                  </p>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row">
              {this.state.posts.map((post, id) => (
                <div key={id} className="col-lg-4 col-md-6 mt-4 pt-2">
                  <div className="blog-post rounded border">
                    <div className="blog-img d-block overflow-hidden position-relative">
                      <img
                        src={post.image}
                        className="img-fluid rounded-top"
                        alt
                      />
                      <div className="overlay rounded-top bg-dark" />
                      <div className="post-meta">
                        <a
                          href="javascript:void(0)"
                          className="text-light d-block text-right like"
                        >
                          <i className="mdi mdi-heart" />{" "}
                          {faker.random.number(400)}
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="text-light read-more"
                        >
                          Read More <i className="mdi mdi-chevron-right" />
                        </a>
                      </div>
                    </div>
                    <div className="content p-3">
                      <small className="text-muted p float-right">
                        {post.date}
                      </small>
                      <small>
                        <a href="javascript:void(0)" className="text-primary">
                          {post.topic}
                        </a>
                      </small>
                      <h4 className="mt-2">
                        <a
                          href="javascript:void(0)"
                          className="text-dark title"
                        >
                          {post.title}
                        </a>
                      </h4>
                      <p className="text-muted mt-2">Read More</p>
                      <div className="pt-3 mt-3 border-top d-flex">
                        <img
                          src={post.image}
                          className="img-fluid avatar avatar-ex-sm rounded-pill mr-3 shadow"
                          alt
                        />
                        <div className="author mt-2">
                          <h6 className="mb-0">
                            <a
                              href="javascript:void(0)"
                              className="text-dark name"
                            >
                              {post.animals}
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end blog post*/}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPreviewPage;
