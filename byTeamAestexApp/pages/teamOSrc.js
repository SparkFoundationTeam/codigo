import s from "../styles/Home.module.scss";

import Link from "next/link";

export default function Aestex() {
  return (
    <div className={s.homePage}>
      <div className={s.images2}>
        <img src="codigo.png"></img>
        <b>&</b>
        <img src="1.png"></img>
      </div>
      <h4>Team O'Src contribution to CodiGoSource</h4>
      <h5>
        <Link href="/newStore">New Store by Team O'Src</Link>

        <Link href="/qrcodes_teamOSrc">ICards</Link>
      </h5>
      <h4>
        View Code :
        <Link href="https://github.com/codiGoTeams/codiGoSource/tree/main/byTeamOSrc">
          github.com/codigoTeams/codigoSource/byTeamOSrc/
        </Link>{" "}
      </h4>
    </div>
  );
}
