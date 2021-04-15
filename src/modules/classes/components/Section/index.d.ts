export interface SectionProps {

    /**
     * The ID of the Section
     */
    id: String;

    /**
     * The Students present in this Section
     */
    students: Object[];

}

declare const Section: React.ComponentType<SectionProps>;

export default Section;