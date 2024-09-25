import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Feed from "./components/Feed";
import userData from "./db.json";

const App = () => {
  const [user, setUser] = useState(null);

  const userId = "cf0fd3bd-8f70-4a13-b056-0b63b0e99c5a";

  useEffect(() => {
    const foundUser = userData.users.find((user) => user.user_uuid === userId);
    setUser(foundUser);
  });

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
