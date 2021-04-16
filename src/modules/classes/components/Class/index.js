import React from 'react';

import classes from './classes.module.css';
import Section from '../Section';
import StudentCard from '../Student/Card';
import { isEmptyObject } from '../../../../utils';
import Drawer from '../../../../components/Drawer';
import Close from '../../../../resources/vectors/Close';

export default class Class extends React.PureComponent {

    state = {
        drawer: {
            visible: false,
            data: null,
        },
    };

    renderStudentCard = data => <StudentCard data={data} />;

    onStudentClick = data => this.setState({ drawer: { visible: true, data } });

    onDrawerClose = () => this.setState({ drawer: { visible: false } });

    renderSections = () => {
        const { sections } = this.props;

        return isEmptyObject(sections) ? null : <>
            <div className={classes.sectionsTitle}>Sections</div>
            <div className={classes.sectionsContainer}>
                {Object.keys(sections).map(key =>
                    <Section key={key} id={key} students={sections[key]} onStudentClick={this.onStudentClick} className={classes.section} />
                )}
            </div>
        </>;
    }

    render = () => {
        const { drawer: { visible, data } } = this.state;
        return <div className={classes.container}>
            <div className={classes.name}>Class {this.props.id}</div>
            {this.renderSections()}
            <Drawer visible={visible} onClose={this.onDrawerClose}>
                <Close className={classes.dialogClose} onClick={this.onDrawerClose} />
                {!isEmptyObject(data) && this.renderStudentCard(data)}
            </Drawer>
        </div>;
    }

}