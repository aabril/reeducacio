import React from 'react';
import { Link } from 'react-router';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
          <div>
            <h2>Sidebar</h2>
            <ul>
              <li>
                <Link to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/users">
                  Users
                </Link>
              </li>
              <li>
                <Link to="/articles">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/rewards">
                  Rewards
                </Link>                
              </li>
            </ul>
          </div>
        );
    }
}

Sidebar.propTypes = {};
Sidebar.defaultProps = {};

export default Sidebar;