import React from "react"
import { messages } from "./messages";

export const AboutSection = () => {
    return (
        <section>
            <h1>About me</h1>
            <p>{messages.ABOUT_ME}</p>
        </section>
    );
}