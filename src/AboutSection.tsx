import React from "react"
import { messages } from "./messages";
import { sectionId } from "./AppNavBar";

type Props = {
    refs: React.LegacyRef<HTMLElement> | undefined;
};

export const AboutSection = ({ refs } : Props) => {
    return (
        <section id={sectionId.about} ref={refs}>
            <h1>About me</h1>
            <p>{messages.ABOUT_ME}</p>
        </section>
    );
}