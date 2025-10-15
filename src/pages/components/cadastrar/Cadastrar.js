import styles from './Cadastrar.module.css';
import Image from 'next/image';
import Navbar from '@/pages/components/Navbar/Navbar';
import Footer from '@/pages/components/Footer/Footer';
import Link from 'next/link';

export default function Cadastrar() {
    return (
<>
<nav>
    <Navbar />
</nav>
<div>
    <Link href="/entrar">
    <button className={styles.btnEntrar}>
        Entrar
    </button>
    </Link>
    <p className={styles.JaPossui}>
        já possui  conta?
    </p>
    <Link href="/Escolha">
    <button className={styles.btnCadastrar}>
        Cadastrar-se
        </button>
        </Link>
</div>
<footer>
    <Footer />
</footer>
</>
    );}