import React from 'react';

import classes from './classes.module.css';
import Tooltip from '../../../../../components/Tooltip';
import User from '../../../../../resources/vectors/User';
import { isEmptyList } from '../../../../../utils';

export default class StudentChip extends React.PureComponent {

    onClick = () => typeof this.props.onClick === 'function' && this.props.onClick(this.props.data);

    renderTooltip = () => {
        const { name, gender, age, sports } = this.props.data;
        return <div className={classes.tooltip}>
            <div className={classes.tooltipName}>{name}</div>
            <div className={classes.ageGender}>{age}<div className={classes.divider} />{gender}</div>
            {!isEmptyList(sports) && <div className={classes.sportsContainer}>
                {sports.map(sport => <div className={classes.sport} key={sport}>{sport}</div>)}
            </div>}
        </div>;
    }

    render = () => {
        const { className, data } = this.props;
        const { name } = data;
        return <Tooltip tip={this.renderTooltip()}>
            <div className={`${classes.container} ${className || ''}`} onClick={this.onClick}>
                <User width={20} height={20} fill='var(--text-color-opposite)' />
                <div className={classes.name}>{name}</div>
            </div>
        </Tooltip>;
    }

}