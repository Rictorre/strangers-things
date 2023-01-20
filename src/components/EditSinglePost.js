import React, { useState } from "react";
import { updatePost } from "../api";
import { useLocation } from "react-router-dom";

const EditSinglePost = ({postings, setPostings}) => {
  
  //const [formState, setFormState] = useState({title: "", description: ""})
  
  const locationState = useLocation()
  const {post} = locationState.state
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [price, setPrice] = useState(post.price);
  const [location, setLocation] = useState(post.location);
  const [willDeliver, setWillDeliver] = useState(post.willDeliver);

  

  //useEffect()


  
  const handleTitle = (e) => {
    // setFormState({...formState, e.target.name: e.target.value})
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPostDetails = {
      title,
      description,
      price,
      location,
      willDeliver,
    };
  
    const updatingPost = async () => {
      await updatePost(updatedPostDetails, localStorage.getItem("token"), post._id);
    };
    updatingPost();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        
          value={title}
          type="text"
          placeholder="title"
          onChange={handleTitle}
        ></input>

        <input
          value={description}
          type="text"
          placeholder="description"
          onChange={handleDescription}
        ></input>

        <input
          value={price}
          type="text"
          placeholder="price"
          onChange={handlePrice}
        ></input>

        <input
          value={location}
          type="text"
          placeholder="location"
          onChange={handleLocation}
        ></input>

        <input
          value={willDeliver}
          type="checkbox"
          onChange={handleWillDeliver}
        ></input>

        <button type="submit">Update Posting</button>
      </form>
    </div>
  );
};

export default EditSinglePost;