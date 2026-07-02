import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-form-section">

      <div className="form-container">

        <div className="form-group">
          <label>First Name</label>
          <input type="text" placeholder="John" />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" placeholder="Doe" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="john@example.com" />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" placeholder="+91 9876543210" />
        </div>

        <div className="form-group full">
          <label>Subject</label>
          <input type="text" placeholder="Enter subject" />
        </div>

        <div className="form-group full">
          <label>Message</label>
          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>
        </div>

        <button className="send-btn">
          Send Message
        </button>

      </div>

    </section>
  );
};

export default ContactForm;