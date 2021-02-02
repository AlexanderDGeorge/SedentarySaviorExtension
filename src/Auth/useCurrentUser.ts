import { useEffect, useState } from "react";
import { auth, firestore } from "../firebase";

export default function useCurrentUser() {
  const [user, setUser] = useState<undefined | null | any>(undefined);

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      if (!user) {
        setUser(null);
        return;
      }
      firestore()
        .collection("users")
        .doc(user.uid)
        .onSnapshot((snapshot) => {
          const data = snapshot?.data();
          if (!data) return;
          setUser({
            user,
            ...data,
          });
        });
    });
  }, []);

  return { user };
}
