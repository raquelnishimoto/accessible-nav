import React from "react"
import { messages } from "./messages";

export const ContactSection = () => {
    const {CONTACT_EMAIL, CONTACT_MAIL, CONTACT_NAME, CONTACT_PHONE, CONTACT_TEXT} = messages;

    return (
        <section>
            <h1>Contact</h1>
            <p>{CONTACT_NAME}</p>
            <p>{CONTACT_EMAIL}</p>
            <p>{CONTACT_PHONE}</p>
            <p>{CONTACT_MAIL}</p>
            <p>{CONTACT_TEXT}</p>
        </section>
    );
}