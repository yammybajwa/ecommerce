import React from "react";

import "bootstrap/dist/js/bootstrap.bundle";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <>
      <div className=" mt-5 container-fluid">
        <div className="row">
          <div className="col-12">
            <div
              id="carouselExampleDark"
              class="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img
                    src="https://dummyimage.com/1400x400/000/4d4d4f"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5 className="">First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src="https://dummyimage.com/1400x400/000/4d4d4f"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="https://dummyimage.com/1400x400/000/4d4d4f"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5 className="text-white">Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center">Our Services</h1>
              <p className="col-sm-12 col-md-4 col-lg-12 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                distinctio excepturi in sunt. Illo earum voluptate modi, impedit
                enim inventore! Numquam dicta quasi totam dolorem facere at
                distinctio esse maiores?
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="card w-100">
                <img
                  src={
                    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500"
                  }
                  className="card-img-top"
                  alt="Nature"
                />
                <div className="card-body">
                  <h5 className="card-title">Tour</h5>
                  <p className="card-text">
                    Forest located on The Nature Conservancy's Cascade Head
                    Preserve, north of Lincoln City, Oregon. Our Mission.
                    Conserving the lands and waters on which all life ...
                  </p>
                  <Link to="/page-one" className="btn btn-success">
                    Go somewhere
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 ">
              <div className="card w-100 ">
                <img
                  src={
                    "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500"
                  }
                  className="card-img-top"
                  alt="Nature"
                />
                <div className="card-body">
                  <h5 className="card-title">Tour</h5>
                  <p className="card-text">
                    Forest located on The Nature Conservancy's Cascade Head
                    Preserve, north of Lincoln City, Oregon. Our Mission.
                    Conserving the lands and waters on which all life ...
                  </p>
                  <Link to="/page-one" className="btn btn-success">
                    Go somewhere
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card sm-mb-3 w-100">
                <img
                  src={
                    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"
                  }
                  className="card-img-top"
                  alt="Nature"
                />
                <div className="card-body">
                  <h5 className="card-title">Tour</h5>
                  <p className="card-text">
                    Forest located on The Nature Conservancy's Cascade Head
                    Preserve, north of Lincoln City, Oregon. Our Mission.
                    Conserving the lands and waters on which all life ...
                  </p>
                  <a href="#" className="btn btn-success">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 faqs">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center">FAQs</h1>
              <p className="col-sm-12 col-md-4 col-lg-12 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                distinctio excepturi in sunt. Illo earum voluptate modi, impedit
                enim inventore! Numquam dicta quasi totam dolorem facere at
                distinctio esse maiores?
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Accordion Item #1
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classNamees that we use to style each element.
                      These classNamees control the overall appearance, as well
                      as the showing and hiding via CSS transitions. You can
                      modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Accordion Item #2
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classNamees that we use to style each
                      element. These classNamees control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You
                      can modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Accordion Item #3
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classNamees that we use to style each
                      element. These classNamees control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You
                      can modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Accordion Item #4
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element.
                    These classNamees control the overall appearance, as well as
                    the showing and hiding via CSS transitions. You can modify
                    any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML
                    can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
