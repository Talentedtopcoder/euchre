import React from "react";

function UIBut(props) {
  let classes = "button";
  if (props.className !== undefined) {
    classes += " " + props.className;
  }
  return (
    <div className={classes} onClick={() => props.onClick()}>
      {props.children}
    </div>
  );
}

export default UIBut;
