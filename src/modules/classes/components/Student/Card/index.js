import React from 'react';

import classes from './classes.module.css';
import { isEmptyList } from '../../../../../utils';
import User from '../../../../../resources/vectors/User';

export default class StudentCard extends React.PureComponent {

    getGender = () => this.props.data.gender === 'M' ? 'Male' : 'Female';

    render = () => {
        const { name, age, sports } = this.props.data;
        return <div className={classes.container}>
            <User width={52} height={52} className={classes.icon} />
            <div className={classes.name}>{name}</div>
            <div className={classes.ageGender}>Age {age}<div className={classes.divider} />{this.getGender()}</div>
            {!isEmptyList(sports) && <div className={classes.sportsContainer}>
                {sports.map(sport => <div className={classes.sport} key={sport}>{sport}</div>)}
            </div>}
        </div>;
    }

}