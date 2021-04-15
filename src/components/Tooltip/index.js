import React from 'react';

import classes from './classes.module.css';

export default class Tooltip extends React.PureComponent {

    state = {
        visible: false,
    }

    show = () => this.setState({ visible: true });

    hide = () => this.setState({ visible: false });

    render = () => {
        const { children, tip } = this.props;
        const { visible } = this.state;
        return <>
            {React.cloneElement(children, { onMouseEnter: this.show, onMouseLeave: this.hide })}
            {visible && <div className={classes.tipContainer}>
                <div className={classes.tip}>{tip}</div>
            </div>}
        </>;
    }

}