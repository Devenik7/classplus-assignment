import React from 'react';

import classes from './classes.module.css';
import StudentChip from '../Student/Chip';
import { isEmptyList } from '../../../../utils';

export default class Section extends React.PureComponent {

    onStudentClick = data => typeof this.props.onStudentClick === 'function' && this.props.onStudentClick(data);

    renderStudents = () => {
        const { students } = this.props;

        return isEmptyList(students) ? null : <div className={classes.studentsContainer}>{students.map(student =>
            <StudentChip key={student.rollNumber} data={student} onClick={this.onStudentClick} className={classes.student} />
        )}</div>;
    }

    render = () => {
        const { className, id } = this.props;
        return <div className={`${classes.container} ${className || ''}`}>
            <div className={classes.name}>Section {id}</div>
            {this.renderStudents()}
        </div>;
    }

}