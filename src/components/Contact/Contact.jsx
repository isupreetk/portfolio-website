import "./Contact.scss";

function Contact() {
    return (
        <section className="contact">
            <h1>CONTACT</h1>
            <p>Please feel free to reach out if you have any questions or would like to work together</p>
            <div className="contact__card-container">
                <div className="contact__card">
                    <div className="contact__card-content">
                        <label htmlFor="name" className="contact__card-name-title">Name</label>
                        <input type="text" name="name" id="name"></input>
                    </div>

                    <div className="contact__card-content">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"></input>
                     </div>

                    <div className="contact__card-content">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message"></textarea>
                    </div>

                    <button>SUBMIT</button>

                </div>

                <div className="contact__social">
                    <img src="" alt="LinkedIn" />
                    <img src="" alt="GitHub" />
                    <img src="" alt="LeetCode" />
                </div>
            </div>
        </section>
    )
}

export default Contact;