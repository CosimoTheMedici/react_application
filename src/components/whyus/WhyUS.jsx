import React from 'react'

const WhyUS = () => {
  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">

        <div className="row">

          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

            <div className="content">
              <h3><strong>Your Partner in Digital Transformation .</strong></h3>
              <p>
              Outsourcing your custom software needs to us allows you to save significant resources while gaining access to top-tier development expertise. 
              We specialize in building the management systems that are the backbone of modern business.             </p>
            </div>

            <div className="accordion-list">
              <ul>
                <li>
                  <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> Highly Skilled Team<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                    <p>
                    Our dedicated developers and project managers are experts in building sector-specific software,
                     ensuring your solution is built on a robust and scalable foundation.                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> Custom Solutions <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                    We don't believe in one-size-fits-all. Every school, rental agency, and sales team is unique. 
                    We build systems tailored to your specific workflows and requirements.                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> Multi Industry Experience <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                    Our portfolio spans education, property management, retail, and more. 
                    This diverse experience means we understand the unique challenges you face.                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-4" className="collapsed"><span>04</span> Cost Effective <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-4" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                    Get a full-scale, custom-developed system without the overhead of an in-house team.
                     Our models are designed to provide maximum value and fit your budget.              </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-5" className="collapsed"><span>05</span> Dedicated Team <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-5" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                   Our relationship doesn't end at launch. We provide ongoing maintenance, support, 
                   and integration services to ensure your system evolves with your business.                </p>
                  </div>
                </li>

              </ul>
            </div>

          </div>

          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{ backgroundImage: "url('assets/img/why-us.png')" }} data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
        </div>

      </div>
    </section>
  )
}

export default WhyUS