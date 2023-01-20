
import React, { useState, useEffect } from "react";
import { fetchPostings } from "../api";
import { Link } from "react-router-dom";

const Posts = ({
  postings,
  setPostings,
  profile,
  setProfile,
  filteredPosts,
  deletingPosts,
}) => {
  useEffect(() => {
    const getPosts = async () => {
      const results = await fetchPostings();
      setPostings(results.data.posts);
    };
    getPosts();
  }, []);

  return (
    <div id="postMain">
      <Link to="createPost">
        <button type="submit">Create Post</button>
      </Link>
      {filteredPosts.map((posting) => {
        return (
          <div className="post" key={posting._id}>
            <h2>{posting.title}</h2>
            <h4 className="description">Description: {posting.description}</h4>
            <h4>Price :{posting.price}</h4>
            <h4>Location: {posting.location}</h4>

            {posting.author._id !== profile._id ? (
              <Link to={{ pathname: "/sendMessage", state: { post: posting } }}>
                <button value={posting._id} type="submit">
                  Send Message
                </button>
              </Link>
            ) : (
              <div>
                <Link to={{ pathname: "/editPost", state: { post: posting } }}>
                  <button value={posting._id} type="submit">
                    Edit Post
                  </button>
                </Link>
                <button
                  value={posting._id}
                  type="submit"
                  onClick={(e) => {
                    deletingPosts(e);
                  }}
                >
                  Delete Post
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Posts;