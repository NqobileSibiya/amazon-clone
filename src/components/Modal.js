import React from 'react'
import "./Modal.css";

const Modal= ({SetIsOpen}) => {
  return (
    <>
    <div className="modal-overlay">
        <div style={modalStyle}>
            <h3>Test Modal</h3>
            <button onClick={() => SetIsOpen(false)}>Close</button>
        </div>
    </div>
    </>
  )
}

export default Modal;

const modalStyle={
    position:"fixed",
    top: "50%",
    top:" 50%",
    transform: "translate (50%, -50%)",
    width:400,
    background:"add",
    borderRdius: "24px",
    boxShadow: 24,
    padding: "12px",
    textAlign:"center",
}
