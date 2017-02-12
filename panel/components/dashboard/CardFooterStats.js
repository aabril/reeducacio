import React from 'react';

class CardFooterStats extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="stats">
                {this.props.children}
            </div>
        );
    }
}

CardFooterStats.propTypes = {
};
CardFooterStats.defaultProps = {
};

export default CardFooterStats;