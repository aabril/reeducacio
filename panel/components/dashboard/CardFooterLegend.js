import React from 'react';

class CardFooterLegend extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="legend">
                {this.props.children}
            </div>
        );
    }
}

CardFooterLegend.propTypes = {
};
CardFooterLegend.defaultProps = {
};

export default CardFooterLegend;