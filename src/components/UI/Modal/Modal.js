import React from "react";
const Modal = props => (
  <main
    style={{
      transform: props.show ? "translateY(0)" : "translateY(-100vh)",
      opacity: props.show ? "1" : "0"
    }}
  >
    {props.children}
  </main>
);
export default Modal;
