import React, { useState } from 'react';
import { db } from '../../config/firebase';
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

const FollowButton = ({ userId }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const currentUser = auth.currentUser.uid;

  const handleFollow = async () => {
    const userRef = doc(db, 'users', currentUser);
    await updateDoc(userRef, {
      following: isFollowing ? arrayRemove(userId) : arrayUnion(userId)
    });
    setIsFollowing(!isFollowing);
  };

  return (
    <button onClick={handleFollow} className={isFollowing ? 'following' : ''}>
      {isFollowing ? 'Following' : 'Follow'}
    </button>
  );
};

export default FollowButton;