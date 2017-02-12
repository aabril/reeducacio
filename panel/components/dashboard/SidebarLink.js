import React from 'react';
import { Link } from 'react-router';

class SidebarLink extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        var isActive = this.context.router.isActive(this.props.to);

        return (
            <li className={isActive ? 'active' : null}>
                <Link to={this.props.to}>
                    <i className={this.props.icon} />
                    <p>{this.props.linkName}</p>
                </Link>
            </li>
        )
    }
}

SidebarLink.contextTypes = {
    router: React.PropTypes.object.isRequired
};

SidebarLink.propTypes = {
    linkName: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string
};

SidebarLink.defaultProps = {
    icon: "pe-7s-graph"
};

export default SidebarLink;