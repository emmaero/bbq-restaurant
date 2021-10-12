import {
  Firestore,
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  DocumentData,
  getDoc,
  setDoc
} from "firebase/firestore/lite";

export async function createDoc(db: Firestore, path: string, data: any) {
  const docRef = await addDoc(collection(db, path), data);

  console.log("Document written with ID: ", docRef.id);
}
// Read files
export async function getCollection(db: Firestore, path: string) {
  const collectionReference = collection(db, path);
  const snapshop = await getDocs(collectionReference);
  const list = snapshop.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return list;
}
export async function getDocument(db: Firestore, path: string, id: string) {
  const docRef = doc(db, path, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

// Update file
export async function overWriteDocument(
  db: Firestore,
  path: string,
  id: string,
  data: object
) {
  const docReference = doc(db, path, id);
await setDoc(docReference,data);
}
// Update file
export async function updateDocument(
  db: Firestore,
  path: string,
  id: string,
  data: object
) {
  const docReference = doc(db, path, id);
  console.log(id);
  await updateDoc(docReference, data as DocumentData);
}

// Delete file
export async function deleteDocument(db: Firestore, path: string, id: string) {
  
  const docReference = doc(db, path, id);

  await deleteDoc(docReference);
}
