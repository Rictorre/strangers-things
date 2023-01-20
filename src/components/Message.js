import React from "react";
import { sendingMessage } from "../api";
import { useLocation } from "react-router-dom";

const Message = () => {
  const locationState = useLocation();
  const { post } = locationState.state;

  const sendMessage = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const messageContent = e.target[0].value;
    const postId = post._id;
    sendingMessage(token, messageContent, postId);
    console.log(post._id, "event");
  };
  return (
    <div className="sendMessage">
      <form onSubmit={sendMessage}>
        <textarea id="messageInput" placeholder="Type Message...." type="text"></textarea>
        <button id="messageSubmit" type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Message;