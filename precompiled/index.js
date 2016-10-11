var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var ExampleApplication = React.createClass({
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
  <ExampleApplication />, document.getElementById('container')
);
