import React from 'react';
import classnames from 'classnames';

class CardContent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        const contentClass = classnames({
            'content': true,
            'table-responsive': this.props.table,
            'table-full-width': this.props.table,
            'all-icons': this.props.icons
        });

        return (
            <div className={contentClass}>
                {this.props.children}
            </div>
        );
    }
}

CardContent.propTypes = {
};
CardContent.defaultProps = {
};

export default CardContent;