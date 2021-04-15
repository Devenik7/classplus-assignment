export interface StudentProps {

    data: {

        /**
         * Name of the Student
         */
        name: String;

        /**
         * The Class to which the Student is currently in
         */
        class: Number;

        /**
         * The Gender of the Student. Can either be M or F
         */
        gender: 'M' | 'F';

        /**
         * The Section to which the student is currently in
         */
        section: String;

        /**
         * The Unique Roll Number of the Student
         */
        rollNumber: String;

        /**
        * The list of Sports that the Student is enrolled in
        */
        sports: String[];

        /**
       * The Age of the Student
       */
        age: Number;

    };

}

declare const StudentChip: React.ComponentType<StudentProps>;

export default StudentChip;