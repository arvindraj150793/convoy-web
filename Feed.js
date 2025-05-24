import React from 'react';
import Post from './Post';
import Story from './Story';
import SearchBar from '../shared/SearchBar';

const Feed = () => {
  const [posts] = useState([
    // Sample data - replace with real data
    { id: 1, user: 'user1', content: 'First convoy of the day! 🚗💨' },
    { id: 2, user: 'user2', content: 'Night ride anyone? 🌙' }
  ]);

  return (
    <div className="feed">
      <SearchBar />
      <div className="stories-container">
        <Story />
        <Story />
      </div>
      <div className="posts-container">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;