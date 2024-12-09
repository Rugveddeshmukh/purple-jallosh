"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const ThirdDay: React.FC = () => {
  return (
    <>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author">
                <Image
                  src="/images/dummy images.png"
                  title="Steven Smith"
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>EVENT SCHEDULE 3 DAY</h3>

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
            <li>	10:00 AM - 04:00 PM: Experience Zones</li>
            <li>	10:00 AM - 04:00 PM: Accessible House Model</li>
            <li>	10:00 AM - 04:00 PM: Assistive Tech Expo</li>
            <li>	10:00 AM - 04:00 PM: Local DPO / NGO Stalls</li>
            <li>	10:00 AM - 04:00 PM: Jagruti Mela  Information on Schemes for PwDs</li>
            <li>	10:00 PM - 04:00 PM: Corporate Pavilion - Diversity and Inclusion Initiatives</li>
            <li>	12:00 PM - 04:00 PM: Aids / Assistive Devices Distribution</li>
            <li>	11:00 PM - 06:00 PM: Food Court Stalls by Womens SHGs and PwDs</li>
            <li>	12:00 PM - 04:00 PM: Abilympics</li>
            <li>	01:00 PM - 03:30 PM: Creative Workshops for Children with Disabilities</li>
            <li>	04:00 PM - 05:00 PM: Mainstage Event  MUSIC BAND</li>
            <li>	05:00 PM - 06:00 PM: Closing Ceremony</li>


            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> PCMC Divyang Bhavan{" "}
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
                <Image
                  src="/images/img1.png"
                  title="PQR"
                  alt="Author"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/img2.png"
                  title="BCD"
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
          <li>1) Experience Zones:- <span> *Simulated inclusive classroom to experience accessibility in learning.*Immersive navigation of a darkened space with visually impaired facilitators.*Foster empathy and understanding for inclusivity.
          </span></li>
          <li>2) Accessible House Model:- <span>*Demonstration of universal design features ramps, wider doorways, accessible kitchens, and adaptive bathrooms.*Guided tours of the house model.*Inspiration for creating accessible living environments.
          </span></li>
          <li>3) Assistive Tech Expo:- <span>*Interactive exhibit featuring assistive technology for PwDs.*Live demonstrations and expert talks.*Visitors can try out devices and learn functionalities firsthand.
          </span></li>
          <li>4) Local DPO / NGO Stalls:- <span>*Showcase of initiatives by local DPOs and NGOs.*Networking hub for collaboration on inclusivity.*Information on services, support systems, and resources for PwDs.
          </span></li>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b>Auto Cluster Exhibition Center, H-Block,Chinchwad East, 181, Old Mumbai - Pune Hwy, MIDC, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019,{" "}
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
                  title="PQR"
                  alt="Author"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/img2.png"
                  title="ABC"
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
          <li>1) Jagruti Mela - Information on Schemes for PwDs:- <span>*Information on eligibility, application, and benefits of government schemes.*Brochures and pamphlets for visitors.*One-on-one consultations with government representatives.  
          </span></li>
          <li>2) Corporate Pavilion  Diversity and Inclusion Initiatives:- <span>*Case studies and best practices on diversity and inclusion D and I.*Interactive booths showcasing D&I policies, resource groups, and hiring practices.*Interactive booths showcasing D and I policies, resource groups, and hiring practices. 
          </span></li>
          <li>3) Aids / Assistive Devices Distribution:- <span>*Distribution of aids and assistive devices to PwDs.*Needs assessment to ensure proper allocation of devices.*Free distribution with follow-up support and necessary training.
          </span></li>
          <li>4) Food Court - Stalls by Womens SHGs and PwDs:- <span>*Stalls run by womens SHGs and PwDs showcasing culinary skills.*Opportunity for economic independence and business experience.*Support for local entrepreneurs through a diverse food offering.
          </span> </li>

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
                  src="/images/img2.png"
                  title="PWD"
                  alt="Author"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/img1.png"
                  title="XYZ"
                  alt="Author"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/img2.png"
                  title="ABC"
                  alt="Author"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/img2.png"
                  title="RTR"
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
          <li>1) Abilympics:- <span>*Competitive event showcasing PwDs vocational skills.*Skills demonstrated include programming web design, cooking, and crafts.*Promotes skill development and provides a platform for showcasing talents*Recognition for winners to encourage vocational pursuits
          </span></li>
          <li>2) Creative Workshops for Children with Disabilities:- <span>Hands-on activities like painting, crafting music and storytelling*Focus on developing fine motor skills communication and social interaction*Trained facilitators ensure inclusivity and support
          </span></li>
          <li>3) Mainstage Event Miracle on Wheels:- <span>*Performances by the Miracle on Wheels dance troupe.*Extraordinary dance skills showcasing abilities of PwDs.*Live music band performance adds excitement to the event*Stories of resilience and determination shared to inspire and celebrate PwDs
          </span></li>
          <li>4) Closing Ceremony:- <span>Acknowledgments:- Thanking participants sponsors and volunteers for their contributions.</span></li>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> PCMC Divyang Bhavan {" "}
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
    </>
  );
};

export default ThirdDay;
