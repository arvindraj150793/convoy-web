import React from 'react';

const Story = ({ story }) => {
  return (
    <div className="story">
      <div className="story-ring">
        <img src={story.user.avatar} alt={story.user.username} />
      </div>
      <p>{story.user.username}</p>
    </div>
  );
};

export default Story;