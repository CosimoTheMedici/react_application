import React from 'react'

const About = () => {
  const Title = process.env.SiteName
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About Us</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
            At {Title}, we are more than just a software development company—we are your trusted technology partner.
             Our mission is to design and deliver tailored management systems that empower businesses to overcome operational challenges,
             streamline processes, and achieve sustainable growth.
            </p>
            {/* <ul>
              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
            </ul> */}
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
            Unlike many companies that simply write code, we take the time to understand your unique business goals,
             pain points, and vision. By combining modern technologies with transparent processes and a deep understanding 
             of business strategy, we create high-quality, scalable solutions that integrate seamlessly
              into your ecosystem—whether on web, mobile, IoT, or SaaS. With Capital Hustle, you gain a partner
               committed to driving innovation, efficiency, and long-term success.
            </p>
            <a href="#" className="btn-learn-more">Learn More</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About