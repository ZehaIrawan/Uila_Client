import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide, isAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(true);

  return isShowing && !isAuthenticated
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="" />

          {isOpen ? (
            <button
              onClick={hide}
              tabindex="-1"
              class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
            ></button>
          ) : null}

          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="bg-white w-3/6 h-3/6 absolute top-0 mt-3/6 ml-2/6">
              <div className="modal-header">
                <p>
   Please log in or sign up!
                </p>
                <button
                  type="button"
                  className=""
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.getElementById('app'),
      )
    : null;
};

export default Modal;
