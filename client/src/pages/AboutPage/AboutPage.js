import ContactForm from '../../containers/ContactForm/ContactForm';

import './AboutPage.scss';

import aboutImage from '../../assets/about-page-images/about-page-img.jpg';

const AboutPage = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-section">
            <h2 className="about-title">
              About us
            </h2>
            <ul className="about-text">
              <li className="about-text__item">
                <h3 className="about-text__item-title">
                  Welcome to Fresh Foods
                </h3>
                <p className="about-text__item-text">
                  At Fresh Foods, were dedicated to bringing people closer through the joy of great food. Our journey began with a simple idea: making the freshest ingredients accessible for everyone to create delicious dishes at home.
                </p>
              </li>
              <li className="about-text__item">
                <h3 className="about-text__item-title">
                  What Sets Us Apart:
                </h3>
                <p className="about-text__item-text">
                  Quality Beyond Compare: We source our produce, meats, and more from trusted suppliers who share our commitment to excellence.
                </p>
              </li>
              <li className="about-text__item">
                <h3 className="about-text__item-title">
                  Join Our Culinary Community:
                </h3>
                <p className="about-text__item-text">
                  Connect with fellow foodies through recipes, blogs, and social media. Together, lets celebrate the art of cooking and the delight of savoring every bite.
                </p>
              </li>
            </ul>
          </div>
          <div className="about-section">
            <img className="about-image" src={aboutImage} alt="food image" />
            <div className="about-form">
              <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;