import s from "../styles/Home.module.scss";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

export default function Home() {
  let [data, setData] = useState([]);
  let [newObj, setNewObj] = useState({
    Creator: "",
    Video: "",
    uuid: uuidv4(),
    youtube: "",
  });
  const getData = () => {
    let videos = [];
    db.collection("codigo")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((apparel) => {
          let fan = { ...apparel.data() };

          videos.push(fan);
          setData(videos);
        });
      });
  };

  const handleChange = (e) => {
    setNewObj((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };
  const submitData = () => {
    db.collection("codigo")
      .add(newObj)
      .then(() => location.reload());
  };

  useEffect(() => {
    setTimeout(() => getData(), 100);
  }, []);
  return (
    <div className={s.Inventory}>
      <h1 className={s.title}>CodiGo DataStore</h1>
      <div className={s.addNew}>
        <input
          type="text"
          placeholder="Enter Video Name"
          name="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Creator Name"
          name="Creator"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Youtube Link"
          name="youtube"
          onChange={handleChange}
        />

        <button onClick={() => submitData()}>Add New</button>
      </div>
      <div className={s.headers}>
        <h2>Video Name</h2>
        <h2>Creator Name</h2>
        <h2>Youtube Link</h2>
      </div>
      {data.map((apparel) => (
        <div className={s.rows} key="b">
          <h3>{apparel.Video}</h3>
          <h3>{apparel.Creator}</h3>
          <Link href={apparel.youtube == "" ? "yo" : apparel.youtube}>
            <h3>{apparel.youtube}</h3>
          </Link>
        </div>
      ))}
      
    </div>
  );
}
