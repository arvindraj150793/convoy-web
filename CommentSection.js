import React, { useState } from 'react';
import { db } from '../../config/firebase';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

const CommentSection = ({ postId }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newComment = {
      text: comment,
      author: auth.currentUser.uid,
      timestamp: new Date()
    };

    const postRef = doc(db, 'posts', postId);
    await updateDoc(postRef, {
      comments: arrayUnion(newComment)
    });
    setComment('');
  };

  return (
    <div className="comment-section">
      <form onSubmit={handleSubmit}>
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button type="submit">Post</button>
      </form>
      <div className="comment-list">
        {comments.map((c, i) => (
          <div key={i} className="comment">
            <strong>{c.authorName}</strong>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;