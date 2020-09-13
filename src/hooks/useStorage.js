import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (name1,file1) => {
 
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file1.name);
    const collectionRef = projectFirestore.collection('cards');
   
    storageRef.put(file1).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      const setname1=name1;
      console.log(setname1)
      await collectionRef.add({setname1,url})
      setUrl(url);
    });
  }, [file1]);

  return { progress, url, error };
}

export default useStorage;