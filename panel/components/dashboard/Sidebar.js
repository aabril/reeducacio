import React from 'react';
import SidebarLink from './SidebarLink';

var myImage = require('../../images/sidebar-6.png');

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        var divStyle = {
            backgroundImage: 'url(' + myImage + ')'
        };

        return (
            <div className="sidebar" data-color={this.props.bgcolor} data-image="#">
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <a href="#" className="simple-text">
                            {this.props.title}
                        </a>
                    </div>
                    <ul className="nav">
                        <SidebarLink to="/dashboard" linkName="dashboard" icon="pe-7s-graph" />
                        <SidebarLink to="/userprofile" linkName="user profile" icon="pe-7s-user" />
                        <SidebarLink to="/tables" linkName="table list" icon="pe-7s-note2" />
                        <SidebarLink to="/typography" linkName="typography" icon="pe-7s-news-paper" />
                        <SidebarLink to="/icons" linkName="icons" icon="pe-7s-science" />
                        <SidebarLink to="/notifications" linkName="notifications" icon="pe-7s-bell" />
                    </ul>
                </div>
                <div className="sidebar-background" style={divStyle}></div>
            </div>
        );
    }
}

Sidebar.propTypes = {
    title: React.PropTypes.string,
    bgcolor: React.PropTypes.oneOf(["blue", "azure", "green", "orange", "red", "purple"]),
    bgimage: React.PropTypes.string
};
Sidebar.defaultProps = {
    title: "Creative Tim"
};

export default Sidebar;