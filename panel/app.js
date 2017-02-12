import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/main.scss';

class Panel extends React.Component {
  render() {
    return (
      <h3>panel</h3>
    );
  }
}

ReactDOM.render(
  <Panel />,
  document.getElementById('panelApp')
);