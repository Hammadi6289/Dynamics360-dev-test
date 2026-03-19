import React, { useState } from "react";
import Layout from "../components/Layout";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaSearch,
} from "react-icons/fa";
import "./FeaturedEvents.css";
import { eventData } from "../data/eventData";

const FeaturedEvents = () => {
  //   const [events, setEvents] = useState(eventData);
  const [searchTerm, setSearchTerm] = useState("");

  // search event by name
  const filteredEvents = eventData.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="events-page-wrapper-container">
        {/* Hero Section */}
        <section className="events-page-hero-section">
          <div className="hero-content-container">
            <h1>Discover Events Near You</h1>
            <p>Join our community</p>
          </div>
        </section>

        {/* Featured Events Section */}
        <section className="featured-events-section">
          <div className="featured-events-section-header">
            <span>
              <strong>Join Us</strong>
            </span>
            <h2>Featured Events</h2>
          </div>

          <div className="events-page-search-container">
            <FaSearch className="events-page-search-icon" />
            <input
              type="text"
              placeholder="Search events by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="event-search-input"
            />
          </div>

          <div className="events-grid">
            {filteredEvents.map((event) => (
              <div className="event-card" key={event.id}>
                <div className="event-card-content">
                  <h3 className="event-name">{event.name}</h3>

                  <div className="event-details">
                    <div className="detail-item">
                      <FaCalendarAlt className="detail-icon" />
                      <span>{event.date}</span>
                    </div>
                    <div className="detail-item">
                      <FaClock className="detail-icon" />
                      <span>{event.time}</span>
                    </div>
                    <div className="detail-item">
                      <FaMapMarkerAlt className="detail-icon" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="event-description">{event.description}</p>

                  <button className="button-tertiary">Register Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FeaturedEvents;
