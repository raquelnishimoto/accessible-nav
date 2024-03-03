import React from "react"
import { messages } from "./messages";
import { sectionId } from "./AppNavBar";

type Props = {
    refs: React.LegacyRef<HTMLElement> | undefined;
};

export const WorkAndExperienceSection = ({ refs } : Props) => {
    return (
        <section id={sectionId.workAndExperience} ref={refs}>
            <h1>Work and experience</h1>
            <p>{messages.WORK_EXPERIENCE}</p>
        </section>
    );
}