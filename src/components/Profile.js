
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = ({
  token,
  setToken,
  profile,
  setProfile,
  deletingPosts,
  postings,
}) => {
  const [activePosts, setActivePosts] = useState([]);

  useEffect(() => {
    if (profile && profile.posts) {
      const filteredList = profile.posts.filter((post) => {
        return post.active == true;
      });
      setActivePosts(filteredList);
    }
  }, [profile, postings]);
  console.log(profile, "testing testing testing");
  return (
    <div>
      {profile && profile.messages.length > 0 ? (
        profile.messages.map((message) => {
          return (
            <div className="messages">
              <h2> New Message About: {message.post.title}</h2>
              <h4>User: {message.fromUser.username}</h4>
              <h4>Message :{message.content}</h4>
            </div>
          );
        })
      ) : (
        <p id="noMessages">No Messages..</p>
      )}
    
      {profile && activePosts ? (
        activePosts.map((post) => {
          return (
            <>
              <div id="profilePosts" key={post._id}>
                <h2> {post.title}</h2>
                <h4>Description: {post.description}</h4>
                <h4>Price :{post.price}</h4>
                <h4>Location: {post.location}</h4>
              </div>
              <div>
                <Link to={{ pathname: "/editPost", state: { post: post } }}>
                  <button id="editButton" value={post._id} type="submit">
                    Edit Post
                  </button>
                </Link>
                <button id="deleteButton"
                  value={post._id}
                  type="submit" onClick={(e) => {
                  console.log("click");

                deletingPosts(e);
                  }}>Delete Post</button>
              </div>
            </>
          );
        })
      ) : (
        <p id="noPosts" >No Posts..</p>
      )}
    </div>
  );
};

export default Profile;