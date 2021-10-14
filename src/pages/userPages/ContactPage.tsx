import React from 'react'
import Booking from '../../components/userComponents/contact/Booking';
import ContactAddress from '../../components/userComponents/contact/ContactAddress';
import OpeningTime from '../../components/userComponents/contact/OpeningTime';
import owner from "../../assets/images/contact/owner.jpg";
import map from "../../assets/images/map.png";

export default function ContactPage() {
    return (
      <div className="container">
        <div className="page-image">
          <img src={owner} alt="bbq" />
        </div>
        <div className="page-details">
          <h2>Opening times</h2>
          <OpeningTime />
          <h2>Booking table</h2>
          <Booking />
          <h2>Address</h2>
          <ContactAddress />
          <div className="map-section">
            <img src={map} alt="map" />
          </div>
        </div>
      </div>
    );
}
