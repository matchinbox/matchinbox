import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Aboutus.css";
import "../../components/Front/front.css";

const Aboutus = () => {
  return (
    <div className="aboutusContainer frontContainer">
      <Navbar />
      <div className="aboutusContent">
        {/* <h1 className="about_heading_text">About us </h1> */}
        <div className="about_text">
          <p>
            Welcome to MatchInbox! At MatchInbox, we believe that true
            connections are about more than just swiping left or right. We have
            reimagined the world of social networking by creating an innovative
            platform that goes beyond traditional dating apps. Our mission is to
            bring people together based on shared vibes, interests, and
            locations, fostering genuine connections and unforgettable
            experiences. With MatchInbox, you can discover like-minded
            individuals right in your vicinity. Whether you're at a local bar,
            restaurant, or your favorite hangout spot, our Vibe Matching Radar
            allows you to connect with people who resonate with your energy and
            passions. Say goodbye to random matches and hello to meaningful
            connections that go beyond superficialities. We understand that
            everyone's journey is unique, and that's why MatchInbox is designed
            to be versatile.
          </p>
          <p>
            You can expand your social horizons by typing any address into our
            map feature. Whether it's your college campus, a bustling city
            street, or a hidden gem, MatchInbox will connect you with
            individuals in those specific locations, opening the doors to new
            friendships and exciting adventures. But it doesn't stop there.
            MatchInbox offers more than just connecting through profiles and
            chats. Engage in friendly competition with our captivating Wordle
            game, where you can challenge your matches and showcase your
            vocabulary skills. It's a fun and interactive way to break the ice
            and deepen your connections.{" "}
          </p>
          <p>
            Privacy and security are of utmost importance to us. Rest assured
            that your personal information is safeguarded and will never be sold
            to third parties. We are committed to creating a safe and inclusive
            environment where you can be yourself and connect with others
            authentically. Join the MatchInbox community today and experience a
            new era of social connections. Discover the power of shared vibes,
            engage in meaningful conversations, and create unforgettable
            memories. Whether you're looking for new friends, a soulmate, or
            simply seeking to expand your social circle, MatchInbox is here to
            make it happen. Thank you for choosing MatchInbox. We're excited to
            be a part of your journey towards genuine connections and exciting
            experiences. Let's match, chat, and vibe together! - The MatchInbox
            Team (admin@matchinbox.com)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
