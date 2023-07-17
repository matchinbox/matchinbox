import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Privacypolicy.css";
import "../../components/Front/front.css";

const Privacypolicy = () => {
  return (
    <div className="PrivacypolicyParentContainer frontContainer ">
      <Navbar />
      <div className="privacyPolicycontent">
        <div className="content_box">
          <p className="content_main_text">
            At MatchInbox, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy outlines how we
            collect, use, and safeguard your data when you use our application.
          </p>
          <ol className="policy_list_outer">
            <li>
              Collection of Information:
              <ul className="policy_list_inner">
                <li>
                  Personal Information: We may collect personal information such
                  as your name, email address, and profile details when you
                  create an account with MatchInbox.
                </li>
                <li>
                  Location Information: MatchInbox uses your device's location
                  services to match you with nearby individuals. This
                  information is securely stored and used solely for the purpose
                  of providing location-based matching.
                </li>
                <li>
                  Usage Data: We collect data on how you interact with the app,
                  including features used, profiles viewed, and conversations.
                </li>
              </ul>
            </li>
            <li>
              Use of Information:
              <ul type="i" className="policy_list_inner">
                <li>
                  Providing Services: We use your information to provide you
                  with the MatchInbox services, including matching you with
                  compatible users, facilitating conversations, and organizing
                  Wordle games.
                </li>
                <li>
                  Personalization: We may use your data to personalize your
                  experience, recommend matches, and enhance the app's features.
                </li>
                <li>
                  Communication: We may send you notifications, updates, and
                  promotional offers related to MatchInbox. You can opt-out of
                  these communications at any time.
                </li>
                <li>
                  Analytics and Improvements: We analyze user behavior and app
                  usage patterns to improve our services, enhance user
                  experience, and develop new features.
                </li>
              </ul>
            </li>
            <li>
              Data Security:
              <ul type="i" className="policy_list_inner">
                <li>
                  We implement industry-standard security measures to protect
                  your personal information from unauthorized access,
                  alteration, or disclosure.
                </li>
                <li>
                  MatchInbox does not sell, rent, or share your personal
                  information with third parties without your explicit consent,
                  except as required by law or in response to legal requests.
                </li>
              </ul>
            </li>
            <li>
              User Choices
              <ul type="i" className="policy_list_inner">
                <li>
                  Account Control: You have the option to update or delete your
                  account information at any time within the app.
                </li>
                <li>
                  Location Services: You can control the app's access to your
                  device's location services through your device settings.
                </li>
                <li>
                  Communications: You can manage your communication preferences
                  by adjusting your notification settings within the app
                </li>
                <li>
                  Third-Party Links: MatchInbox may contain links to third-party
                  websites or services. We are not responsible for the privacy
                  practices or content of these external sites.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Privacypolicy;
