import Thread from "./Thread.js";

const Feed = ({ user, threads }) => {
  if (!threads || threads.length === 0) {
    return <div>No threads available</div>;
  }
  return (
    <div className="feed">
      {threads.map((thread) => (
        <Thread key={thread.id} user={user} filteredThread={thread} />
      ))}
    </div>
  );
};
export default Feed;
