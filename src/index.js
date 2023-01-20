
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { fetchUserProfile, fetchPostings, deletePost } from "./api";
import {
  Login,
  RegisterUser,
  Posts,
  Logout,
  CreatePosts,
  Profile,
  Navbar,
  EditSinglePost,
  Search,
  Message,
} from "./components";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [postings, setPostings] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const currentToken = localStorage.getItem("token");

    try {
      if (currentToken) {
        const profileResult = async () => {
          const results = await fetchUserProfile(currentToken);
          setIsLoggedIn(true);
          setProfile(results.data);
        };
        profileResult();
      }
    } catch (error) {}
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      const results = await fetchPostings();
      setPostings(results.data.posts);
    };
    getPosts();
  }, []);

  useEffect(() => {
    setFilteredPosts(postings);
  }, [postings]);

  const deletingPosts = async (e) => {
    const result = await deletePost(
      localStorage.getItem("token"),
      e.target.value
    );
    const results = await fetchPostings();
    setPostings(results.data.posts);
    console.log(results.data.posts);

    const profileResults = await fetchUserProfile(
      localStorage.getItem("token")
    );
    setProfile(profileResults);
  };

  return (
  <div id="app">
      <div id="app-control">
      <Navbar />
        <Search postings={postings} setFilteredPosts={setFilteredPosts} />
        {isLoggedIn ? (
          <Logout
            token={token}
            setToken={setToken}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        ) : null}
      </div>
    <div>
      <Switch>
        <Route path="/posts">
          <Posts
            postings={postings}
            setPostings={setPostings}
            profile={profile}
            setProfile={setProfile}
            filteredPosts={filteredPosts}
            deletingPosts={deletingPosts}
          />
        </Route>
        <Route path="/createPost">
          <CreatePosts />
        </Route>
        <Route path="/profile">
          <Profile id="Profile"
            token={token}
            setToken={setToken}
            profile={profile}
            setProfile={setProfile}
            deletingPosts={deletingPosts}
            postings={postings}
          />
        </Route>
        <Route path="/createUser">
          <RegisterUser
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            token={token}
            setToken={setToken}
          />
        </Route>
        <Route path="/login">
          <Login
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            token={token}
            setToken={setToken}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Route>
        <Route path="/editPost">
          <EditSinglePost />
        </Route>
        <Route path="/sendMessage">
          <Message />
        </Route>
      </Switch>
    </div>
</div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);