import React from "react";

export default function Thumbnail(props) {
  const styles = {

  }
    return (
    <img 
    src={props.src} 
    onClick={props.onClick} 
    className="img-thumbnail" 
    style={styles}
    />
  );
}