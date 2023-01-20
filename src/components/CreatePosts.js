import React, { useState } from "react";
import { createAPost }  from "../api";

const CreatePosts = ({ token, setToken }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postDetails = {
      title,
      description,
      price,
      location,
      willDeliver,
    };

    const creatingPost = async () => {
      await createAPost(postDetails, localStorage.getItem("token"));
    };
    creatingPost();
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleWillDeliver = () => {
    setWillDeliver(!willDeliver);
  };

  return (
    <div className="postDetails">
      <form onSubmit={handleSubmit}>
        <input id="postTitle"
          value={title}
          type="text"
          placeholder="Title"
          onChange={handleTitle}
        ></input>

        <textarea id="description"
          value={description}
          type="text"
          placeholder="Description......"
          onChange={handleDescription}>
        </textarea>

        <input id="price"
          value={price}
          type="text"
          placeholder="Price $"
          onChange={handlePrice}
        ></input>

        <input id="location"
          value={location}
          type="text"
          placeholder="Location"
          onChange={handleLocation}
        ></input>

      <p id="willDeliver">Will you deliver? </p>
        <input id="checkbox"
          value={willDeliver}
          type="checkbox"
          onChange={handleWillDeliver}
        ></input>
        

        <button id="createPosting" type="submit">Create Posting</button>
      </form>
    </div>
  );
};

export default CreatePosts;