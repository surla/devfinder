import { useState, useEffect } from "react";

function User(this: any) {
  const [user, setUser] = useState({});

  const getUser = async (username: string) => {
    const url = `https://api.github.com/users/${username}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Request Failed!");
      }

      const userData = await response.json();
      const {
        avatar_url,
        name,
        login,
        created_at,
        public_repos,
        followers,
        following,
        location,
        twitter_username,
        blog,
      } = userData;

      console.log(userData);
      setUser({
        avatar_url,
        name,
        login,
        created_at,
        public_repos,
        followers,
        following,
        location,
        twitter_username,
        blog,
      });
      console.log(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    const username = document.querySelector("input")!.value;
    console.log(username);
    getUser(username);
  };

  useEffect(() => {}, []);

  return (
    <div className="user">
      <input
        type="text"
        placeholder="Search GitHub username..."
        id="username"
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default User;
