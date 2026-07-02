import Layout from "../../components/Layout/Layout";
import ContactBanner from "../../assets/images/contact-banner.png";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import AddressSection from "../../components/AddressSection/AddressSection";
import ContactForm from "../../components/ContactForm/ContactForm";
import Newsletter from "../../components/Newsletter/Newsletter";

const Contact = () => {
  return (
    <Layout>

      <section
              className="shop-banner"
              style={{ backgroundImage: `url(${ContactBanner})` }}
            >
              <h1>Contact</h1>
            </section>
      <ContactInfo />
      <AddressSection />
      <ContactForm />
      <Newsletter />
    </Layout>
  );
};

export default Contact;