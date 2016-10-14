import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';

var MainApplication = React.createClass({
  getInitialState(){
    return { showModal: false };
  },
  render: function() {
    return (
      <div>
        <Button onClick={ this.buttonClick }>Afficher la bîte de dialogue.</Button>
        <Modal show={ this.state.showModal }>
          <Modal.Body>Coucou!</Modal.Body>
        </Modal>
      </div>
    );
  },
  buttonClick: function() {
    this.setState({showModal: true});
  },
});
var ModalComponent = React.createClass({
  render: function(){
    return <Modal.Dialog><Modal.Body>Coucou!</Modal.Body></Modal.Dialog>;
  }
});
ReactDOM.render(
  <MainApplication />, document.getElementById('container')
);
