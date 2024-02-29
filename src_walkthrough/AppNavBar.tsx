import React from "react";

const sectionId = {
    about: 'ABOUT',
    contact: 'CONTACT',
    workAndExperience: 'WORK_AND_EXPERIENCE'

} as const;

export const AppNavBar = () => {
    const listItems = [
        { name: 'About me', id: sectionId.about },
        { name: 'Work and experience', id: sectionId.workAndExperience },
        { name: 'Contact', id: sectionId.contact },
    ];

    return (
        <nav>
            <ul>
                {listItems.map(({ name, id }) => {
                    return (
                        <li key={id}>
                            <a
                                key={id}
                                href={`#${id}`}
                            />
                            {name}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};