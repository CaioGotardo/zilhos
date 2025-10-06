import Footer from '@/pages/components/Footer/Footer';
import styles from './Entrar.module.css';
import Link from 'next/link';
import Navbar from '@/pages/components/Navbar/Navbar';
export default function Entrar() {
    return (
<>
<nav>
    <Navbar />
</nav>
<div>
    <input className={styles.input} type="text" placeholder='Email' />
    <input className={styles.input} type="password" placeholder='Senha' />

<Link href="/">
<button className={styles.btnEntrar}>Entrar</button>
</Link>
<p className={styles.paragrafo}>não possui uma conta?</p>
<Link href="/cadastrar">
<button className={styles.btnCadastrar}>Cadastrar</button>
</Link>
</div>
<footer>
    <Footer />
</footer>
</>

    );}