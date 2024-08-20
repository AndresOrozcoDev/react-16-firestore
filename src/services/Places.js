// services/places.js
import { db } from '../firebase-config';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export const addPlace = async (placeData) => {
  try {
    const docRef = await addDoc(collection(db, 'places'), placeData);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

export const getPlaces = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'places'));
    const placesList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return placesList;
  } catch (e) {
    console.error("Error fetching documents: ", e);
    throw e;
  }
};
