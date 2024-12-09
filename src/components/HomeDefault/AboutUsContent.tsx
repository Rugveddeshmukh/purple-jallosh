import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUsContent: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-120 bg-image">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span>Join The Event</span>
                <h2>
                Know More About <b>Event </b> PURPLE JALLOSH
                </h2>
                <p>
                The Purple Jallosh event in Pimpri-Chinchwad is a celebration designed to support and highlight the achievements of people with disabilities in the area.
                 Hosted by the Pimpri-Chinchwad Municipal Corporation (PCMC) at the Divyang Bhavan in Morewadi, this event aligns with PCMCs broader goals of enhancing inclusivity and providing essential services to differently-abled individuals.
                </p>
                <p>
                Divyang Bhavan is a state-of-the-art facility that offers comprehensive support, including therapies (such as physiotherapy and speech therapy), diagnostic services, and the provision of assistive devices like prosthetics. The center also engages in skill training,
                 employment assistance, and educational guidance, making it a hub for empowerment and community support. 
                </p>

             {/*  <div className="signature">
                  <Image
                    src="/images/signature.png"
                    alt="signature"
                    width={142}
                    height={68}
                  />
                </div> */}

                <Link href="" className="btn btn-primary">
                  Read More
                  <i className="icofont-double-right"></i>
                </Link>

              {/*  <Link href="#" className="btn btn-secondary">
                  Register Now
                </Link> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-image">
                <Image
                  src="/images/image7.jpg"
                  className="about-img1"
                  width={750}
                  height={500}
                  alt="about"
                />
                <Image
                  src="/images/image4.jpg"
                  className="about-img2"
                  alt="about"
                  width={309}
                  height={424}
                />
                <Image
                  src="/images/shapes/5.png"
                  className="shape-img"
                  alt="about"
                  width={111}
                  height={111}
                />

                <Link href="/" className="btn btn-primary">
                  Explore More About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
