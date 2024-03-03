import React from "react"
import { messages } from "./messages";
import { sectionId } from "./AppNavBar";

type Props = {
    refs: React.LegacyRef<HTMLElement> | undefined;
};

export const ContactSection = ({ refs } : Props) => {
    const { CONTACT_EMAIL, CONTACT_MAIL, CONTACT_NAME, CONTACT_PHONE, CONTACT_TEXT } = messages;

    return (
        <section id={sectionId.contact} ref={refs}>
            <h1>Contact</h1>
            <p>{CONTACT_NAME}</p>
            <p>{CONTACT_EMAIL}</p>
            <p>{CONTACT_PHONE}</p>
            <p>{CONTACT_MAIL}</p>
            <p>{CONTACT_TEXT}</p>
        </section>
    );
}