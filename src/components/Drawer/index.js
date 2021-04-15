import React from 'react';

import classes from './classes.module.css';

export default class Drawer extends React.PureComponent {

    render = () => {
        const { children, visible, onClose } = this.props;
        return visible && <div className={classes.container}>
            <div className={classes.backdrop} onClick={onClose} />
            <div className={classes.content}>{children}</div>
        </div>;
    }

}