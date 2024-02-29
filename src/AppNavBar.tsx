import React, { useState } from "react";

const sectionId = {
    about: 'ABOUT',
    contact: 'CONTACT',
    workAndExperience: 'WORK_AND_EXPERIENCE'

} as const;

type SelectedItem = typeof sectionId[keyof typeof sectionId];

export const AppNavBar = () => {
    const [selectedItem, setSelectedItem] = useState<SelectedItem>('ABOUT');

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
                        <li
                            key={id}
                            className={selectedItem === id ? `nav-bar__item-selected` : ''}
                        >
                            {name}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};