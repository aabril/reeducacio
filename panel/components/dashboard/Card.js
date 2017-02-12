import React from 'react';
import classnames from 'classnames';

class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        const cardClass = classnames({
            'card': true,
            'card-plain': this.props.plain
        });

        return (
            <div className={cardClass}>
                {this.props.children}
            </div>
        );
    }
}

Card.propTypes = {
};
Card.defaultProps = {
};

export default Card;
