import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const [userx, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  const updateUser = async (id, age) => {
    const upUser = doc(db, "users", id);
    const newF = { age: age + 1 };
    await updateDoc(upUser, newF);
  };

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: name, age: Number(age) });
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [createUser]);

  return (
    <div className="App">
      <input
        placeholder="username..."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        text="number"
        placeholder="age..."
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />

      <button onClick={createUser}>Create User</button>

      {userx.map((user) => {
        return (
          <div>
            <h1>Name: {user.name}</h1>
            <h2>Age: {user.age}</h2>
            <button
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              Update Age
            </button>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              Delete User
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
