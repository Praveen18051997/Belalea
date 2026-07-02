import "./CompanyStory.css";

import storyImage from "../../../assets/images/about-story.png";
import icon1 from "../../../assets/images/story-icon-1.png";
import icon2 from "../../../assets/images/story-icon-2.png";

const CompanyStory = () => {
  return (
    <section className="company-story">

      <div className="story-container">

        <div className="story-image">
          <img src={storyImage} alt="Organic Food" />
        </div>

        <div className="story-content">

          <span className="story-subtitle">
            OUR STORY
          </span>

          <h2>
            Natural Products <br />
            Healthy Living
          </h2>

          <p>
            We carefully source fresh organic ingredients from trusted local
            farmers. Every product is prepared with quality, freshness and
            healthy living in mind.
          </p>

          <div className="story-features">

            <div className="story-feature">
              <img src={icon1} alt="" />
              <span>Modern Farming</span>
            </div>

            <div className="story-feature">
              <img src={icon2} alt="" />
              <span>Hormone Free</span>
            </div>

          </div>

          <button>Explore More</button>

        </div>

      </div>

    </section>
  );
};

export default CompanyStory;