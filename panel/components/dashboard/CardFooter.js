import React from 'react';

class CardFooter extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="footer">
                {this.props.children}
            </div>
        );
    }
}

CardFooter.propTypes = {
};
CardFooter.defaultProps = {
};

export default CardFooter;


