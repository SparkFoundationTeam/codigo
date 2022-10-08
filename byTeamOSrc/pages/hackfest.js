import s from "../styles/Home.module.scss";

import Link from "next/link";

export default function Aestex() {
  return (
    <div className={s.homePage}>
      <div className={s.images}>
        <img src="codigo.png"></img>
        <b>&</b>
        <img src="3.png"></img>
      </div>
      <h4>No Notable Contributions found in the repository</h4>
    </div>
  );
}
