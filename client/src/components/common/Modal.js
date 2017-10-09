import React, {Component} from 'react';
import {toggleModal} from '../../actions/modal';

class Modal extends Component {

  handleClose() {
    this.props.dispatch(toggleModal(!this.props.modal.active, null));
  }

  render() {
    const {modal} = this.props;
    const {active, message} = modal;

    return (
        <div className={`modal${active === true ? ' is-active' : ''}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
              <button onClick={() => this.handleClose()} className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
              {message}
            </section>
            <footer className="modal-card-foot">
              <button  onClick={() => this.handleClose()} className="button is-success">Save changes</button>
              <button  onClick={() => this.handleClose()} className="button">Cancel</button>
            </footer>
          </div>
        </div>
    );
  }
}

export default Modal;