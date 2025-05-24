import React, { useState } from 'react';
import { auth, storage } from '../../config/firebase';
import { updateProfile, updatePassword } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const EditProfile = () => {
  const [displayName, setDisplayName] = useState(auth.currentUser.displayName || '');
  const [newPassword, setNewPassword] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleAvatarUpload = async (file) => {
    const storageRef = ref(storage, `avatars/${auth.currentUser.uid}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    await updateProfile(auth.currentUser, { photoURL: downloadURL });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (displayName !== auth.currentUser.displayName) {
      await updateProfile(auth.currentUser, { displayName });
    }

    if (newPassword) {
      await updatePassword(auth.currentUser, newPassword);
    }

    if (avatar) {
      await handleAvatarUpload(avatar);
    }
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;