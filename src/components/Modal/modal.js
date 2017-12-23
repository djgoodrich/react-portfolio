import React from 'react';
import Modal from 'react-modal';
import './modal.css';

const customStyles = {
    content: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
}
class Modalpopup extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

   closeModal() {
       this.setState({modalIsOpen: false});
   }
    render() {
        return (
            <div>
        <button className="btn-modal" onClick={this.openModal}>Get In Touch</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button className="btn-close-modal" onClick={this.closeModal}>X</button>
              <div className="modal__title">
              Get In Touch
              </div>
        </Modal>
      </div>
        )
    }
}

export default Modalpopup;