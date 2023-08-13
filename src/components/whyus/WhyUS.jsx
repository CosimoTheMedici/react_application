import React from 'react'

const WhyUS = () => {
  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">

        <div className="row">

          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

            <div className="content">
              <h3>High Quality Service <strong>velit pariatur architecto aut nihil</strong></h3>
              <p>
              Software development outsourcing allows companies to save money and resources while still getting high-quality software development services.
               Bobcares specializes in providing these outsourcing services to businesses of all sizes.              </p>
            </div>

            <div className="accordion-list">
              <ul>
                <li>
                  <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> Highly Skilled Team<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                    <p>
                    Our experienced software developers work under a project manager to build custom software solutions that meet your specific business needs. 
                    They have worked on a variety of projects for clients in various industries.                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> Custom Solutions <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                    Our efficient and skilled software developers build custom software solutions that meet your specific business
                     needs and so you can have tailored solutions well suited for your business.                     </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> Multi Industry Experience <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                    Our experts have worked on a variety of projects for clients in various industries, 
                    and they have the expertise and experience to handle even the most complex software development projects.                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> Cost Effective <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                    Outsourcing software development services & support needs to Bobcares can be much more cost-effective than hiring an in-house team. 
                    We offer flexible engagement models that allow you to choose the level of involvement you want in the development process.                   </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> Dedicated Team <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                    Whether you need a dedicated team to work on a project or just want to hire a few developers on an as-needed basis, 
                    Bobcares can provide a solution that meets your needs by meeting the highest standards of quality.                </p>
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