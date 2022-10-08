import s from "../styles/Home.module.scss";

import Link from "next/link";

export default function Aestex() {
  return (
    <div className={s.homePage}>
      <div className={s.images2}>
        <img src="codigo.png"></img>
        <b>&</b>
        <img src="2.png"></img>
      </div>
      <h4>Team Aestex contribution to CodiGoSource</h4>
      <h5>
        <Link href="/newStore">New Store by Aestex</Link>

        <Link href="/qrcodes_aestex">ICards</Link>
      </h5>
      <h4>
        View Code :
        <Link href="https://www.github.com/codigoTeams/codigoSource/tree/main/byTeamAestexApp/">
          github.com/codigoTeams/codigoSource/byTeamAestexApp/
        </Link>{" "}
      </h4>
    </div>
  );
}
