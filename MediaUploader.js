import React, { useCallback } from 'react';
import { storage } from '../../config/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const MediaUploader = ({ onUploadComplete }) => {
  const handleUpload = useCallback(async (file) => {
    const storageRef = ref(storage, `media/${Date.now()}_${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      null,
      (error) => console.error(error),
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        onUploadComplete({
          url: downloadURL,
          type: file.type.startsWith('image') ? 'image' : 'video'
        });
      }
    );
  }, [onUploadComplete]);

  return (
    <input
      type="file"
      accept="image/*,video/*"
      onChange={(e) => e.target.files[0] && handleUpload(e.target.files[0])}
    />
  );
};

export default MediaUploader;