import React, { useState } from 'react';
import { db } from '../../config/firebase';
import { doc, updateDoc } from 'firebase/firestore';

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes || 0);
  
  const handleLike = async () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    await updateDoc(doc(db, 'posts', post.id), { likes: newLikes });
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={post.user.avatar} alt={post.user.username} />
        <h4>{post.user.username}</h4>
      </div>
      <p>{post.content}</p>
      {post.media && (
        <div className="post-media">
          {post.media.type === 'image' ? (
            <img src={post.media.url} alt="Post media" />
          ) : (
            <video controls src={post.media.url} />
          )}
        </div>
      )}
      <div className="post-actions">
        <button onClick={handleLike}>❤️ {likes}</button>
        <button>💬 {post.comments?.length || 0}</button>
        <button>↪️ Share</button>
      </div>
    </div>
  );
};

export default Post;