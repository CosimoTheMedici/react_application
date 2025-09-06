import React from 'react'

const Team = () => {
  return (
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Team</h2>
          <p>The strength of our management systems lies in the experience and vision of the people 
            who build them. Our team combines deep technical expertise with a
             real-world understanding of the industries we serve, ensuring the solutions we deliver are both powerful and practical.</p>
        </div>

        <div className="row">

          <div className="col-lg-6">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
              <div className="pic"><img src="assets/img/team/team-11.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Cajetan Ngahu</h4>
                <span>Chief Executive Officer</span>
                <p>
                  With over 5 years of experience in software development and business strategy, 
                  he leads our mission to deliver ERP and management systems that become the backbone of our clients' growth.                   
                  His expertise ensures that every solution is strategically aligned with long-term business goals.</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
              <div className="pic"><img src="assets/img/team/team-12.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Cosmas Thuku</h4>
                <span>Product Manager</span>
                <p> Cosmas is the architect of the user experience, translating complex business needs into intuitive, functional software. 
                  He oversees the development of our school, rental,
                   and sales management systems, ensuring every feature is designed for ease of use, scalability, and seamless payment integration. </p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
              <div className="pic"><img src="assets/img/team/team-13.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Janet Bachia</h4>
                <span>Manager Sales</span>
                <p>Janef specializes in understanding client challenges and aligning our solutions to meet them. With a background in
                   [Mention relevant industry, e.g., SaaS or Enterprise Software], she excels at connecting businesses with the 
                   perfect system—whether it’s for school administration,
                   sales, or rentals—to drive their efficiency and profitability.</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
              <div className="pic"><img src="assets/img/team/team-10.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Victoria Mwambwire</h4>
                <span>Cheif Accountant</span>
                <p>Victoria ensures the financial integrity and sustainability of both our company and the systems we build. 
                  She brings a critical eye to the financial modules within our ERP and payment integration systems, 
                  guaranteeing they meet the highest standards of accuracy and security.</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Team