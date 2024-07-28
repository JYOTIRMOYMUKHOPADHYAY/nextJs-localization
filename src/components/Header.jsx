import Link from "next/link";
import Image from "next/image";
import Flag_W from '../../public/world.jpg';
import Flag_IN from '../../public/india.png';
import Flag_FR from '../../public/france.png';
import Flag_IT from '../../public/italy.png';
import style from "./style.module.css"
export default function Header() {
  return (
    <header className="bg-slate-200 fixed z-30 w-full">
      <nav className={style.nav}>
        <Link href="/en">
          <Image src={Flag_W} alt="world flag" width={25} height={25} />
        </Link>
        <Link href="/hi">
          <Image src={Flag_IN} alt="indian flag" width={25} height={25} />
        </Link>
        <Link href="/fr">
          <Image src={Flag_FR} alt="french flag" width={25} height={25} />
        </Link>
        <Link href="/it">
          <Image src={Flag_IT} alt="italian flag" width={25} height={25} />
        </Link>
      </nav>
    </header>
  );
}
