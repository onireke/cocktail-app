import React from "react";
import Meme from "../Meme.gif";

function Loading() {
  return (
    <div>
      <video src={Meme}></video>
    </div>
  );
}

export default Loading;
