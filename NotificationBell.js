import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';

const NotificationBell = () => {
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const q = query(
      collection(db, 'notifications'),
      where('userId', '==', auth.currentUser.uid),
      where('read', '==', false)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setUnreadCount(snapshot.size);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="notification-bell">
      🔔 {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
    </div>
  );
};

export default NotificationBell;