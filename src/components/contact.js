import React, {useState} from 'react';


const Contact = () => {
    return (
        <section className="contact-section" id="contact">

            <form name="contact" netlify netlify-honeypot="bot-field" hidden>
                <input type="text" name="name" />
                <input type="email" name="email" />
                <textarea name="message"></textarea>
            </form>

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
                    <field>
                        <label>Message</label>
                        <textarea 
                            name="message" 
                            rows="8"
                        />
                    </field>
                    <input className="submitButton" type="submit" value="Submit"/>
                </form>
            </div>
        </section>
    )
}

export default Contact;