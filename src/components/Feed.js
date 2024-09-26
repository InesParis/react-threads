import Thread from "./Thread.js";

const Feed = ({ user, filteredThreads }) => {
  if (!filteredThreads || filteredThreads.length === 0) {
    return <div>No threads available</div>;
  }
  return (
    <div className="feed">
      {filteredThreads.map((filteredThread) => (
        <Thread
          key={filteredThread.id}
          user={user}
          filteredThread={filteredThread}
        />
      ))}
    </div>
  );
};
export default Feed;
