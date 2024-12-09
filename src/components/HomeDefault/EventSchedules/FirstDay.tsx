"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";
import emailjs from "emailjs-com";

const FirstDay: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [qrCode, setQrCode] = useState<string | null>(null); // Store QR code

   // Track remaining booking limit
   const [bookingLimit, setBookingLimit] = useState(200);

  // Form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    city: "",
    pincode: "",
    state: "",
  });

  const generateQRCode = (text: string) => {
    return `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
      text
    )}&size=150x150`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        formData, // Data you want to send in the email
        "your_user_id" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setQrCode(generateQRCode("Thank you for registering!")); // Show QR Code
          setBookingLimit((prevLimit) => prevLimit - 1); // Reduce count here after success
          setShowForm(false); // Close the modal
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
   
  };

  return (
    <>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author">
                 {/* Show booking limit */}
                 <p style={{ textAlign: "center", marginRight:"",border:"none",borderRadius:"3px",backgroundColor:"Green",color:"white", }}>
                  Available Seat: {bookingLimit}
                </p>
              </div>

              <div className="schedule-info">
                <h3>EVENT SCHEDULE 1 DAY</h3>

                <ul>
                  <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Divyang Bhavan Foundation
                  </li>
                  <li>
                    <i className="icofont-wall-clock"></i> 10:00AM - 06:00PM
                  </li>
                  <li>
                    <button
                       style={{
                       display: "inline-block",
                       padding: "10px 20px",
                       backgroundColor: bookingLimit > 0 ? "purple" : "gray",
                       border: "none",
                       borderRadius: "5px",
                       textAlign: "center",
                       fontWeight: "bold",
                       color: "white",
                       cursor: bookingLimit > 0 ? "pointer" : "not-allowed",
                      }}
                       onClick={() => {
                       if (bookingLimit > 0) {
                       setShowForm(true);
                       setBookingLimit(bookingLimit - 1); // Decrement booking limit
                      }
                      }}
                       disabled={bookingLimit <= 0} // Disable button when no slots are left
                      >
                      {bookingLimit > 0 ? "Pre-Booking" : "No Slots Available"}
                     </button>
                  </li>

                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <li>	10:00 AM - 11:00 AM:  Opening Ceremony </li>
            <li>	11:00 AM - 05:00 PM:  Accessible House Model</li>
            <li>	11:00 AM - 05:00 PM:  Experience Zones</li>
            <li>	11:00 AM - 05:00 PM:  Assistive Tech Expo</li>
            <li>	11:00 PM - 06:00 PM:  Food Court - Stalls by Women’s SHGs and PwDs</li>
            <li>	11:00 AM - 05:00 PM:  Local DPO / NGO Stalls</li>
            <li>	11:00 AM - 05:00 PM:  Jagruti Mela - Information on Schemes for PwDs</li>
            <li>	11:00 PM - 05:00 PM:  Corporate Pavilion - Diversity and Inclusion Initiatives</li>
            <li>	12:00 PM - 04:00 PM:  Aids / Assistive Devices Distribution</li>
            <li>	01:00 PM - 05:00 PM:  Creative Workshops for Children with Disabilities</li>
            <li>	02:00 PM - 03:30 PM:  Panel Discussions</li>
            <li>	05:00 PM - 06:00 PM:  Special Schools Performances</li>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> Auto Cluster Exhibition Center, H-Block,Chinchwad East, 181, Old Mumbai - Pune Hwy, MIDC, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019 ,{" "}
                  <span>India</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author author-multi">
                <Image
                  src="/images/dummy images.png"
                  title="BCD"
                  alt="Author"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/img1.png"
                  title="PQR"
                  alt="Author"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/img2.png"
                  title="XYZ"
                  alt="Author"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/img1.png"
                  title="ABC"
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>1.KEY ACTIVITIES</h3>

                <ul>
                  <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Divyang Bhavan Foundation
                  </li>
                  <li>
                    <i className="icofont-wall-clock"></i> 10:00AM - 06:00PM
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <li>1) Opening Ceremony:- 
             <span> Purpose:- Kickstarting the event with speeches, introductions, and performances.
              Highlights:- Chief guests, notable speakers, or performances to set a celebratory tone.</span>
            </li>
            <li>2) Accessible House Model:-<span>*Demonstration of universal design features: ramps, wider doorways, accessible kitchens, and adaptive bathrooms.*Guided tours of the house model.*Inspiration for creating accessible living environments.
            </span></li>
            <li>3) Experience Zones:- <span>*Simulated inclusive classroom to experience accessibility in learning.*Immersive navigation of a darkened space with visually impaired facilitators.*Foster empathy and understanding for inclusivity.
            </span></li>
            <li>4) Assistive Tech Expo:-<span>*Interactive exhibit featuring assistive technology for PwDs.*Live demonstrations and expert talks.*Visitors can try out devices and learn functionalities firsthand.
            </span></li>


            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> Auto Cluster Exhibition Center, H-Block,Chinchwad East, 181, Old Mumbai - Pune Hwy, MIDC, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019,{" "}
                  <span>India</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author author-multi">
                <Image
                  src="/images/img1.png"
                  title="ABC"
                  alt="Author"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/img2.png"
                  title="XYZ"
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>2.KEY ACTIVITIES</h3>

                <ul>
                  <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Divyang Bhavan Foundation
                  </li>
                  <li>
                    <i className="icofont-wall-clock"></i> 10:00AM - 06:00PM
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <li>1) Food Court - Stalls by Women’s SHGs and PwDs:- <span>*Stalls run by women’s SHGs and PwDs showcasing culinary skills.*Opportunity for economic independence and business experience.*Support for local entrepreneurs through a diverse food offering.
            </span> </li>
            <li>2) Local DPO / NGO Stalls:- <span>*Showcase of initiatives by local DPOs and NGOs.*Networking hub for collaboration on inclusivity.*Information on services, support systems, and resources for PwDs.  
            </span></li>
            <li>3) Jagruti Mela - Information on Schemes for PwDs:- <span>*Information on eligibility, application, and benefits of government schemes.*Brochures and pamphlets for visitors.*One-on-one consultations with government representatives. 
            </span></li>
            <li>4) Corporate Pavilion - Diversity and Inclusion Initiatives:- <span>*Case studies and best practices on diversity and inclusion (D&I).*Interactive booths showcasing D&I policies, resource groups, and hiring practices.*Interactive booths showcasing D&I policies, resource groups, and hiring practices.
            </span></li>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> Auto Cluster Exhibition Center, H-Block,Chinchwad East, 181, Old Mumbai - Pune Hwy, MIDC, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019 ,{" "}
                  <span>India</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author author-multi">
                <Image
                  src="/images/img2.png"
                  title="PQR"
                  alt="Author"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/img1.png"
                  title="XZYZ"
                  alt="Author"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/dummy images.png"
                  title="ABC"
                  alt="Author"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/img2.png"                 
                   title="QRP"
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>3.KEY ACTIVITIES</h3>

                <ul>
                  <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Divynag Bhavan Foundation
                  </li>
                  <li>
                    <i className="icofont-wall-clock"></i> 10:00AM - 06:00PM
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <li>1) Aids / Assistive Devices Distribution:- <span>*Distribution of aids and assistive devices to PwDs.*Needs assessment to ensure proper allocation of devices.*Free distribution with follow-up support and necessary training.
            </span></li>
            <li>2) Creative Workshops for Children with Disabilities:- <span>*Hands-on activities like painting, crafting, music, and storytelling.*Focus on developing fine motor skills, communication, and social interaction.*Trained facilitators ensure inclusivity and support.
            </span></li>
            <li>3) Panel Discussions:- <span> *Expert-led discussions on inclusion in education, employment, and social integration.*Speakers include educators, employers, policymakers, and PwDs.*Interactive sessions encouraging audience participation.*Creation of an Inclusion Charter by PCMC with actionable steps for community inclusion.
            </span></li>
            <li>4) Special Schools Performances:- <span>*Performances by students from local special schools will highlight the talents and abilities of children with disabilities, emphasizing the importance of inclusive education.
              *The performances will range from dance and music to drama and art, showcasing the diverse talents of these young performers.
              *By participating in these performances, students will gain confidence and self-esteem, reinforcing the value of inclusion in education.
              *The audience will be inspired by the creativity and determination of the performers, fostering a greater appreciation for the abilities of PwDs.
            </span></li>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b>  Auto Cluster Exhibition Center, H-Block,Chinchwad East, 181, Old Mumbai - Pune Hwy, MIDC, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019,{" "}
                  <span>India</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>

      {/* Modal for Registration Form */}
      {showForm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "400px",
              maxHeight: "80vh", // Max height for the modal
              overflowY: "auto", // Enables scrolling within the modal if the content overflows
            }}
          >
            

            <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "1.8rem" }}>
              Registration Form
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "15px" }}>
                <label>First Name:</label>
                <input
                  type="text"
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "0px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>Last Name:</label>
                <input
                  type="text"
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "0px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>Contact:</label>
                <input
                  type="text"
                  required
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "0px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>Email:</label>
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "0px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>City:</label>
                <input
                  type="text"
                  required
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "0px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>Pincode:</label>
                <input
                  type="text"
                  required
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "0px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>State:</label>
                <input
                  type="text"
                  required
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "0px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "purple",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>

                {/* Buttons */}
              <div
                 style={{
                 display: "flex",
                 justifyContent: "space-around",
                 marginTop: "10px",
                 
                }}
                >
                {/* Close Button */}
              <button
                 type="button"
                 onClick={() => {
                 setShowForm(false);
                }}
                 style={{
                 padding: "10px 20px",
                 backgroundColor: "gray",
                 color: "white",
                 border: "none",
                 borderRadius: "3px",
                 cursor: "pointer",
                 width: "100%",
                }}
                >
              Close
           </button>
           </div>
           </form>   
          </div>
        </div>
      )}

      {/* Display QR Code after successful registration */}
      {qrCode && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h3>Registration Successful! Here is your QR Code:</h3>
          <Image src={qrCode} alt=" QR Code" />
        </div>
      )}
    </>
  );
};

export default FirstDay;
