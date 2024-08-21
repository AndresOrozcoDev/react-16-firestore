import { db } from '../firebase-config';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

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

export const deletePlace = async (id) => {
  try {
    await deleteDoc(doc(db, 'places', id));
    console.log("Document successfully deleted!");
  } catch (e) {
    console.error("Error deleting document: ", e);
    throw e;
  }
};