
import './Contacts.css'
import { Link } from 'react-router-dom';

function Contacts() {
    return (
        <>
            {/* <!--================Breadcrumb Area =================--> */}
            <section className="breadcrumb_area">
                <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
                <div className="container">
                    <div className="page-cover text-center">
                        <h2 className="page-cover-tittle">Contact Us</h2>
                        <ol className="breadcrumb">
                            <li><Link to="home">Home</Link></li>
                            {/* <i className="fa-solid fa-arrow-right"></i> */}
                            <li className="active">Contact Us</li>
                        </ol>
                    </div>
                </div>
            </section>
            {/* <!--================Breadcrumb Area =================--> */}

            {/* <!--================Contact Area =================--> */}
            <section className="contact_area section_gap">
                <div className="container">
                    <div id="mapBox" className="mapBox"
                        data-lat="40.701083"
                        data-lon="-74.1522848"
                        data-zoom="13"
                        data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia."
                        data-mlat="40.701083"
                        data-mlon="-74.1522848">
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="contact_info">
                                <div className="info_item">
                                <i className="fa-solid fa-house"></i>
                                    <h6>California, United States</h6>
                                    <p>Santa monica bullevard</p>
                                </div>
                                <div className="info_item">
                                <i className="fa-solid fa-phone"></i>
                                    <h6><a href="#">00 (440) 9865 562</a></h6>
                                    <p>Mon to Fri 9am to 6 pm</p>
                                </div>
                                <div className="info_item">
                                <i className="fa-solid fa-envelope"></i>
                                    <h6><a href="#">support@colorlib.com</a></h6>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>

                        {/* ///////////////////////////form/////////////////////////////////// */}
                        <div className="col-md-9">
                            <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" >
                            {/* novalidate="novalidate" */}
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" id="message" rows="1" placeholder="Enter Message"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12 text-right">
                                    <button type="submit" value="submit" className="btn theme_btn button_hover">Send Message</button>
                                </div>
                            </form>
                                                    {/* /////////////////////////// endform/////////////////////////////////// */}

                        </div>
                    </div>
                </div>
            </section>
            {/* <!--================Contact Area =================--> */}
        </>
    )
}

export default Contacts