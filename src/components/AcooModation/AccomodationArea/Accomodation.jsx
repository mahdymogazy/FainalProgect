import './Accomodation.css'
import Acco1 from './../../../assets/image/room/room1.jpg'
import Acco2 from './../../../assets/image/room/room2.jpg'
import Acco3 from './../../../assets/image/room/room3.jpg'
import Acco4 from './../../../assets/image/room/room4.jpg'



function Accomodation() {
  return (
    <>
    {/* <!--================ Accomodation Area  =================--> */}
        <section className="accomodation_area section_gap"/>
            <div className="container"/>
                <div className="section_title text-center">
                    <h2 className="title_color">Special Accomodation</h2>
                    <p>We all live in an age that belongs to the young at heart. Life that is becoming extremely fast,</p>
                </div>
                {/* /////////////////////// */}
                <div className="container">
  <div className="row">
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" src="image1.jpg" alt="Image of property"/>
        <div className="card-body">
          <h5 className="card-title">Property Title</h5>
          <p className="card-text">Property description.</p>
          <a href="#" className="btn btn-primary">Book Now</a>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" src="image2.jpg" alt="Image of property"/>
        <div className="card-body">
          <h5 className="card-title">Property Title</h5>
          <p className="card-text">Property description.</p>
          <a href="#" className="btn btn-primary">Book Now</a>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" src="image3.jpg" alt="Image of property"/>
        <div className="card-body">
          <h5 className="card-title">Property Title</h5>
          <p className="card-text">Property description.</p>
          <a href="#" className="btn btn-primary">Book Now</a>
        </div>
      </div>
    </div>
  </div>
</div>

                {/* //////////////////////////// */}

                {/* //////////////////////// */}

                <nav class="navbar navbar-expand-lg navbar-light bg-light"/>
  <div className="container-fluid"/>
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#category1"><i className="icon1"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#category2"><i className="icon2"></i></a>
        </li>
        <li className="nav-item">
          

                {/* ///////////////////////////////// */}
                <div className="row mb_30">
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src={Acco1} alt=""/>
                                <a href="#" className="btn theme_btn button_hover">Book Now</a>
                            </div>
                            <a href="#"><h4 className="sec_h4">Double Deluxe Room</h4></a>
                            <h5>$250<small>/night</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src={Acco2} alt=""/>
                                <a href="#" className="btn theme_btn button_hover">Book Now</a>
                            </div>
                            <a href="#"><h4 className="sec_h4">Single Deluxe Room</h4></a>
                            <h5>$200<small>/night</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src={Acco3} alt=""/>
                                <a href="#" className="btn theme_btn button_hover">Book Now</a>
                            </div>
                            <a href="#"><h4 className="sec_h4">Honeymoon Suit</h4></a>
                            <h5>$750<small>/night</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src={Acco4} alt=""/>
                                <a href="#" className="btn theme_btn button_hover">Book Now</a>
                            </div>
                            <a href="#"><h4 className="sec_h4">Economy Double</h4></a>
                            <h5>$200<small>/night</small></h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--================ Accomodation Area  =================--> */}
    </>
  )

}

export default Accomodation