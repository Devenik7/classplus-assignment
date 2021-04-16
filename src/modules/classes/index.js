import React from 'react';

import classes from './classes.module.css';
import Class from './components/Class';
import { isEmptyObject } from '../../utils';
import { fetchStudents } from './interactor';

export default class Classes extends React.PureComponent {

    state = {
        classes: {},
        error: false,
    }

    componentDidMount = () => fetchStudents()
        .then(classes => this.setState({ classes }))
        .catch(() => this.setState({ error: true }));

    renderClasses = () => {
        const { classes } = this.state;

        return isEmptyObject(classes) ? null : Object.keys(classes).map(key =>
            <Class key={key} id={key} sections={classes[key]} />
        );
    }

    renderError = () => null;

    render = () => <div className={classes.container}>
        {this.renderClasses()}
        {this.renderError()}
    </div>;

}