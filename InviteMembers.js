import React, { useState } from 'react';
import { db } from '../../config/firebase';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { generateConvoylLink } from '../../utils/invites';

const InviteMembers = ({ convoyId }) => {
  const [inviteLink, setInviteLink] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleGenerateLink = () => {
    const link = generateConvoylLink(convoyId);
    setInviteLink(link);
  };

  const handleInviteUsers = async (userIds) => {
    const convoyRef = doc(db, 'convoys', convoyId);
    await updateDoc(convoyRef, {
      pendingInvites: arrayUnion(...userIds)
    });
  };

  return (
    <div className="invite-system">
      <button onClick={handleGenerateLink}>Get Invite Link</button>
      {inviteLink && (
        <div className="link-container">
          <input value={inviteLink} readOnly />
          <button onClick={() => navigator.clipboard.writeText(inviteLink)}>
            Copy
          </button>
        </div>
      )}
      
      {/* In-app user selector would go here */}
    </div>
  );
};

export default InviteMembers;