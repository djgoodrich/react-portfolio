import React from 'react';
import Modal from 'react-modal';
import './modal.css';

const customStyles = {
    content : {
        position              : 'absolute',
        top                   : '300px',
        left                  : '300px',
        bottom                : '300px',
        right                 : '300px',
        transition            : 'all .9s ease-out',
        maxWidth             : '100%'
      },
    overlay: {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(123,112,235, 0.86)',
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
                    <h2 className="modal__title">Feel free to Get in Touch</h2>
                    <p className="modal__text">I am currently looking for a front end developer position either remotely or in the Charlotte, NC region.
                      If would like to reach me by email you can shoot me an email at  
                      <a title="email David Goodrich" href="mailto:djgoodrich15@gmail.com"> djgoodrich15@gmail.com</a>
                    </p>
        </Modal>
      </div>
        )
    }
}

export default Modalpopup;