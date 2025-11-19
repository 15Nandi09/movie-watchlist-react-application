import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../services/firebase";
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

const MovieContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);

  // Track Firebase auth state
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => unsub();
  }, []);

  // Load favorites when user logs in
  useEffect(() => {
    if (!user) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFavorites([]);
      return;
    }

    const favsRef = collection(db, "users", user.uid, "favorites");

    // Real-time listener
    const unsubscribe = onSnapshot(favsRef, (snapshot) => {
      const favList = snapshot.docs.map((doc) => doc.data());
      setFavorites(favList);
    });

    return () => unsubscribe();
  }, [user]);

  // Add movie to favorites
  const addToFavorites = async (movie) => {
    if (!user) return alert("Please login to save favorites");

    const ref = doc(db, "users", user.uid, "favorites", movie.imdbID);
    await setDoc(ref, movie);
  };

  // Remove movie from favorites
  const removeFromFavorites = async (imdbID) => {
    if (!user) return;

    const ref = doc(db, "users", user.uid, "favorites", imdbID);
    await deleteDoc(ref);
  };

  const isFavorite = (imdbID) => {
    return favorites.some((movie) => movie.imdbID === imdbID);
  };

  return (
    <MovieContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite, user }}
    >
      {children}
    </MovieContext.Provider>
  );
};
