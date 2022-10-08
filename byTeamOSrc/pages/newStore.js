import s from "../styles/Home.module.scss";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

export default function Home() {
  let [data, setData] = useState([]);
  let img = [
    "Screenshot (240).png",
    "Screenshot (241).png",
    "Screenshot (242).png",
    "Screenshot (243).png",
    "Screenshot (244).png",
    "Screenshot (245).png",
    "Screenshot (246).png",
  ];
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

  let [addnew, setAdd] = useState(false);

  useEffect(() => {
    setTimeout(() => getData(), 100);
  }, []);
  return (
    <div className={s.Inventory2}>
      <h1 className={s.title}>
        <img src="codigo.png" className={s.logo} />
        CodiGo India
      </h1>

      <div className={s.addNew} style={{ display: addnew ? "" : "none" }}>
        <input
          type="text"
          placeholder="Enter Video Name"
          name="Video"
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
        <h3 onClick={() => setAdd(false)}>X</h3>
        <button onClick={() => submitData()}>Add New</button>
      </div>
      <div className={s.slider}>
        <h2>Videos</h2>
        <h2 onClick={() => setAdd(true)}>+ New Video</h2>
      </div>

      <div className={s.showcase}>
        {data.map((vid, index) => (
          <div className={s.rows} key="b">
            <img src={img[index]}></img>
            <h1>{vid.Video}</h1>
            <h2>{vid.Creator}</h2>
            <Link href={vid.youtube == "" ? "yo" : vid.youtube}>
              <h3>Youtube Link</h3>
            </Link>
          </div>
        ))}
      </div>
      <Link href="/previous">
        <h3 className={s.linker}>Old Data Store</h3>
      </Link>
    </div>
  );
}
