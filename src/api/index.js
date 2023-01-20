const BaseURL = "https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt"


const fetchPostings = async () => {
  const result = await fetch(`${BaseURL}/posts`);
  const data = await result.json();

  return data;
};

const fetchRegisterUser = async (username, password) => {
  const result = await fetch(`${BaseURL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password
      },
    }),
  });
  let data = await result.json();

  return data;
};

const fetchLogin = async (username, password) => {
  const result = await fetch(`${BaseURL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password
      },
    }),
  });
  let data = await result.json();

  return data;
};

const fetchUserProfile = async (token) => {
  const result = await fetch(`${BaseURL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  let data = await result.json();

  return data;
};

const createAPost = async (postDetails, token) => {
  const result = await fetch(`${BaseURL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: postDetails.title,
        description: postDetails.description,
        price: postDetails.price,
        location: postDetails.location,
        willDeliver: postDetails.willDeliver,
      },
    }),
  });
  const data = await result.json();

  return data;
};

const updatePost = async (updateObj, token, postId) => {
  const result = await fetch(`${BaseURL}/posts/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: updateObj.title,
        description: updateObj.description,
        price: updateObj.price,
        location: updateObj.location,
        willDeliver: updateObj.willDeliver,
      },
    }),
  });
  const data = await result.json();

  return data;
};

const deletePost = async (token, postId) => {
  const result = await fetch(`${BaseURL}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await result.json();

  return data;
};

const sendingMessage = async (token, messageContent, postId) => {
  const result = await fetch(`${BaseURL}/posts/${postId}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      message: {
        content: messageContent,
      },
    }),
  });
  const data = await result.json();
  console.log(data, "you sent a message");
  return data;
};

export {
  fetchPostings,
  fetchLogin,
  fetchRegisterUser,
  updatePost,
  fetchUserProfile,
  deletePost,
  sendingMessage,
  createAPost,
};