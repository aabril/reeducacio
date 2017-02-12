import React from 'react';

class CardHeader extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="header">
                <h4 className="title">{this.props.title}</h4>
                <p className="category">{this.props.subTitle}</p>
            </div>
        );
    }
}

CardHeader.propTypes = {
};
CardHeader.defaultProps = {
    title: "Title",
    subTitle: "Sub Title"
};

export default CardHeader;
