import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const onConvoyCreate = functions.firestore
  .document('convoys/{convoyId}')
  .onCreate(async (snapshot) => {
    await snapshot.ref.update({
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      status: 'pending'
    });
  });