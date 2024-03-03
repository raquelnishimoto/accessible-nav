import React, { useEffect, useState } from "react";

export const sectionId = {
    about: 'ABOUT',
    contact: 'CONTACT',
    workAndExperience: 'WORK_AND_EXPERIENCE'

} as const;

type SelectedItem = typeof sectionId[keyof typeof sectionId];

type Props = {
    refs: React.MutableRefObject<(HTMLElement | null)[]>;
};

export const AppNavBar = ({ refs }: Props) => {
    const [selectedItem, setSelectedItem] = useState<SelectedItem>('ABOUT');

    const listItems = [
        { name: 'About me', id: sectionId.about },
        { name: 'Work and experience', id: sectionId.workAndExperience },
        { name: 'Contact', id: sectionId.contact },
    ];

    useEffect(() => {
        const sectionRefs = refs?.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setSelectedItem(entry.target.id as SelectedItem);
                }
            });
        }, { threshold: 0.5 });

        sectionRefs.forEach((section) => {
            observer.observe(section as Element);
        });

        return () => {
            sectionRefs.forEach((section) => {
                observer.unobserve(section as Element);
            });
        }
    }, []);

    return (
        <nav>
            <ul>
                {listItems.map(({ name, id }) => {
                    return (
                        <li
                            key={id}
                            className={selectedItem === id ? `nav-bar__item-selected` : ''}
                            onClick={() => setSelectedItem(id)}
                        >
                            <a href={`#${id}`} >
                                {name}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};