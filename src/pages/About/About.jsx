import React from 'react';
import './About.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaHeart, FaUtensils, FaTruck, FaSmile, FaLeaf, FaStar } from 'react-icons/fa';
import { assets } from '../../assets/assets';
import aboutHero from '../../assets/About-Aaryas-01.png';

const menuImages = [
  assets.food_1, assets.food_6, assets.food_17, assets.food_21, assets.food_25, assets.food_30
];

const menuImageAlts = [
  'Crispy Fritters',
  'Egg Zing 65',
  'Continental Salad',
  'Gulab Jamun',
  'Chicken Biryani Bowl',
  'Kathi rolls - Paneer'
];

const About = () => (
  <div className="about-root">
    {/* Hero Section */}
    <div className="about-hero">
      <img src={aboutHero} alt="Arya's Cuisine Hero" className="about-hero-img" />
      <div className="about-hero-overlay">
        <h1>About Arya's Cuisine</h1>
        <p>Bringing Joy in Every Bite</p>
      </div>
    </div>

    {/* Who We Are */}
    <section className="about-card">
      <h2><FaHeart className="about-icon" /> Who We Are</h2>
      <p>Arya's Cuisine is a Veg & Non-Veg Takeout restaurant in Dallas, Texas. We specialize in traditional South Indian and North Indian delicacies, carefully curated to offer you an authentic taste of India — whether you're dining at home, at work, or with friends.</p>
      <ul className="about-contact">
        <li><FaMapMarkerAlt className="about-icon" /> <b>2526 Manana Dr, Ste 104, Dallas, TX 75220</b></li>
        <li><FaPhoneAlt className="about-icon" /> <b>214 223 7740 / 615 543 4268</b></li>
        <li><FaUtensils className="about-icon" /> <b>Website:</b> <a href="/">View Our Site</a></li>
      </ul>
    </section>

    {/* What We Offer */}
    <section className="about-card">
      <h2><FaLeaf className="about-icon" /> What We Offer</h2>
      <ul>
        <li>Homestyle Food: Made with love and regional recipes passed down through generations.</li>
        <li>Takeaway & Online Delivery: Fast, fresh, and right at your doorstep.</li>
        <li>Business Lunches: Balanced meals for busy days, both veg and non-veg options.</li>
        <li>Wide Menu Selection: From appetizers, chaats, and curries to bread varieties and desserts.</li>
      </ul>
    </section>

    {/* Opening Hours */}
    <section className="about-card about-hours">
      <h2><FaClock className="about-icon" /> Opening Hours</h2>
      <ul>
        <li>Monday to Saturday: 11:00 AM – 8:30 PM</li>
        <li>Sunday: 11:00 AM – 3:00 PM</li>
      </ul>
    </section>

    {/* Why Choose Us */}
    <section className="about-card about-why">
      <h2><FaStar className="about-icon" /> Why Choose Us</h2>
      <div className="about-usp-list">
        <div className="about-usp"><FaLeaf /> Authentic Indian Taste</div>
        <div className="about-usp"><FaSmile /> Fresh, High-Quality Ingredients</div>
        <div className="about-usp"><FaTruck /> Quick Delivery Options</div>
        <div className="about-usp"><FaHeart /> Friendly Customer Service</div>
        <div className="about-usp"><FaUtensils /> Pocket-Friendly Pricing</div>
      </div>
    </section>

    {/* Menu Highlights */}
    <section className="about-card about-menu-highlights">
      <h2>Our Delivery Menu Includes</h2>
      <div className="about-menu-images">
        {menuImages.map((img, idx) => (
          <img src={img} alt={menuImageAlts[idx]} key={idx} />
        ))}
      </div>
      <ul className="about-menu-list">
        <li>Appetizers: Crispy fritters, Paneer balls, Chicken delights</li>
        <li>Soups & Salads: Veg & Non-Veg hearty options</li>
        <li>Chaats & Rolls: A burst of street-style flavor</li>
        <li>Curries: Butter Paneer, Chicken Curry, Goat Curry</li>
        <li>Rice Bowls & Parottas: South Indian specials like Satti Soru</li>
        <li>Desserts & Drinks: Thirunelveli Halwa, Jigarthanda, Filter Coffee</li>
      </ul>
    </section>

    {/* Customer Commitment */}
    <section className="about-card about-commitment">
      <h2><FaSmile className="about-icon" /> Customer Commitment</h2>
      <p>We aim to make every customer feel at home. From sourcing fresh ingredients to preparing each meal with care, our team ensures every bite you take is infused with taste and true hospitality.</p>
    </section>
  </div>
);

export default About; 