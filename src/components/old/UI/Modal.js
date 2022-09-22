import React from "react";

import Backdrop from "./Backdrop";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div
      className={classes.modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? 1 : 0,
      }}
    >
      <Backdrop show={props.show} clicked={props.modalClosed} />
      {props.children}
    </div>
  );
};

export default Modal;
