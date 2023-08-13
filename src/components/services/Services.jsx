import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Services = () => {
  const sliderRef = useRef(null);

  const play = () => {
    sliderRef.current.slickPlay();
  };

  const pause = () => {
    sliderRef.current.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (

    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Services</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
        <Slider {...settings}>
          <div style={{marginRight:"60px"}} data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4><a href="">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div  data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-file"></i></div>
              <h4><a href="">Sed ut perspici</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div  data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4><a href="">Magni Dolores</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div  data-aos="zoom-in" data-aos-delay="400">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-layer"></i></div>
              <h4><a href="">Nemo Enim</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>
          </Slider>
        </div>

      </div>
    </section>



    // <section id="services" className="services section-bg">
    //   <div className="container" data-aos="fade-up">

    //     <div className="section-title">
    //       <h2>Services</h2>
    //       <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    //     </div>


    //     <div className="row">
    //     <Slider  {...settings}>
    //     <div className="col-xl-3 col-md-6 d-flex " data-aos="zoom-in" data-aos-delay="100" style={{margin: "50px"}}>
    //         <div className="icon-box">
    //           <div className="icon"><i className="bx bxl-dribbble"></i></div>
    //           <h4><a href="">Websites</a></h4>
    //           <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
    //         </div>
    //       </div>
         
    //       <div className="col-xl-3 col-md-6 d-flex  mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
    //         <div className="icon-box">
    //           <div className="icon"><i className="bx bx-file"></i></div>
    //           <h4><a href="">Landing pages </a></h4>
    //           <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
    //         </div>
    //       </div>
    //       <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
    //         <div className="icon-box">
    //           <div className="icon"><i className="bx bxs-building-house"></i></div>
    //           <h4><a href="">Rental Management Systems</a></h4>
    //           <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
    //         </div>
    //       </div>
    //       <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
    //         <div className="icon-box">
    //           <div className="icon"><i className="bx bxs-school"></i></div>
    //           <h4><a href="">School Management Systems</a></h4>
    //           <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
    //         </div>
    //       </div>

    //       <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
    //         <div className="icon-box">
    //           <div className="icon"><i className="bx bxs-analyse"></i></div>
    //           <h4><a href="">Dashboard Analytics</a></h4>
    //           <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
    //         </div>
    //       </div>

    //       <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
    //         <div className="icon-box">
    //           <div className="icon"><i className="bx bx-layer"></i></div>
    //           <h4><a href="">HR Admin Management Systems</a></h4>
    //           <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
    //         </div>
    //       </div>

    //       <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
    //         <div className="icon-box">
    //           <div className="icon"><i className="bx bx-money"></i></div>
    //           <h4><a href="">Sacco Management System</a></h4>
    //           <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
    //         </div>
    //       </div>
    //   </Slider>
         

    //     </div>

    //   </div>
    // </section>
  )
}

export default Services


