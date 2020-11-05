import React, { useState } from "react";
import "./MessageSender.css";
import logo from "./assets/facebook-mobile-logo.png";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SearchIcon from "@material-ui/icons/Search";
import ForumIcon from "@material-ui/icons/Forum";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });
    // some database stuff
    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <div className="messageSender__mobileTop">
          <img src={logo} alt="" />
          <div className="mobileTop__right">
            <div className="mobileTop__search">
              <SearchIcon />
            </div>
            <div className="mobileTop__message">
              <ForumIcon />
            </div>
          </div>
        </div>
        <div className="messageSender__mobileMessage">
          <Avatar src={user.photoURL} />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="messageSender__input"
              placeholder={`What's on your mind, ${user.displayName}?`}
            />
            <input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Image URL (Optional)"
            />

            <button onClick={handleSubmit} type="submit">
              Hidden Submit
            </button>
          </form>
        </div>
        <Avatar className="messageSender__user" src={user.photoURL} />
        <form className="messageSender__form">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL (Optional)"
          />

          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3 className="messageSender__optionTitle">Live Video</h3>
          <h3 className="messageSender__mobileTitle">Live</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3 className="messageSender__optionTitle">Photo/Video</h3>
          <h3 className="messageSender__mobileTitle">Photo</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3 className="messageSender__optionTitle">Feeling/Activity</h3>
          <h3 className="messageSender__mobileTitle">Feeling</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
