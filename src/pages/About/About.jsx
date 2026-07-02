import Layout from "../../components/Layout/Layout";

import AboutBanner from "../../components/AboutPage/AboutBanner/AboutBanner";
import CompanyStory from "../../components/AboutPage/CompanyStory/CompanyStory";
import WhyChooseUs from "../../components/AboutPage/WhyChooseUs/WhyChooseUs";
import MonthlyOffers from "../../components/MonthlyOffers/MonthlyOffers";
import Newsletter from "../../components/Newsletter/Newsletter";

const About = () => {
  return (
    <Layout>
      <AboutBanner />
      <CompanyStory />
      <WhyChooseUs />
      <MonthlyOffers />
      <Newsletter />
    </Layout>
  );
};

export default About;