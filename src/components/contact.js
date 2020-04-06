import React, {useState} from 'react';


const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <h1>CONTACT</h1>
            <div className="contact-container">
                <h2>Feel free to drop me a line below!</h2>
                <form className="contact-form" name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" /> 
                    <field>
                        <label>Name</label>
                        <input 
                            name="name" 
                            type="text"
                        />
                    </field>
                    <field>
                        <label>Email</label>
                        <input
                            name="email" 
                            type="email" 
                        />
                    </field>
                    <field className="message-input">
                        <label>Message</label>
                        <textarea 
                            name="message" 
                            rows="8"
                        />
                    </field>
                    <input className="submit-button" type="submit" value="send"/>
                </form>
            </div>
        </section>
    )
}

export default Contact;