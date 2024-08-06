import React from 'react';
import './visalink.css';

const Links = () => {
  

  return (
    <div className="consultation">
      <h2 className="main-heading">Visa, Travel & Forex Assistance</h2>
      <hr />
      <div className="consultation-section">
        <div className="image-side">
          <img src="/src/Components/Funding/visa.jpeg" alt="Visa Assistance" />
        </div>
        <div className="text-side">
          <h3>Visa Assistance</h3>
          <p>Applying for a study visa is not an easy task. Getting your visa to study abroad takes time but can be a surprisingly simple procedure with the assistance of Edwise counselors.</p>
          <p>We help you with the entire Visa process that includes filling up applications, compiling financial statements and also guidance and training for mock interviews and much more. While the application process for an international student visa can be confusing 99% of our students are able to get a visa.</p>
          <p>Certain countries have a paper-based visa application system while some have an online system. We help you navigate this process. Our counselors also assist in drafting the study plan required by some consulates. </p>
          <br />
        </div>
      </div>

      <div className="consultation-section">
        <div className="text-side">
          <h3>Pre-Departure Guidance</h3>
          <p>Living abroad can be both rewarding and challenging. To make sure you are informed and prepared before you travel abroad, a pre-departure event is organized by Edwise to ease the entry of Indian students. It provides an insight to the various facets of the student life that the students will witness in a foreign land.</p>
          <p>It also provides an opportunity to meet other students and their parents who will be heading abroad and possibly to the same university/city. We also provide an updated and comprehensive "Pre-Departure Kit" to every student. Here students also get to meet with our value-added services vendors for assistance with insurance, foreign exchange, travel, mobile sim, etc.</p>
          <p>Students who are currently studying overseas or have recently completed their programs share their first-hand experience to assist students to adapt to the new culture and environment.</p>
          <br />
        </div>
        <div className="image-side">
          <img src="/src/Components/Funding/pre-dep.png" alt="Pre-Departure Guidance" />
        </div>
      </div>

      <div className="consultation-section">
        <div className="image-side">
          <img src="/src/Components/Funding/travall.png" alt="Travel Assistance" />
        </div>
        <div className="text-side">
          <h3>Travel Assistance</h3>
          <p>While traveling abroad it is important to be prepared. It is essential to book well in advance and identify the most cost-effective route. We at Edwise understand the hesitation of students who need to travel abroad alone.</p>
          <p>To help parents and the students, we not only assist students with admissions for further studies but also make sure that they are aware of all the steps from the moment they have received their offer letter right up to their accommodation.</p>
          <p>We assist with flight bookings well in advance to allow ideal departure dates, routes and best discounts too. We help you select the right airline for excess baggage schemes. Several International Airlines offer special schemes for students & our counselors can guide you with this information.</p>
          <br />
        </div>
      </div>

      <div className="consultation-section">
        <div className="text-side">
          <h3>Foreign Exchange Assistance</h3>
          <p>Edwise has association with reputed foreign exchange dealers in order to avail prompt services and competitive exchange rates. They assist you with wire transfers, currency notes, international debit cards, and demand drafts.</p>
          <p>Insurance: We offer special packages for student travel insurance, medical insurance, loss, and accident insurance (combined and lower than international rates). In case insurance is included in your tuition fees already you must avail insurance from the period of travel commencement until the university insurance policy commences.</p>
          <p>Telecom Services: Get International Roaming at affordable rates. USA CAN AUS & NZ sim cards & enjoy free incoming, low-cost calling rates to India.</p>
          <br />
        </div>
        <div className="image-side">
          <img src="/src/Components/Funding/money.png" alt="Foreign Exchange Assistance" />
        </div>
      </div>
    </div>
  );
};

export default Links;
