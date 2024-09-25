import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Feed from "./components/Feed";
import PopUp from "./components/PopUp";
const App = () => {
  const [user, setUser] = useState(null);

  const userId = "cf0fd3bd-8f70-4a13-b056-0b63b0e99c5a";

  const getUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/users?user_uuid=${userId}`
      );
      const data = await response.json();
      setUser(data[0]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log(user);

  return (
    <>
      {user && (
        <div className="app">
          <Nav url={user.instagram_url} />
          <Header user={user} />
          <Feed />
          {/*<PopUp/>*/}
        </div>
      )}
    </>
  );
};

export default App;
