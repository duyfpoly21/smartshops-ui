import React from 'react';
import './../scss/style.scss'
import './../public/css/bootstrap-icons.css';
import './../public/css/templatemo-ebook-landing.css';
import './../public/css/bootstrap.min.css';
function Footer() {
    // @ts-ignore
    return (
        <main>
            <section className="contact-section section-padding" id="section_5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-12 mx-auto">
                            <form className="custom-form ebook-download-form bg-white shadow" action="#" method="post"
                                  role="form">
                                <div className="text-center mb-5">
                                    <h2 className="mb-1">Get your free ebook</h2>
                                </div>
                                <div className="ebook-download-form-body">
                                    <div className="input-group mb-4">
                                        <input type="text" name="ebook-form-name" id="ebook-form-name"
                                               className="form-control" aria-label="ebook-form-name"
                                               aria-describedby="basic-addon1" placeholder="Your Name" required/>
                                        <span className="input-group-text" id="basic-addon1">
                                            <i className="custom-form-icon bi-person"></i>
                                        </span>
                                    </div>
                                    <div className="input-group mb-4">
                                        <input type="email" name="ebook-email" id="ebook-email" pattern="[^ @]*@[^ @]*"
                                               className="form-control" placeholder="your@company.com"
                                               aria-label="ebook-form-email" aria-describedby="basic-addon2"
                                               required=""/>
                                        <span className="input-group-text" id="basic-addon2">
                                            <i className="custom-form-icon bi-envelope"></i>
                                        </span>
                                    </div>
                                    <div className="col-lg-8 col-md-10 col-8 mx-auto">
                                        <button type="submit" className="form-control">Download ebook</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-6 col-12">
                            <h6 className="mt-5">Say hi and talk to us</h6>

                            <h2 className="mb-4">Contact</h2>

                            <p className="mb-3">
                                <i className="bi-geo-alt me-2"></i>
                                HaNoi, VietNam
                            </p>

                            <p className="mb-2">
                                <a href="tel: 0332016377" className="contact-link">
                                    0332 016 377
                                </a>
                            </p>

                            <p>
                                <a href="mailto:info@company.com" className="contact-link">
                                    info@company.com
                                </a>
                            </p>

                            <h6 className="site-footer-title mt-5 mb-3">Social</h6>

                            <ul className="social-icon mb-4">
                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-instagram"></a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-twitter"></a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-facebook"></a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link bi-whatsapp"></a>
                                </li>
                            </ul>

                            <p className="copyright-text">
                                Copyright © 2048 ebook company
                                <br/><br/><a rel="nofollow" href="https://templatemo.com" target="_blank">designed by templatemo</a>
                                </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Footer;
