export interface ClassProps {

    /**
     * The ID of the Class
     */
    id: Number;

    /**
     * The Sections present inside the Class
     */
    sections: Object;

}

declare const Class: React.ComponentType<ClassProps>;

export default Class;