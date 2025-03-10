import { createContext, useState } from 'react';
import { auth } from '../firebase/Firebase.config';

export const AuthProvider = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const info = { user, loading, createUser };

  return <AuthProvider.Provider value={info}>{children}</AuthProvider.Provider>;
};

export default Provider;
