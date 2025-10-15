import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import Link from "next/link"
import Footer from "../Footer/Footer";
import style from "./escolha.module.css"

export default function Escolha(){
    return(
        <>
        <nav>
        <Navbar />
        </nav>
    <div>
<div className={style.Jogador}>
    <Link href="">
    <Image
    src="/player.png" 
    width={123}
    height={151}
    />

    </Link>
    <p className={style.paragrafo}>Jogador </p>

</div>
<div className={style.empresario}>
    <Link  href="">
    <Image
    src="/empresario.png" 
    width={123}
    height={151}
    />

    </Link>
    <p className={style.paragrafo}>Empresario </p>

</div>
<div className={style.clube}>
    <Link  href="">
    <Image
    src="/clube.png" 
    width={123}
    height={151}
    />

    </Link>
    <p className={style.paragrafo}>CLube </p>
</div>
    </div>
    <footer>
        <Footer />
    </footer>
        </>
    )
}