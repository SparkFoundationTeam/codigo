import s from "../styles/Home.module.scss";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

export default function Home() {
  let [data, setData] = useState([]);

  const getData = () => {
    let apparels = [];
    db.collection("codigo")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((apparel) => {
          let fan = { ...apparel.data() };

          apparels.push(fan);
          setData(apparels);
        });
      });
  };

  useEffect(() => {
    setTimeout(() => getData(), 100);
  }, []);
  return (
    <div className={s.Inventory}>
        <div className={s.dialogBox}>
            <h3>Cards by team Aestex</h3>
            <img src="/2.png"/>
        </div>
      <div className={s.icardHolder}>
        {data.map((a, index) => (
          <div className={s.icard2} key="babov">
            <span>
              <img src="/codiGo.png" />
            </span>

            <h3>CodiGo Teams</h3>
            <h1 style={{ marginTop: "1vh" }}>{a.Video}</h1>

            <h2 contenteditable="true">{a.Creator}</h2>

            <p>Codigo India</p>

            <div className={s.eventLogo}>
              <QRCode value={a.youtube} size="100" />
            </div>
            <h5>Created by Aestex</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
