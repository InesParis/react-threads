import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Feed from "./components/Feed";
import userData from "./db.json";

const App = () => {
  const [user, setUser] = useState(null);
  const [threads, setThreads] = useState([]);
  const [viewThreadsFeed, setViewThreadsFeed] = useState(true);
  const [filteredThreads, setFilteredThreads] = useState([]);
  const userId = "cf0fd3bd-8f70-4a13-b056-0b63b0e99c5a";

  useEffect(() => {
    const foundUser = userData.users.find((user) => user.user_uuid === userId);
    setUser(foundUser);
    const getThreads = userData.threads.filter(
      (thread) => thread.thread_from === userId
    );
    setThreads(getThreads);
  }, [userId]);

  const getThreadsFeed = () => {
    if (threads && threads.length > 0) {
      // Add this check to ensure threads exists
      if (viewThreadsFeed)
        if (viewThreadsFeed) {
          const standAloneThreads = threads.filter(
            (thread) => thread.reply_to === null
          );
          setFilteredThreads(standAloneThreads);
        } else {
          const replyThreads = threads?.filter(
            (thread) => thread.reply_to !== null
          );
          setFilteredThreads(replyThreads);
        }
    }
  };

  useEffect(() => {
    getThreadsFeed();
  }, [threads, viewThreadsFeed]);

  return (
    <>
      {user && (
        <div className="app">
          <Nav url={user.instagram_url} />
          <Header
            user={user}
            viewThreadsFeed={viewThreadsFeed}
            setViewThreadsFeed={setViewThreadsFeed}
          />
          <Feed user={user} filteredThreads={filteredThreads} />
          {/*<PopUp/>*/}
        </div>
      )}
    </>
  );
};

export default App;
