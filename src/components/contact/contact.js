import React from 'react';
import './contact.scss';


const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <h1>CONTACT</h1>
            <div className="contact-container">
                <h3>Feel free to drop me a line below!</h3>
                <form className="contact-form" name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" /> 
                    <field>
                        <label>Name
                            <input
                                label="name" 
                                name="name" 
                                type="text"
                            />
                        </label>
                    </field>
                    <field>
                        <label>Email
                            <input
                                name="email" 
                                type="email" 
                            />
                        </label>
                    </field>
                    <field className="message-input">
                        <label>Message
                            <textarea 
                                label="message"
                                name="message" 
                                rows="8"
                            />
                        </label>
                    </field>
                    <input className="submit-button" type="submit" value="Send"/>
                </form>
            </div>
        </section>
    )
}

export default Contact;