import React from 'react'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About Us</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
            Capital Hustle software development company delivers IT solutions and services to established companies that need tailored software for 
            further business growth. With a deep understanding of modern technologies, transparent processes, and strong expertise in business domains, 
            we implement comprehensive projects and deliver high-end web, mobile, IoT, and SaaS solutions..
            </p>
            {/* <ul>
              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
            </ul> */}
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
            Capital Hustle stands out in the background of its competitors since it has managed to become a technological partner for its Clients. 
            The partner, who delves into a Client’s business challenges, needs,
             and pain points and provides upscale software solutions that fully meet those needs and all requirements.
            </p>
            <a href="#" className="btn-learn-more">Learn More</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About