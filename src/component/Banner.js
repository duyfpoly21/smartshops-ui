import React from 'react';
import './../scss/style.scss'
import './../public/css/bootstrap-icons.css';
import './../public/css/templatemo-ebook-landing.css';
import './../public/css/bootstrap.min.css';
function Banner() {
    return (
        <main>
            <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12 mb-5 pb-5 pb-lg-0 mb-lg-0">

                            <h6>contaxt mr Duy Nguyen : 0332016377</h6>

                            <h1 className="text-white mb-4">smartshops landing page for professionals</h1>

                            <a href="#section_2" className="btn custom-btn smoothscroll me-3">Discover More</a>

                            <a href="#section_3" className="link link--kale smoothscroll">Meet the Author</a>
                        </div>

                        <div className="hero-image-wrap col-lg-6 col-12 mt-3 mt-lg-0">
                            <img src="./../public/images/education-online-books.png" className="hero-image img-fluid"
                                 alt="education online books"/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Banner;
