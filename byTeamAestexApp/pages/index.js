import s from "../styles/Home.module.scss";

import Link from "next/link";

export default function Home() {
  return (
    <div className={s.homePage}>
      <img src="codigo.png" className={s.logo}></img>
      <h3>
        CodiGo India is an edTech Web App where we create learning and
        programming content. We are currently developing our Github Repository
        and need developers to Open Source to our project
      </h3>
      <h1>Our Current Contributors</h1>
      <div className={s.images}>
        <img src="connextLogo.png"></img>
        <Link href="/teamOSrc">
          <img src="1.png"></img>
        </Link>
        <Link href="/aestex">
          <img src="2.png"></img>
        </Link>
        <Link href="/hackfest">
          <img src="3.png"></img>
        </Link>
      </div>
      <h2>
        Our Github :{" "}
        <Link href="https://www.github.com/codigoTeams/codigoSource">
          github.com/codigoTeams/codigoSource
        </Link>{" "}
      </h2>
      <h2>
        Our Website :{" "}
        <Link href="https://codigoindia.netlify.app">
          codigoindia.netlify.app
        </Link>
      </h2>
    </div>
  );
}
