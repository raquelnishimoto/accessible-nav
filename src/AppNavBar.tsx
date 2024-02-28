import React from "react";

export const AppNavBar = () => {
    const sectionId = {
        about: 'ABOUT',
        contact: 'CONTACT',
        workAndExperience: 'WORK_AND_EXPERIENCE'

    }
    const listItems = [
        { name: 'About me', id: sectionId.about },
        { name: 'Work and experience', id: sectionId.workAndExperience },
        { name: 'Contact', id: sectionId.contact },
    ];

    return (
        <nav>
            <ul>
                {listItems.map(({ name, id }) => {
                    return <li key={id}>{name}</li>
                })}
            </ul>
        </nav>
    );
};